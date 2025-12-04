import { useEffect, useState } from "react";
import Logo from "../assets/img/Logo.png";
import Call from "../assets/icons/Call.png";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll spy
  const [activeSection, setActiveSection] = useState("");
  const [openMenu, setOpenMenu] = useState(false);

  const scrollToSection = (id: string) => {
    setOpenMenu(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY) setShow(false);
      else setShow(true);
      setLastScrollY(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Scroll Spy
  useEffect(() => {
    const sections = ["beranda", "tentang", "paket", "fasilitas", "galeri"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id));
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navStyle = (id: string) =>
    `transition ${
      activeSection === id ? "text-[#B6942F] font-bold" : "text-[#525252]"
    }`;

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-white transition-transform duration-300 shadow-md
          ${show ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="px-6 lg:px-20 flex items-center justify-between h-20">
          {/* LEFT: Logo */}
          <img src={Logo} className="h-14" alt="Logo" />

          {/* DESKTOP MENU (unchanged) */}
          <div className="hidden lg:flex gap-10 items-center">
            <div className="flex gap-10">
              <button onClick={() => scrollToSection("beranda")} className={navStyle("beranda")}>
                Beranda
              </button>
              <button onClick={() => scrollToSection("tentang")} className={navStyle("tentang")}>
                Tentang Kami
              </button>
              <button onClick={() => scrollToSection("paket")} className={navStyle("paket")}>
                Paket
              </button>
              <button onClick={() => scrollToSection("fasilitas")} className={navStyle("fasilitas")}>
                Fasilitas
              </button>
              <button onClick={() => scrollToSection("galeri")} className={navStyle("galeri")}>
                Galeri
              </button>
            </div>

            <div className="flex items-center gap-6 text-[#525252]">
              <div className="flex gap-2 items-center">
                <img src={Call} className="w-7 h-7" alt="Call" />
                <p>+62 587123456</p>
              </div>
              <p>alfajr@travelindo.co.id</p>
            </div>
          </div>

          {/* RIGHT: Booking + Burger on mobile */}
          <div className="flex items-center gap-4">
            {/* Booking: visible on all sizes */}
            <button
              onClick={() => scrollToSection("paket")}
              className="bg-[#CFAD48] rounded-lg py-2 px-4 font-semibold"
            >
              Booking Sekarang
            </button>

            {/* Burger: mobile/tablet only */}
            <button className="lg:hidden" onClick={() => setOpenMenu(true)} aria-label="Open menu">
              <svg
                className="w-8 h-8 text-[#525252]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* OVERLAY (when menu open) */}
      <div
        onClick={() => setOpenMenu(false)}
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300 ${
          openMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } lg:hidden`}
      />

      {/* MOBILE SIDEBAR (slide FROM RIGHT to LEFT) */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300
          ${openMenu ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close button */}
        <div className="flex justify-end p-5">
          <button onClick={() => setOpenMenu(false)} aria-label="Close menu">
            <svg
              className="w-7 h-7 text-[#525252]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu items with active indicator */}
        <nav className="flex flex-col gap-6 px-6">
          <button onClick={() => scrollToSection("beranda")} className={navStyle("beranda")}>
            Beranda
          </button>
          <button onClick={() => scrollToSection("tentang")} className={navStyle("tentang")}>
            Tentang Kami
          </button>
          <button onClick={() => scrollToSection("paket")} className={navStyle("paket")}>
            Paket
          </button>
          <button onClick={() => scrollToSection("fasilitas")} className={navStyle("fasilitas")}>
            Fasilitas
          </button>
          <button onClick={() => scrollToSection("galeri")} className={navStyle("galeri")}>
            Galeri
          </button>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
