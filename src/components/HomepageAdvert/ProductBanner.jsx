import styles from "./styles/ProductBanner.module.css";
import Button from "../shared/Button";
// import { useNavigate } from "react-router-dom";
import { navigateToProduct } from "../../utils/navigateToProduct";
import { HeadPhoneProducts } from "../../constants/constants";

export default function ProductBanner() {
  const product = HeadPhoneProducts[0]; // Get the first product from the array
  const handleItemClick = navigateToProduct(product);

  return (
    <div className={styles.productBanner}>
      <div className={styles.productInfo}>
        <h6>NEW PRODUCT</h6>
        <h1>{product.productType}</h1>
        <p>{product.productInfo}</p>
        <Button onClick={handleItemClick} />
      </div>
    </div>
  );
}
