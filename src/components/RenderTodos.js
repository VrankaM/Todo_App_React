import Todo from '../components/Todo'
import { useSelector } from 'react-redux'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import { useEffect, useState } from 'react'
import { reset } from '../redux/limit'
import { useDispatch } from "react-redux"
import SortButton from './SortButton'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { update } from '../redux/todos'

function RenderTodos(props){

    const { todos } = useSelector((state) => state.todos)
    const { searchValue } = useSelector((state) => state.search)

    const dispatch = useDispatch()

    const [active, setActive] = useState(
        todos.filter((todo) => {
            if(props.state !== "all"){
                return todo.status === props.state
            }else{
                return true
            }
        })
    )
    
    function getActive(){
        setActive(
            todos.filter((todo) => {
                if(props.state !== "all"){
                    return todo.status === props.state
                }else{
                    return true
                }
            })
        )
    }

    function dragEnd(result){
        console.log("result", result)
        let activeCopy = [...active]
        let [itemToMove] = activeCopy.splice(result.source.index, 1)
        activeCopy.splice(result.destination.index, 0, itemToMove)

        if(props.state !== "all"){
            let counter = 0
            let todosCopy = [...todos]
            todosCopy.map((todo, index) => {
                if(todo.status === activeCopy[counter].status){
                    todosCopy[index] = activeCopy[counter]
                    if(counter !== (active.length - 1)){
                        counter++
                    }
                }
                return true
            })
            dispatch(update(todosCopy))
        }else{
            dispatch(update(activeCopy))
        }
    }

    useEffect(() => {
        dispatch(reset())
    // eslint-disable-next-line
    },[])

    useEffect(() => {
        getActive()
    // eslint-disable-next-line
    },[todos])

    useEffect(() => {
        if(searchValue !== ""){
            setActive(
                active.filter((todo) => {
                    return todo.title.includes(searchValue) || todo.text.includes(searchValue)
                })
            )
        }else{
            getActive()
        }
        
        // eslint-disable-next-line
    },[searchValue])

    return(
        <Container maxWidth="md">
            <Typography variant="h2" component="h1" align="center" gutterBottom>
                { props.heading }
            </Typography>
            <Stack justifyContent="center">
                <SortButton />
                <DragDropContext onDragEnd={dragEnd}>
                    <Droppable droppableId='todos'>
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {active.map((todo, index) => {
                                    return(
                                        <Draggable key={todo.id} draggableId={todo.id} index={index}>
                                            {(provided) => (
                                                <div
                                                    {...provided.draggableProps } 
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <Todo 
                                                        data={todo}
                                                    />
                                                </div>
                                            )}
                                        </Draggable>
                                    )
                                })}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </Stack>
        </Container>
    )
}

export default RenderTodos