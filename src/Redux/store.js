import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const enhancers = [applyMiddleware(thunk), composeWithDevTools() ];

const store = createStore(reducers, compose(...enhancers))

export default store;