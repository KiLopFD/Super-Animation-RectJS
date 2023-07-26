import { combineReducers } from "redux";
import authenReducer from "./redux/authentication";

const allReducers = combineReducers({
    authenReducer
    // Thêm nhiều reducer ở đây
});

export default allReducers;