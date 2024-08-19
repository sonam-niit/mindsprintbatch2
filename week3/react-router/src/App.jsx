import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import UserList from "./components/userlist";
import UserDetails from "./components/userdetails";
import ProtectedRoute from "./components/ProtectedRoute";
import { useContext, useEffect, useState } from "react";
import AddCustomer from "./components/managecustomers/addCustomer";
import CustomerList from "./components/managecustomers/customerlist";
import { CounterContext } from "./components/context/CounterContext";
import Counter from "./components/redux/Counter";
import ItemsList from "./components/redux/ItemsList";

function App() {
  const [loggedIn,setLoggedIn]=useState(localStorage.getItem('loggedIn'));
  const {count}=useContext(CounterContext);
  return (
    <Router>
      <div className="container">
        <Counter />
        <h3>Count: {count}</h3>
        <Header />
        <Routes>
          <Route path="login" element={<Login setLoggedIn={setLoggedIn} />} />
          {/* <Route path="dashboard/*" element={<Dashboard />} /> */}
          <Route path="dashboard"
            element={<ProtectedRoute isAuthenticated={loggedIn}>
              <Dashboard />
            </ProtectedRoute>}
          />
          <Route path="users" element={<UserList />} />
          <Route path="addcust" element={<AddCustomer />} />
          <Route path="custlist" element={<CustomerList />} />
          <Route path="details/:id" element={<UserDetails />} />
          <Route path="products" element={<ItemsList />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
