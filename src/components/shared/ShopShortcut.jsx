import "./styles/ShopShortcut.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { mainShopItems } from "../../constants/constants";

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
  const { title, imgSrc, targetRoute } = item;
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(targetRoute);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="ShopShortcutContainer" onClick={handleItemClick}>
      <img src={imgSrc} alt={title} />
      <p style={{ fontWeight: "700", letterSpacing: ".2rem" }}>{title}</p>
      <p className="shophover">
        SHOP <MdOutlineKeyboardArrowRight fill="#d87d4a" fontSize="2rem" />
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
    targetRoute: PropTypes.string.isRequired,
  }).isRequired,
};
