import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function rootLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
