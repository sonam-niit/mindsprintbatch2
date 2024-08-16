import { useEffect, useState } from "react";
function Comments({postId}) {
    const [list,setList]=useState([]);
    const fetchData=async ()=>{
        const resp=await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const json= await resp.json();
        setList(json); //add the server data into compo state
    }
    useEffect(()=>{
        fetchData();
    },[])
    return ( 
        <div>
            {
                list.map(comment=>(
                    <div key={comment.id}>
                        <p>Name: {comment.email} Comment: {comment.name}</p>
                    </div>
                ))
            }
        </div>
     );
}

export default Comments;