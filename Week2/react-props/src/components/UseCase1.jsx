import { useEffect, useState } from "react";

function EffectExample() {
    const [count,setCount]=useState(0);
    const [input,setInput]=useState('');
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    useEffect(()=>{
        console.log("Component Mounted");
    },[])
    useEffect(()=>{
        console.log("Count updated ",count);
    },[count])
    useEffect(()=>{
        console.log("Input updated ",input);
    },[input])
    //this useeffect execute everytime
    return ( 
        <div>
            <h3>UseCase 1 Component:{count}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <input type="text" onChange={(e)=>setInput(e.target.value)} />
        </div>
     );
}

export default EffectExample;