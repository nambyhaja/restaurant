const initState = {
    orders: []
};

const orderReducer = (state = initState, action) => {
    switch(action.type){
        case 'INSERT_ORDER':
            state.orders.push(action.order);
            return state;
        default:
            return state;
    }
}

export default orderReducer;