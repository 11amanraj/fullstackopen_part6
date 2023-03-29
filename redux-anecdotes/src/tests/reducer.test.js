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
})