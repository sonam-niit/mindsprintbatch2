function Register() {
    return (
        <div>
            <h3>Register Form</h3>
            <div className="mb-3">
                <label for="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="John Doe"/>
            </div>
            <div className="mb-3">
                <label for="username" className="form-label">UserName</label>
                <input type="text" className="form-control" id="username" placeholder="john123"/>
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="SECRET"/>
            </div>
            <button className="mt-3 btn btn-primary w-100">Register</button>
        </div>
    );
}

export default Register;