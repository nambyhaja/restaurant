export const insertOrder = (order) => {
    return(dispatch) => {
        dispatch({
            type: 'INSERT_ORDER', 
            order
        });
    }
};