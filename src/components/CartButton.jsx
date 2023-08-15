import PropTypes from "prop-types";
import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "../styles/CartButton.module.css";

const CartButton = ({ quantity, increment, decrement }) => {
  // const [numberOfProducts, setNumberofProducts] = useState(0);

  // const handleIncrement = () => {
  //   setNumberofProducts((prevCount) => prevCount + 1);
  // };

  // const handleDecrement = () => {
  //   if (numberOfProducts > 0) {
  //     setNumberofProducts((prevCount) => prevCount - 1);
  //   }
  // };

  return (
    <div className={styles["cart-button-container"]}>
      <button className={styles["cart-button"]} onClick={decrement}>
        <FaMinus className={styles["cart-icon"]} />
      </button>
      <span className={styles["cart-count"]}>{quantity}</span>
      <button className={styles["cart-button"]} onClick={increment}>
        <FaPlus className={styles["cart-icon"]} />
      </button>
    </div>
  );
};

CartButton.propTypes = {
  quantity: PropTypes.number.isRequired,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

export default CartButton;
