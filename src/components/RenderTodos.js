import Todo from '../components/Todo'
import { useSelector } from 'react-redux'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import { useEffect, useState } from 'react'

function RenderTodos(props){

    const { todos } = useSelector((state) => state.todos)
    const { searchValue } = useSelector((state) => state.search)
    
    const [active, setActive] = useState(
        todos.filter((todo) => {
            if(props.state !== "all"){
                return todo.status === props.state
            }else{
                console.log("anko")
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
            <Stack spacing={2} justifyContent="center" >
                {
                    active.map((todo) => {
                        console.log(todo)
                        return <Todo key={todo.id} data={todo}/>
                    })
                }
            </Stack>
        </Container>
    )
}

export default RenderTodos