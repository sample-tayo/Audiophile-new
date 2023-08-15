import "./styles/AdvertHome.css";
import Button from "../shared/Button";
import { navigateToProduct } from "../../utils/navigateToProduct";
import { SpeakersProducts } from "../../constants/constants";

function AdvertHome() {
  const product = SpeakersProducts[0]; // Get the product from the array
  const handleItemClick = navigateToProduct(product);
  return (
    <div className="container">
      <div className="background-image"></div>
      <div className="left-side">
        <img src="/assets/shared/image-speaker-zx9.png" alt="" />
      </div>
      <div className="right-side">
        <h1>
          ZX9 <span>SPEAKER</span>
        </h1>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button bgColor="#000" onClick={handleItemClick} />
      </div>
    </div>
  );
}

export default AdvertHome;
