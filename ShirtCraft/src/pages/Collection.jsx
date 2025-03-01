import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductsItem from "../components/ProductsItem";
import AOS from "aos";
import "aos/dist/aos.css";

const Collection = () => {
  const { products, currency, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [fillterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for animations
  }, []);
  const togglecategory = (e) => {
    // .includes(e.target.value) checks if that value is already in the category array
    if (category.includes(e.target.value)) {
      // If the value is not in the list, we add it to the category array.
      // .filter((item) => item !== e.target.value) creates a new array that excludes the clicked item.
      // setCategory updates the category array with this new list.
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      //If the value is not in the list, we add it to the category array.
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubcategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyfilter = () => {
    // The .slice() method ensures we’re not modifying the original products array directly.
    let productsCopy = products.slice();
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    // category.length > 0 checks if there is at least one category selected by the user.
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };
  const sortProduct = () => {
    // The .slice() method ensures we’re not modifying the original products array directly.
    let fpCopy = fillterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyfilter();
        break;
    }
  };

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(() => {
    applyfilter();
  }, [category, subCategory, search, showSearch]);
  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
      {/* Filter Option */}
      <div className="min-w-60" data-aos="fade-right">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-3">
          FILTERS
          <img
            onClick={() => setShowFilter(!showFilter)}
            className={`h-3  md:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Category Filter */}
        {/* use hidden block for small screeen */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium ">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onChange={togglecategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={togglecategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kids"}
                onChange={togglecategory}
              />
              Kid
            </p>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium ">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubcategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubcategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubcategory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 " data-aos="fade-up">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS "} />
          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2 rounded-lg hover:border-gray-600 hover:rounded-xl transition-all duration-300"
          >
            <option value="relavent">Sort By : Relavent</option>
            <option value="low-high">Sort By : Low To High</option>
            <option value="high-low">Sort By : High To Low</option>
          </select>
        </div>
        {/* Map Products */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {fillterProducts.map((item, index) => (
            <div data-aos="fade-up" data-aos-delay={index * 100} key={index}>
              <ProductsItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image[0]}
                currency={currency}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Collection;
