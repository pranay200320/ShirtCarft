import React from "react";
import Hero from "../components/Hero";
import LetestCollection from "../components/LetestCollection";
import ProductsItem from "../components/ProductsItem";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsLetterBox from "../components/NewsLetterBox";

const Home = () => {
  return (
    <>
      <Hero />
      <LetestCollection />
      <ProductsItem />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </>
  );
};

export default Home;
