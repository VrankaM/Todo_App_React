import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../redux/todos'

function Edittodo( props ){

    const { todos } = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        let todo = {
            id: props.data.id,
            title: e.target.title.value,
            text: e.target.text.value,
            deadline: e.target.deadline.value,
            status: props.data.status
        }

        let todoCopy = [...todos]
        todoCopy[todoCopy.indexOf(props.data)] = {...todo}
        dispatch(update(todoCopy))

        axios.put('https://62e7f7e793938a545bdd7fff.mockapi.io/todos/' + props.data.id, todo)
        props.closeEdit()
    }

    return(
        <div className="editTodo">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="title">Todo title:</label>
                <input type="text" name="title" id="titleInput" placeholder={props.data.title}/>
                <label htmlFor="text">Todo text:</label>
                <input type="text" name="text" id="textInput" placeholder={props.data.text}/>
                <label htmlFor="deadline">Deadline:</label>
                <input type="datetime-local" name="deadline" id="deadlineInput" placeholder={props.data.deadline}/>
                <input type="submit" value="Edit" />
            </form>
        </div>
    )
}

export default Edittodo