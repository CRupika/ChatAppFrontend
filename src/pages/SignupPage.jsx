import SlackLogo from "../components/ui/SlackLogo";
// import SignupForm from "../components/auth/SignupForm";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const SignupPage = () => {
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

  // const handleGoogleLogin = () => {
  //   //  alert(5);
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const user = result.user;
  //       console.log('USER ------> 53',user)
  //       // navigate('/workspace')

  //     }).catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;

  //     });
  // }

  const handleGoogleLogin = async () => {
    try {
      console.log("Google login started");

      const result = await signInWithPopup(auth, provider);

      console.log("Login successful");
      console.log('RESULT ----> 70',result)
      console.log('USER ----> 71',result.user);

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
            <a target="_self" className="c-link" href="https://slack.com" rel="noopener noreferrer">
              <img alt="Slack" height="26" title="Slack" src="https://a.slack-edge.com/bv1-13/slack_logo-e971fd7.svg" />
            </a>
          </div>
          <div className="right-col"></div>
        </header>
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
            First, enter your email
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
              <InputText
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
                  width: "75%",
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
                  width: '75%',
                  fontSize: '16px',
                  backgroundColor: '#611f69',
                  border: 'none'
                }}
              />
            </div>
          </form>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '72%',
                columnGap: '5%',
                marginBottom: '24px'
              }}
            >
              <hr style={{ width: '77%' }} />
              <span style={{ color: '#1d1c1d' }}>OR</span>
              <hr style={{ width: '77%' }} />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '5%',
              columnGap: '3%'
            }}
          >
            <div>
              <Button
                id="google-login-btn"
                onClick={handleGoogleLogin}
                style={{
                  height: '43px',
                  borderRadius: '12px',
                  padding: '10px 46px',
                  width: '100%',
                  fontSize: '16px',
                  color: '#1d1c1d',
                  border: '1px solid #ccc',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
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
                style={{
                  height: '43px',
                  borderRadius: '12px',
                  padding: '10px 46px',
                  width: '100%',
                  fontSize: '16px',
                  color: '#1d1c1d',
                  border: '1px solid #ccc',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 814 1000">
                  <path fill="#000000" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.6-49 192.5-49 34.9 0 141.9 3.2 213.5 117zM568.6 81.7c32.1-38.3 55.5-91.4 55.5-144.5 0-7.7-.6-15.4-1.9-21.8-52.5 1.9-114.1 35.2-151.6 78.7-28.2 32.7-56.4 85.8-56.4 139.5 0 8.3 1.3 16.6 1.9 19.2 3.2.6 8.3 1.3 13.4 1.3 47.1 0 106.6-31.5 139.1-72.4z" />
                </svg>
                <span>Apple</span>
              </Button>
            </div>
          </div>

          <div style={{
            textAlign: "center",
            fontSize: "13px",
            color: "#555",
            maxWidth: "320px",
            margin: "0 auto",
            lineHeight: "1.5",
          }}>
            By continuing, you're agreeing to our{" "}
            <a target="_blank" href="/main-services-agreement" rel="noopener noreferrer" style={{ color: '#1d1c1d' }}>
              Main Services Agreement
            </a>,{" "}
            <a target="_blank" href="/terms-of-service/user" rel="noopener noreferrer" style={{ color: '#1d1c1d' }}>
              User Terms of Service
            </a>,{" "}
            and{" "}
            <a target="_blank" href="/slack-supplemental-terms" rel="noopener noreferrer" style={{ color: '#1d1c1d' }}>
              Slack Supplemental Terms
            </a>.{" "}
            Additional disclosures are available in our{" "}
            <a target="_blank" href="/privacy-policy" rel="noopener noreferrer" style={{ color: '#1d1c1d' }}>
              Privacy Policy
            </a>{" "}
            and{" "}
            <a target="_blank" href="/cookie-policy" rel="noopener noreferrer" style={{ color: '#1d1c1d' }}>
              Cookie Policy
            </a>.
          </div>

          <div
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              fontSize: '18px',
              display: 'flex',
              marginTop: '24px',
              padding: '0 16px'
            }}
          >
            <div
              style={{
                marginBottom: '1px',
                color: '#1d1c1d'
              }}
            >
              Already using Slack?
            </div>
            <a
              target="_self"
              class="c-link"
              href="/signin"
              rel="noopener noreferrer"
              style={{
                color: '#1264a3',
                textDecoration: 'none'
              }}
            >
              Sign in to an existing workspace
            </a>
          </div>
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
                  textAlign: 'center'
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
                  textAlign: 'center'
                }}
              >
                Contact Us
              </a>
              <div
                class=""
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
                    textAlign: 'center'
                  }}
                >
                  <i
                    class="c-icon margin_right_25 c-icon--globe c-icon--inherit undefined"
                    data-qa="slack_kit_icon"
                    type="globe"
                    aria-hidden="true"
                  >
                  </i>
                  Change region
                  <i
                    class="c-icon c-icon--chevron-medium-down c-icon--inherit undefined"
                    data-qa="slack_kit_icon"
                    type="chevron-medium-down"
                    aria-hidden="true"
                  >
                  </i>
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
};

export default SignupPage;
