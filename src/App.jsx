// global css
import "./index.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";

//toast notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import pages
import Home from "./pages/Home";
import HeadPhones from "./pages/HeadPhones";
import EarPhones from "./pages/EarPhones";
import Speakers from "./pages/Speakers";
import Checkout from "./pages/Checkout";
// import components
import ViewProductsTab from "./components/ViewProductTab";

// layout
import RootLayout from "./layouts/RootLayouts";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  /// Function to add items to the cart
  const addToCart = (item) => {
    // Check if the item is already in the cart
    const itemIndex = cartItems.findIndex(
      (cartItem) =>
        cartItem.productType === item.productType &&
        cartItem.price === item.price
    );

    if (itemIndex === -1) {
      setCartItems([...cartItems, item]);
    } else {
      // Replace the existing item with the new one
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex] = item;
      setCartItems(updatedCartItems);
    }

    toast.success(`${item.productType} added to cart`, {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        to="/"
        element={
          <RootLayout cartItems={cartItems} setCartItems={setCartItems} />
        }
      >
        <Route index element={<Home />} />
        <Route path="headphones" element={<HeadPhones />} />
        <Route path="earphones" element={<EarPhones />} />
        <Route path="speakers" element={<Speakers />} />
        <Route
          path="earphones/:id"
          element={<ViewProductsTab addToCart={addToCart} />}
        />
        <Route
          path="headphones/:id"
          element={<ViewProductsTab addToCart={addToCart} />}
        />
        <Route
          path="speakers/:id"
          element={<ViewProductsTab addToCart={addToCart} />}
        />
        <Route path="checkout" element={<Checkout cartItems={cartItems} />} />
      </Route>
    )
  );

  return (
    <div>
      <Helmet>
        {/* page title */}
        <title>Audiophile</title>
      </Helmet>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

// note in the product gallery folder, you must name eachfolder as their product id and each image must follow image-galler-(number)
