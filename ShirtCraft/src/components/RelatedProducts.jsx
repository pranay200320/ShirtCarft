import { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductsItem from "./ProductsItem";

const RelatedProducts = ({ category, subCategory }) => {
  const { products, currency } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    if (products.length > 0) {
      let productCopy = products.slice();
      productCopy = productCopy.filter((item) => category === item.category);
      productCopy = productCopy.filter(
        (item) => subCategory === item.subCategory
      );
      setRelated(productCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-24" data-aos="fade-up">
      <div className="text-3xl text-center py-2" data-aos="zoom-in">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {related.map((item, index) => (
          <div key={index} data-aos="flip-left">
            <ProductsItem
              id={item._id}
              name={item.name}
              image={item.image[0]}
              price={item.price}
              currency={currency}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
