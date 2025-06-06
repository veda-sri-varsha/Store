import {Mail} from "lucide-react";


export default function NewsLetter() {
  return (
     <footer className="bg-[#F3F4F6] border-t border-none">
      <div className="py-3 px-4 mb-8 m-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-20">
          <div className="md:w-1/2 mr-20">
            <h3 className="font-semibold mb-2 text-gray-800 ">
              Join our newsletter for £10 offs
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Register now to get the latest updates on promotions & <br />
              coupons. Don’t worry, we won’t spam you!
            </p>
          </div>

          <div className="md:w-1/2">
            <form className="flex w-full max-w-md">
              <div className="relative flex-grow">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <Mail className="w-5 h-5" />
                </span>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="pl-10 pr-3 p-3 border border-gray-300 rounded-l-md focus:outline-none w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-primary cursor-pointer text-white px-5 py-2 rounded-r-md hover:bg-primary"
              >
                SEND
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-3">
              By subscribing, you agree to our{" "}
              <a href="#" className="text-purple-600 hover:text-purple-800">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-purple-600 hover:text-purple-800">
                Privacy & Cookies Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      </footer>
  )
}
