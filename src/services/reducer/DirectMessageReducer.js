import {
    GET_MESSAGE_REQUEST,
    GET_MESSAGE_SUCCESS,
    GET_MESSAGE_FAILURE
} from '../action/actiontype/chatType/DirectMessageType';

const initialState = {
    loading: false,
    message: [],
    error: null
}

const directMessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action?.payload
            }

        case GET_MESSAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action?.payload
            }

        default:
          return  state;
    }

}

export default directMessageReducer