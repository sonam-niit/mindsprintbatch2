import { useState } from "react";

function UserForm() {
    const [name,setName]= useState('');
    const [email,setEmail]=useState('');
    const handleNameChange=(e)=>{
        setName(e.target.value);
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        alert("Name is "+name+" Email is "+email)
    }
    return ( 
        <div className="container">
            <h3>Name: {name}, Email: {email}</h3>
            <form onSubmit={handlesubmit}>
                <input type="text" className="form-control mt-3" placeholder="Enter Name"
                name="name" onChange={handleNameChange}/>
                <input type="email" className="form-control mt-3" placeholder="Enter Email"
                name="email" onChange={(e)=>setEmail(e.target.value)} />

                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
     );
}

export default UserForm;