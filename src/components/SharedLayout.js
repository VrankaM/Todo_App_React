import Header from "./Header"
import { Outlet } from "react-router-dom"
import { Container } from "@mui/system";
 
function SharedLayout(){
    return(
        <>
            <Container sx={{
                mb: 2,
                py: 1
            }}>
                <Header />
            </Container>
            <Outlet />
            <h1>footer</h1>
        </>
    )
}

export default SharedLayout