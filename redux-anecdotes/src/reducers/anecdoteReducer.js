const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'vote':
      const anecdoteToVote = state.find(anecdote => anecdote.id === action.payload.id)
      const changedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }
      const sortFunction = (a,b) => {
        if(a.votes === b.votes) return 0
        return a.votes > b.votes ? -1 : 1
      }
      return state
        .map(anecdote => anecdote.id !== action.payload.id ? anecdote : changedAnecdote)
        .sort(sortFunction)
    
    case 'add':
      const newAnecdote = asObject(action.payload.content)
      return state.concat(newAnecdote)

    default: return state
  } 
}

export const voteAnecdote = (id) => {
  return {
    type: 'vote',
    payload: { id: id }
  }
}

export const createAnecdote = (content) => {
  return {
    type: 'add',
    payload: { content: content}
  }
}

export default reducer