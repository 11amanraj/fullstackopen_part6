import deepFreeze from 'deep-freeze'
import anecdoteReducer from '../reducers/anecdoteReducer'

describe('anecdote reducer', () => {
    const initialState = [{
        id: 4567,
        content: 'Testing Reducer',
        votes: 0
    }]

    test('vote is increased', () => {
        const id = 4567
        const action = {
            type: 'vote',
            payload: { id: id }
        }
        const state = initialState

        deepFreeze(state)
        const newState = anecdoteReducer(state, action)
        expect(newState.find(anecdote => anecdote.id === id).votes).toEqual(1)
    })

    test('new anecdote is added', () => {
        const action = {
            type: 'add',
            payload: { content: 'This a test anecdote'}
        }
        const state = initialState

        deepFreeze(state)
        const newState = anecdoteReducer(state, action)
        expect(newState.find(anecdote => anecdote.content === action.payload.content)).toBeDefined()
    })

    test('anecdotes are sorted according to votes', () => {
        const state = initialState
        const content = 'Second Anecdote'
        const action = {
            type: 'add',
            payload: { content: content}
        }

        const twoAnecdotesState = anecdoteReducer(state, action)
        const id = twoAnecdotesState.find(anecdote => anecdote.content === content).id
        
        const action2 = {
            type: 'vote',
            payload: { id: id }
        }
        const votedAnecdotes = anecdoteReducer(twoAnecdotesState, action2)
        expect(votedAnecdotes[0].id).toEqual(id)
    })
})