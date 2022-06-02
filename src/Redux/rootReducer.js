import { combineReducers } from "redux";
import shopReducer from "./Shopping/shoppingReducer";
import authReducer from "./User/authReducer";

const reducers = combineReducers({
    shop: shopReducer,
    auth: authReducer,
});

export default reducers