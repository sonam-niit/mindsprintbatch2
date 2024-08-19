import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserList() {
    const [users,setUsers]= useState([]);
    const navigate= useNavigate();
    const fetchData=async()=>{
        try {
            const resp= await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    const viewUser=(id)=>{
        navigate('/details/'+id);
    }
    return ( 
        <div>
            <div className="row">
                {
                    users.map(user=>(
                        <div className="col-md-4" key={user.id}>
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <button className="btn btn-success" onClick={()=>viewUser(user.id)}>View</button>
                        </div>
                    ))
                }
            </div>
        </div>
     );
}

export default UserList;