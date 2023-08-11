import styles from "../styles/Products.module.css";
import Button from "./Button";
// import PropTypes from "prop-types";

function ViewProductsTab() {
  return (
    <div className={styles.viewProductsTab}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <img
            src="/assets/categories/speakers/desktop/image-zx9.jpg"
            alt="Left Side Image"
            className={styles.image}
          />
        </div>
        <div className={styles.rightSide}>
          <div className={styles.textContainer}>
            <p className={styles.heading}>XX99 MARK I HEADPHONES</p>
            <p className={styles.subText}>
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <p className="price"></p>
            <Button />
          </div>
        </div>
      </div>

      <div className={styles.featuresContainer}>
        <div className={`${styles.features}  ${styles["feature-flex"]}`}>
          <h4>FEATURES</h4>
          <p>
            As the headphones all others are measured against, the XX99 Mark I
            demonstrates over five decades of audio expertise, redefining the
            critical listening experience. This pair of closed-back headphones
            are made of industrial, aerospace-grade materials to emphasize
            durability at a relatively light weight of 11 oz.
          </p>
          <p>
            From the handcrafted microfiber ear cushions to the robust metal
            headband with inner damping element, the components work together to
            deliver comfort and uncompromising sound. Its closed-back design
            delivers up to 27 dB of passive noise cancellation, reducing
            resonance by reflecting sound to a dedicated absorber. For
            connectivity, a specially tuned cable is includes with a balanced
            gold connector.
          </p>
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

      <div className={styles.bottomcontainer}>
        <div className={styles.bottom}>
          <div className={styles.bottomleftBox}>
            <img
              src="/assets/image-gallery/image-gallery-1.jpg"
              alt="Left Image 1"
              className={styles.bottomimage}
            />
          </div>
          <div className={styles.bottomleftBox}>
            <img
              src="/assets/image-gallery/image-gallery-2.jpg"
              alt="Left Image 2"
              className={styles.bottomimage}
            />
          </div>
        </div>
        <div className={styles.bottomrightSide}>
          <img
            src="/assets/image-gallery/image-gallery-3.jpg"
            alt="Right Image"
            className={styles.bottomimage}
          />
        </div>
      </div>
    </div>
  );
}

export default ViewProductsTab;

// Products.propTypes = {
//   productImgSrc: PropTypes.string.isRequired,
//   productType: PropTypes.string.isRequired,
//   productInfo: PropTypes.string.isRequired,
//   newProduct: PropTypes.bool.isRequired,
//   isEven: PropTypes.bool.isRequired,
// };
