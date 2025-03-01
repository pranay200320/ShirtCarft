import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <div className="pt-[90px] px-4 sm:px-[4vw] md:px-[7vw] lg:px-[9vw]">
        <NavBar />
        {/* we can add this navbar outside because we can see navbaar in all pages*/}

        <SearchBar />
        <Routes>
          {/* we can define the path and element property here */}
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* use Dynamic Routing ':' */}
          <Route path="/product/:ProductId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/order/:id" element={<Orders />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
