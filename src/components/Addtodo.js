import axios from 'axios'
import { useDispatch } from 'react-redux'
import { update } from '../redux/todos'

function Addtodo(){

    const dispatch = useDispatch()

    async function handleSubmit(e){
        e.preventDefault()
        let todo = {
            title: e.target.title.value,
            text: e.target.text.value,
            // deadline: JSON.stringify(e.target.deadline.value),
            deadline: e.target.deadline.value,
            status: "default"
        }
        await axios.post('https://62e7f7e793938a545bdd7fff.mockapi.io/todos', todo)
        updateTodos()
    }

    function updateTodos(){
        axios.get('https://62e7f7e793938a545bdd7fff.mockapi.io/todos').then((response) => {
            dispatch(update(response.data))
        })
    }

    return(
        <div className="addTodo">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="title">Todo title:</label>
                <input type="text" name="title" id="titleInput" />
                <label htmlFor="text">Todo text:</label>
                <input type="text" name="text" id="textInput" />
                <label htmlFor="deadline">Deadline:</label>
                <input type="datetime-local" name="deadline" id="deadlineInput" />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default Addtodo