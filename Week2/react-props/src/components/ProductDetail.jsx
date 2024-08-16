function ProductDetail({product}) {
    return ( 
        <div>
            <h3>Product Detail:{product.id}</h3>
            <h4>Name: {product.name}</h4>
            <p>Price: {product.price}</p>
        </div>
     );
}

export default ProductDetail;