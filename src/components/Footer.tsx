import Logo from "../assets/img/LogoWhite.png";
import Instagram from "../assets/icons/Instagram.png";
import Youtube from "../assets/icons/YouTube.png";
import Tiktok from "../assets/icons/Tiktok.png";
import { useNavigate, useLocation } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Fungsi scroll universal (dipakai navbar & footer)
  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className="bg-[#5C584C] text-white px-20 pt-10 pb-5 
                      max-sm:px-6 max-sm:pt-8"
      >
        {/* WRAPPER */}
        <div
          className="flex gap-28 pb-5 
                        max-sm:flex-col max-sm:gap-10 max-sm:pb-8"
        >
          {/* ================= COLUMN 1 ================= */}
          <div className="max-sm:text-center max-sm:flex max-sm:flex-col max-sm:items-center">
            <img
              src={Logo}
              className="bg-white rounded-lg p-2 w-48 max-sm:w-28 object-contain"
              alt="Logo"
            />

            <p className="py-4 text-sm text-gray-200 max-sm:px-3 max-sm:text-center leading-relaxed">
              Kenyamanan Anda Menjadi Prioritas Kami,
              <br />
              Pelayanan No. 1 di Indonesia
            </p>

            {/* SOCIAL MEDIA MODERN GRID */}
            <div className="flex flex-col gap-3 w-full max-w-xs max-sm:mx-auto">
              <a
                href="https://www.instagram.com/alfajrumroh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 max-sm:justify-center hover:opacity-80 transition"
              >
                <img
                  src={Instagram}
                  className="bg-white p-1.5 w-9 rounded-xl"
                  alt="Instagram"
                />
                <p className="text-base font-semibold">@alfajrumroh</p>
              </a>

              <a
                href="https://www.youtube.com/@alfajrumroh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 max-sm:justify-center hover:opacity-80 transition"
              >
                <img
                  src={Youtube}
                  className="bg-white p-1.5 w-9 rounded-xl"
                  alt="Youtube"
                />
                <p className="text-base font-semibold">Al Fajr Umroh</p>
              </a>

              <a
                href="https://www.tiktok.com/@alfajrumroh.indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 max-sm:justify-center hover:opacity-80 transition"
              >
                <img
                  src={Tiktok}
                  className="bg-white p-1.5 w-9 rounded-xl"
                  alt="Tiktok"
                />
                <p className="text-base font-semibold">@alfajrumroh</p>
              </a>
            </div>
          </div>

          {/* ================= COLUMN 2 (NAVIGASI SCROLLABLE) ================= */}
          <div
            className="
    flex flex-col gap-2

    text-left                /* force left always */
    sm:text-left
    md:text-left
    lg:text-left
    xl:text-left

    max-sm:text-center       /* only mobile */
    max-sm:items-center
  "
          >
            <h3 className="pb-3 text-xl font-bold">Navigasi</h3>

            <button
              onClick={() => scrollToSection("tentang")}
              className="text-sm hover:text-[#CFAD48] transition text-left sm:text-left"
            >
              Tentang Kami
            </button>

            <button
              onClick={() => scrollToSection("fasilitas")}
              className="text-sm hover:text-[#CFAD48] transition text-left sm:text-left"
            >
              Maskapai Penerbangan
            </button>

            <button
              onClick={() => scrollToSection("fasilitas")}
              className="text-sm hover:text-[#CFAD48] transition text-left sm:text-left"
            >
              Fasilitas
            </button>

            <button
              onClick={() => scrollToSection("galeri")}
              className="text-sm hover:text-[#CFAD48] transition text-left sm:text-left"
            >
              Galeri
            </button>
          </div>

          {/* ================= COLUMN 3 ================= */}
          <div className="flex flex-col gap-4 max-sm:text-center max-sm:items-center max-sm:px-3">
            <h3 className="pb-3 text-xl font-bold">Lokasi Kami</h3>

            <p className="text-sm leading-relaxed">
              Solo : Jl. Al Ikhlas No.18, Mendungan, Pabelan, Kec. Kartasura
            </p>

            <p className="text-sm leading-relaxed">
              Yogyakarta : JL. Perintis Kemerdekaan No.39, Pandeyan, Kec.
              Umbulharjo
            </p>

            <p className="text-sm leading-relaxed">
              Jakarta : EightyEight@Kasablanka Tower A, Jl. Raya Casablanca
            </p>

            <p className="text-sm leading-relaxed">
              Tangerang : Jl. Veteran No.13A, Sukasari, Kota Tangerang
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="bg-white/40 h-[1px] w-full"></div>

        <p className="pt-5 text-sm max-sm:text-center text-gray-200 leading-relaxed">
          Copyright © 2006 - 2023 Al Fajr Travelindo <br />
          All Reserverd
        </p>
      </div>
    </>
  );
}

export default App;
