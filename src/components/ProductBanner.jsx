import styles from "../styles/ProductBanner.module.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function ProductBanner() {
  const navigate = useNavigate();
  const targetRoute = "/headphones/xx99-mark-two-headphones";

  const handleItemClick = () => {
    console.log("targetroute:", targetRoute);
    navigate(targetRoute);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.productBanner}>
      <div className={styles.productInfo}>
        <h6>NEW PRODUCT</h6>
        <h1>XX99 MARK II HEADPHONES</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button onClick={handleItemClick} />
      </div>
    </div>
  );
}
