import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import ProductDetail from "./ProductDetail";

function ProductsList() {
    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState(null);
    const addProduct = (obj) => {
        setProducts([...products, obj]);//obj is coming from child comp
        alert('Product Added successfully')
    }

    return (
        <div className="container mt-3 p-2" style={{ border: '2px solid red' }}>
            <h3>Product List Component</h3>
            <table className="table table-bordered">
                <thead><tr><th>Id</th><th>Name</th><th>Price</th></tr></thead>
                <tbody>
                    {
                        products.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={() => setSelected(item)}>view</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="row p-2">
                <div className="col">
                    <ProductForm addProduct={addProduct} />
                </div>
                <div className="col">
                    {selected && <ProductDetail product={selected} />}
                </div>

            </div>

        </div>
    );
}

export default ProductsList;