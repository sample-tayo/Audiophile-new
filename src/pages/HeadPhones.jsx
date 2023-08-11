import ShopShortcutMap from "../components/ShopShortcut";
import MainAdvert from "../components/MainAdvert";
import PageType from "../components/PageType";
import Products from "../components/Products";
import { HeadPhoneProducts } from "../constants/constants";

function HeadPhones() {
  return (
    <div>
      <PageType pagetype="HEADPHONES" />
      <div className="products-map">
        {HeadPhoneProducts.map((product, index) => (
          <Products
            key={index}
            productImgSrc={product.productImgSrc}
            productType={product.productType}
            productInfo={product.productInfo}
            newProduct={product.newProduct}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
      {/* <Products /> */}
      <ShopShortcutMap />
      <MainAdvert />
    </div>
  );
}

export default HeadPhones;
