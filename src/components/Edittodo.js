import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../redux/todos'
import Stack from '@mui/material/Stack'
import { TextField, Button } from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { useState } from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

function Edittodo( props ){

    const { todos } = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    
    const [title, setTitle] = useState(props.data.title)
    const [text, setText] = useState(props.data.text)
    const [deadline, setDeadline] = useState(props.data.deadline)

    function handleSubmit(e){
        e.preventDefault()
        let todo = {
            id: props.data.id,
            title: title,
            text: text,
            deadline: deadline,
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
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Stack spacing={2} justifyContent="center" my={3}>
                        <TextField 
                            name="title"
                            type="text"
                            variant="outlined"
                            color="secondary"
                            label="Todo title"
                            size="small"
                            value={title}
                            onChange={
                                (event) => {
                                    setTitle(event.target.value)
                                }
                            }
                            required
                            fullWidth
                        />
                        <TextField 
                            name="text"
                            type="text"
                            variant="outlined"
                            color="secondary"
                            label="Todo text"
                            size="small"
                            value={text}
                            onChange={
                                (event) => {
                                    setText(event.target.value)
                                }
                            }
                            fullWidth
                        />
                        <DateTimePicker 
                            name="deadline"
                            type="datetime"
                            value={deadline}
                            renderInput={(params) => <TextField {...params} />}
                            variant="standard"
                            color="secondary"
                            label="Deadline"
                            size="small"
                            inputProps={{ readOnly: true }}
                            onChange={
                                (data) => {
                                    setDeadline(data)
                                }
                            }
                            disablePast
                            fullWidth
                        />
                        <Button
                            variant="text"
                            color="secondary"
                            type="submit"
                            size="medium"
                            >
                            Edit todo
                        </Button>
                    </Stack>
                </form>
            </LocalizationProvider>
        </div>
    )
}

export default Edittodo