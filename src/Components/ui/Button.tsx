// use switch case 

import type{ ButtonHTMLAttributes } from "react";

export function Button({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="bg-primary text-white py-2 px-4 rounded hover:bg-primary transition cursor-pointer w-full"
    >
      {children}
    </button>
  );
}
