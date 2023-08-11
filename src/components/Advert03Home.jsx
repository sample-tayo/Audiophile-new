import styles from "../styles/Advert03Home.module.css";
import Button from "./Button";

const Advert03Home = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.box} ${styles.imageBox}`}>
        <img src="/assets/shared/image-earphones-yx1.jpg" alt="yx1-earphones" />
      </div>
      <div className={`${styles.box} ${styles.textBox}`}>
        <div className={styles.productInfo}>
          <h6> YX1 EARPHONES</h6>
          <Button bgColor="transparent" color="#000" border="2px solid #000" />
        </div>
      </div>
    </div>
  );
};

export default Advert03Home;
