// nfrunction that navigate to the product from the HOME PAGE AND PRODUCTS showed in different pages
import { useNavigate } from "react-router-dom";

export function navigateToProduct(product) {
  const navigate = useNavigate();

  return () => {
    let imgSrc = ""; // Initialize the image source variable

    if (product.productCategory === "headphones") {
      imgSrc = product.productImgSrc;
    } else if (product.productCategory === "speakers") {
      imgSrc = product.productImgSrc.mobile;
    } else if (product.productCategory === "earphones") {
      imgSrc = product.productImgSrc.mobile;
    }

    navigate(`/${product.productCategory}/${product.productId}`, {
      state: {
        productType: product.productType,
        productInfo: product.productInfo,
        features: product.features,
        price: product.price,
        productImgSrc: imgSrc,
        productId: product.productId,
      },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}
