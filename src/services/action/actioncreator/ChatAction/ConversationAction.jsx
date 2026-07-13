import {
    CREATE_CONVERSATION_REQUEST,
    CREATE_CONVERSATION_SUCCESS,
    CREATE_CONVERSATION_FAILURE
} from '../../actiontype/chatType/ConversationType';
import { post } from '../../../../utils';

export const createConversation = (Id) => (dispatch) => {

    dispatch({
        type: CREATE_CONVERSATION_REQUEST
    })

    try {
        post("/conversations",{userId:Id}).then((res) => {
            dispatch({
                type: CREATE_CONVERSATION_SUCCESS,
                payload: res?.data
            })
        })


    } catch (error) {
        dispatch({
            type: CREATE_CONVERSATION_FAILURE,
            payload: res?.data
        })
    }
}