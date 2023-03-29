const initialState = ''

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER':
            return action.payload

        default: return state
    }
}

export const filterChange = (filter) => {
    return {
        type: 'FILTER',
        payload: filter
    }
}

export default reducer