import { useEffect, useState } from "react";
import Logo from "../assets/img/Logo.png";
import Call from "../assets/icons/Call.png";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // ⭐ Track section yang sedang aktif
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // --- Hide navbar saat scroll ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) setShow(false);
      else setShow(true);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // --- Scroll Spy untuk deteksi section aktif ---
  useEffect(() => {
    const sections = ["beranda", "tentang", "paket", "fasilitas", "galeri"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 } // 40% terlihat baru dianggap aktif
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ⭐ Utility untuk styling active
  const navStyle = (id: string) =>
    `transition font-medium ${
      activeSection === id ? "text-[#B6942F] font-bold" : "text-[#525252]"
    }`;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-transform duration-300 shadow-md
        ${show ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="px-20 flex items-center justify-between">
        <div className="h-20 flex justify-center items-center gap-10">
          <img src={Logo} alt="Logo" />

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

          <div className="flex gap-2 items-center text-[#525252]">
            <img src={Call} className="w-7 h-7" alt="Call" />
            <p>+62 587123456</p>
          </div>

          <p className="text-[#525252]">alfajr@travelindo.co.id</p>
        </div>

        <div>
          <button
            onClick={() => scrollToSection("paket")}
            className="bg-[#CFAD48] rounded-lg p-4 font-semibold"
          >
            Booking Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
