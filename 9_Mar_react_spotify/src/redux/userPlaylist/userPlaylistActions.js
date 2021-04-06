import {
    ADD_USER_PLAYLIST,
    ADD_USER_PLAYLIST_IMAGE,
} from "./userPlaylistTypes.js";

export const addUserPlaylist = (playlist = {}) => {
    return {
        type: ADD_USER_PLAYLIST,
        payload: playlist,
    };
};

export const addUserPlaylistImage = (playlistImage = "") => {
    return {
        type: ADD_USER_PLAYLIST_IMAGE,
        payload: playlistImage,
    };
};
