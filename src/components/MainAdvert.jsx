import styles from "../styles/MainAdvert.module.css";

const MainAdvert = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.box} ${styles.textBox}`}>
        <div className={styles.productInfo}>
          <h3>
            BRINGING YOU THE <span style={{ color: "#d87d4a" }}>BEST</span>{" "}
            AUDIO GEAR
          </h3>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
      <div className={`${styles.box} ${styles.imageBox}`}>
        <img src="/assets/shared/image-best-gear.jpg" alt="Image" />
      </div>
    </div>
  );
};

export default MainAdvert;
