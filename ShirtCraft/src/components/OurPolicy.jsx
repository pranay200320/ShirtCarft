import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure you import the AOS CSS
import { assets } from "../assets/assets";
import Title from "./Title"; // Ensure the path is correct

const OurPolicy = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  return (
    <div className="py-20 text-center">
      <div className="text-center text-3xl py-8">
        <Title text1="Our" text2="Policy" />
      </div>

      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-xs sm:text-sm md:text-base text-gray-700">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <img
            src={assets.exchange_icon}
            className="w-12 m-auto mb-5 hover:scale-150 transition-all duration-300"
            alt="Easy Exchange"
          />
          <p className="font-semibold hover:scale-150 transition-all duration-300">
            Easy Exchange Policy
          </p>
          <p className="text-gray-400 hover:scale-110 transition-all duration-300">
            We Offer Hassle-Free Exchange Policy
          </p>
        </div>
        <div data-aos="flip-left" data-aos-duration="1200">
          <img
            src={assets.quality_icon}
            className="w-12 m-auto mb-5 hover:scale-150 transition-all duration-300"
            alt="7 Days Return"
          />
          <p className="font-semibold hover:scale-150 transition-all duration-300">
            7 Days Return Policy
          </p>
          <p className="text-gray-400 capitalize hover:scale-110 transition-all duration-300">
            We Provide 7 Days Free Return Policy
          </p>
        </div>
        <div data-aos="fade-left" data-aos-duration="1400">
          <img
            src={assets.support_img}
            className="w-12 m-auto mb-5 hover:scale-150 transition-all duration-300"
            alt="Customer Support"
          />
          <p className="font-semibold hover:scale-150 transition-all duration-300">
            Best Customer Support
          </p>
          <p className="text-gray-400 capitalize hover:scale-110 transition-all duration-300">
            We Provide 24/7 Customer Support
          </p>
        </div>
      </div>
      {/* Repeat this block for additional slides if needed */}
    </div>
  );
};

export default OurPolicy;
