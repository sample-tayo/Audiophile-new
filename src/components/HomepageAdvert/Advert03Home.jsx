import styles from "./styles/Advert03Home.module.css";
import Button from "../shared/Button";

import { navigateToProduct } from "../../utils/navigateToProduct";
import { EarPhonesProducts } from "../../constants/constants";

const Advert03Home = () => {
  const product = EarPhonesProducts[0]; // Get the product from the array
  const handleItemClick = navigateToProduct(product);

  return (
    <div className={styles.container}>
      <div className={`${styles.box} ${styles.imageBox}`}>
        <img src="/assets/shared/image-earphones-yx1.jpg" alt="yx1-earphones" />
      </div>
      <div className={`${styles.box} ${styles.textBox}`}>
        <div className={styles.productInfo}>
          <h6> YX1 EARPHONES</h6>
          <Button
            bgColor="transparent"
            color="#000"
            border="2px solid #000"
            onClick={handleItemClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Advert03Home;
