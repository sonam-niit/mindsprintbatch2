import { Link, useNavigate } from "react-router-dom";

function Header() {
    const loggedIn = localStorage.getItem('loggedIn');
    const navigate= useNavigate();
    const logout=()=>{
        localStorage.removeItem('loggedIn');
        navigate('/login');
    }
    return (
        <ul className="nav">
            {
                loggedIn ?
                    <li className="nav-item">
                        <button className="nav-link" onClick={logout}>Logout</button>
                    </li>
                    : <li className="nav-item">
                        <Link className="nav-link" to='login'>Login</Link>
                    </li>
            }
        </ul>
    );
}

export default Header;