export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const AUTH_ROUTES = {
  SIGNUP: "/api/auth/signup",
  SIGNIN: "/api/auth/signin",
  GOOGLE_OAUTH: "/api/auth/google",
  APPLE_OAUTH: "/api/auth/apple",
  VERIFY_EMAIL: "/api/auth/verify-email",
};

export const APP_ROUTES = {
  HOME: "/",
  SIGNUP: "/signup",
  WORKSPACE_SIGNIN: "/workspace-signin",
  VERIFY_EMAIL: "/verify-email",
  WORKSPACE: "/workspace",
  SIGNIN: "/signin",
  CHAT  : "/chat"
};
