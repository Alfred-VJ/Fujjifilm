import { combineReducers } from 'redux';
import { usersReducer } from './users.reducer';
import { productsReducer } from './products.reducers';
import { optionsReducer } from './options.reducers';


const appReducer = combineReducers({
    usersReducer,
    productsReducer,
    optionsReducer,
})


const rootReducer = (state, action) => {
    if (action.type === "RESET_STORE") {
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

export default rootReducer;