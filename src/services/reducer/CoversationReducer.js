import {
    CREATE_CONVERSATION_REQUEST,
    CREATE_CONVERSATION_SUCCESS,
    CREATE_CONVERSATION_FAILURE
} from '../action/actiontype/chatType/ConversationType';

const initialState = {
    loading: false,
    conversation: null,
    error: null
}

const conversationReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CONVERSATION_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case CREATE_CONVERSATION_SUCCESS:
            return {
                ...state,
                loading: false,
                conversation: action.payload
            }

        case CREATE_CONVERSATION_FAILURE:
        return {
            ...state,
            loading:false,
            conversation:action.payload
        }

        default:
            return state;

   }
}

export default conversationReducer