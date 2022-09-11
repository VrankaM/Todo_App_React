import { useSelector } from "react-redux"
import { Button } from "antd"

function SortButton(){
    const { todos } = useSelector((state) => state.todos)

    function sort(){
        let todosCopy = [...todos]
        todosCopy.sort((a, b) => {
            return b.id - a.id
        })
        console.log(todosCopy)
    }
    
    return(
        <Button onClick={sort}> 
            Sort by newest 
        </Button>
    )
}

export default SortButton