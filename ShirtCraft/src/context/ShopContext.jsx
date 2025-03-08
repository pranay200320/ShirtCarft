import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Plase Enter The Size");
      return;
    }
    // structuredClone(cartItems) creates a cartItems so we can modify it without affecting the original state immediately.
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};

      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
  };

  const getcartCount = () => {
    let totalCount = 0;

    // first for in loop itret the item
    for (const items in cartItems) {
      // secound for in loop is itret the item size
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  };
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };
  const getcartAmount = () => {
    let totalAmount = 0;

    console.log(totalAmount);
    for (const items in cartItems) {
      const itemInfo = products.find((product) => product._id == items); // Ensure type compatibility with `==`
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }

    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getcartCount,
    updateQuantity,
    getcartAmount,
  };
  //cheak the cart page
  useEffect(() => {
    // console.log(cartItems);
  }, [cartItems]);
  return (
    <>
      <ShopContext.Provider value={value}>
        {/* Think of props.children as a placeholder for anything you put between the opening and closing tags of a component. The component doesn’t need to know what the children are beforehand—it simply renders whatever is passed to it. */}
        {children}
      </ShopContext.Provider>
    </>
  );
};
export default ShopContextProvider;
