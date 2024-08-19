import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CounterContext } from "../context/CounterContext";

function AddCustomer() {

    const [user, setUser] = useState({ email:'', name: '' });
    const {decrement}=useContext(CounterContext);
    const navigate = useNavigate();
    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
            user.id= Date.now()+'';
            const resp= await axios.post('http://localhost:5000/api/customers',user)
            if(resp.status===201){
                toast.success("user registered successfully");
                navigate('/custlist')
            }
            else
                toast.error("error in registration");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h1>Register Page</h1>
            <button onClick={decrement}>-</button>
            <form onSubmit={handleSubmit}>
            <div className="mt-3">
                    <label>Name</label>
                    <input type="text" placeholder="name" value={user.name || ''}
                        onChange={(e) => setUser({ ...user, name: e.target.value })} 
                        className="form-control" />
                </div>
                <div className="mt-3">
                    <label>Email Id</label>
                    <input type="email" placeholder="john.doe@gmail.com" value={user.email || ''}
                        onChange={(e) => setUser({ ...user, email: e.target.value })} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary w-100" >Add Customer</button>
            </form>
        </div>
    );
}

export default AddCustomer;