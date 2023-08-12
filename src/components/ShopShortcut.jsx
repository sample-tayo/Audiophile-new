import "../styles/ShopShortcut.css";
import PropTypes from "prop-types";
import { mainShopItems } from "../constants/constants";

export default function ShopShortcutMap() {
  return (
    <div className="ShopShortcutMap">
      {mainShopItems.map((item, index) => (
        <ShopShortcut key={index} item={item} />
      ))}
    </div>
  );
}

// ------nothing i just need space-------------

function ShopShortcut({ item }) {
  const { title, imgSrc } = item;

  return (
    <div className="ShopShortcutContainer">
      <img src={imgSrc} alt={title} />
      <p style={{ fontWeight: "700", letterSpacing: ".2rem" }}>{title}</p>
      <p className="shophover">
        SHOP
        {/* <img
          src="/assets/shared/icon-arrow-right.svg"
          alt=""
          width="2rem"
          height="2rem"
        /> */}
      </p>
    </div>
  );
}

ShopShortcut.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
};
