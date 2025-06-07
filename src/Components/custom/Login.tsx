import { useState } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Link, useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { validateEmail, validatePassword } from "../validators";
import { Eye, EyeOff } from "lucide-react";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isEmailValid = validateEmail(username);
    const isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid) {
      toast.success("Login successful!");
      console.log({ username, password, rememberMe });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      toast.error("Invalid email or password");
    }
    console.log("Logged in");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-8 border-none rounded">
        <div className="flex space-x-4 mb-4 justify-center">
          <Link to="/">
            <h2 className="text-lg font-semibold text-black cursor-pointer">
              Login
            </h2>
          </Link>
          <Link to="/register">
            <h2 className="text-lg font-medium text-gray-400 cursor-pointer">
              Register
            </h2>
          </Link>
        </div>

        <p className="text-center font-[500] text-sm text-[#030712] mb-4 sm:whitespace-nowrap whitespace-normal sm:text-[13px] px-3 sm:px-0 leading-relaxed">
          If you have an account, sign in with your username or email address.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Username or email address *
            </label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 "
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember me
            </label>
            <a href="#" className="text-[#1D4ED8]">
              Lost your password?
            </a>
          </div>

          <Button type="submit" className="w-full text-center">
            Log in
          </Button>
        </form>
      </div>
    </div>
  );
}
