import ShopShortcutMap from "../components/shared/ShopShortcut";
import MainAdvert from "../components/MainAdvert";
import ProductBanner from "../components/HomepageAdvert/ProductBanner";
import AdvertHome from "../components/HomepageAdvert/AdvertHome";
import Advert02Home from "../components/HomepageAdvert/Advert02Home";
import Advert03Home from "../components/HomepageAdvert/Advert03Home";
import { usePageTitle } from "../utils/updatePageTitle";

function Home() {
  // creating the function here because i thing this is the topmost level for my application and probably pass it as props into th outlet

  // const navigate = useNavigate();

  // const navigateToProduct = (productId) => {
  //   navigate(`/headphones/${productId}`);
  // };

  usePageTitle("Audiophine - Home");

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
