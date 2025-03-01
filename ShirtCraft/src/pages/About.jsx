import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewLetterBox from "../components/NewsLetterBox";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* About Us Section */}
      <section className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-2xl font-bold">
          <Title text1={"ABOUT"} text2={"US"} />
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12 mt-6">
          <img
            src={assets.about_img}
            alt="Fashion items"
            className="w-full md:w-[500px] h-auto rounded-lg shadow-lg"
            data-aos="zoom-in"
          />
          <div className="text-left md:w-1/2 md:ml-10" data-aos="fade-left">
            <p className="text-gray-600 leading-relaxed">
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple vision: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Since our inception, we’ve worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>
            <h3 className="mt-6 font-semibold text-lg">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We are dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-2xl font-bold">
          WHY <span className="text-gray-700">CHOOSE US</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div
            className="p-6 border rounded-lg shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            data-aos="fade-right"
          >
            <h3 className="font-semibold text-lg">QUALITY ASSURANCE:</h3>
            <p className="text-gray-600 mt-2">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div
            className="p-6 border rounded-lg shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            data-aos="fade-up"
          >
            <h3 className="font-semibold text-lg">CONVENIENCE:</h3>
            <p className="text-gray-600 mt-2">
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </div>
          <div
            className="p-6 border rounded-lg shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            data-aos="fade-left"
          >
            <h3 className="font-semibold text-lg">
              EXCEPTIONAL CUSTOMER SERVICE:
            </h3>
            <p className="text-gray-600 mt-2">
              Our team of dedicated professionals is here to assist you every
              step of the way, ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section
        className="text-center py-12 bg-white rounded-lg"
        data-aos="zoom-in"
      >
        <NewLetterBox />
      </section>
    </div>
  );
};

export default About;
