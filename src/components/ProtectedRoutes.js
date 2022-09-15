import { Outlet, Navigate } from "react-router"

function checkAuth(){
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
    }
}

export default ProtectedRoutes