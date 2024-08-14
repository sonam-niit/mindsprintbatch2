import { useState } from "react";

function StateDemo() {
    const [name,setName]=useState('mindsprint');
    const changeName=()=>{
        setName('Hello All')
    }
    return ( 
        <div>
            <h3>Name: {name}</h3>
            <button onClick={changeName}>Click</button>
        </div>
     );
}

export default StateDemo;