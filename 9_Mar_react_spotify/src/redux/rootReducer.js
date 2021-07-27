import { combineReducers } from "redux";
import albumReducer from "./album/albumReducer.js";
import userReducer from "./user/userReducer.js";
import currentlyPlayingReducer from "./currentlyPlaying/currentlyPlayingReducer.js";
import userPlaylistReducer from "./userPlaylist/userPlaylistReducer.js";

const rootReducer = combineReducers({
    albumReducer,
    userReducer,
    currentlyPlayingReducer,
    userPlaylistReducer,
});

export default rootReducer;
