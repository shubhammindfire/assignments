import { ADD_USER_INFO } from "./userTypes.js";

export const addUserInfo = (userInfo = "") => {
    return {
        type: ADD_USER_INFO,
        payload: userInfo,
    };
};