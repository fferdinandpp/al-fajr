import Background from "../assets/img/BGDetailPaket.png";
import Itenary from "../assets/icons/Itenary.png";
import Flyer from "../assets/icons/Flyer.png";
import Poster from "../assets/img/PosterPaket.jpg";
import Detail from "../assets/img/DetailPaket.png";
import Pesawat from "../assets/img/InformasiPesawat.png";
import Hotel1 from "../assets/img/Hotel1.png";
import Hotel2 from "../assets/img/Hotel2.png";

function App() {
  return (
    <>
      <div
  className="
    h-full bg-cover bg-center 
    px-5 py-8
    md:px-10 md:py-10
    lg:px-20
    pt-28 md:pt-32 lg:pt-36
  "
  style={{ backgroundImage: `url(${Background})` }}
>
  <div className="text-center">
    <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-extrabold pb-6 md:pb-10">
      PAKET UMROH FULL TURKEY
    </h1>

    <img
      src={Poster}
      className="mx-auto pb-6 md:pb-10 w-full max-w-sm md:max-w-md lg:max-w-lg"
      alt="Poster"
    />
  </div>

  {/* BUTTON ITINERARY - DAFTAR - FLYER */}
  <div
    className="
      flex flex-col md:flex-row
      justify-center items-center
      text-white gap-5 md:gap-20 pb-10
    "
  >
    <div className="flex items-center justify-between bg-[#393835] w-full md:w-56 h-14 px-6 rounded-full shadow-lg">
      <p className="font-bold text-lg">Itinerary</p>
      <img src={Itenary} alt="Itenary" />
    </div>

    <a
      href=""
      className="
        bg-[#393835] w-full md:w-36 text-center 
        p-3 rounded-md border border-[#FFC265]
      "
    >
      Daftar Sekarang
    </a>

    <div className="flex items-center justify-between bg-[#393835] w-full md:w-56 h-14 px-6 rounded-full shadow-lg">
      <p className="font-bold text-lg">Flyer</p>
      <img src={Flyer} alt="Flyer" />
    </div>
  </div>

  {/* DETAIL INFO */}
  <div>
    <img
      src={Detail}
      className="rounded-lg mx-auto pb-10 w-full max-w-2xl"
      alt="Detail Paket"
    />
    <div className="w-full h-[1px] bg-white mb-10"></div>
  </div>

  {/* INFORMASI PESAWAT */}
  <div className="text-white">
    <h1 className="text-xl md:text-2xl text-center pb-6 md:pb-10">
      INFORMASI PESAWAT
    </h1>
    <img
      src={Pesawat}
      className="mx-auto pb-10 w-full max-w-2xl"
      alt="Informasi Pesawat"
    />
    <div className="w-full h-[1px] bg-white mb-10"></div>
  </div>

  {/* INFORMASI HOTEL */}
  <div className="text-white">
    <h1 className="text-xl md:text-2xl text-center pb-8">
      INFORMASI HOTEL
    </h1>

    <div
      className="
        flex flex-col md:flex-row 
        md:justify-evenly items-center gap-10 md:gap-0
      "
    >
      {/* HOTEL 1 */}
      <div className="text-center">
        <div className="bg-black p-5 rounded-2xl mb-5 w-full max-w-sm mx-auto">
          <img src={Hotel1} className="mx-auto" alt="Hotel 1" />
        </div>
        <h2 className="text-lg md:text-xl font-bold">HOTEL TALAD AJYAD</h2>
        <p className="text-lg md:text-xl font-bold">(Makkah)</p>
      </div>

      {/* HOTEL 2 */}
      <div className="text-center">
        <div className="bg-black p-5 rounded-2xl mb-5 w-full max-w-sm mx-auto">
          <img src={Hotel2} className="mx-auto" alt="Hotel 2" />
        </div>
        <h2 className="text-lg md:text-xl font-bold">
          HOTEL KAYAN INTERNATIONAL
        </h2>
        <p className="text-lg md:text-xl font-bold">(Madinah)</p>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default App;
