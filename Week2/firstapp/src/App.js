import { useState } from "react";
import Counter from "./components/counter";
import Header from "./components/header";
import Main from "./components/main";
import ProductList from "./components/productList";
import Slider from "./components/slider";
import StateDemo from "./components/Statedemo";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [flag,setFlag]=useState(false);
  return (
      <div className="container">
        {/* <StateDemo />
        <Counter />
        <Main />
        <ProductList /> */}
        <button className="my-3 btn btn-secondary w-100" onClick={()=>setFlag(!flag)}>{flag?'Register':'Login'}</button>
        {
          flag? <Login /> :<Register />
        }
        
      </div>
  );
}

export default App;
