import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductsItem from "./ProductsItem";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const BestSeller = () => {
  const { products, currency } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));

    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of animation
      easing: "ease-in-out", // Easing effect
      once: true, // Animation happens once when visible
    });
  }, [products]);

  return (
    <>
      <div className="my-10">
        <div className="text-center text-3xl py-8">
          <Title text1={"BEST"} text2={"SELLERS"} />
          <p className="p-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {bestSeller.map((item, index) => (
            <div key={index} data-aos="fade-up">
              {" "}
              {/* Add AOS animation */}
              <ProductsItem
                currency={currency}
                id={item._id}
                name={item.name}
                image={item.image[0]}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BestSeller;
