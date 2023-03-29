import { createSlice } from "@reduxjs/toolkit"

const initialState = 'Working'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: initialState,
    reducers: {
        addNotification(state, action) {
            return action.payload.notification
        },
        removeNotification(state, action) {
            return ''
        }
    }
})

export const addNotificationHandler = (notification) => {
    return {
        type: 'notification/addNotification',
        payload: { notification: notification }
    }
}

export const removeNotificationHandler = (notification) => {
    return {
        type: 'notification/removeNotification',
    }
}

export const { addNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer
