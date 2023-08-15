import { useNavigate } from "react-router-dom";
import styles from "./styles/Goback.module.css";

function GoBackBtn() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <p onClick={goBack} className={styles.goBack}>
      Go Back
    </p>
  );
}

export default GoBackBtn;
