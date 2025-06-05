import { useState } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Link } from "react-router";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, password, rememberMe });
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

        <p className="mb-6 text-center font-[500] text-[13px] text-[#030712] whitespace-nowrap">
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
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
