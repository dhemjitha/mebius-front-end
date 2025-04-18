import Navigation from "@/components/shared/Navigation";
import { Outlet } from "react-router";
import Footer from "@/components/shared/Footer";


function MainLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
