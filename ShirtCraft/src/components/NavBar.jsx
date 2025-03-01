import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { motion } from "framer-motion";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const { showSearch, setShowSearch, getcartCount } = useContext(ShopContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // window.scrollY gives the number of pixels the page has been scrolled vertically.
      if (window.scrollY > 0) {
        // If window.scrollY > 0, it means the user has scrolled down, so we set setIsScrolled(true).
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    //    Adding the Scroll Event Listener
    window.addEventListener("scroll", handleScroll);

    // The browser keeps listening for scroll events even if the component is no longer visible.
    // If we don’t remove it, the browser will still run handleScroll in the background,
    //  which can slow down the app and cause problems.

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full flex items-center justify-between py-5 px-5 font-medium bg-white transition-all duration-500 z-50   ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
        <img src={assets.logo} className="w-36" alt="Logo" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {["/", "/collection", "/about", "/contact"].map((path, index) => (
          <NavLink
            onClick={() => scrollTo({ top: 0 })}
            key={index}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${
                isActive ? "font-semibold text-black" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                {/* path.replace("/", "") removes the / from the URL path. */}
                {/* || "HOME" means if the path is empty, it will show "HOME". */}
                <p>{path.replace("/", "").toUpperCase() || "HOME"}</p>
                <motion.hr
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-2/3 border-none h-[1.5px] bg-gray-700"
                />
              </>
            )}
          </NavLink>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => {
            setShowSearch(true);
            navigate("/collection");
            scrollTo({ top: 0, left: 0 });
          }}
          src={assets.search_icon}
          alt=""
          className="w-5 cursor-pointer"
        />
        <div className="group relative">
          <img src={assets.profile_icon} alt="" className="w-5" />
          <div className="group-hover:block hidden absolute  right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-xl">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getcartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt=""
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 bg-white transition-all min-h-screen z-50  ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 bg-white">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="py-2 pl-1 border"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className="py-2 pl-1 border"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="py-2 pl-1 border"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="py-2 pl-1 border"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
