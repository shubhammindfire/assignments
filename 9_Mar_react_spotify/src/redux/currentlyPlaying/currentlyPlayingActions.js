import {
    ADD_CURRENT_SONG,
    ADD_CURRENT_ARTIST,
    ADD_CURRENT_IMAGE_URL,
} from "./currentlyPlayingTypes.js";

export const addCurrentSong = (currentSong = "") => {
    return {
        type: ADD_CURRENT_SONG,
        payload: currentSong,
    };
};

export const addCurrentArtist = (currentArtist = []) => {
    return {
        type: ADD_CURRENT_ARTIST,
        payload: currentArtist,
    };
};

export const addCurrentImageUrl = (currentImageUrl = "") => {
    return {
        type: ADD_CURRENT_IMAGE_URL,
        payload: currentImageUrl,
    };
};
