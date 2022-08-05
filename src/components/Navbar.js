import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";

function Navbar(){
    return(
        <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
            <NavLink to="/">
                <Button 
                    size="large"
                    variant="text"
                >
                    Home
                </Button>
            </NavLink>
            <NavLink to="/active">
                <Button 
                    size="large"
                    variant="text"
                >
                    Active
                </Button>
            </NavLink>
            <NavLink to="/completed">
                <Button 
                    size="large"
                    variant="text"
                >
                    Completed
                </Button>
            </NavLink>
        </Stack>
    )
}

export default Navbar