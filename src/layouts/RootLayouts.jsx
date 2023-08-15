import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

export default function RootLayout({ cartItems, setCartItems }) {
  return (
    <div>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <Outlet />
      <Footer />
    </div>
  );
}

RootLayout.propTypes = {
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
};
