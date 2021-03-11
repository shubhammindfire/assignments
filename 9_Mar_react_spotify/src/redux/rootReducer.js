import { combineReducers } from "redux";
import albumReducer from "./album/albumReducer.js";
import userReducer from "./user/userReducer.js";

const rootReducer = combineReducers({
    albumReducer: albumReducer,
    userReducer: userReducer,
});

export default rootReducer;
