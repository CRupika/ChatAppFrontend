import { Button } from "primereact/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import CommonInput from "../components/ui/CommonInput";
import { FiGlobe } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import slack from '../../src/assets/slack.png'

const WorkSignin = () => {
    const [value, setValue] = useState("")

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });


    const {
        onChange,
        ...emailRegister
    } = register("email", {
        required: "Email is required",
        pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Please enter a valid email address",
        },
    });

    const navigate = useNavigate()

    const handleEmailChange = (e) => {
        setValue(e.target.value)
    }

    const onSubmit = (data) => {
        console.log('Data ----> 29', data)
        if (data.email) {
            navigate('/verify-email')
        }
    }

    const handleGoogleLogin = async () => {
        try {
            console.log("Google login started");

            const result = await signInWithPopup(auth, provider);

            console.log("Login successful");
            console.log('RESULT ----> 70', result)
            console.log('USER ----> 71', result.user);

            // navigate("/workspace");
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
                        className="mt-5 max-w-[700px] text-center text-[48px] font-bold leading-[46px] tracking-[-0.75px] text-black mb-3"
                    >
                        Sign in to your workspace
                    </h1>
                    <div
                        className="max-w-[700px] mb-8 text-center text-[18px] leading-[27px] text-[#454245]"
                    >
                        We suggest using the <b>email address you use at work.</b>
                    </div>
                    <form className="w-full max-w-[400px] mx-auto px-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-5">
                            <CommonInput
                                type="text"
                                value={value}
                                placeholder="name@work-email.com"
                                {...emailRegister}
                                onChange={(e) => {
                                    onChange(e);
                                    handleEmailChange(e);
                                }}
                                className="w-[100%] rounded-xl border-2 border-[#ccc] px-5 py-2.5 text-base outline-none"
                            />
                            {
                                errors.email && (
                                    <p style={{ color: 'red' }}>{errors.email.message}</p>
                                )
                            }
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
                    <p
                        className="mb-2 ml-[94px] text-[13px] font-normal leading-[1.38463] tracking-normal text-[rgba(var(--sk_foreground_max),0.7)]"
                    >
                        Don’t know your workspace URL?
                        <a
                            target="_self"
                            class="c-link"
                            data-qa="find_your_workspace"
                            href="/get-started#/find"
                            rel="noopener noreferrer"
                            style={{
                                textDecoration: 'none',
                                color: ' #1264a3',
                                marginLeft: '2px'
                            }}
                        >
                            <strong>
                                Find your workspaces
                            </strong>
                        </a>
                    </p>
                    <p
                        className="mb-2 ml-[94px] text-[13px] font-normal leading-[1.38463] tracking-[var(--custom-font-tracking-caption)] text-[rgba(var(--sk_foreground_max),0.7)]"
                    >
                        Trying to sign in to a
                        <a
                            target="_self"
                            class="c-link"
                            data-qa="workspace_signin"
                            href="https://slack-gov.com/workspace-signin"
                            rel="noopener noreferrer"
                            style={{
                                textDecoration: 'none',
                                color: ' #1264a3',
                                marginLeft: '2px'
                            }}
                        >
                            <strong>
                                GovSlack Workspace?
                            </strong>
                        </a>
                    </p>
                    <p
                        className="mb-2 ml-[17%] text-[13px] font-normal leading-[1.38463] tracking-[var(--custom-font-tracking-caption)] text-[rgba(var(--sk_foreground_max),0.7)]"
                    >
                        Looking to create a workspace instead?
                        <a
                            target="_self"
                            class="c-link"
                            data-qa="create_workspace_link"
                            href="/get-started#/create"
                            rel="noopener noreferrer"
                            style={{
                                textDecoration: 'none',
                                color: ' #1264a3',
                                marginLeft: '2px'
                            }}
                        >
                            <strong>
                                Create a new workspace
                            </strong>
                        </a>
                    </p>
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

export default WorkSignin