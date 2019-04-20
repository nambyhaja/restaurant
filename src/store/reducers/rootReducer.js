import restaurantReducer from './restaurantReducer';
import orderReducer from './orderReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    order: orderReducer,
    restaurant: restaurantReducer
})

export default rootReducer;