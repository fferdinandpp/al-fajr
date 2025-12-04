import Packet from "../assets/img/Packet.png";
import Airport from "../assets/icons/Airport.png";
import Sleep from "../assets/icons/Sleep.png";
import Buildings from "../assets/icons/Buildings.png";
import Mascapai from "../assets/icons/Mascapai.png";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-full p-6 md:p-10 lg:p-12 bg-[#EEEEEE]">

        {/* HEADER TITLE */}
        <div className="flex flex-col items-center text-center text-[#4A4A4A]">
          <h1 className="w-full md:w-2/3 lg:w-1/3 text-2xl md:text-3xl lg:text-4xl font-extrabold pb-3 md:pb-5">
            Paket Umrah dan Haji Plus Al-Fajr Travelindo
          </h1>
          <p className="w-full md:w-2/3 lg:w-1/3 pb-8 md:pb-10 text-sm md:text-base">
            Pilih paket Umrah dan Haji Plus yang sesuai, dijamin murah,
            bergaransi, dan amanah
          </p>
        </div>

        {/* CARD WRAPPER */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 pb-10">

          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="
                flex flex-col bg-[#4A4D4E] rounded-lg p-5 md:p-6 lg:p-7 
                w-full sm:w-1/2 md:w-1/2 lg:w-1/2
                max-w-[400px]
                gap-2
              "
            >
              <img src={Packet} className="w-full pb-3 md:pb-5" alt="Packet" />

              <div className="flex justify-between pb-2">
                <p className="text-[#E2D798] font-semibold text-base md:text-lg">Bronze</p>
                <p className="bg-[#E2D798] py-1 md:py-2 px-3 md:px-5 rounded-l-full font-bold text-xs md:text-sm">
                  Best Seller
                </p>
              </div>

              <h3 className="font-extrabold text-base md:text-lg text-white">
                PAKET UMRAH NOVEMBER SV TURKEY 12 HARI
              </h3>

              <h3 className="font-extrabold text-xl md:text-2xl text-white">
                Rp 30.000.000/ orang
              </h3>

              <div className="flex flex-col gap-3 pb-4 md:pb-5">

                <div className="flex items-center gap-3">
                  <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                    <img src={Mascapai} className="w-5 md:w-6" alt="Mascapai" />
                  </div>
                  <p className="text-[#E2D798] text-sm md:text-base">Saudi Airlines</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                    <img src={Sleep} className="w-5 md:w-6" alt="Sleep" />
                  </div>
                  <p className="text-[#E2D798] text-xs md:text-sm">
                    Kayan International (Bintang 3) + <br />
                    Jarak ke Masjid Nabawi 200 m
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                    <img src={Buildings} className="w-5 md:w-6" alt="Buildings" />
                  </div>
                  <p className="text-[#E2D798] text-xs md:text-sm">
                    Talat Ajyad (Bintang 3) + Jarak ke <br />
                    Masjidil Haram 500 m – 700 m
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                    <img src={Airport} className="w-5 md:w-6" alt="Airport" />
                  </div>
                  <p className="text-[#E2D798] text-sm md:text-base">
                    Adi Sumarmo Airport International
                  </p>
                </div>

              </div>

              <div className="flex flex-col text-center items-end gap-3">
                <a
                  href=""
                  className="bg-[#F69500] border-2 border-[#FFC265] text-white text-sm w-1/2 md:w-2/5 py-2 rounded-md"
                >
                  Daftar Sekarang
                </a>
                <Link
                  to="/packet-details"
                  className="border-2 border-[#FFC265] text-[#FFC265] text-sm w-1/2 md:w-2/5 py-2 rounded-md"
                >
                  Lihat Selengkapnya
                </Link>
              </div>

            </div>
          ))}
        </div>

        <div className="text-lg md:text-xl lg:text-2xl text-center font-semibold leading-relaxed">
          Yuk, segera daftarkan Anda bersama Keluarga, <br className="hidden md:block" />
          menjalankan ibadah yang paling mulia dan percayakan <br className="hidden md:block" />
          AlFajr Travelindo sebagai pendampingmu.
        </div>

      </div>
    </>
  );
}

export default App;
