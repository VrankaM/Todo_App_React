import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";

function Navbar(){
    return(
        <Stack direction="row" spacing={2} justifyContent="center">
            <NavLink to="/">
                <Button size="large">All</Button>
            </NavLink>
            <NavLink to="/active">
                <Button size="large">Active</Button>
            </NavLink>
            <NavLink to="/completed">
                <Button size="large">Completed</Button>
            </NavLink>
        </Stack>
    )
}

export default Navbar