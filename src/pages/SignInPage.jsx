import SlackLogo from "../components/ui/SlackLogo";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import CommonInput from "../components/ui/CommonInput";
import { FiGlobe } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import slack from '../../src/assets/slack.png';
import Password from "../components/ui/Password";
import { useToast } from '../components/ui/Toast';
import { encryptUsingAES256 } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { createSignin } from '../services/action/actioncreator/AuthAction/SigninAction';

const Signin = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { showToast } = useToast();

    const {
        register,
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onChange",
    });

    const emailRegister = register("email", {
        required: "Email is required",
        pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Please enter a valid email address",
        },
    });

    const passwordRegister = register("password", {
        required: "Password is required",
        pattern: {
            value:
                /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!*]).*$/,
            message:
                "Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a special character.",
        },
    });

    const onSubmit = (data) => {
        // console.log('Data ----> 29', data)
        // if (data.email) {
        //     navigate('/verify-email')
        // }

        const payload = {
            email: data.email.trim(),
            password: encryptUsingAES256(
                data.password.trim()
            )
            // password: data.password.trim()
            
        };

        console.log('payload --------> 74', payload)

        dispatch(
            createSignin(
                payload,
                // headers,
                navigate,
                // showLoader,
                // hideLoader,
                showToast
            )

        );
    }

    const handleGoogleLogin = async () => {
        try {
            console.log("Google login started");

            const result = await signInWithPopup(auth, provider);

            console.log("Login successful");
            console.log('RESULT ----> 70', result)
            console.log('USER ----> 71', result.user);

            navigate("/chat");
        } catch (error) {
            console.log("Login failed");
            console.log("Error code:", error.code);
            console.log("Error message:", error.message);
            console.log(error);
        }
    };

    return (
        <>
            <div
                className="flex min-h-screen flex-col items-center"
            >
                <header
                    className="grid w-full grid-cols-3 items-center pt-12 pb-10"
                >
                    <div class="left-col"></div>
                    <div className="text-center">
                        <a
                            target="_self"
                            className="flex items-center justify-center no-underline"
                            href="https://slack.com"
                            rel="noopener noreferrer"
                        >
                            <img
                                alt="Connectly"
                                className="h-[30px]"
                                title="Connectly"
                                src={slack}
                            />
                            <span
                                className="ml-[5px] font-lato text-[35px] font-semibold tracking-[-1px] text-[#1d1c1d]"
                            >
                                Connectly
                            </span>
                        </a>
                    </div>
                    <div className="right-col"></div>
                </header >
                <div
                    className="flex flex-col grow shrink-0"
                >
                    <h1
                        className="mt-5 max-w-[700px] text-center text-[48px] font-bold leading-[46px] tracking-[-0.75px] text-black"
                    >
                        Enter your email to sign in
                    </h1>
                    <div
                        className="max-w-[700px] mb-8 text-center text-[18px] leading-[27px] text-[#454245]"
                    >
                        Or choose another way to sign in
                    </div>
                    <form className="w-full max-w-[400px] mx-auto px-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-5">
                            <CommonInput
                                type="text"
                                placeholder="name@work-email.com"
                                {...emailRegister}
                                className="w-[100%] rounded-xl border-2 border-[#ccc] px-5 py-2.5 text-base outline-none"
                            />
                            {
                                errors.email && (
                                    <p className="text-red-500">{errors.email.message}</p>
                                )
                            }
                        </div>
                        <div className="mb-5 w-[368px]">

                            <Controller
                                name="password"
                                control={control}
                                rules={{
                                    required: "Password is required",
                                    pattern: {
                                        value:
                                            /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!*]).*$/,
                                        message:
                                            "Password must be at least 8 characters and contain an uppercase letter, a lowercase letter, a number, and a special character.",
                                    },
                                }}
                                render={({ field }) => (
                                    <Password
                                        {...field}
                                        feedback={false}
                                        toggleMask
                                        className="w-[368px]"
                                        inputClassName="h-[43px] rounded-xl border-2 border-[#ccc] px-5 py-2.5 text-base w-[368px]"
                                        placeholder="Enter your password"
                                    />
                                )}
                            />

                            {errors.password && (
                                <p className="text-red-500">{errors.password.message}</p>
                            )}
                        </div>
                        <div className="mb-5">
                            <Button
                                type="submit"
                                label="Continue"
                                size="large"
                                className="!bg-[rgb(97,31,105)] !border-[rgb(97,31,105)] !text-white h-[43px] w-full rounded-xl"
                            />
                        </div>
                    </form>

                    <div className="flex w-full justify-center">
                        <div className="mb-6 flex w-[65%] items-center gap-x-[2%]">
                            <hr className="w-[30%]" />

                            <div className="flex items-center justify-center gap-[6px] text-[15px] text-[#1d1c1d]">
                                <div>OR</div>
                                <div>SIGN IN WITH</div>
                            </div>

                            <hr className="w-[30%]" />
                        </div>
                    </div>

                    <div
                        className="mb-[5%] flex items-center justify-center gap-x-[3%]"
                    >
                        <div>
                            <Button
                                id="google-login-btn"
                                onClick={handleGoogleLogin}
                                className="!bg-white !border !border-[#ccc] !text-[#1d1c1d] flex h-[43px] w-full items-center justify-center gap-2.5 rounded-xl px-[46px] py-2.5 text-base"
                            >
                                <svg viewBox="0 0 48 48" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                                </svg>
                                <span>Google</span>
                            </Button>
                        </div>
                        <div>
                            <Button
                                className="flex h-[43px] w-full cursor-pointer items-center justify-center gap-[10px] rounded-xl border !border-[#ccc] !bg-white px-[46px] py-[10px] text-base !text-[#1d1c1d]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 814 1000">
                                    <path fill="#000000" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.6-49 192.5-49 34.9 0 141.9 3.2 213.5 117zM568.6 81.7c32.1-38.3 55.5-91.4 55.5-144.5 0-7.7-.6-15.4-1.9-21.8-52.5 1.9-114.1 35.2-151.6 78.7-28.2 32.7-56.4 85.8-56.4 139.5 0 8.3 1.3 16.6 1.9 19.2 3.2.6 8.3 1.3 13.4 1.3 47.1 0 106.6-31.5 139.1-72.4z" />
                                </svg>
                                <span>Apple</span>
                            </Button>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-row items-center justify-center gap-1 px-4 text-[18px]">
                        <div className="mb-px !text-[#1d1c1d]">
                            Having trouble?
                        </div>

                        <a
                            target="_self"
                            href="/signin"
                            rel="noopener noreferrer"
                            className="!text-[#1264a3] no-underline"
                        >
                            Try entering a workspace URL
                        </a>
                    </div>
                </div>

                <div className="w-full max-w-full">
                    <div className="flex flex-col items-center py-8">
                        <footer className="flex w-full justify-center border-0 p-0 text-center">
                            <a
                                target="_blank"
                                href="/legal"
                                rel="noopener noreferrer"
                                className="mb-1 mr-4 text-center text-[15px] font-medium leading-[1.46668] tracking-[-0.2px] text-[#696969] no-underline"
                            >
                                Privacy &amp; Terms
                            </a>

                            <a
                                target="_blank"
                                href="/help/requests/new"
                                rel="noopener noreferrer"
                                className="mb-1 mr-4 text-center text-[15px] font-medium leading-[1.46668] tracking-[-0.2px] text-[#696969] no-underline"
                            >
                                Contact Us
                            </a>

                            <div className="flex">
                                <a
                                    target="_blank"
                                    href="#"
                                    rel="noopener noreferrer"
                                    className="mb-1 mr-4 text-center text-[15px] font-medium leading-[1.46668] tracking-[-0.2px] text-[#696969] no-underline"
                                >
                                    <div className="flex flex-row items-center justify-center">
                                        <FiGlobe />

                                        <span className="ml-[5px]">
                                            Change region
                                        </span>

                                        <MdKeyboardArrowDown />
                                    </div>
                                </a>
                            </div>

                            <span hidden data-sk="popover-trigger"></span>
                        </footer>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Signin