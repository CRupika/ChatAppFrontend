import { API_BASE_URL, AUTH_ROUTES } from "../constants/apiConstants";

export const signupService = async ({ email, username, full_name, password }) => {
  const response = await fetch(`${API_BASE_URL}${AUTH_ROUTES.SIGNUP}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // allows HttpOnly cookie set by setTokenCookie() to be received
    body: JSON.stringify({ email, username, full_name, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Signup failed. Please try again.");
  }

  return data;
};
