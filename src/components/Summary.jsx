import PropTypes from "prop-types";
import styles from "../components/shared/styles/Cart.module.css";
import Button from "./shared/Button";

export default function Summary({ cartItems }) {
  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);

    return totalPrice;
  };

  const shippingFee = 50;

  const valueAddedTax = 0.2 * calculateTotalPrice();

  const grandTotal = calculateTotalPrice() + shippingFee + valueAddedTax;

  const pricestyle = { fontWeight: "700" };

  return (
    <div className={styles.summaryContainer}>
      <h3> SUMMARY</h3>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center" }}>Cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div className={styles.summaryMap} key={index}>
            <div className={styles.cartLeft}>
              <img
                src={item.productImgSrc}
                alt={item.productType}
                width="62px"
                height="62px"
              />

              <p className={styles.productType}>
                {item.productType}
                <span>${item.price.toLocaleString()}</span>
              </p>
            </div>

            <p
              style={{
                fontWeight: "700",
                fontSize: ".8rem",
                color: "#00000080",
              }}
            >
              X{item.quantity}
            </p>
          </div>
        ))
      )}
      <div>
        <div className={styles.summaryFlex}>
          <p>TOTAL</p>
          <p style={pricestyle}>$ {calculateTotalPrice().toLocaleString()}</p>
        </div>

        <div className={styles.summaryFlex}>
          <p>SHIPPING</p>
          <p style={pricestyle}>${shippingFee}</p>
        </div>

        <div className={styles.summaryFlex}>
          <p>VAT(INCLUDED)</p>
          <p style={pricestyle}>$ {valueAddedTax.toFixed(2)}</p>
        </div>

        <div className={styles.summaryFlex}>
          <p>GRAND TOTAL</p>
          <p style={{ color: "#d87d4a", fontWeight: "700" }}>$ {grandTotal}</p>
        </div>
      </div>

      <Button text="CONTINUE & PAY" />
    </div>
  );
}

Summary.propTypes = {
  cartItems: PropTypes.array,
};
