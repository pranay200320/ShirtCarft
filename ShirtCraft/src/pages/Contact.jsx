import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Contact Us Title */}
      <section className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-2xl font-bold">
          <Title text1={"CONTACT"} text2={"US"} />
        </h2>
      </section>

      {/* Contact Details Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 mt-6">
        <img
          src={assets.contact_img} // Replace with actual image
          alt="Office desk"
          className="w-full md:w-[450px] h-auto rounded-lg shadow-lg"
          data-aos="zoom-in"
        />
        <div className="text-left md:w-1/2 md:ml-10" data-aos="fade-left">
          <h3 className="font-semibold text-lg">OUR STORE</h3>
          <p className="text-gray-600 mt-2">
            54709 Williams Station <br />
            Suite 530, Washington, USA
          </p>
          <p className="text-gray-600 mt-2">
            Tel: (415)-555-0132 <br />
            Email: greatstudiox@gmail.com
          </p>

          <h3 className="mt-6 font-semibold text-lg">CAREERS AT FOREVER</h3>
          <p className="text-gray-600 mt-2">
            Learn more about our teams and job openings.
          </p>
          <button className="mt-4 px-4 py-2 border rounded-lg transition hover:bg-black hover:text-white">
            Explore Jobs
          </button>
        </div>
      </section>

      {/* Subscription Section */}
      <section
        className="text-center py-12 bg-white rounded-lg mt-12"
        data-aos="zoom-in"
      >
        <NewLetterBox />
      </section>
    </div>
  );
};

export default Contact;
