import { Navigate, Outlet } from "react-router"

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
    }
}

export default ProtectedRoutes