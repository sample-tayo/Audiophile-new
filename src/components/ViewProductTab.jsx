import styles from "../styles/Products.module.css";
import Button from "./Button";
import GoBackBtn from "./GoBackBtn";
import PropTypes from "prop-types";
import MainAdvert from "./MainAdvert";
import ShopShortcutMap from "./ShopShortcut";
import RandomSuggestedProducts from "./RandomSuggestedProducts";
import CartButton from "./CartButton";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function ViewProductsTab({ addToCart }) {
  // to get the current url location
  const location = useLocation();
  // this props below is passed from the handleclickbutton function in products component
  const {
    productType,
    productInfo,
    price,
    features,
    productImgSrc,
    productId,
  } = location.state;

  // function to pass props into the cart
  const handleAddToCart = () => {
    const newItem = {
      productType,
      price,
      productImgSrc,
      quantity: productQuantity,
    };
    addToCart(newItem);
  };

  const [productQuantity, setProductQuantity] = useState(0);

  return (
    <>
      <GoBackBtn />

      <div className={styles.viewProductsTab}>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <img
              src={productImgSrc}
              alt={productType}
              className={styles.image}
            />
          </div>
          <div className={styles.rightSide}>
            <div className={styles.textContainer}>
              <p className={styles.heading}>{productType}</p>
              <p className={styles.subText}>{productInfo}</p>
              <p
                className="price"
                style={{
                  fontWeight: "700",
                  fontSize: "1.3rem",
                  marginBottom: "1.5rem",
                }}
              >
                $ {price.toLocaleString()}
              </p>
              <div className={styles.buttonFlex}>
                <CartButton
                  quantity={productQuantity}
                  increment={() =>
                    setProductQuantity((prevCount) => prevCount + 1)
                  }
                  decrement={() =>
                    setProductQuantity((prevCount) =>
                      prevCount > 0 ? prevCount - 1 : prevCount
                    )
                  }
                />
                <Button text="ADD TO CART" onClick={handleAddToCart} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.featuresContainer}>
          <div className={`${styles.features}  ${styles["feature-flex"]}`}>
            <h4>FEATURES</h4>
            <p>{features.paragraph1}</p>
            <p>{features.paragraph2}</p>
          </div>
          <div className={`${styles.whatInTheBox}  ${styles["feature-flex"]}`}>
            <h4>IN THE BOX</h4>
            <div>
              <p>
                1x <span>Headphone Unit</span>
              </p>
              <p>
                1x <span>Headphone Unit</span>
              </p>
              <p>
                1x <span>Headphone Unit</span>
              </p>
              <p>
                1x <span>Headphone Unit</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <BottomContainer productId={productId} />
      <RandomSuggestedProducts />

      <ShopShortcutMap />
      <MainAdvert />
    </>
  );
}

function BottomContainer({ productId }) {
  return (
    <div className={styles.bottomcontainer}>
      <div className={styles.bottom}>
        <div className={styles.bottomleftBox}>
          <img
            src={`/assets/products-gallery/${productId}/image-gallery-1.jpg`}
            alt="image-gallery-1"
            className={styles.bottomimage}
          />
        </div>
        <div className={styles.bottomleftBox}>
          <img
            src={`/assets/products-gallery/${productId}/image-gallery-2.jpg`}
            alt="image-gallery-2"
            className={styles.bottomimage}
          />
        </div>
      </div>
      <div className={styles.bottomrightSide}>
        <img
          src={`/assets/products-gallery/${productId}/image-gallery-3.jpg`}
          alt="Right Image"
          className={styles.bottomimage}
        />
      </div>
    </div>
  );
}

BottomContainer.propTypes = {
  productId: PropTypes.string.isRequired,
};
ViewProductsTab.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

// ViewProductsTab.propTypes = {
//   productImgSrc: PropTypes.string.isRequired,
// productType: PropTypes.string.isRequired,
// productInfo: PropTypes.string.isRequired,
// features: PropTypes.string.isRequired,
// price: PropTypes.number.isRequired,

//   newProduct: PropTypes.bool.isRequired,
//   isEven: PropTypes.bool.isRequired,
// };
