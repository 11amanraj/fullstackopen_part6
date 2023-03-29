import { useDispatch } from "react-redux"
import { createNewAnecdote } from "../reducers/anecdoteReducer"
import { addNotification, removeNotification } from "../reducers/notificationReducer"
import anecdoteService from "../services/anecdotes"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdoteHandler = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(createNewAnecdote(newAnecdote))
        dispatch(addNotification(`You Added '${content}'`))
        setTimeout(() => {
            dispatch(removeNotification())
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