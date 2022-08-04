import Header from "./Header"
import { Outlet } from "react-router-dom"
 
function SharedLayout(){
    return(
        <>
            <Header />
            <Outlet />
            <h1>footer</h1>
        </>
    )
}

export default SharedLayout