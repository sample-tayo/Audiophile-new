import styles from "./styles/Advert02Home.module.css";
import Button from "../shared/Button";
import { navigateToProduct } from "../../utils/navigateToProduct";
import { SpeakersProducts } from "../../constants/constants";

function Advert02Home() {
  const product = SpeakersProducts[0]; // Get the product from the array
  const handleItemClick = navigateToProduct(product);
  return (
    <div className={styles.productBanner}>
      <div className={styles.productInfo}>
        <h6> ZX7 SPEAKER</h6>
        <Button
          bgColor="transparent"
          color="#000"
          border="2px solid #000"
          onClick={handleItemClick}
        />
      </div>
    </div>
  );
}

export default Advert02Home;
