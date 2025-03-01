import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const NewLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation will happen only once
    });
  }, []);

  return (
    <div className="text-center" data-aos="fade-up">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe Now & Get 20% Off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
        data-aos="fade-up"
      >
        <input
          type="email"
          className="w-full sm:flex-1 outline-none"
          placeholder="Enter Your Email"
          required
        />
        <button
          type="submit"
          onClick={onSubmitHandler}
          className="bg-black text-white text-xs px-10 py-4 "
          data-aos="fade-up"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewLetterBox;
