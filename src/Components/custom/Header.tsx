import TopBar from "./TopBar";
import { ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <>
      <TopBar />

      <div className="flex items-center justify-between px-16 py-2 border-b border-blue-100 font-sans">
        <div className="flex items-center space-x-6 text-sm font-medium text-gray-800">
          {[
            "Home",
            "Shop",
            "Fruits & Vegetables",
            "Beverages",
            "Blog",
            "Contact",
          ].map((label) => (
            <div
              key={label}
              className="flex items-center gap-1 cursor-pointer hover:text-[var(--color-primary)]

"
            >
              <span>{label}</span>
              {(label === "Home" || label === "Shop") && (
                <ChevronDown size={14} className="mt-[1px]" />
              )}{" "}
            </div>
          ))}
        </div>
        <div className="border-r border-dashed border-gray-300 h-5 mx-4"></div>
        <div className="flex items-center space-x-4 text-sm font-medium text-gray-800">
          <div className="flex items-center gap-1 cursor-pointer hover:text-[var(--color-primary)]">
            <span>Trending Products</span>
            <ChevronDown size={14} className="mt-[1px]" />
          </div>

          <div className="flex items-center space-x-1">
            <span className="text-red-600 font-semibold cursor-pointer hover:text-red-400">
              Almost Finished
            </span>
            <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-[1px] rounded-sm">
              SALE
            </span>
            <ChevronDown size={14} className="mt-[1px]" />
          </div>
        </div>
      </div>
    </>
  );
}
