import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [student, setStudent] = useState({ email: 'admin@gmail.com', password: 'admin123' });
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post('http://localhost:8082/api/student/login', student);
            console.log(resp);
            
            if (resp.status == 200) {
                alert("LoggedIn successfully");
                // navigate("/dashboard");
            }
        } catch (error) {
            alert("Error occured");
            console.log(error);
        }
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <div className="mt-3">
                    <label>Email Id</label>
                    <input type="email" placeholder="john.doe@gmail.com" value={student.email}
                        onChange={(e) => setStudent({ ...student, email: e.target.value })} className="form-control" />
                </div>
                <div className="mt-3">
                    <label>Password</label>
                    <input type="password" placeholder="SECRET" value={student.password}
                        onChange={(e) => setStudent({ ...student, password: e.target.value })} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary w-100" >Login</button>
            </form>
        </div>
    );
}

export default Login;