import Todo from '../components/Todo'
import { useSelector } from 'react-redux'
import Stack from '@mui/material/Stack'
import { Container } from '@mui/system'
import { useEffect, useState } from 'react'

function RenderTodos(props){

    const { todos } = useSelector((state) => state.todos)
    const [active, setActive] = useState(
        todos.filter((todo) => {
            return todo.status === props.state
        })
    )

    // function updateActive(){
    //     setActive(
    //         todos.filter((todo) => {
    //             return todo.status === props.state
    //         })
    //     )
        
    // }

    useEffect(() => {
        setActive(
            todos.filter((todo) => {
                return todo.status === props.state
            })
        )
        // eslint-disable-next-line
    },[todos])

    return(
        <Container maxWidth="md">
            <Stack spacing={2} justifyContent="center" >
                {
                    active.map((todo) => {
                        return <Todo key={todo.id} data={todo}/>
                    })
                }
            </Stack>
        </Container>
    )
}

export default RenderTodos