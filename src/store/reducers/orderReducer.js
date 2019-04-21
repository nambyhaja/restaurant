const initState = {
    orders: []
};

const orderReducer = (state = initState, action) => {
    switch(action.type){
        case 'INSERT_ORDER':
            console.log("insert order");
            state.orders.push(action.order);
            console.log(state.orders);
            return state;
        default:
            console.log("m'affcihe");
            console.log(state.orders);
            return state;
    }
}

export default orderReducer;