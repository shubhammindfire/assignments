import { ADD_NEW_RELEASES, ADD_RECENTLY_PLAYED,ADD_USER_PLAYLISTS } from "./albumTypes.js";

export const addRecentlyPlayed = (releases = {}) => {
    return {
        type: ADD_RECENTLY_PLAYED,
        payload: releases,
    };
};

export const addNewReleases = (releases = {}) => {
    return {
        type: ADD_NEW_RELEASES,
        payload: releases,
    };
};

export const addUserPlaylists = (releases = {}) => {
    return {
        type: ADD_USER_PLAYLISTS,
        payload: releases,
    };
};