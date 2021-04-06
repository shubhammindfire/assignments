import {
    ADD_USER_PLAYLIST,
    ADD_USER_PLAYLIST_IMAGE,
} from "./userPlaylistTypes.js";

const initialState = {
    userPlaylist: [],
    userPlaylistImage: "",
};

const userPlaylistReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_PLAYLIST:
            return { ...state, userPlaylist: action.payload };
        case ADD_USER_PLAYLIST_IMAGE:
            return { ...state, userPlaylistImage: action.payload };
        default:
            return state;
    }
};

export default userPlaylistReducer;
