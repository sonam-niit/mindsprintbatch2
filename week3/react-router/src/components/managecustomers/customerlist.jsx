import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CounterContext } from "../context/CounterContext";

function CustomerList() {
    const [users,setUsers]= useState([]);
    const {increment}=useContext(CounterContext);
    const navigate= useNavigate();
    const fetchData=async()=>{
        try {
            const resp= await axios.get('http://localhost:5000/api/customers');
            setUsers(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    const editUser=(id)=>{
        navigate(`/edituser/${id}`);
    }
    useEffect(()=>{
        fetchData();
    },[])
    return ( 
        <div>
            <button onClick={increment}>increment</button>
            <div className="row">
                {
                    users.map(user=>(
                        <div className="col-md-4" key={user.id}>
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <button onClick={()=>deleteUser(user.id)}>x</button>
                            <button onClick={()=>editUser(user.id)}>x</button>
                        </div>
                    ))
                }
            </div>
        </div>
     );
}

export default CustomerList;