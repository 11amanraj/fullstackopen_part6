import { useDispatch } from "react-redux"
import { saveAnecdotes } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdoteHandler = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(saveAnecdotes(content))
        dispatch(setNotification(`You Added '${content}'`, 5000))
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