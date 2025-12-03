import Packet from "../assets/img/Packet.png";
import Airport from "../assets/icons/Airport.png";
import Sleep from "../assets/icons/Sleep.png";
import Buildings from "../assets/icons/Buildings.png";
import Mascapai from "../assets/icons/Mascapai.png";
import {Link} from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-full p-12 bg-[#EEEEEE]">
        <div className="flex flex-col items-center text-center text-[#4A4A4A]">
          <h1 className="w-1/3 text-4xl font-extrabold pb-5">
            Paket Umrah dan Haji Plus Al-Fajr Travelindo
          </h1>
          <p className="w-1/3 pb-10">
            Pilih paket Umrah dan Haji Plus yang sesuai, dijamin murah,
            bergaransi, dan amanah
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-16 pb-10">
          <div className=" flex flex-col bg-[#4A4D4E] rounded-lg p-7 w-1/3 gap-2">
            <img src={Packet} className="w-full pb-5" alt="Packet" />
            <div className="flex justify-between pb-2">
              <p className="text-[#E2D798] font-semibold text-lg">Bronze</p>
              <p className="bg-[#E2D798] py-2 px-5 rounded-l-full font-bold">
                Best Seller
              </p>
            </div>
            <h3 className="font-extrabold text-lg text-white">
              PAKET UMRAH NOVEMBER SV TURKEY 12 HARI
            </h3>
            <h3 className="font-extrabold text-2xl text-white">
              Rp 30.000.000/ orang
            </h3>
            <div className="flex flex-col gap-3 pb-5">
              <div className="flex items-center gap-3">
                <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                  <img src={Mascapai} className="w-6" alt="Mascapai" />
                </div>
                <p className="text-[#E2D798]">Saudi Airlines</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                  <img src={Sleep} className="w-6" alt="Sleep" />
                </div>
                <p className="text-[#E2D798] text-sm">
                  Kayan International (Bintang 3) + <br />
                  Jarak ke Masjid Nabawi 200 m
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                  <img src={Buildings} className="w-6" alt="Buildings" />
                </div>
                <p className="text-[#E2D798] text-sm">
                  Talat Ajyad (Bintang 3) + Jarak ke <br />
                  Masjidil Haram 500 m – 700 m
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                  <img src={Airport} className="w-6" alt="Airport" />
                </div>
                <p className="text-[#E2D798]">
                  Adi Sumarmo Airport International
                </p>
              </div>
            </div>
            <div className="flex flex-col text-center items-end gap-3">
              <a
                href=""
                className="bg-[#F69500] border-2 border-[#FFC265] text-white text-sm w-2/5 py-2 rounded-md"
              >
                Daftar Sekarang
              </a>
              <Link
                to="/packet-details"
                className="border-2 border-[#FFC265] text-[#FFC265] text-sm w-2/5 py-2 rounded-md"
              >
                Lihat Selengkapnya
              </Link>
            </div>
          </div>
          <div className=" flex flex-col bg-[#4A4D4E] rounded-lg p-7 w-1/3 gap-2">
            <img src={Packet} className="w-full pb-5" alt="Packet" />
            <div className="flex justify-between pb-2">
              <p className="text-[#E2D798] font-semibold text-lg">Bronze</p>
              <p className="bg-[#E2D798] py-2 px-5 rounded-l-full font-bold">
                Best Seller
              </p>
            </div>
            <h3 className="font-extrabold text-lg text-white">
              PAKET UMRAH NOVEMBER SV TURKEY 12 HARI
            </h3>
            <h3 className="font-extrabold text-2xl text-white">
              Rp 30.000.000/ orang
            </h3>
            <div className="flex flex-col gap-3 pb-5">
              <div className="flex items-center gap-3">
                <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                  <img src={Mascapai} className="w-6" alt="Mascapai" />
                </div>
                <p className="text-[#E2D798]">Saudi Airlines</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                  <img src={Sleep} className="w-6" alt="Sleep" />
                </div>
                <p className="text-[#E2D798] text-sm">
                  Kayan International (Bintang 3) + <br />
                  Jarak ke Masjid Nabawi 200 m
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                  <img src={Buildings} className="w-6" alt="Buildings" />
                </div>
                <p className="text-[#E2D798] text-sm">
                  Talat Ajyad (Bintang 3) + Jarak ke <br />
                  Masjidil Haram 500 m – 700 m
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                  <img src={Airport} className="w-6" alt="Airport" />
                </div>
                <p className="text-[#E2D798]">
                  Adi Sumarmo Airport International
                </p>
              </div>
            </div>
            <div className="flex flex-col text-center items-end gap-3">
              <a
                href=""
                className="bg-[#F69500] border-2 border-[#FFC265] text-white text-sm w-2/5 py-2 rounded-md"
              >
                Daftar Sekarang
              </a>
              <Link
                to="/packet-details"
                className="border-2 border-[#FFC265] text-[#FFC265] text-sm w-2/5 py-2 rounded-md"
              >
                Lihat Selengkapnya
              </Link>
            </div>
          </div>
          <div className=" flex flex-col bg-[#4A4D4E] rounded-lg p-7 w-1/3 gap-2">
            <img src={Packet} className="w-full pb-5" alt="Packet" />
            <div className="flex justify-between pb-2">
              <p className="text-[#E2D798] font-semibold text-lg">Bronze</p>
              <p className="bg-[#E2D798] py-2 px-5 rounded-l-full font-bold">
                Best Seller
              </p>
            </div>
            <h3 className="font-extrabold text-lg text-white">
              PAKET UMRAH NOVEMBER SV TURKEY 12 HARI
            </h3>
            <h3 className="font-extrabold text-2xl text-white">
              Rp 30.000.000/ orang
            </h3>
            <div className="flex flex-col gap-3 pb-5">
              <div className="flex items-center gap-3">
                <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                  <img src={Mascapai} className="w-6" alt="Mascapai" />
                </div>
                <p className="text-[#E2D798]">Saudi Airlines</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                  <img src={Sleep} className="w-6" alt="Sleep" />
                </div>
                <p className="text-[#E2D798] text-sm">
                  Kayan International (Bintang 3) + <br />
                  Jarak ke Masjid Nabawi 200 m
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                  <img src={Buildings} className="w-6" alt="Buildings" />
                </div>
                <p className="text-[#E2D798] text-sm">
                  Talat Ajyad (Bintang 3) + Jarak ke <br />
                  Masjidil Haram 500 m – 700 m
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                  <img src={Airport} className="w-6" alt="Airport" />
                </div>
                <p className="text-[#E2D798]">
                  Adi Sumarmo Airport International
                </p>
              </div>
            </div>
            <div className="flex flex-col text-center items-end gap-3">
              <a
                href=""
                className="bg-[#F69500] border-2 border-[#FFC265] text-white text-sm w-2/5 py-2 rounded-md"
              >
                Daftar Sekarang
              </a>
              <Link
                to="/packet-details"
                className="border-2 border-[#FFC265] text-[#FFC265] text-sm w-2/5 py-2 rounded-md"
              >
                Lihat Selengkapnya
              </Link>
            </div>
          </div>
          <div className=" flex flex-col bg-[#4A4D4E] rounded-lg p-7 w-1/3 gap-2">
            <img src={Packet} className="w-full pb-5" alt="Packet" />
            <div className="flex justify-between pb-2">
              <p className="text-[#E2D798] font-semibold text-lg">Bronze</p>
              <p className="bg-[#E2D798] py-2 px-5 rounded-l-full font-bold">
                Best Seller
              </p>
            </div>
            <h3 className="font-extrabold text-lg text-white">
              PAKET UMRAH NOVEMBER SV TURKEY 12 HARI
            </h3>
            <h3 className="font-extrabold text-2xl text-white">
              Rp 30.000.000/ orang
            </h3>
            <div className="flex flex-col gap-3 pb-5">
              <div className="flex items-center gap-3">
                <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                  <img src={Mascapai} className="w-6" alt="Mascapai" />
                </div>
                <p className="text-[#E2D798]">Saudi Airlines</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                  <img src={Sleep} className="w-6" alt="Sleep" />
                </div>
                <p className="text-[#E2D798] text-sm">
                  Kayan International (Bintang 3) + <br />
                  Jarak ke Masjid Nabawi 200 m
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                  <img src={Buildings} className="w-6" alt="Buildings" />
                </div>
                <p className="text-[#E2D798] text-sm">
                  Talat Ajyad (Bintang 3) + Jarak ke <br />
                  Masjidil Haram 500 m – 700 m
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                  <img src={Airport} className="w-6" alt="Airport" />
                </div>
                <p className="text-[#E2D798]">
                  Adi Sumarmo Airport International
                </p>
              </div>
            </div>
            <div className="flex flex-col text-center items-end gap-3">
              <a
                href=""
                className="bg-[#F69500] border-2 border-[#FFC265] text-white text-sm w-2/5 py-2 rounded-md"
              >
                Daftar Sekarang
              </a>
              <Link
                to="/packet-details"
                className="border-2 border-[#FFC265] text-[#FFC265] text-sm w-2/5 py-2 rounded-md"
              >
                Lihat Selengkapnya
              </Link>
            </div>
          </div>
        </div>
        <div className="text-2xl text-center font-semibold">
          Yuk, segera daftarkan Anda bersama Keluarga, <br/>menjalankan ibadah yang
          paling mulia dan percayakan <br/>AlFajr Travelindo sebagai pendampingmu.
        </div>
      </div>
    </>
  );
}

export default App;
