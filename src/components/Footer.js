import { Stack, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { increment } from '../redux/limit'
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useSelector } from "react-redux"

function Footer(){

    const {ref: list, inView: visibility} = useInView()

    const { fetchFinished, limit } = useSelector((state) => state.limit)
    const { todos } = useSelector((state) => state.todos)

    const dispatch = useDispatch()

    function incrementLimit(){
        console.log("incrementing")
        dispatch(increment())
    }

    useEffect(() => {
        if(visibility && fetchFinished && todos.length === limit){
            incrementLimit()
        }
    // eslint-disable-next-line
    }, [visibility])

    return(
        <footer ref={list}>
            <Stack
                direction="row"
                justifyContent="center"
                py={4}
            >
                <Typography
                    variant="h5"
                    component="p"    
                >
                    That's all for now :)
                </Typography>
            </Stack>
        </footer>
    )
}

export default Footer