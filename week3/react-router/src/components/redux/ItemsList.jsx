import { useDispatch } from "react-redux";

function ItemsList() {
    const items = [{ id: 1, name: 'laptop', price: 89999 }, { id: 2, name: 'headphon', price: 999 },
    { id: 3, name: 'pen', price: 99 }
    ]
    const dispatch= useDispatch();
    return (
        <div>
            {
                items.map(item => (
                    <div className="col" key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <button onClick={()=>dispatch({
                            type:'ADD_ITEM',payload:item
                        })}>Add to Cart</button>
                    </div>
                ))
            }
        </div>
    );
}

export default ItemsList;