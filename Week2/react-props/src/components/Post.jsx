import { useEffect, useState } from "react";
import Comments from "./Comments";

function Post() {
    const [list,setList]=useState([]);
    const fetchData=async ()=>{
        const resp=await fetch('https://jsonplaceholder.typicode.com/posts');
        const json= await resp.json();
        setList(json); //add the server data into compo state
    }
    useEffect(()=>{
        fetchData();
    },[])
    return ( 
        <div>
            {
                list.map(post=>(
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <Comments postId={post.id}/>
                    </div>
                ))
            }
        </div>
     );
}

export default Post;