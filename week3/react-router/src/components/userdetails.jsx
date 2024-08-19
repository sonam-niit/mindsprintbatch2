import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const fetchData = async () => {
        try {
            const resp = await axios.get('https://jsonplaceholder.typicode.com/users/' + id);
            setUser(resp.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <h3>User Details Component</h3>
            {
                loading ? <p>loading.....</p> :
                    <>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <p>Address:{user.address.street}{user.address.city}</p>
                    </>
            }



        </div>
    );
}

export default UserDetails;