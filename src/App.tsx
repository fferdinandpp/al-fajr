import { Routes, Route, Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Point from "./components/Point";
import Packet from "./components/Packet";
import Review from "./components/Review";
import Profile from "./components/Profile";
import FAQ from "./components/FAQ";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import PacketDetails from "./components/PacketDetails";
import FloatingContact from "./components/FloatingContact";

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

function HomePage() {
  return (
    <>
      <div id="beranda">
        <Banner />
      </div>
      <div id="tentang">
        <Profile />
      </div>
      <div id="fasilitas">
        <Point />
      </div>
      <div id="paket">
        <Packet />
      </div>
      <Review />
      <FAQ />
      <div id="galeri">
        <Gallery />
      </div>
    </>
  );
}

function TentangPage() {
  return <Profile />;
}

function FasilitasPage() {
  return <Point />;
}

function PaketPage() {
  return <Packet />;
}

function GaleriPage() {
  return <Gallery />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="tentang" element={<TentangPage />} />
        <Route path="paket" element={<PaketPage />} />
        <Route path="fasilitas" element={<FasilitasPage />} />
        <Route path="galeri" element={<GaleriPage />} />

        <Route path="packet-details" element={<PacketDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
