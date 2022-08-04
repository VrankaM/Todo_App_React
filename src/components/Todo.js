import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../redux/todos'
import Edittodo from './Edittodo'


function Todo( props ){
    
    const [edit, setEdit] = useState(false)

    const { todos } = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    function deleteTodo(id){
        //deleting todo locally for instant render
        let todoCopy = [...todos]
        
        dispatch(update(
            todoCopy.filter((todo) => {
                return id !== todo.id
            })
        ))
        axios.delete('https://62e7f7e793938a545bdd7fff.mockapi.io/todos/' + id)
    }

    function toggleTodo(initial){
        // change status of todo locally for instant render
        let todoCopy = [...todos]
        let index = todoCopy.indexOf(initial)
        let objectCopy = { ...todoCopy[index] }

        if(objectCopy.status === "default"){
            objectCopy.status = "completed"
        }else{
            objectCopy.status = "default"
        }
        todoCopy[index] = { ...objectCopy }
        dispatch(update(todoCopy))

        // uploading changes
        // note: toggling purely via api changes renders slow 
        axios.put('https://62e7f7e793938a545bdd7fff.mockapi.io/todos/' + initial.id, objectCopy)
    }

    function editTodo(){
        setEdit(!edit)
    }

    function displayEdit(data){
        if(edit){
            return <Edittodo data={data} closeEdit={editTodo}/>
        }
    }

    return(
        <Box marginY={2}>
            <Paper elevation={3} className={props.data.status} marginY={1}>
                <Box paddingX={2} paddingY={1}>
                    <Typography variant="h4" component="h3" gutterBottom>
                        {props.data.title}
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        {props.data.text}
                    </Typography>
                    <Typography variant="body2" component="p" gutterBottom>
                        {props.data.deadline}
                    </Typography>
                    <Stack direction="row" spacing={1} justifyContent="flex-end">
                        <Button size="small" variant="contained" color="success" onClick={() => {
                            toggleTodo(props.data)
                        }}>
                            Toggle Complete 
                        </Button>
                        <Button size="small" variant="outlined" onClick={editTodo}>
                            Edit
                        </Button>
                        <IconButton size="small" aria-label="delete" onClick={() => {
                            deleteTodo(props.data.id)
                        }}>
                            <DeleteIcon />
                        </IconButton>
                    </Stack>
                </Box>
            </Paper>
            {
                displayEdit(props.data)
            }
        </Box>
    )
}

export default Todo