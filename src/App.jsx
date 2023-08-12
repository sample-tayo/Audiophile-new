// global css
import "./index.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// import pages
import Home from "./pages/Home";
import HeadPhones from "./pages/HeadPhones";
import EarPhones from "./pages/EarPhones";
import Speakers from "./pages/Speakers";
// import components
import ViewProductsTab from "./components/ViewProductTab";

// layout
import RootLayout from "./layouts/RootLayouts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route to="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="HeadPhones" element={<HeadPhones />} />
      <Route path="EarPhones" element={<EarPhones />} />
      <Route path="Speakers" element={<Speakers />} />
      <Route path="Earphones/:id" element={<ViewProductsTab />} />
    </Route>
  )
);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
{
  /* <Route path="EarPhones" element={<EarPhones />}>
        <Route path=":id" element={<ViewProductsTab />} />
      </Route> */
}

// note in the product gallery folder, you must name eachfolder as their product id and each image must follow image-galler-(number)
