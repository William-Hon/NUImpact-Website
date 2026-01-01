import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react";
import Navbar from "../sections/Navbar";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isSummitPage = location.pathname === "/summit";
  const logoColor = isSummitPage ? "black" : "white";

  return (
    <>
      <Navbar logoColor={logoColor} />
      <div className="w-full overflow-x-hidden">
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout