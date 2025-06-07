import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Search,
  User,
  Heart,
  ShoppingCart,
  MapPin,
  ChevronDown,
} from "lucide-react";

import Logo from "../../assets/logo.png";

const TopBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 63,
    hours: 15,
    minutes: 51,
    seconds: 7,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full font-sans">
      <div className="bg-primary text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-30 text-sm text-center">
          <span className="block md:inline">
            FREE delivery & 15% Discount for best 3 orders! Place your 1st order
            in
          </span>

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 font-bold mt-2 md:mt-0">
            <span>Until the end of the sale:</span>
            <div className="flex items-center gap-1.5">
              <div>{timeLeft.days.toString().padStart(2, "0")}</div>
              <span>days</span>
              <div>{timeLeft.hours.toString().padStart(2, "0")}</div>
              <span>hours</span>
              <div>{timeLeft.minutes.toString().padStart(2, "0")}</div>
              <span>minutes</span>
              <div className="flex items-center gap-[2px]">
                <div>{timeLeft.seconds.toString().padStart(2, "0")}</div>
                <span>Sec</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-sm text-xs text-[#6B7280] font-sans border border-[#e6e7eb] cursor-pointer">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-row flex-wrap justify-between items-center gap-4">
          <div className="flex flex-col sm:hidden w-full items-center gap-2 text-center">
            <span className="text-sm">
              We deliver every day from{" "}
              <span className="text-[#f25321] font-bold">7:00 to 23:00</span>
            </span>
            <Link to="/track" className="hover:text-primary">
              Order Tracking
            </Link>
          </div>

          <div className="hidden sm:flex flex-row flex-wrap items-center gap-4">
            <Link to="/about" className="hover:text-primary">
              About Us
            </Link>
            <Link to="/login" className="hover:text-primary">
              My Account
            </Link>
            <Link to="/wishlist" className="hover:text-primary">
              Wishlist
            </Link>
            <span className="text-sm">
              We deliver every day from{" "}
              <span className="text-[#f25321] font-bold">7:00 to 23:00</span>
            </span>
          </div>

          <div className="hidden sm:flex flex-row items-center gap-4">
            <div className="flex items-center gap-1">
              <span>English</span>
              <ChevronDown size={14} className="mt-[1px]" />
            </div>
            <div className="flex items-center gap-1">
              <span>USD</span>
              <ChevronDown size={14} className="mt-[1px]" />
            </div>
            <Link to="/track" className="hover:text-purple-600">
              Order Tracking
            </Link>
          </div>
        </div>
      </header>

      <header className="bg-white shadow-sm cursor-pointer">
        <div className="max-w-7xl mx-auto px-3 py-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Link to="/" className="flex items-center gap-2 cursor-pointer">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img
                      src={Logo}
                      alt="Logo"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <span className="text-xl font-bold text-gray-800">
                    JinStore
                  </span>
                </Link>
              </div>
              <div className="hidden md:flex items-start gap-1 text-sm text-gray-700 ml-4">
                <MapPin className="w-5 h-5 mt-1" />
                <div className="flex flex-col leading-tight">
                  <span>Deliver to</span>
                  <span className="font-semibold">all</span>
                </div>
              </div>
            </div>

            <div className="flex-1 mx-6 hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, categories or brands..."
                  className="w-full px-4 py-2 pr-12 rounded-lg bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="button"
                  aria-label="Search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600"
                >
                  <Search size={20} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <Link
                to="/login"
                className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 text-sm"
              >
                <User size={20} />
                <div className="flex flex-col">
                  <span className="text-sm">Sign In</span>
                  <span className="text-xs font-semibold">Account</span>
                </div>
              </Link>
              <button className="relative text-gray-600 hover:text-purple-600 cursor-pointer">
                <Heart size={20} />
                <span className="absolute -top-2 left-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="relative text-gray-600 hover:text-purple-600 cursor-pointer">
                <ShoppingCart size={20} />
                <span className="absolute -top-2.5 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>

          <div className="mt-4 md:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pr-12 rounded-lg bg-gray-100"
              />
              <button
                type="button"
                aria-label="Search"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600"
              >
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TopBar;
