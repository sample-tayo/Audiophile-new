import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Cart from "./shared/CartContainer";
import PropTypes from "prop-types";

export default function Navbar({ cartItems, setCartItems, totalPrice }) {
  const [menuOpen, setMenuOpen] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCart = () => {
    console.log("cart-open");
    setCartOpen(!cartOpen);
  };

  const closeCart = () => {
    setCartOpen(false);
  };
  return (
    <>
      <div className={styles.navContainer}>
        <nav className={styles.navbar}>
          <div className={styles["navbar-logo"]}>
            <NavLink to="/">
              <img src="./assets/logo.svg" alt="logo" />
            </NavLink>
          </div>
          <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
            <div className={styles["menu-item"]}>
              <NavLink to="/" onClick={toggleMenu}>
                HOME
              </NavLink>
            </div>
            <div className={styles["menu-item"]}>
              <NavLink to="/headphones" onClick={toggleMenu}>
                HEADPHONES
              </NavLink>
            </div>
            <div className={styles["menu-item"]}>
              <NavLink to="/speakers" onClick={toggleMenu}>
                SPEAKERS
              </NavLink>
            </div>
            <div className={styles["menu-item"]}>
              <NavLink to="/earPhones" onClick={toggleMenu}>
                EARPHONES
              </NavLink>
            </div>
          </div>

          <div className={styles.cart} onClick={toggleCart}>
            <img src="/assets/shared/icon-cart.svg" alt="cart" />
          </div>
          <div className={styles["menu-icon"]} onClick={toggleMenu}>
            {menuOpen ? <FaBars /> : <FaTimes />}
          </div>
        </nav>
      </div>
      <Cart
        cartOpen={cartOpen}
        onCloseCart={closeCart}
        cartItems={cartItems}
        setCartItems={setCartItems}
        totalPrice={totalPrice}
      />
    </>
  );
}
Navbar.propTypes = {
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
  totalPrice: PropTypes.func,
};
