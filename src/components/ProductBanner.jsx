import styles from "../styles/ProductBanner.module.css";
import Button from "./Button";

function ProductBanner() {
  return (
    <div className={styles.productBanner}>
      <div className={styles.productInfo}>
        <h6>NEW PRODUCT</h6>
        <h1>XX99 MARK II HEADPHONES</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button />
      </div>
    </div>
  );
}

export default ProductBanner;
