import { useDispatch } from 'react-redux'
import { update } from '../redux/search'
import { Button, Stack, TextField } from '@mui/material'
import { useState } from 'react'

function Search(){
    // this component is for updating search string stored in redux store
    // all pages render their todos based on stored search string

    const [timer, setTimer] = useState()
    const dispatch = useDispatch()

    function getSearch(e){
        e.preventDefault()
        dispatch(update(e.target.search.value))
    }

    // when the value of string equals "", no todo render filter will be applied 
    function cancelSearch(){
        dispatch(update(""))
    }

    function handleChange(e){
        clearTimeout(timer)
        
        let newTimer = setTimeout(() =>{
            dispatch(update(e.target.value))
        }, 1000)

        setTimer(newTimer)
    }

    return(
        <Stack
                spacing={2} 
                direction="row"
                alignItems="center"
                justifyContent="center"
                my={4}
            >
            <form onSubmit={(e) => getSearch(e)}>
                <Stack
                    spacing={1} 
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    <TextField 
                        name="search"
                        type="text"
                        variant="outlined"
                        color="primary"
                        label="Search"
                        size="small"
                        placeholder="Search in todos"
                        onChange={(e) => {handleChange(e)}}
                        />
                    <Button
                        variant="outlined"
                        type="primary" 
                        size="medium"
                        >
                        Search
                    </Button >
                </Stack>
            </form>
            <Button
                onClick={cancelSearch}
                variant="text"
                type="primary"
                size="medium"
                color="error"
                >
                Cancel
            </Button>
        </Stack>
    )
}

export default Search