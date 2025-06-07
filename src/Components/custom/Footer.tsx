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
  // const socialIcons = [
  //   { Icon: Facebook, color: "text-facebook" },
  //   { Icon: Twitter, color: "text-twitter" },
  //   { Icon: Instagram, color: "text-instagram" },
  //   { Icon: Linkedin, color: "text-linkedin" },
  // ];

  return (
    <>
      <NewsLetter />
      <footer className="w-full bg-[#F3F4F6] font-[var(--font-sans)]">
        <div className="max-w-7xl mx-auto px-4 border-t border-t-[#D1D5DB] pt-8 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
            <div className="text-foreground">
              <h4 className="font-semibold mb-3 text-base">
                Do You Need Help?
              </h4>

              <p className="text-sm text-gray-500  mb-8">
                Autoseligen syr. Nek diarask fröbomba. Pressa fåmoska.
              </p>
              <div className="space-y-4 m-2">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-700 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">
                      Monday–Friday: 08am–9pm
                    </p>
                    <span className="font-bold text-base tracking-wide text-gray-900">
                      0 800 300-353
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-700 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">
                      Need help with your order?
                    </p>
                    <span className="text-sm font-semibold text-gray-900">
                      info@example.com
                    </span>
                  </div>
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
              <h4 className="font-semibold mb-4 text-gray-900">
                Download Our App
              </h4>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="flex items-center px-0 py-0 hover:opacity-90 transition"
                  >
                    <img
                      src={PlaystoreImg}
                      alt="Get it on Google Play"
                      className="h-10 w-auto object-contain"
                    />
                  </a>
                  <span className="text-gray-500 text-sm font-sans">
                    Download App Get -10% Discount
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="flex items-center px-0 py-0 hover:opacity-90 transition"
                  >
                    <img
                      src={AppstoreImg}
                      alt="Download on the App Store"
                      className="h-10 w-auto object-contain"
                    />
                  </a>
                  <span className="text-gray-500 text-sm font-sans">
                    Download App Get -20% Discount
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="font-sans text-sm  text-gray-800 mb-3">
                  Follow us on social media
                </h5>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white flex items-center justify-center rounded shadow hover:bg-gray-100 transition">
                    <Facebook className="w-5 h-5 text-facebook" />
                  </div>

                  <div className="w-10 h-10 bg-white flex items-center justify-center rounded shadow hover:bg-gray-100 transition">
                    <Twitter className="w-5 h-5 text-twitter" />
                  </div>

                  <div className="w-10 h-10 bg-white flex items-center justify-center rounded shadow hover:bg-gray-100 transition">
                    <Linkedin className="w-5 h-5 text-[var(--color-linkedin)]" />
                  </div>

                  <div className="w-10 h-10 bg-white flex items-center justify-center rounded shadow hover:bg-gray-100 transition">
                    <Instagram className="w-5 h-5 text-instagram" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-t-[#D1D5DB] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <div>
              Copyright 2024 © Jinstore WooCommerce WordPress Theme. All right
              reserved. Powered by{" "}
              <a href="#" className="font-semibold text-[#634C9F]">
                BlackRise Themes.
              </a>
              .
            </div>
            <div className="flex gap-4 underline font-semibold text-center">
              <Link to="#">Terms and Conditions</Link>
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Order Tracking</Link>
            </div>
          </div>

          <div className="gap-4 mt-4 items-center hidden md:flex">
            {[
              { src: "/src/assets/visa.png", alt: "Visa" },
              { src: "/src/assets/Mastercard-logo.png", alt: "Mastercard" },
              { src: "/src/assets/paypal1.png", alt: "PayPal", scale: true },
              { src: "/src/assets/skill.jpeg", alt: "Skrill" },
              { src: "/src/assets/Klarna.png", alt: "Klarna" },
            ].map(({ src, alt, scale }, index) => (
              <div
                key={index}
                className="h-10 w-16 flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={src}
                  alt={alt}
                  className={`max-h-full max-w-full object-contain ${
                    scale ? "scale-110" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
