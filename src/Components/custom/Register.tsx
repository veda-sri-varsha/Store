import { useState } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Link } from "react-router";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router";

import {
  validateUsername,
  validateEmail,
  validatePassword,
} from "../validators";

export function Register() {
  const [role, setRole] = useState("customer");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isUsernameValid = validateUsername(username);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (isUsernameValid && isEmailValid && isPasswordValid) {
      toast.success("Registered successfully! 🎉");
      navigate("/");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      toast.error("Please enter valid details.");
    }
  };

  return (
    <div className="max-w-md mx-auto px-6 py-5 bg-white rounded-lg m-10">
      <div className="mb-6 flex justify-center gap-4 text-lg font-semibold">
        <Link to="/login">
          <span className="text-gray-400">Login</span>
        </Link>
        <span className="text-primary border-b-2 border-primary pb-1">
          Register
        </span>
      </div>

      <p className="text-sm text-gray-600 mb-6 text-center">
        There are many advantages to creating an account: faster checkout,
        shipment tracking, and more.
      </p>

      <form onSubmit={handleSubmit} className="space-y-2 text-left">
        <div>
          <label className="text-sm font-medium">Username *</label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">Email address *</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password *</label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev: boolean) => !prev)}
              className="absolute text-gray-400 right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="space-y-2 mt-2 text-[14px]">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="customer"
              checked={role === "customer"}
              onChange={() => setRole("customer")}
              className="accent-primary"
            />
            I am a customer
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="vendor"
              checked={role === "vendor"}
              onChange={() => setRole("vendor")}
              className="accent-primary"
            />
            I am a vendor
          </label>
        </div>

        <p className="text-xs text-gray-500 mb-1">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our{" "}
          <a href="#" className="text-purple-900">
            privacy policy
          </a>
          .
        </p>

        <div className="pt-4">
          <Button type="submit" className="w-full">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
