import {
    ADD_NEW_RELEASES,
    ADD_RECENTLY_PLAYED,
    ADD_USER_PLAYLISTS,
} from "./albumTypes.js";

const initialState = {
    newReleases: [],
    recentlyPlayed: [],
    userPlaylists: [],
};

const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_RELEASES:
            return { ...state, newReleases: action.payload };
        case ADD_RECENTLY_PLAYED:
            return { ...state, recentlyPlayed: action.payload };
        case ADD_USER_PLAYLISTS:
            return { ...state, userPlaylists: action.payload };
        default:
            return state;
    }
};

export default albumReducer;
