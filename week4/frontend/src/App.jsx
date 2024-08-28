import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Link className="nav-link" to="login">Login</Link>
        <Link className="nav-link" to="register">Register</Link>

        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
