import PropTypes from "prop-types";
import Button from "./Button";
import styles from "../styles/SuggestedLike.module.css";

function SuggestedLike({ product }) {
  const { productType, productImgSrc } = product;

  //   some image src will return  string while some will return objects.. IfElse statment to know which one to pick, like the headphone img src will return a string
  let imgSrc = "";
  if (typeof productImgSrc === "string") {
    imgSrc = productImgSrc; // Use the string directly
  } else if (typeof productImgSrc === "object") {
    imgSrc = productImgSrc.desktop;
  }

  return (
    <div>
      <div className={styles.suggestedComponent}>
        <img src={imgSrc} alt={productType} width="100%" height="100%" />
        <p>{productType}</p>
        <Button />
      </div>
    </div>
  );
}

SuggestedLike.propTypes = {
  product: PropTypes.shape({
    productType: PropTypes.string.isRequired,
    productImgSrc: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        mobile: PropTypes.string.isRequired,
        desktop: PropTypes.string.isRequired,
      }),
    ]).isRequired,
  }).isRequired,
};

export default SuggestedLike;
