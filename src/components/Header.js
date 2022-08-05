import Navbar from "./Navbar";
import Search from "./Search";
import Logo from "./Logo";
import { Container } from "@mui/system";

function Header(){
    return(
        <Container sx={{
            mb: 2,
            py: 1
        }}>
            <Logo />
            <Navbar />
            <Search />
        </Container>
    )
}

export default Header