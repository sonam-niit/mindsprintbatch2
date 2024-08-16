import { useState } from "react";

function ProductForm({addProduct}) {
    const [product, setProduct] = useState({ name: '', price: '' })
    const handleSubmit=(e)=>{
        e.preventDefault();
        product.id= Math.floor(Math.random()*1000)
        addProduct(product)
        setProduct({ name: '', price: '' });
    }
    return (
        <div className="mt-3 p-2" style={{border:"2px solid blue"}} >
            <h3>Form Component</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Product Name"
                    onChange={(e) => setProduct({ ...product, name: e.target.value })}
                    className="form-control mt-3" value={product.name}/>

                <input type="text" name="price" placeholder="Enter Product Price"
                    onChange={(e) => setProduct({ ...product, price: e.target.value })} 
                    className="form-control mt-3" value={product.price}/>

                <button type="submit" className="btn btn-primary mt-3">Add Product</button>
            </form>
        </div>
    );
}

export default ProductForm;