import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { update } from '../redux/todos'
import { TextField, Button } from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import Stack from '@mui/material/Stack'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

function Addtodo(){

    const [deadline, setDeadline] = useState(new Date())
    const dispatch = useDispatch()

    // gathering data from inputs and state, then uploading them to mock api
    async function handleSubmit(e){
        e.preventDefault()
        let todo = {
            title: e.target.title.value,
            text: e.target.text.value,
            deadline: deadline,
            status: "default"
        }
        await axios.post('https://62e7f7e793938a545bdd7fff.mockapi.io/todos', todo)
        updateTodos()
    }

    function handleChange(e){
        setDeadline(e)
    }

    function updateTodos(){
        axios.get('https://62e7f7e793938a545bdd7fff.mockapi.io/todos').then((response) => {
            dispatch(update(response.data))
        })
    }

    return(
        <div className="addTodo">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Stack spacing={2} justifyContent="center" >
                    <TextField 
                        name="title"
                        type="text"
                        variant="outlined"
                        color="primary"
                        label="Todo title"
                        size="normal"
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ maxLength: 30 }}
                        placeholder="What to do"
                        required
                        fullWidth
                    />
                    <TextField 
                        name="text"
                        type="text"
                        variant="outlined"
                        color="primary"
                        label="Todo text"
                        size="normal"
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ maxLength: 150 }}
                        placeholder="Better description"
                        fullWidth
                    />
                    <DateTimePicker 
                        name="deadline"
                        type="datetime"
                        value={deadline}
                        renderInput={(params) => <TextField {...params} />}
                        variant="standard"
                        color="primary"
                        label="Deadline"
                        size="normal"
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ readOnly: true }}
                        onChange={handleChange}
                        disablePast
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        size="large"
                        >
                        Add todo
                    </Button>
                </Stack>
            </form>
            </LocalizationProvider>
        </div>
    )
}

export default Addtodo