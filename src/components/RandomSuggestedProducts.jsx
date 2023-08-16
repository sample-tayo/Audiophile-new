import styles from "./shared/styles/SuggestedLike.module.css";
import SuggestedLike from "./shared/SuggestedLike";
import {
  EarPhonesProducts,
  HeadPhoneProducts,
  SpeakersProducts,
} from "../constants/constants";

function getRandomProduct(productsArray) {
  const randomIndex = Math.floor(Math.random() * productsArray.length);
  return productsArray[randomIndex];
}

function RandomSuggestedProducts() {
  const randomEarphone = getRandomProduct(EarPhonesProducts);
  const randomHeadphone = getRandomProduct(HeadPhoneProducts);
  const randomSpeaker = getRandomProduct(SpeakersProducts);

  const randomProducts = [randomEarphone, randomHeadphone, randomSpeaker];

  return (
    <>
      <p
        style={{
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "700",
          marginTop: "7rem",
          paddingBottom: "1rem",
        }}
      >
        YOU MAY ALSO LIKE
      </p>
      <div className={styles.randomSuggestedProducts}>
        {randomProducts.map((product, index) => (
          <SuggestedLike key={index} product={product} />
        ))}
      </div>
    </>
  );
}

export default RandomSuggestedProducts;
