import { useState } from "react";

function Counter() {
    const [count,setCount]= useState(0);
    const handleInc=()=>{
        setCount(count+1)
    }
    const handleDec=()=>{
        setCount(count-1)
    }
    return ( 
        <div>
            <h3>Count: {count}</h3>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>
     );
}

export default Counter;