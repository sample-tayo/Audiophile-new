import styles from "../styles/ProductBanner.module.css";
import Button from "./Button";
import PropTypes from "prop-types";

function ProductBanner({ navigateToProduct }) {
  return (
    <div className={styles.productBanner}>
      <div className={styles.productInfo}>
        <h6>NEW PRODUCT</h6>
        <h1>XX99 MARK II HEADPHONES</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button onClick={() => navigateToProduct("xx99-mark-two-headphones")} />
      </div>
    </div>
  );
}

export default ProductBanner;
ProductBanner.propTypes = {
  navigateToProduct: PropTypes.func.isRequired,
};
