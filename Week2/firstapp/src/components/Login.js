function Login() {
    return (
        <div>
            <h3>Login Form</h3>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="name@example.com"/>
            </div>
            <button className="mt-3 btn btn-primary w-100">Login</button>
        </div>
    );
}

export default Login;