import { useNavigate } from "react-router"
import { Row, Form, Input, Button } from "antd"

function Login(){
    const password = "heslo123"
    let navigate = useNavigate()


    function successSubmit(values){
        if(values.password === password){
            localStorage.setItem("authorized", true)
            navigate("/home")
            alert("You have logged im successfully")
        } 
        else{
            localStorage.setItem("authorized", false)
            alert("Incorrect password")
            // just for better testing
        }
    }

    function failedSubmit(error){
        alert("Sorry, an error has occured")
        console.log(error)
    }

    return(
        <Row align="middle" justify="center" style={{
            height: "100vh"
        }}>
            <Form 
                onFinish={successSubmit}
                onFinishFailed={failedSubmit}
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
            >
                <Form.Item
                    label="Password"
                    name="password"
                >
                    <Input type="password"/>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </Row>
    )
}

export default Login