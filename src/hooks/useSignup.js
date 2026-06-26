import { useState } from "react";
import { signupService } from "../services/authService";
import { isValidEmail, isPersonalEmail, extractUsername } from "../utils/emailUtils";
import { saveToken } from "../utils/tokenUtils";

const useSignup = () => {
  const [email, setEmail] = useState("");
  const [captchaDone, setCaptchaDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", message: string }

  // Derived state
  const emailValid = isValidEmail(email);
  const showWorkEmailWarning = emailValid && isPersonalEmail(email);
  const canSubmit = emailValid && captchaDone && !loading;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setStatus(null);
  };

  const handleClearEmail = () => {
    setEmail("");
    setStatus(null);
  };

  const handleCaptchaToggle = () => {
    setCaptchaDone((prev) => !prev);
  };

  const handleSubmit = async () => {
    if (!canSubmit) return;

    setLoading(true);
    setStatus(null);

    try {
      // Matches your AuthController.signup body destructuring:
      // const { email, username, full_name, password } = req.body;
      const data = await signupService({
        email,
        username: extractUsername(email),
        full_name: "",   // collected in a later step (Slack-style multi-step flow)
        password: "",    // collected in a later step or via OAuth
      });

      // Token already set as HttpOnly cookie by your setTokenCookie().
      // Optionally mirror it in sessionStorage for Authorization headers.
      if (data.data?.token) {
        saveToken(data.data.token);
      }

      // Route based on requires_verification from your backend response
      if (data.data?.requires_verification) {
        setStatus({
          type: "success",
          message: `Check your inbox at ${email} — we sent you a verification link.`,
          verificationToken: data.data.verification_token,
        });
        // navigate("/verify-email", { state: { token: data.data.verification_token } });
      } else {
        setStatus({ type: "success", message: "Account created! Redirecting to your workspace…" });
        // navigate("/workspace");
      }
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    captchaDone,
    loading,
    status,
    emailValid,
    showWorkEmailWarning,
    canSubmit,
    handleEmailChange,
    handleClearEmail,
    handleCaptchaToggle,
    handleSubmit,
  };
};

export default useSignup;
