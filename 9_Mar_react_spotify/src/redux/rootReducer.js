import { combineReducers } from "redux";
import albumReducer from "./album/albumReducer.js";
import userReducer from "./user/userReducer.js";
import currentlyPlayingReducer from "./currentlyPlaying/currentlyPlayingReducer.js";

const rootReducer = combineReducers({
    albumReducer: albumReducer,
    userReducer: userReducer,
    currentlyPlayingReducer: currentlyPlayingReducer,
});

export default rootReducer;
