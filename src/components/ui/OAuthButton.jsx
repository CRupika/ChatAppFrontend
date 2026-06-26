import { AUTH_ROUTES, API_BASE_URL } from "../../constants/apiConstants";

const OAUTH_CONFIG = {
  Google: {
    href: `${API_BASE_URL}${AUTH_ROUTES.GOOGLE_OAUTH}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908C16.618 14.015 17.64 11.707 17.64 9.2z" fill="#4285F4" />
        <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853" />
        <path d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05" />
        <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z" fill="#EA4335" />
      </svg>
    ),
  },
  Apple: {
    href: `${API_BASE_URL}${AUTH_ROUTES.APPLE_OAUTH}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
        <path d="M12.56 9.44c-.02-2.1 1.71-3.1 1.79-3.15-1.0-1.44-2.5-1.63-3.04-1.65-1.3-.13-2.53.77-3.19.77-.66 0-1.68-.75-2.77-.73C3.8 4.7 2.33 5.57 1.53 6.97c-1.6 2.76-.41 6.86 1.15 9.1.76 1.1 1.67 2.33 2.85 2.29 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.97.72 1.23-.02 2.01-1.11 2.76-2.22.87-1.27 1.22-2.5 1.24-2.57-.03-.02-2.37-.9-2.4-3.11zm-2.24-5.7c.63-.76 1.06-1.82.94-2.87-.91.04-2.01.6-2.66 1.36-.58.67-1.1 1.74-.96 2.77 1.01.08 2.04-.51 2.68-1.26z" />
      </svg>
    ),
  },
};

const OAuthButton = ({ provider }) => {
  const config = OAUTH_CONFIG[provider];

  const handleClick = () => {
    window.location.href = config.href;
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2.5 text-sm font-medium text-gray-800 bg-white hover:bg-gray-50 transition-colors"
      aria-label={`Continue with ${provider}`}
    >
      {config.icon}
      {provider}
    </button>
  );
};

export default OAuthButton;
