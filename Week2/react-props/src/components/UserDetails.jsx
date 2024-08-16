function UserDetails({user,method}) {
    return ( 
        <div>
            <h3>Name:{user.name}</h3>
            <h3>Email:{user.email}</h3>

            <button onClick={method}>Trigger</button>
        </div>
     );
}

export default UserDetails;