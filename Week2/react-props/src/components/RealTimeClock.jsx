import { useEffect, useState } from "react";

function RealTimeClock() {
    const [time,setTime]=useState(new Date());

    useEffect(()=>{

        const interval=setInterval(()=>{
            setTime(new Date())
        },1000)

        return(()=>{
            clearInterval(interval);
        })
    })
    return ( 
        <div>
            <h3>Realtime Clock: {time.toLocaleTimeString()}</h3>
        </div>
     );
}

export default RealTimeClock;