import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({setLoggedIn}) {

    const [user, setUser] = useState({ email: 'admin@gmail.com', password: 'admin123' });
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        if(user.email==="admin@gmail.com" && user.password==="admin123"){
            localStorage.setItem('loggedIn',true);
            setLoggedIn(true);
            navigate('/dashboard');
        }else{
            alert("Invalid Credentials");
            setUser({...user,password:''});
        }
        
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <div className="mt-3">
                    <label>Email Id</label>
                    <input type="email" placeholder="john.doe@gmail.com" value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })} className="form-control" />
                </div>
                <div className="mt-3">
                    <label>Password</label>
                    <input type="password" placeholder="SECRET" value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary w-100" >Login</button>
            </form>
        </div>
    );
}

export default Login;