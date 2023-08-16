import ShopShortcutMap from "../components/shared/ShopShortcut";
import MainAdvert from "../components/MainAdvert";
import PageType from "../components/PageType";
import Products from "../components/Products";
import { HeadPhoneProducts } from "../constants/constants";
import { usePageTitle } from "../utils/updatePageTitle";

export default function HeadPhones() {
  usePageTitle("Audiophine - Headphones");
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
            productId={product.productId}
            features={product.features}
            price={product.price}
            gadgetType="headphones"
          />
        ))}
      </div>
      {/* dummmy testing to delete later */}
      {/* <Products /> */}
      <ShopShortcutMap />
      <MainAdvert />
    </div>
  );
}
