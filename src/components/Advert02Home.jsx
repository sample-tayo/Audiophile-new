import styles from "../styles/Advert02Home.module.css";
import Button from "./Button";

function Advert02Home() {
  return (
    <div className={styles.productBanner}>
      <div className={styles.productInfo}>
        <h6> ZX7 SPEAKER</h6>
        <Button bgColor="transparent" color="#000" border="2px solid #000" />
      </div>
    </div>
  );
}

export default Advert02Home;
