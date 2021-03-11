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
    console.log(`going for switch action.type = ${action.type}`);
    switch (action.type) {
        case ADD_NEW_RELEASES:
            console.log(
                `case ADD_NEW_RELEASES and payload = ${action.payload}`
            );
            return { ...state, newReleases: action.payload };
        case ADD_RECENTLY_PLAYED:
            console.log(
                `case ADD_RECENTLY_PLAYED and payload = ${action.payload}`
            );
            return { ...state, recentlyPlayed: action.payload };
        case ADD_USER_PLAYLISTS:
            console.log(
                `case ADD_USER_PLAYLISTS and payload = ${action.payload}`
            );
            return { ...state, userPlaylists: action.payload };
        default:
            return state;
    }
};

export default albumReducer;
