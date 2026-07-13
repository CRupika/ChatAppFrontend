import * as authType from "../action/actiontype/authType/authType";

const initialState = {
    signupLoading: false,
    signupResponse: {},
    signupError: null,
};

const signupReducer = (state = initialState, action) => {

    switch (action.type) {
        case authType.SIGNUP_REQUEST:
            return {
                ...state,
                signupLoading: true,
                signupError: null,
            };

        case authType.SIGNUP_SUCCESS:
            return {
                ...state,
                signupLoading: false,
                signupResponse: action.payload,
                signupError: null,
            };

        case authType.SIGNUP_FAILURE:
            return {
                ...state,
                signupLoading: false,
                signupError: action.payload,
            };

        default:
            return state;
    }
};

export default signupReducer;