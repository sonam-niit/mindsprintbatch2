const initialState={
    items:[] //default empty array
}
function CartReducer(state=initialState,action) {
    switch(action.type){
        case 'ADD_ITEM':
            return {...state,items:[...state.items,action.payload]}
        case 'REMOVE_ITEM':
            return {...state,items: state.items(item=>item.id!==action.payload)}
        default:
            return state
    }
}

export default CartReducer;