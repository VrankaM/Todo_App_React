import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/system";

function Navbar(){
    return(
        <Container sx={{
            mb: 2,
            py: 1
        }}>
            <Stack direction="row" spacing={2} justifyContent="center">
                <NavLink to="/all">
                    <Button size="large">All</Button>
                </NavLink>
                <NavLink to="/active">
                    <Button size="large">Active</Button>
                </NavLink>
                <NavLink to="/completed">
                    <Button size="large">Completed</Button>
                </NavLink>
            </Stack>
        </Container>
    )
}

export default Navbar