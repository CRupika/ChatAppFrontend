import { useRef, useState } from "react";
import CommonInput from "../components/ui/CommonInput";
import slack from '../../src/assets/slack.png'

const VerifyMailPage = () => {
    const [code, setCode] = useState(Array(6).fill(""));
    const inputsRef = useRef([]);
    const email = "rupikac355@gmail.com";

    const handleCodeChange = (index, value) => {
        if (!/^[0-9]?$/.test(value)) return;

        const nextCode = [...code];
        nextCode[index] = value;
        setCode(nextCode);

        if (value && index < code.length - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, event) => {
        if (event.key === "Backspace" && !code[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <div
                className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-10 sm:px-6 lg:px-8"
            >
                <div
                    className="text-center"
                    style={{
                        alignItems: 'center',
                        width: '100%',
                        padding: '48px 0px 40px',
                        display: 'grid',
                    }}
                >
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
                <main
                    className="mx-auto w-full max-w-3xl"
                >
                    <div
                        className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 shadow-[0_28px_80px_rgba(15,23,42,0.08)] sm:shadow-lg"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: '80vh'
                        }}
                    >
                        <div
                            className="px-6 py-10 sm:px-12 sm:py-12 lg:px-16"
                        >
                            <div className="text-center" style={{ marginBottom: '2%' }}>
                                <h1
                                    className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
                                    style={{ color: 'rgb(29, 28, 29)' }}
                                >
                                    We emailed you a code
                                </h1>
                                <p
                                    className="mt-4 text-sm leading-7 text-slate-600 sm:text-base"
                                    style={{ color: 'rgb(69, 66, 69)', width: '65%', marginLeft: '18%' }}
                                >
                                    We sent an email to <b>{email}</b>.
                                    <span>
                                        Enter the code here or tap the button in the email to continue. If you don&apos;t see the email, check your spam or junk folder.
                                    </span>
                                </p>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: 'center',
                                    columnGap: '1px'
                                }}
                            >
                                {code.map((val, index) => (
                                    <div key={index} style={{ display: "flex", alignItems: "center" }}>
                                        <CommonInput
                                            type="text"
                                            ref={(el) => (inputsRef.current[index] = el)}
                                            value={val}
                                            onChange={(e) => handleCodeChange(index, e.target.value)}
                                            onKeyDown={(e) => handleKeyDown(index, e)}
                                            maxLength={1}
                                            // className="h-12 text-center text-lg !rounded-none border-r-0 last:border-r last:rounded-r-md first:rounded-l-md"
                                            style={{
                                                // borderColor: index === 0 ? "#2563eb" : "#d1d5db",
                                                borderColor: index === 0 ? "" : "#d1d5db",
                                                borderWidth: index === 0 ? "2px" : "1px",
                                                width: "63px",
                                                height: '78px'
                                            }}
                                        />
                                        {index === 2 &&
                                            <span
                                                className="mx-3 text-slate-400"
                                                style={{ margin: '5px' }}
                                            >
                                                —
                                            </span>
                                        }
                                    </div>
                                ))}
                            </div>

                            <div
                                // className="flex flex-row items-center justify-center"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <a
                                    target="_blank"
                                    className="flex items-center m-5 mr-10 text-[14px] leading-5 text-[#616061]"
                                    data-qa="unstyled-button"
                                    href="https://mail.google.com/mail/u/0/"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: '#616061',
                                        alignItems: 'center',
                                        margin: '20px',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        display: 'flex',
                                        columnGap: '9px',
                                        textDecoration: "none",
                                    }}
                                >
                                    <img
                                        class="margin_right_50"
                                        alt=""
                                        srcset="https://a.slack-edge.com/bv1-13/get-started-icon-gmail-f2dbbc6.png, https://a.slack-edge.com/bv1-13/get-started-icon-gmail@2x-e026e5b.png 2x"
                                    />
                                    <span>
                                        Open Gmail
                                    </span>
                                </a>
                                <a
                                    target="_blank"
                                    class="c-link c-button-unstyled p-get_started__email_app_link"
                                    data-qa="unstyled-button"
                                    href="https://outlook.live.com/mail/0/inbox"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: ' #616061',
                                        alignItems: 'center',
                                        margin: '20px',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        display: 'flex',
                                        columnGap: '9px',
                                        textDecoration: "none",
                                    }}
                                >
                                    <img
                                        class="margin_right_50"
                                        alt=""
                                        srcset="https://a.slack-edge.com/bv1-13/get-started-icon-outlook-78f5cf0.png, https://a.slack-edge.com/bv1-13/get-started-icon-outlook@2x-6fb73a0.png 2x" />
                                    Open Outlook
                                </a>
                            </div>

                            <div
                                style={{
                                    marginBottom: '16px'
                                }}
                            >
                                <div>
                                    <span style={{ fontSize: '80%', color: ' rgb(29, 28, 29)' }}>Can’t find your code?</span>
                                    <button
                                        // className="text-[var(--dt_color-content-hgl-1)] cursor-pointer bg-transparent border-0 m-0 p-0 no-underline align-baseline"
                                        style={{
                                            color: "#1264a3",
                                            fontFamily: "inherit",
                                            fontSize: "inherit",
                                            fontStretch: "inherit",
                                            fontStyle: "inherit",
                                            fontVariant: "inherit",
                                            fontWeight: "inherit",
                                            lineHeight: "inherit",
                                            overflow: "initial",
                                            textAlign: "initial",
                                            verticalAlign: "baseline",
                                            cursor: "pointer",
                                            background: "transparent",
                                            border: "0",
                                            margin: 0,
                                            padding: 0,
                                            textDecoration: "none",
                                            fontSize: '80%'
                                        }}
                                        type="button"
                                        tabindex="0"
                                    >
                                        Request a new code.
                                    </button>
                                </div>
                            </div>
                            <span>
                                <span style={{ fontSize: '80%', color: ' rgb(29, 28, 29)' }}>
                                    Having trouble?
                                </span>
                                <a
                                    target="_self"
                                    class="c-link inline_block"
                                    href="/workspace-signin"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: "#1264a3",
                                        textDecoration: "none",
                                        fontSize: '80%'
                                    }}
                                >
                                    Try entering a workspace URL
                                </a>
                            </span>

                        </div>
                    </div>
                </main>
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
                </footer>
            </div >
        </div >
    );
};

export default VerifyMailPage;