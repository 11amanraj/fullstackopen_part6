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

export const setNotification = (notification, time) => {
    return async dispatch => {
        // dispatch(addNotification(`You Added '${content}'`))
        dispatch(addNotification(notification))
        setTimeout(() => {
            dispatch(removeNotification())
        }, time)
    }
}

export const { addNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer
