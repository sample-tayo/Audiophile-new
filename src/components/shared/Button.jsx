import PropTypes from "prop-types";
import styles from "./styles/Button.module.css";

function Button({ text = "SEE PRODUCT", bgColor, color, border, onClick }) {
  const buttonStyle = {
    backgroundColor: bgColor,
    color: color,
    border: border,
  };

  return (
    <button
      className={styles.customButton}
      style={buttonStyle}
      // Had to pass the onlcick as props, i thought it would work as a function in the product page but it didn't
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  hoverBgColor: PropTypes.string,
  hoverColor: PropTypes.string,
  border: PropTypes.any,
  onClick: PropTypes.func,
};

export default Button;
