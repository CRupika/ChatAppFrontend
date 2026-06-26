const LoadingSpinner = () => (
  <svg
    className="animate-spin w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
    <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
  </svg>
);

const ContinueButton = ({ canSubmit, loading, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!canSubmit}
      aria-disabled={!canSubmit}
      className={`w-full py-3 rounded-md text-white text-base font-semibold transition-all
        ${
          canSubmit
            ? "bg-[#4A154B] hover:bg-[#3d1140] active:scale-[0.98]"
            : "bg-[#4A154B]/40 cursor-not-allowed"
        }`}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <LoadingSpinner />
          Signing up…
        </span>
      ) : (
        "Continue"
      )}
    </button>
  );
};

export default ContinueButton;
