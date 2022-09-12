import { Outlet, Navigate } from "react-router"
import Login from "../pages/Login"

function checkAuth(){
    console.log(localStorage.getItem("authorized"))
    if(JSON.parse(localStorage.getItem("authorized")) === true){
        return true
    } else{
        return false
    }
}

function ProtectedRoutes(){
    let auth = checkAuth()

    if(auth){
        return <Outlet />
    } else{
        return <Navigate to="/" />
        // return <Login />
    }
}

export default ProtectedRoutes