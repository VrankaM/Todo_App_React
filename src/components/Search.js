import { useDispatch } from 'react-redux'
import { update } from '../redux/search'
import { Button, Stack, TextField } from '@mui/material'

function Search(){

    const dispatch = useDispatch()

    function getSearch(e){
        e.preventDefault()
        dispatch(update(e.target.search.value))
    }

    function cancelSearch(){
        dispatch(update(""))
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
                        // InputLabelProps={{ shrink: true }}
                        placeholder="Search in todos"
                        // fullWidth
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