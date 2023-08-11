import PropTypes from "prop-types";
import styles from "../styles/Button.module.css";

function Button({ bgColor, color, border }) {
  const buttonStyle = {
    backgroundColor: bgColor,
    color: color,
    border: border,
  };

  return (
    <button className={styles.customButton} style={buttonStyle}>
      SEE PRODUCT
    </button>
  );
}

Button.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  hoverBgColor: PropTypes.string,
  hoverColor: PropTypes.string,
  border: PropTypes.any,
};

export default Button;
