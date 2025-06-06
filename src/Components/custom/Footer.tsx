import { Link } from "react-router";
import NewsLetter from "./NewsLetter";
import PlaystoreImg from "../../assets/Playstore.png";
import AppstoreImg from "../../assets/Applestore.png";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const socialIcons = [
    { Icon: Facebook, color: "text-facebook" },
    { Icon: Twitter, color: "text-twitter" },
    { Icon: Instagram, color: "text-instagram" },
    { Icon: Linkedin, color: "text-linkedin" },
  ];

  return (
    <>
      <NewsLetter />
      <footer className="w-full bg-[#F3F4F6] font-sans">
        <div className="max-w-7xl mx-auto px-4 border-t border-t-[#D1D5DB] pt-8 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-3">Do You Need Help?</h4>
              <p className="text-sm text-gray-600 mb-4">
                Autoseligen syr. Nek diarask fröbomba. Nör
                <br />
                antipol kynoda nynat. Pressa fåmoska.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-semibold">0 800 300-353</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@example.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Make Money with Us</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Sell on Grogin",
                  "Sell Your Services on Grogin",
                  "Sell on Grogin Business",
                  "Sell Your Apps on Grogin",
                  "Become an Affiliate",
                  "Advertise Your Products",
                  "Sell-Publish with Us",
                  "Become an Blowwe Vendor",
                ].map((text, index) => (
                  <li key={index}>
                    <Link to="#">{text}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Let Us Help You</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Accessibility Statement",
                  "Your Orders",
                  "Returns & Replacements",
                  "Shipping Rates & Policies",
                  "Refund and Returns Policy",
                  "Privacy Policy",
                  "Terms and Conditions",
                  "Cookie Settings",
                  "Help Center",
                ].map((text, index) => (
                  <li key={index}>
                    <Link to="#">{text}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Get to Know Us</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Careers for Grogin",
                  "About Grogin",
                  "Inverstor Relations",
                  "Grogin Devices",
                  "Customer reviews",
                  "Social Responsibility",
                  "Store Locations",
                ].map((text, index) => (
                  <li key={index}>
                    <Link to="#">{text}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Download Our App</h4>
              <div className="-space-y-2">
                <a
                  href="#"
                  className="flex items-center text-white px-4 py-3 rounded-lg hover:opacity-90 transition"
                >
                  <img
                    src={PlaystoreImg}
                    alt="Get it on Google Play"
                    className="h-10 w-auto"
                  />
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 text-white px-4 py-3 rounded-lg hover:opacity-90 transition"
                >
                  <img
                    src={AppstoreImg}
                    alt="Download on the App Store"
                    className="h-10 w-auto"
                  />
                </a>
              </div>

              <div className="mt-6">
                <h5 className="font-semibold text-lg mb-3">
                  Follow us on social media
                </h5>
                <div className="flex gap-3">
                  {socialIcons.map(({ Icon, color }, index) => (
                    <a
                      key={index}
                      href="#"
                      className="p-2 border border-gray-300 rounded hover:bg-gray-300 transition"
                      aria-label={`Follow us on ${Icon.name}`}
                    >
                      <Icon className={`w-5 h-5 ${color}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-t-[#D1D5DB] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <div>
              Copyright 2024 © Jinstore WooCommerce WordPress Theme. All right
              reserved. Powered by{" "}
              <a href="#" className="text-[#634c9f] font-semibold">
                BlackRise Themes.
              </a>
              .
            </div>
            <div className="flex gap-4 underline font-semibold">
              <Link to="#">Terms and Conditions</Link>
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Order Tracking</Link>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            {[
              {
                name: "Visa",
                url: "data:image/png;base64,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",
              },
              {
                name: "Mastercard",
                url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
              },
              {
                name: "PayPal",
                url: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
              },
              {
                name: "Skrill",
                url: "data:image/jpeg;base64,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",
              },
              {
                name: "Klarna",
                url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Klarna_Logo_black.svg",
              },
            ].map(({ name, url }, i) => (
              <img key={i} src={url} alt={name} className="h-6 w-auto" />
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
