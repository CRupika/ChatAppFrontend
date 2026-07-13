import axios from "axios";

import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE
} from "../../actiontype/chatType/UserType";
import { get } from "../../../../utils";

export const getUsers = () => (dispatch) => {
    dispatch({
        type: GET_USERS_REQUEST
    });

    const token = localStorage.getItem("token");

    get("/users").then((res) => {
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: res.data
        });
        // showToast(
        //     "success",
        //     "Success",
        //     "Login Successful"
        // )
    }).catch((err) => {
        console.log("err ------> 42", err);
        dispatch({
            type: GET_USERS_FAILURE,
            payload: err?.response?.data?.message
        });
        // hideLoader();
        // showToast(
        //     "error",
        //     "Error",
        //     err?.response?.data?.message
        // );
    });

    // const response = await axios.get(
    //     "http://localhost:5000/api/users",
    //     {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     }
    // );

    // dispatch({
    //     type: GET_USERS_SUCCESS,
    //     payload: response.data.data
    // });
};