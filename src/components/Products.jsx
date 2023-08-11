import styles from "../styles/Products.module.css";
import Button from "./Button";
import PropTypes from "prop-types";

function Products({
  productImgSrc,
  productType,
  productInfo,
  newProduct,
  isEven,
  toggleViewProductsTab,
}) {
  const containerStyle = {
    flexDirection: !isEven ? "row-reverse" : "row",
  };

  const textContainerStyle = {
    paddingLeft: !isEven ? "0rem" : "5rem",
    paddingRight: !isEven ? "8rem" : "0rem",
  };

  return (
    <div className={styles.container} style={containerStyle}>
      <div className={styles.leftSide}>
        <img
          src={productImgSrc}
          alt="Left Side Image"
          className={styles.image}
        />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.textContainer} style={textContainerStyle}>
          {newProduct ? <p className={styles.subheading}>NEW PRODUCT</p> : ""}
          <p className={styles.heading}>{productType}</p>
          <p className={styles.subText}>{productInfo}</p>
          {/* <Button /> */}
          <Button onClick={toggleViewProductsTab} />
        </div>
      </div>
    </div>
  );
}

export default Products;

Products.propTypes = {
  productImgSrc: PropTypes.string.isRequired,
  productType: PropTypes.string.isRequired,
  productInfo: PropTypes.string.isRequired,
  newProduct: PropTypes.bool.isRequired,
  isEven: PropTypes.bool.isRequired,
  toggleViewProductsTab: PropTypes.func.isRequired,
};
