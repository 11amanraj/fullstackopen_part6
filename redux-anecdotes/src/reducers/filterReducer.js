import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        filter(state, action) {
            return action.payload
        }
    }
})

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'FILTER':
//             return action.payload

//         default: return state
//     }
// }

export const filterChange = (filter) => {
    return {
        type: 'filter/filter',
        payload: filter
    }
}

export const { filter } = filterSlice.actions
export default filterSlice.reducer

// export default reducer