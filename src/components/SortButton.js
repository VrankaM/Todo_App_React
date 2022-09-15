import { useSelector } from "react-redux"
import { Button } from "antd"
import { useDispatch } from "react-redux"
import { update } from "../redux/todos"

function SortButton(){
    const { todos } = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    function sort(){
        let todosCopy = [...todos]
        todosCopy.sort((a, b) => {
            return b.id - a.id
        })
        // console.log(todosCopy)
        dispatch(update(todosCopy))
    }
    
    return(
        <Button onClick={sort}> 
            Sort by most recent 
        </Button>
    )
}

export default SortButton