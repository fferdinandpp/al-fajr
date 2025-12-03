import { Routes, Route, Outlet } from "react-router-dom";

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

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function HomePage() {
  return (
    <>
      <Banner />
      <Profile />
      <Point />
      <Packet />
      <Review />
      <FAQ />
      <Gallery />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="packet-details" element={<PacketDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
