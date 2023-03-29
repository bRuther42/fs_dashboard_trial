import {Link} from 'react-router-dom';

function Navigation()
{
    return(
        <div className="navbar">
            <Link className="navlink" to="/">Home</Link>
            <Link className="navlink" to="/about">About</Link>
            <Link className="navlink" to="/admin">Dashboard</Link>
        </div>
    )
}

export default Navigation