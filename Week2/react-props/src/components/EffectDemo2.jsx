import { useEffect } from "react";

function EffectDemo2() {
    useEffect(()=>{
        console.log("Component mounted");
        
        return(()=>{
            console.log("Component Unmounted");
        })
    })
    return ( 
        <div>
            <h3>Effect Demo 2</h3>
        </div>
     );
}

export default EffectDemo2;