import { EMAIL_REGEX, PERSONAL_EMAIL_DOMAINS } from "../constants/emailConstants";

export const isValidEmail = (email) => {
  return EMAIL_REGEX.test(email);
};

export const isPersonalEmail = (email) => {
  const domain = email.split("@")[1]?.toLowerCase() || "";
  return PERSONAL_EMAIL_DOMAINS.includes(domain);
};

export const extractUsername = (email) => {
  return email.split("@")[0] || "";
};
