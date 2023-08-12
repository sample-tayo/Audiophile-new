import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "../styles/CartButton.module.css";

const CartButton = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className={styles["cart-button-container"]}>
      <button className={styles["cart-button"]} onClick={handleDecrement}>
        <FaMinus className={styles["cart-icon"]} />
      </button>
      <span className={styles["cart-count"]}>{count}</span>
      <button className={styles["cart-button"]} onClick={handleIncrement}>
        <FaPlus className={styles["cart-icon"]} />
      </button>
    </div>
  );
};

export default CartButton;
