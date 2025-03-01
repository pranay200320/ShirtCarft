import { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductsItem from "./ProductsItem";

const LetestCollection = () => {
  const { products, currency } = useContext(ShopContext);
  //   console.log(products);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <>
      <div className="my-10">
        <div className="text-center py-8 text-3xl">
          <Title text1={"LATEST"} text2={"COLLECTIONS"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
        </div>
        {/* Rendering Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {latestProducts.map((item, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up" // Animation when it scrolls into view
                data-aos-delay={index * 100} // Delay each item animation by a little bit
              >
                <ProductsItem
                  currency={currency}
                  id={item._id}
                  image={item.image[0]}
                  name={item.name}
                  price={item.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LetestCollection;
