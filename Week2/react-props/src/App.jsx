import { useState } from "react"
import Greeting from "./components/Greeting"
import ProductsList from "./components/ProductsList"
import TodoApp from "./components/todoapp"
import EffectExample from "./components/UseCase1"
import UserDetails from "./components/UserDetails"
import UserForm from "./components/userform"
import EffectDemo2 from "./components/EffectDemo2"
import CustomerList from "./components/CustomerList"
import Post from "./components/Post"
import RealTimeClock from "./components/RealTimeClock"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

function App() {

  const [flag,setFlag]=useState(false)
  const obj={name:'alex',email:'alex@gmail.com'}
  const handleClick=()=>{
    alert("Clicked...!")
  }
  return (
    <Router>
    <div>
      <h3>Welcome to MindSprint</h3>
      <ul className="nav">
          <li className="nav-item">
            <Link to='customerlist' className="nav-link">Customer List</Link>
          </li>
          <li className="nav-item">
            <Link to='productlist' className="nav-link">Product List</Link>
          </li>
          <li className="nav-item">
            <Link to='userform' className="nav-link">User Form</Link>
          </li>
      </ul>
      <Routes>
        <Route path="customerlist" element={<CustomerList />} />
        <Route path="productlist" element={<ProductsList />} />
        <Route path="userform" element={<UserForm />} />
      </Routes>

      {/* <h3>React App</h3>
      <RealTimeClock />
      {flag? <EffectDemo2 />:''}
      <button onClick={()=>setFlag(!flag)}>CLick</button>
      <Post /> */}
      {/* <ProductsList /> */}
      {/* <TodoApp />
      <Greeting />
      <Greeting name="sonam" message="Good Morning"/>
      <UserDetails user={obj} method={handleClick}/> */}
    </div>
    </Router>
  )
}

export default App
