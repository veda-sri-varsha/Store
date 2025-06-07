import { useEffect, useState } from "react";
import img1 from "../../assets/Hero-1.jpg";
import img2 from "../../assets/Hero-2.jpg";
import img3 from "../../assets/Hero-3.jpg";

const slides = [
  {
    image: img1,
    label: "Weekend Discount",
    heading: "Shopping with us for\nbetter quality and the best price",
    description: "We have prepared special discounts for you on grocery products.\nDon’t miss these opportunities...",
    price: "$21.67",
    oldPrice: "$26.87",
    buttonText: "Shop Now"
  },
  {
    image: img2,
    label: "Weekend Discount",
    heading: "Get the best quality products at the lowest prices",
    description: "Get organic and healthy veggies at a much lower price. Limited period offer.",
    price: "$9.99",
    oldPrice: "$15.00",
    buttonText: "Explore"
  },
  {
    image: img3,
    label: "Weekend Discount",
    heading: "Up to 70% off\non kitchen essentials",
    description: "Upgrade your kitchen with branded tools & appliances. Don’t miss out.",
    price: "$39.99",
    oldPrice: "$89.99",
    buttonText: "Grab Deal"
  },
];
 
export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[450px] overflow-hidden font-sans">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />

          <div className="absolute top-1/4 left-8 max-w-md text-white bg-opacity-80 p-4 ">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm mb-2 inline-block  font-bold">
              {slide.label}
            </div>
            <h2 className="text-3xl font-extrabold leading-snug text-purple-900 whitespace-pre-line">
              {slide.heading}
            </h2>
            <p className="text-sm text-gray-800 mt-2 whitespace-pre-line">
              {slide.description}
            </p>

            <div className="flex items-center mt-4 space-x-4">
              <button className="bg-purple-700 text-white px-4 py-2 rounded font-semibold text-sm">
                {slide.buttonText}
              </button>
              <div className="text-red-600 text-lg font-bold">{slide.price}</div>
              <div className="text-gray-500 line-through text-sm">{slide.oldPrice}</div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
}