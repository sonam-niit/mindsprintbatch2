import { useDispatch, useSelector } from "react-redux";

function Counter() {
    const count= useSelector(state=>state.counter.count);
    const dispatch=useDispatch();
    return ( 
        <div>
            <h3>Redux Counter:{count}</h3>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>+</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
        </div>
     );
}

export default Counter;