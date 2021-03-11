import { ADD_USER_INFO } from "./userTypes.js";

const initialState = {
    userInfo: "",
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_INFO:
            return { userInfo: action.payload };
        default:
            return state;
    }
};

export default userReducer;
