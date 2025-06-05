import { toast } from "react-hot-toast";

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email);

  if (!isValid) toast.error("Invalid email format");
  return isValid;
}

export function validatePassword(password: string): boolean {
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < minLength) {
    toast.error("Password must be at least 8 characters long");
    return false;
  }
  if (!hasUppercase) {
    toast.error("Password must contain at least one uppercase letter");
    return false;
  }
  if (!hasLowercase) {
    toast.error("Password must contain at least one lowercase letter");
    return false;
  }
  if (!hasDigit) {
    toast.error("Password must contain at least one digit");
    return false;
  }
  if (!hasSpecialChar) {
    toast.error("Password must contain at least one special character");
    return false;
  }

  return true;
}
