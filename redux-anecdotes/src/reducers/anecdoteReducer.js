import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createNewAnecdote(state, action) {
      state.push(action.payload)
    },
    voteAnecdote(state, action) {
      const anecdoteToVote = state.find(anecdote => anecdote.id === action.payload)
      const changedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }
      const sortFunction = (a,b) => {
        if(a.votes === b.votes) return 0
        return a.votes > b.votes ? -1 : 1
      }
      // console.log(JSON.parse(JSON.stringify(state)))
      return state
        .map(anecdote => anecdote.id !== action.payload ? anecdote : changedAnecdote)
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
    dispatch(setAnecdotes(anecdotes))
  }
}

export const saveAnecdotes = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(createNewAnecdote(newAnecdote))
  }
}

export const { createNewAnecdote, voteAnecdote, appendAnecdotes, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer