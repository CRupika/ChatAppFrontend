import {
    GET_MESSAGE_REQUEST,
    GET_MESSAGE_SUCCESS,
    GET_MESSAGE_FAILURE
} from '../../actiontype/chatType/DirectMessageType';
import { get, post, put, deleteReq } from '../../../../utils';
import {
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILURE
} from "../../actiontype/chatType/DirectMessageType";

export const getMessages = (conversationId) => (dispatch) => {
    dispatch({
        type: GET_MESSAGE_REQUEST
    })

    try {
        get(`conversations/${conversationId}/messages`).then((res) => {
            dispatch({
                type: GET_MESSAGE_SUCCESS,
                payload: res?.data
            })
        })

    } catch (error) {
        dispatch({
            type: GET_MESSAGE_FAILURE,
            payload: res?.data
        })
    }
}

export const sendMessage = (payload) => (dispatch) => {

    dispatch({
        type: SEND_MESSAGE_REQUEST
    })

    try {
        post('/messages', payload).then((res) => {
            dispatch({
                type: SEND_MESSAGE_SUCCESS,
                payload: res?.data
            })

            dispatch(
                getMessages(payload?.conversationId)
            )
        })
    } catch (error) {
        dispatch({
            type: SEND_MESSAGE_FAILURE,
            payload: res?.data
        })
    }
}

export const editMessage = (messageId, payload) => (dispatch) => {

    dispatch({
        type: EDIT_MESSAGE_REQUEST
    });

    put(`/messages/${messageId}`, payload)
        .then((res) => {

            dispatch({
                type: EDIT_MESSAGE_SUCCESS,
                payload: res.data
            });

            dispatch(
                getMessages(payload.conversationId)
            );

        })
        .catch((err) => {

            dispatch({
                type: EDIT_MESSAGE_FAILURE,
                payload: err?.response?.data?.message
            });

        });

};


export const deleteMessage = (
    messageId,
    conversationId
) => (dispatch) => {

    dispatch({
        type: DELETE_MESSAGE_REQUEST
    });

    deleteReq(`/messages/${messageId}`)
        .then((res) => {

            dispatch({
                type: DELETE_MESSAGE_SUCCESS,
                payload: res.data
            });

            dispatch(
                getMessages(conversationId)
            );

        })
        .catch((err) => {

            dispatch({
                type: DELETE_MESSAGE_FAILURE,
                payload: err?.response?.data?.message
            });

        });

};