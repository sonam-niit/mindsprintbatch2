import {Routes,Route, BrowserRouter as Router} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
