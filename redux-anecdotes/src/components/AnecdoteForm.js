import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { addNotificationHandler, removeNotificationHandler } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdoteHandler = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(addNotificationHandler(`You Added '${content}'`))
        setTimeout(() => {
            dispatch(removeNotificationHandler())
        }, 5000)
      }

    return ( 
        <>
            <h2>create new</h2>
            <form onSubmit={addAnecdoteHandler}>
                <div><input name='anecdote'/></div>
                <button>create</button>
            </form>
        </>
     );
}
 
export default AnecdoteForm;