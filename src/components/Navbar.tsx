import { useEffect, useState } from "react";
import Logo from "../assets/img/Logo.png";
import Call from "../assets/icons/Call.png";
import { useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  onMenuChange: (state: boolean) => void;
}

function Navbar({ onMenuChange }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState(false);

  // PREMIUM ANIMATION STATES
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll Spy
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id: string) => {
    setOpenMenu(false);
    onMenuChange(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // PREMIUM NAVBAR ANIMATION
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setIsScrolled(current > 50);

      if (current > lastScrollY && current > 120) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Scroll Spy (premium)
  useEffect(() => {
    const sections = ["beranda", "tentang", "paket", "fasilitas", "galeri"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // DESKTOP style
  const navStyle = (id: string) =>
    `transition ${
      activeSection === id ? "text-[#B6942F] font-bold" : "text-[#525252]"
    }`;

  // SIDEBAR style
  const sidebarStyle = (id: string) =>
    `
    w-full text-left py-3 px-4 rounded-lg transition 
    ${
      activeSection === id
        ? "bg-[#CFAD48] text-white font-semibold"
        : "text-[#525252]"
    }
  `;

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-300 ease-out
          ${isHidden ? "-translate-y-full" : "translate-y-0"}
          ${isScrolled ? "backdrop-blur-xl bg-white/70 shadow-lg h-16" : "bg-white h-20 shadow-none"}
        `}
      >
        <div className="px-6 lg:px-20 flex items-center justify-between h-full">
          
          {/* LOGO */}
          <img src={Logo} className="h-12 md:h-14" alt="Logo" />

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex gap-10 items-center">
            <div className="flex gap-10">
              <button onClick={() => scrollToSection("beranda")} className={navStyle("beranda")}>Beranda</button>
              <button onClick={() => scrollToSection("tentang")} className={navStyle("tentang")}>Tentang Kami</button>
              <button onClick={() => scrollToSection("paket")} className={navStyle("paket")}>Paket</button>
              <button onClick={() => scrollToSection("fasilitas")} className={navStyle("fasilitas")}>Fasilitas</button>
              <button onClick={() => scrollToSection("galeri")} className={navStyle("galeri")}>Galeri</button>
            </div>

            <div className="flex items-center gap-6 text-[#525252]">
              <div className="flex gap-2 items-center">
                <img src={Call} className="w-7 h-7" alt="Call" />
                <p>+62 587123456</p>
              </div>
              <p>alfajr@travelindo.co.id</p>
            </div>
          </div>

          {/* BURGER */}
          <button
            className="lg:hidden"
            onClick={() => {
              setOpenMenu(true);
              onMenuChange(true); // 🔥 KIRIM KE APP
            }}
          >
            <svg className="w-8 h-8 text-[#525252]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        onClick={() => {
          setOpenMenu(false);
          onMenuChange(false); // 🔥 KIRIM KE APP
        }}
        className={`
          fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300 lg:hidden
          ${openMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* SIDEBAR */}
      <div
        className={`
          fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50
          transform transition-transform duration-300
          ${openMenu ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-end p-5">
          <button
            onClick={() => {
              setOpenMenu(false);
              onMenuChange(false); // 🔥 KIRIM KE APP
            }}
          >
            <svg className="w-7 h-7 text-[#525252]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-3 px-6">
          <button onClick={() => scrollToSection("beranda")} className={sidebarStyle("beranda")}>Beranda</button>
          <button onClick={() => scrollToSection("tentang")} className={sidebarStyle("tentang")}>Tentang Kami</button>
          <button onClick={() => scrollToSection("paket")} className={sidebarStyle("paket")}>Paket</button>
          <button onClick={() => scrollToSection("fasilitas")} className={sidebarStyle("fasilitas")}>Fasilitas</button>
          <button onClick={() => scrollToSection("galeri")} className={sidebarStyle("galeri")}>Galeri</button>

          <button
            onClick={() => scrollToSection("paket")}
            className="mt-6 bg-[#CFAD48] text-white font-bold py-3 px-4 rounded-lg w-full"
          >
            Booking Sekarang
          </button>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
