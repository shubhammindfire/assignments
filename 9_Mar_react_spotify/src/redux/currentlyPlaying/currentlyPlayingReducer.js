import {
    ADD_CURRENT_SONG,
    ADD_CURRENT_IMAGE_URL,
    ADD_CURRENT_ARTIST,
} from "./currentlyPlayingTypes.js";

const initialState = {
    currentSong: "",
    currentArtist: [],
    currentImageUrl: "",
};

const currentlyPlayingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CURRENT_SONG:
            return {
                ...state,
                currentSong: action.payload,
            };
        case ADD_CURRENT_IMAGE_URL:
            return {
                ...state,
                currentImageUrl: action.payload,
            };
        case ADD_CURRENT_ARTIST:
            return {
                ...state,
                currentArtist: action.payload,
            };
        default:
            return state;
    }
};

export default currentlyPlayingReducer;
