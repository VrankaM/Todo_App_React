import { useNavigate } from "react-router"

function Login(){
    const password = "heslo123"
    let navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        let entered = e.target.password.value
        if(entered === password){
            localStorage.setItem("authorized", true)
            navigate("/home")
        } 
        else{
            localStorage.setItem("authorized", false)
            // just for better testing
        }
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="password">Login</label>
            <input type="password" name="password" id="password" />
            <input type="submit" value="Login" />
        </form>
    )
}

export default Login