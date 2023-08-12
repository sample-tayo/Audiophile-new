import ProductBanner from "../components/ProductBanner";
import ShopShortcutMap from "../components/ShopShortcut";
import AdvertHome from "../components/AdvertHome";
import Advert02Home from "../components/Advert02Home";
import Advert03Home from "../components/Advert03Home";
import MainAdvert from "../components/MainAdvert";

function Home() {
  // creating the function here because i thing this is the topmost level for my application and probably pass it as props into th outlet

  // const navigate = useNavigate();

  // const navigateToProduct = (productId) => {
  //   navigate(`/headphones/${productId}`);
  // };

  return (
    <div>
      <ProductBanner />
      <ShopShortcutMap />
      <AdvertHome />
      <Advert02Home />
      <Advert03Home />
      <MainAdvert />
    </div>
  );
}

export default Home;
