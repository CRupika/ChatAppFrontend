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
                style={{
                    backgroundColor: 'rgba(var(--sk_primary_background), 1)',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: '100vh',
                    display: 'flex'
                }}
            >
                <header
                    style={{
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        alignItems: 'center',
                        width: '100%',
                        padding: '48px 0 40px',
                        display: 'grid'
                    }}
                >
                    <div class="left-col"></div>
                    <div className="text-center">
                        <a
                            target="_self"
                            className="c-link"
                            href="https://slack.com"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            {/* <img alt="Connectly" height="26" title="Connectly" src="https://a.slack-edge.com/bv1-13/slack_logo-e971fd7.svg" /> */}
                            <img
                                alt="Connectly"
                                height="26"
                                title="Connectly"
                                src={slack}
                            />
                            <span
                                style={{
                                    fontFamily: "Lato, sans-serif",
                                    fontWeight: '600',
                                    fontSize: '35px',
                                    letterSpacing: '-1px',
                                    color: ' #1d1c1d',
                                    marginLeft: '5px'
                                }}
                            >
                                Connectly
                            </span>
                        </a>
                    </div>
                    <div className="right-col"></div>
                </header >
                <div
                    style={{
                        flexDirection: 'column',
                        flexGrow: 1,
                        flexShrink: 0,
                        display: 'flex'
                    }}
                >
                    <h1
                        className="mt-5 max-w-[700px] text-center text-[48px] font-bold leading-[46px] tracking-[-0.75px] text-black "
                        style={{ color: '#1d1c1d' }}
                    >
                        Sign in to your workspace
                    </h1>
                    <div
                        className="p-refreshed_page__sub_heading"
                        style={{
                            color: '#454245',
                            textAlign: 'center',
                            maxWidth: '700px',
                            marginBottom: '32px',
                            fontSize: '18px',
                            lineHeight: '27px'
                        }}
                    >
                        We suggest using the <b>email address you use at work.</b>
                    </div>
                    <form className="w-full max-w-[400px] mx-auto px-4" onSubmit={handleSubmit(onSubmit)}>
                        <div style={{ marginBottom: '20px' }}>
                            <CommonInput
                                type="text"
                                value={value}
                                placeholder="name@work-email.com"
                                {...emailRegister}
                                onChange={(e) => {
                                    onChange(e);
                                    handleEmailChange(e);
                                }}
                                style={{
                                    border: "2px solid #ccc",
                                    borderRadius: "12px",
                                    padding: "10px 20px",
                                    outline: "none",
                                    width: "65%",
                                    fontSize: "16px",
                                }}
                            />
                            {
                                errors.email && (
                                    <p style={{ color: 'red' }}>{errors.email.message}</p>
                                )
                            }
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <Button
                                type="submit"
                                label="Continue"
                                severity="help"
                                size="large"
                                style={{
                                    height: '43px',
                                    borderRadius: '12px',
                                    padding: '10px 20px',
                                    width: '65%',
                                    fontSize: '16px',
                                    backgroundColor: '#611f69',
                                    border: 'none'
                                }}
                            />
                        </div>
                        <p
                            style={{
                                fontSize: '13px',
                                lineHeight: '1.38463',
                                fontWeight: 'initial',
                                letterSpacing: 'var(--custom-font-tracking-caption, inherit)',
                                color: 'rgba(var(--sk_foreground_max), .7)',
                                marginBottom: '8px',
                                width: '94%'
                            }}
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
                            style={{
                                fontSize: '13px',
                                lineHeight: '1.38463',
                                fontWeight: 'initial',
                                letterSpacing: 'var(--custom-font-tracking-caption, inherit)',
                                color: 'rgba(var(--sk_foreground_max), .7)',
                                marginBottom: '8px',
                                width: '81%'
                            }}
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
                            style={{
                                fontSize: '13px',
                                lineHeight: '1.38463',
                                fontWeight: 'initial',
                                letterSpacing: 'var(--custom-font-tracking-caption, inherit)',
                                color: 'rgba(var(--sk_foreground_max), .7)',
                                marginBottom: '8px',
                                // width: '94%'
                                marginLeft:'4%'
                            }}
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
                    </form>
                </div>
                <div
                    style={{
                        width: '100%',
                        maxWidth: '100%'
                    }}
                >
                    <div
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '32px 0',
                            display: 'flex'
                        }}
                    >
                        <footer
                            style={{
                                textAlign: 'center',
                                border: 'none',
                                placeContent: 'center',
                                width: '100%',
                                padding: '0',
                                display: 'flex'
                            }}
                        >
                            <a
                                target="_blank"
                                data-qa="unstyled-button"
                                href="/legal"
                                rel="noopener noreferrer"
                                style={{
                                    fontSize: '15px',
                                    lineHeight: '1.46668',
                                    fontWeight: 'initial',
                                    letterSpacing: 'var(--custom-font-tracking-body, inherit)',
                                    color: '#696969',
                                    letterSpacing: '-.2px',
                                    marginBottom: '4px',
                                    marginRight: '16px',
                                    fontWeight: '500',
                                    textAlign: 'center',
                                    textDecoration: 'none'
                                }}
                            >
                                Privacy &amp; Terms
                            </a>
                            <a
                                target="_blank"
                                data-qa="unstyled-button"
                                href="/help/requests/new"
                                rel="noopener noreferrer"
                                style={{
                                    fontSize: '15px',
                                    lineHeight: '1.46668',
                                    fontWeight: 'initial',
                                    letterSpacing: 'var(--custom-font-tracking-body, inherit)',
                                    color: '#696969',
                                    letterSpacing: '-.2px',
                                    marginBottom: '4px',
                                    marginRight: '16px',
                                    fontWeight: '500',
                                    textAlign: 'center',
                                    textDecoration: 'none'
                                }}
                            >
                                Contact Us
                            </a>
                            <div
                                style={{
                                    display: 'flex'
                                }}
                            >
                                <a
                                    target="_blank"
                                    data-qa="unstyled-button"
                                    href="#"
                                    rel="noopener noreferrer"
                                    style={{
                                        fontSize: '15px',
                                        lineHeight: '1.46668',
                                        fontWeight: 'initial',
                                        letterSpacing: 'var(--custom-font-tracking-body, inherit)',
                                        color: '#696969',
                                        letterSpacing: '-.2px',
                                        marginBottom: '4px',
                                        marginRight: '16px',
                                        fontWeight: '500',
                                        textAlign: 'center',
                                        textDecoration: 'none'
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'anchor-center'
                                        }}
                                    >
                                        <FiGlobe
                                            class="c-icon margin_right_25 c-icon--globe c-icon--inherit undefined"
                                            data-qa="slack_kit_icon"
                                            type="globe"
                                            aria-hidden="true"
                                        >
                                        </FiGlobe  >
                                        <span style={{ marginLeft: '5px' }}>
                                            Change region
                                        </span>
                                        <MdKeyboardArrowDown
                                            class="c-icon c-icon--chevron-medium-down c-icon--inherit undefined"
                                            data-qa="slack_kit_icon"
                                            type="chevron-medium-down"
                                            aria-hidden="true"
                                        >
                                        </MdKeyboardArrowDown >
                                    </div>
                                </a>
                            </div>
                            <span
                                hidden=""
                                data-sk="popover-trigger"
                            >
                            </span>
                        </footer>
                    </div>
                </div >
            </div >

        </>
    );
}

export default WorkSignin