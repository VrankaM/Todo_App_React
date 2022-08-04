import Navbar from "./Navbar";
import Search from "./Search";

function Header(){
    return(
        <div className="header">
            <Navbar />
            <Search />
        </div>
    )
}

export default Header