// import { useParams } from "react-router-dom";
import ShopShortcutMap from "../components/shared/ShopShortcut";
import MainAdvert from "../components/MainAdvert";
import PageType from "../components/PageType";
import { SpeakersProducts } from "../constants/constants";
import Products from "../components/Products";
import { usePageTitle } from "../utils/updatePageTitle";

// import ViewProductsTab from "../components/ViewProductTab";
const isMobile = window.innerWidth < 600;

function Speakers() {
  usePageTitle("Audiophine - Speakers");
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
            productId={product.productId}
            // the reason im passing this here is to pass it as props into the button or viewproducts tab display it.. testing... props drilling
            features={product.features}
            price={product.price}
            gadgetType="speakers"
          />
        ))}
      </div>

      <ShopShortcutMap />
      <MainAdvert />
    </div>
  );
}

export default Speakers;
