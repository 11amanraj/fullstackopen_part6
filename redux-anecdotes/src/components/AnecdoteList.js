import { useDispatch, useSelector } from "react-redux";
import { votingAnecdote } from "../reducers/anecdoteReducer";
import { addNotification, removeNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
        if(state.filter === '') {
            return state.anecdotes
        } else {
            return state.anecdotes.filter(anecdote => 
                anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
        }
    })

    const vote = async (anecdote) => {
        dispatch(votingAnecdote(anecdote))
        dispatch(addNotification(`You voted '${anecdote.content}'`))
        setTimeout(() => {
            dispatch(removeNotification())
        }, 5000)
    }

    return ( 
        <>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
                </div>
            )}
        </>
     );
}
 
export default AnecdoteList;