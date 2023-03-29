import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const sortFunction = (a,b) => {
  if(a.votes === b.votes) return 0
  return a.votes > b.votes ? -1 : 1
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createNewAnecdote(state, action) {
      state.push(action.payload)
    },
    voteAnecdote(state, action) {
      const updatedAnecdote = action.payload

      // console.log(JSON.parse(JSON.stringify(state)))
      return state
        .map(anecdote => anecdote.id !== action.payload.id ? anecdote : updatedAnecdote)
        .sort(sortFunction)
    },
    appendAnecdotes(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes.sort(sortFunction)))
  }
}

export const saveAnecdotes = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(createNewAnecdote(newAnecdote))
  }
}

export const votingAnecdote = (anecdote) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update({ ...anecdote, votes: anecdote.votes + 1 })
    dispatch(voteAnecdote(updatedAnecdote))
  }
}

export const { createNewAnecdote, voteAnecdote, appendAnecdotes, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer