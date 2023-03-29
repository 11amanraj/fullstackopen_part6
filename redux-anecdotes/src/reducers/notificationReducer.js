import { createSlice } from "@reduxjs/toolkit"

const initialState = 'Testing'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: initialState,
    reducers: {
        addNotification(state, action) {
            return action.payload.notification
        }
    }
})

export const addNotificationHandler = (notification) => {
    return {
        type: 'notification/addNotification',
        payload: { notification: notification }
    }
}

export const { addNotification } = notificationSlice.actions
export default notificationSlice.reducer
