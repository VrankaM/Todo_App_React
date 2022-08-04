import Addtodo from '../components/Addtodo'
import Todo from '../components/Todo'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { useSelector } from 'react-redux'

function Home(){

    const { todos } = useSelector((state) => state.todos)

    return(
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} sx={{
            maxHeight: "80vh",
            overflow: "scroll"
          }}>
            {
              todos.map((todo) => {
                return <Todo key={todo.id} data={todo}/>
              })
            }
          </Grid>
          <Grid item xs={12} md={4}>
            <Addtodo />
          </Grid>
        </Grid>
      </Container>
    )
}

export default Home