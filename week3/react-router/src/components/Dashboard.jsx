import { Link, Route, Routes } from "react-router-dom";
import ProductList from "./manageproducts/productlist";
import AddProduct from "./manageproducts/addproduct";

function Dashboard() {
    return (
        <div>
            <h3>Dashboard Component</h3>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link" to="listproducts">List Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="addproducts">Add Product</Link>
                </li>
            </ul>

            <Routes>
                <Route path="listproducts" element={<ProductList />} />
                <Route path="addproducts" element={<AddProduct />} />
            </Routes>
        </div>
    );
}

export default Dashboard;