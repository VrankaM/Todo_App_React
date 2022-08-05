import Header from "./Header"
import Footer from "./Footer"
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
            <Footer />
        </>
    )
}

export default SharedLayout