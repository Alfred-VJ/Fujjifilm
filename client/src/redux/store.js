import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import  appReducer from './reducers'
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)))

export default store;