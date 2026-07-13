import * as authType from "../action/actiontype/authType/authType";

const initialState = {
    signinLoading: false,
    signinResponse: {},
    signinError: null,
};

const signinReducer = (state = initialState, action) => {

    switch (action.type) {
        case authType.SIGNIN_REQUEST:
            return {
                ...state,
                signinLoading: true,
                signinError: null,
            };

        case authType.SIGNIN_SUCCESS:
            return {
                ...state,
                signinLoading: false,
                signinResponse: action.payload,
                signinError: null,
            };

        case authType.SIGNIN_FAILURE:
            return {
                ...state,
                signinLoading: false,
                signinError: action.payload,
            };

        default:
            return state;
    }
};

export default signinReducer;