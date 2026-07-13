import * as SignupType from '../../actiontype/authType/authType'
import { post } from './../../../../utils/index'

export const createSignup = (payload,
    // headers,
    navigate,
    // showLoader,
    // hideLoader,
    showToast) => (dispatch) => {
        // showLoader();
        dispatch({
            type: SignupType.SIGNUP_REQUEST,
        });
        post("/auth/signup", payload).then((res) => {
            dispatch({
                type: SignupType.SIGNUP_SUCCESS,
                payload: res,
            });
            // hideLoader();
            showToast(
                "success",
                "Success",
                "Signup completed successfully."
            );
            navigate("/signin");
        })
            .catch((err) => {
                console.log('err ------> signup ', err);
                dispatch({
                    type: SignupType.SIGNUP_FAILURE,
                    payload: err?.response?.data?.message,
                });
                // hideLoader();
                showToast(
                    "error",
                    "Error",
                    err?.response?.data?.message
                );
            });
    };