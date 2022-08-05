import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
 
function SharedLayout(){
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default SharedLayout