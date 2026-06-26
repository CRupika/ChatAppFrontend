const CheckIcon = () => (
  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#4A154B] flex items-center justify-center">
    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <polyline
        points="2,6 5,9 10,3"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const WorkEmailWarning = ({ onChangClick }) => (
  <div className="bg-yellow-50 border border-yellow-200 rounded-md px-4 py-3 text-sm text-gray-800 leading-relaxed">
    <span className="font-semibold">Using your work email</span> (if you have one) will make it
    easier for coworkers to join you on Slack.{" "}
    <button
      type="button"
      onClick={onChangClick}
      className="text-[#4A154B] font-semibold hover:underline"
    >
      Change
    </button>
  </div>
);

const EmailInput = ({ email, emailValid, showWorkEmailWarning, onChange, onClear }) => {
  return (
    <>
      {/* Email field */}
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={onChange}
          placeholder="name@work-email.com"
          autoComplete="email"
          aria-label="Work email address"
          className={`w-full border rounded-md px-4 py-3 text-sm text-gray-900 outline-none pr-11 transition-shadow
            ${
              emailValid
                ? "border-[#4A154B] ring-2 ring-[#4A154B]/20"
                : "border-gray-300 focus:border-[#4A154B] focus:ring-2 focus:ring-[#4A154B]/20"
            }`}
        />

        {/* Animated checkmark — shown once email passes validation */}
        {emailValid && <CheckIcon />}
      </div>

      {/* Yellow nudge banner — shown only for personal domains */}
      {showWorkEmailWarning && <WorkEmailWarning onChangClick={onClear} />}
    </>
  );
};

export default EmailInput;
