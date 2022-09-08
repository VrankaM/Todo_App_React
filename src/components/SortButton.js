import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { updateTodos } from "../utils/Utils"

function SortButton(){
    const { todos } = useSelector((state) => state.todos)
    const { limit } = useSelector((state) => state.limit)

    const dispatch = useDispatch()

    function sort(){
        let todosCopy = [...todos]
        todosCopy.sort((a, b) => {
            return b.id - a.id
        })
        console.log(todosCopy)
    }
    
    return(
        <button onClick={sort}>
            Sort by newest
        </button>
    )
}

export default SortButton