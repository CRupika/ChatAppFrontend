// import useSignup from "../../hooks/useSignup";
// import EmailInput from "./EmailInput";
// import CaptchaBox from "./CaptchaBox";
// import ContinueButton from "./ContinueButton";
// import OAuthButton from "../ui/OAuthButton";
// import StatusMessage from "../ui/StatusMessage";

// const OrDivider = () => (
//   <div className="flex items-center gap-3 text-gray-400 text-xs" aria-hidden="true">
//     <div className="flex-1 h-px bg-gray-200" />
//     OR
//     <div className="flex-1 h-px bg-gray-200" />
//   </div>
// );

// const LegalText = () => (
//   <p className="text-xs text-gray-400 text-center leading-relaxed">
//     By continuing, you're agreeing to our{" "}
//     <a href="/legal/msa" className="text-[#4A154B] hover:underline">Main Services Agreement</a>,{" "}
//     <a href="/legal/tos" className="text-[#4A154B] hover:underline">User Terms of Service</a>, and{" "}
//     <a href="/legal/supplemental" className="text-[#4A154B] hover:underline">Slack Supplemental Terms</a>.
//     Additional disclosures are available in our{" "}
//     <a href="/legal/privacy" className="text-[#4A154B] hover:underline">Privacy Policy</a> and{" "}
//     <a href="/legal/cookies" className="text-[#4A154B] hover:underline">Cookie Policy</a>.
//   </p>
// );

// const SignupForm = () => {
//   const {
//     email,
//     captchaDone,
//     loading,
//     status,
//     emailValid,
//     showWorkEmailWarning,
//     canSubmit,
//     handleEmailChange,
//     handleClearEmail,
//     handleCaptchaToggle,
//     handleSubmit,
//   } = useSignup();

//   return (
//     <div className="w-full max-w-sm flex flex-col gap-3">

//       {/* Email field + warning banner */}
//       <EmailInput
//         email={email}
//         emailValid={emailValid}
//         showWorkEmailWarning={showWorkEmailWarning}
//         onChange={handleEmailChange}
//         onClear={handleClearEmail}
//       />

//       {/* reCAPTCHA */}
//       <CaptchaBox checked={captchaDone} onToggle={handleCaptchaToggle} />

//       {/* API success / error message */}
//       <StatusMessage status={status} />

//       {/* Continue — disabled until valid email + CAPTCHA */}
//       <ContinueButton canSubmit={canSubmit} loading={loading} onClick={handleSubmit} />

//       <OrDivider />

//       {/* OAuth options */}
//       <div className="flex gap-3">
//         <OAuthButton provider="Google" />
//         <OAuthButton provider="Apple" />
//       </div>

//       <LegalText />

//       <p className="text-sm text-gray-500 text-center">
//         Already using Slack?{" "}
//         <a href="/signin" className="text-[#4A154B] font-semibold hover:underline">
//           Sign in to an existing workspace
//         </a>
//       </p>
//     </div>
//   );
// };

// export default SignupForm;

