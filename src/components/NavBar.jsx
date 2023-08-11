import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
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
            <NavLink to="/HeadPhones" onClick={toggleMenu}>
              HEADPHONES
            </NavLink>
          </div>
          <div className={styles["menu-item"]}>
            <NavLink to="/Speakers" onClick={toggleMenu}>
              SPEAKERS
            </NavLink>
          </div>
          <div className={styles["menu-item"]}>
            <NavLink to="/EarPhones" onClick={toggleMenu}>
              EARPHONES
            </NavLink>
          </div>
        </div>

        <div className={styles.cart}>
          <img src="/assets/shared/icon-cart.svg" alt="cart" />
        </div>
        <div className={styles["menu-icon"]} onClick={toggleMenu}>
          {menuOpen ? <FaBars /> : <FaTimes />}
        </div>
      </nav>
    </div>
  );
}
