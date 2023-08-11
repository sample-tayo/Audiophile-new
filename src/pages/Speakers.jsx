// import { useParams } from "react-router-dom";
import ShopShortcutMap from "../components/ShopShortcut";
import MainAdvert from "../components/MainAdvert";
import PageType from "../components/PageType";
import { SpeakersProducts } from "../constants/constants";
import Products from "../components/Products";
// import ViewProductsTab from "../components/ViewProductTab";
const isMobile = window.innerWidth < 600;

function Speakers() {
  return (
    <div>
      <PageType pagetype="SPEAKERS" />
      <div className="products-map">
        {SpeakersProducts.map((product, index) => (
          <Products
            key={index}
            productImgSrc={
              isMobile
                ? product.productImgSrc.mobile
                : product.productImgSrc.desktop
            }
            productType={product.productType}
            productInfo={product.productInfo}
            newProduct={product.newProduct}
            isEven={index % 2 === 0}
          />
        ))}
      </div>

      <ShopShortcutMap />
      <MainAdvert />
    </div>
  );
}

export default Speakers;
