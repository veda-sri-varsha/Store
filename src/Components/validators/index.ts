import { toast } from "react-hot-toast";

export function validateUsername(username: string): boolean {
  if (!username.trim()) {
    toast.error("Username is required");
    return false;
  }

  if (username.length < 3) {
    toast.error("Username must be at least 3 characters");
    return false;
  }

  return true;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.trim()) {
    toast.error("Email is required");
    return false;
  }

  if (!emailRegex.test(email)) {
    toast.error("Invalid email format");
    return false;
  }

  return true;
}

export function validatePassword(password: string): boolean {
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  let isValid = true;

  if (!password) {
    toast.error("Password is required");
    return false;
  }

  if (password.length < minLength) {
    toast.error("Password must be at least 8 characters long");
    isValid = false;
  }
  if (!hasUppercase) {
    toast.error("Password must include an uppercase letter");
    isValid = false;
  }
  if (!hasLowercase) {
    toast.error("Password must include a lowercase letter");
    isValid = false;
  }
  if (!hasDigit) {
    toast.error("Password must include a digit");
    isValid = false;
  }
  if (!hasSpecialChar) {
    toast.error("Password must include a special character");
    isValid = false;
  }

  return isValid;
}
