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
import Moment from 'moment'


function Todo( props ){
    
    const [edit, setEdit] = useState(false)
    const [error, setError] = useState(false)

    const { todos } = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    async function deleteTodo(id){
        setError(false)
        let todoCopy = [...todos]
        let todo = todoCopy.find(todo => todo.id === id)
        await axios.delete('https://62e7f7e793938a545bdd7fff.mockapi.io/todos/' + id).then(() =>{
            dispatch(update(
                todoCopy.filter((todo) => {
                    return id !== todo.id
                })
            ))
        }).catch((err) =>{
            console.log(err)
            setError(true)
            alert("An error occured while deleting todo")
        })
        if(!error){
            alert(`"${todo.title}" was deleted succesfully`)
        }
    }

    async function toggleTodo(initial){
        setError(false)
        let todoCopy = [...todos]
        let index = todoCopy.indexOf(initial)
        let objectCopy = { ...todoCopy[index] }
        let objectStatus = ""
        if(objectCopy.status === "default"){
            objectCopy.status = "completed"
            objectStatus = "completed"
        }else{
            objectCopy.status = "default"
            objectStatus = "active"
        }
        await axios.put('https://62e7f7e793938a545bdd7fff.mockapi.io/todos/' + initial.id, objectCopy).then(() =>{
            todoCopy[index] = { ...objectCopy }
            dispatch(update(todoCopy))
        }).catch((err) => {
            console.log(err)
            setError(true)
            alert("An error occured while toggling state of todo")
        })
        if(!error){
            alert(`"${objectCopy.title}" was succesfully marked as "${objectStatus}"`)
        }
    }

    function editTodo(){
        setEdit(!edit)
    }

    function displayEdit(data){
        if(edit){
            return <Edittodo data={data} closeEdit={editTodo}/>
        }
    }

    function displayDateTime(){
        return Moment(props.data.deadline).format('DD-MM-YYYY hh:mm a')
    }

    return(
        <Box sx={{
            my: 3
        }}>
            <Paper elevation={3} className={props.data.status} >
                <Box paddingX={2} paddingY={1}>
                    <Typography variant="h4" component="h3" gutterBottom>
                        {props.data.title}
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        {props.data.text}
                    </Typography>
                    <Typography variant="body2" component="p" gutterBottom>
                        {displayDateTime()}
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