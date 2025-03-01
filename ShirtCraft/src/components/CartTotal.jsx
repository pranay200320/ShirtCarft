import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getcartAmount } = useContext(ShopContext);
  return (
    <>
      <div className="w-full">
        <div className="text-2xl">
          <Title text1={"CART"} text2={"TOTALS"} />
        </div>
        <div className="flex flex-col gap-2 mt-2 text-sm">
          <div className="flex justify-between items-center mt-5 ">
            <p>SubTotal</p>
            <p>
              {currency}
              {getcartAmount()}.00
            </p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Shooping Fee</p>
            <p>
              {currency} {delivery_fee}
            </p>
          </div>
          <hr />
          <div className="flex justify-between">
            <b>Total</b>
            <b>
              {currency}
              {getcartAmount() === 0 ? 0 : getcartAmount() + delivery_fee}
            </b>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
