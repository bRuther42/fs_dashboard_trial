import AuthNav from "./Auth/AuthNav";

function Header()
{
    return(
        <header>
            <div className="header">
            <span>Welcome Home</span>
            <AuthNav/>
            </div>
        </header>
    )
}


export default Header;