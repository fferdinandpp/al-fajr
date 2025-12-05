import { useState } from "react";
import Navbar from "../components/Navbar";
import FloatingContact from "../components/FloatingContact";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar onMenuChange={setSidebarOpen} />

      <Outlet />
      <Footer />

      <FloatingContact hidden={sidebarOpen} />
    </>
  );
}

export default Layout;
