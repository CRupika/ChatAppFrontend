import * as authType from "../../actiontype/authType/authType";
import { post } from "../../../../utils/index";

export const createSignin =
(
    payload,
    // headers,
    navigate,
    // showLoader,
    // hideLoader,
    showToast
) => (dispatch) => {

    // showLoader();
    dispatch({
        type: authType.SIGNIN_REQUEST
    });

    post("/auth/signin", payload)
        .then((res) => {
            const { user, token } = res.data; 

            console.log('user ----> 22',user)
            console.log('token ----> 23',token)

            dispatch({
                type: authType.SIGNIN_SUCCESS,
                payload: res.data
            });
            // hideLoader();
            console.log('res ----> 26',res)
            localStorage.setItem(
                "token",
                JSON.stringify(token)
            );
            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );
            showToast(
                "success",
                "Success",
                "Login Successful"
            );
            navigate("/chat");
        })
        .catch((err) => {
            console.log("err ------> 42", err);
            dispatch({
                type: authType.SIGNIN_FAILURE,
                payload: err?.response?.data?.message
            });
            // hideLoader();
            showToast(
                "error",
                "Error",
                err?.response?.data?.message
            );
        });

};