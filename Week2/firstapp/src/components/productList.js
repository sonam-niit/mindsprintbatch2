import products from '../assets/products.json';
function ProductList() {
    return ( 
        <div>
            <table className='table'>
                <thead>
                    <tr><th>Id</th><th>Name</th><th>Price</th>
                    <th>Rating</th></tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>(
                            <tr key={product.id}>
                               <td>{product.id}</td>
                               <td>{product.name}</td>
                               <td>{product.price}</td>
                               <td>{product.rating}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}

export default ProductList;