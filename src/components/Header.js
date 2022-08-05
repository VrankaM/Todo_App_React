import Navbar from "./Navbar";
import Search from "./Search";
import Logo from "./Logo";

function Header(){
    return(
        <div className="header">
            <Logo />
            <Navbar />
            <Search />
        </div>
    )
}

export default Header