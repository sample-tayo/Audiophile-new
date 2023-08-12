import styles from "../styles/Products.module.css";
import Button from "./Button";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
function Products({
  productImgSrc,
  productType,
  productInfo,
  newProduct,
  isEven,
  productId,
  features,
  price,
}) {
  // STYLING TO REVERSE FLEX DIRECTION FOR EVEN CHILDS
  const containerStyle = {
    flexDirection: !isEven ? "row-reverse" : "row",
  };
  // ADJUSTMENT OF PADDING BASED ON FLEXDIRECTION
  const textContainerStyle = {
    paddingLeft: !isEven ? "0rem" : "5rem",
    paddingRight: !isEven ? "8rem" : "0rem",
  };
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // testing if button works
    console.log("Button Clicked!");
    console.log("Product ID:", productId);
    console.log("Product Type:", productType);
    console.log("ProductImgSrc:", productImgSrc);

    navigate(`/Earphones/${productId}`, {
      state: {
        productType,
        productInfo,
        features,
        price,
        productImgSrc,
        productId,
      },
    });
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
          {/* TREAT ONCLICK BELOW AS APROS THAT IS PASSED DOW BECAUSE IT IS NOT WORKING STRAIGH UP HERE */}
          <Button onClick={handleButtonClick} />
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
  features: PropTypes.shape({
    paragraph1: PropTypes.string.isRequired,
    paragraph2: PropTypes.string.isRequired,
  }).isRequired,
  price: PropTypes.number.isRequired,
  newProduct: PropTypes.bool.isRequired,
  isEven: PropTypes.bool.isRequired,
  productId: PropTypes.string.isRequired,
};
