/**
 * CaptchaBox — simulates reCAPTCHA checkbox UI.
 *
 * In production, replace this component's internals with:
 *   import ReCAPTCHA from "react-google-recaptcha";
 *   <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={onToggle} />
 */

const CaptchaBox = ({ checked, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => e.key === " " && onToggle()}
      className="flex items-center justify-between border border-gray-300 rounded-md px-4 py-3 bg-gray-50 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#4A154B]/30"
    >
      {/* Left: checkbox + label */}
      <div className="flex items-center gap-3">
        <div
          className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0
            ${checked ? "border-[#4A154B] bg-white" : "border-gray-400 bg-white"}`}
        >
          {checked && (
            <svg className="w-4 h-4" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <polyline
                points="2,7 6,11 12,3"
                stroke="#4CAF50"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <span className="text-sm text-gray-800">I'm not a robot</span>
      </div>

      {/* Right: reCAPTCHA branding */}
      <div className="text-center text-[10px] text-gray-400 leading-tight" aria-hidden="true">
        <div className="text-base">🔒</div>
        <div>reCAPTCHA</div>
        <div>Privacy · Terms</div>
      </div>
    </div>
  );
};

export default CaptchaBox;
