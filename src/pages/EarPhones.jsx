import ShopShortcutMap from "../components/ShopShortcut";
import MainAdvert from "../components/MainAdvert";
import PageType from "../components/PageType";
import Products from "../components/Products";
import { EarPhonesProducts } from "../constants/constants";
const isMobile = window.innerWidth < 600;

function EarPhones() {
  return (
    <div>
      <PageType pagetype="EARPHONES" />
      <div className="products-map">
        {EarPhonesProducts.map((product, index) => (
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
            gadgetType="earphones"
          />
        ))}
      </div>

      <ShopShortcutMap />
      <MainAdvert />
    </div>
  );
}

export default EarPhones;
