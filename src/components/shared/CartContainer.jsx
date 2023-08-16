import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./styles/Cart.module.css";
import CartButton from "../CartButton";
import Button from "./Button";
import { BsCart3 } from "react-icons/bs";

export default function Cart({
  cartOpen,
  onCloseCart,
  cartItems,
  setCartItems,
}) {
  // tfunction to handle the increament and decreament of the cartbutton, the quantity is passed from the view products tab

  const incrementQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.productId === itemId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    // Update the cartItems state with the new array
    setCartItems(updatedCartItems);
  };

  const decrementQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.productId === itemId && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    // function to remove item from cart if the quantity is reduced to zero using the decrement func
    const filteredCartItems = updatedCartItems.filter(
      (item) => item.quantity > 0
    );

    // Update the cartItems state with the new array
    setCartItems(filteredCartItems); //the reason for updating the cartitems with filteredCartItem is to make the filted funcwork
  };

  //useEffect introduced so as to close the cart container if outside of the cartContainer is clicked
  useEffect(() => {
    const handleMouseDown = (e) => {
      // If the cart is open and the click is outside the cart container
      if (cartOpen && !e.target.closest(`.${styles.cartContainer}`)) {
        onCloseCart();
      }
    };

    if (cartOpen) {
      document.addEventListener("mousedown", handleMouseDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [cartOpen, onCloseCart]);

  const totalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);

    return totalPrice;
  };

  const cartIsEmpty = cartItems.length === 0;

  return (
    <>
      {cartOpen && <div className={styles.overlay} onClick={onCloseCart} />}
      <div className={`${styles.cartContainer} ${cartOpen ? styles.open : ""}`}>
        <div className={styles["cart-items"]}>
          {cartIsEmpty ? (
            <div className={styles.emptyCart}>
              <p>Your cart is empty</p>
              <BsCart3 className={styles.cartIcon} />
            </div>
          ) : (
            <div className={styles.subContainer}>
              <div className={styles.cartHeader}>
                <p className={styles.cartLength}>
                  CART <span>({cartItems.length})</span>
                </p>
                <p
                  className={styles.removeAll}
                  onClick={() => setCartItems([])}
                >
                  Remove All
                </p>
              </div>

              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    <div className={styles.cartLeft}>
                      <img
                        src={item.productImgSrc}
                        alt={item.productType}
                        width="25%"
                        height="30%"
                      />
                      <p className={styles.productType}>
                        {item.productType}
                        <span>${item.price.toLocaleString()}</span>
                      </p>
                    </div>
                    <CartButton
                      quantity={item.quantity}
                      increment={() => incrementQuantity(item.productId)}
                      decrement={() => decrementQuantity(item.productId)}
                    />
                    {/* <p>productID: {item.productId}</p> */}
                  </li>
                ))}
                <div className={styles.totalPrice}>
                  <p style={{ fontSize: ".9rem" }}>TOTAL</p>
                  <p style={{ fontWeight: "700" }}>
                    $ {totalPrice().toLocaleString()}
                  </p>
                </div>
              </ul>

              <NavLink to="/checkout">
                <Button text="CHECKOUT" onClick={() => onCloseCart()} />
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

Cart.propTypes = {
  cartOpen: PropTypes.bool,
  onCloseCart: PropTypes.func,
  productType: PropTypes.string,
  price: PropTypes.number,
  productImgSrc: PropTypes.string,
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
};
