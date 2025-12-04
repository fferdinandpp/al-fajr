import Logo from "../assets/img/Logo.png";
import Instagram from "../assets/icons/Instagram.png";
import Youtube from "../assets/icons/YouTube.png";
import Tiktok from "../assets/icons/Tiktok.png";

function App() {
  return (
    <>
      <div className="bg-[#5C584C] text-white px-20 pt-10 pb-5 
                      max-sm:px-6 max-sm:pt-8">

        {/* Wrapper kolom */}
        <div className="flex gap-28 pb-5 
                        max-sm:flex-col max-sm:gap-10 max-sm:pb-8">

          {/* Kolom 1 */}
          <div className="max-sm:text-center max-sm:flex max-sm:flex-col max-sm:items-center">
            <img
              src={Logo}
              className="rounded-lg bg-white py-3 px-5 max-sm:w-32"
              alt="Logo"
            />
            <p className="py-5 text-sm max-sm:px-2">
              Kenyamanan Anda Menjadi Prioritas Kami,
              <br /> Pelayanan No. 1 di Indonesia
            </p>

            <div className="flex flex-col gap-3 max-sm:items-center">
              <a
                href="https://www.instagram.com/alfajrumroh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:opacity-80 transition max-sm:justify-center"
              >
                <img
                  src={Instagram}
                  className="bg-white p-1.5 w-10 rounded-lg"
                  alt="Instagram"
                />
                <p className="text-lg font-semibold">@alfajrumroh</p>
              </a>

              <a
                href="https://www.youtube.com/@alfajrumroh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:opacity-80 transition max-sm:justify-center"
              >
                <img
                  src={Youtube}
                  className="bg-white p-1.5 w-10 rounded-lg"
                  alt="Youtube"
                />
                <p className="text-lg font-semibold">Al Fajr Umroh</p>
              </a>

              <a
                href="https://www.tiktok.com/@alfajrumroh.indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:opacity-80 transition max-sm:justify-center"
              >
                <img
                  src={Tiktok}
                  className="bg-white p-1.5 w-10 rounded-lg"
                  alt="Tiktok"
                />
                <p className="text-lg font-semibold">@alfajrumroh</p>
              </a>
            </div>
          </div>

          {/* Kolom 2 */}
          <div className="flex flex-col gap-2 max-sm:text-center max-sm:items-center">
            <h3 className="pb-3 text-xl font-bold">Navigasi</h3>
            <p>Tentang Kami</p>
            <p>Maskapai Penerbangan</p>
            <p>Fasilitas</p>
            <p>Galeri</p>
          </div>

          {/* Kolom 3 */}
          <div className="flex flex-col gap-4 max-sm:text-center max-sm:items-center">
            <h3 className="pb-3 text-xl font-bold">Lokasi Kami</h3>
            <p>
              Solo : Jl. Al Ikhlas No.18, Mendungan, Pabelan, Kec. Kartasura
            </p>
            <p>
              Yogyakarta : JL.Perintis Kemerdekaan No.39, Pandeyan, <br />
              Kec. Umbulharjo, Kota Yogyakarta
            </p>
            <p>
              Jakarta : Jl. EightyEight@Kasablanka Tower A, Jl. <br />
              Raya Casablanca, Jakarta Selatan
            </p>
            <p>Tangerang : Jl. Veteran No.13A, Sukasari, Kota Tangerang</p>
          </div>
        </div>

        <div className="bg-white h-0.5 w-full"></div>

        <p className="pt-5 text-sm max-sm:text-center">
          Copyright © 2006 - 2023 Al Fajr Travelindo | All <br />
          Reserverd
        </p>
      </div>
    </>
  );
}

export default App;
