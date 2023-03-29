import { createSlice } from "@reduxjs/toolkit"

const initialState = 'Working'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: initialState,
    reducers: {
        addNotification(state, action) {
            return action.payload
        },
        removeNotification(state, action) {
            return ''
        }
    }
})

export const { addNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer
