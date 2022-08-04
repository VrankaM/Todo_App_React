import Addtodo from '../components/Addtodo'
import RenderTodos from '../components/RenderTodos'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

function Home(){

    return(
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <RenderTodos state="all" heading="All todos"/>
          </Grid>
          <Grid item xs={12} md={4}>
            <Addtodo />
          </Grid>
        </Grid>
      </Container>
    )
}

export default Home