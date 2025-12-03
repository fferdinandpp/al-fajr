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
        className="h-full bg-cover bg-center px-20 py-10"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="text-center">
          <h1 className="text-4xl text-white font-extrabold pb-10">
            PAKET UMROH FULL TURKEY
          </h1>
          <img src={Poster} className="mx-auto pb-10" alt="Poster" />
        </div>
        <div className="flex justify-center text-white gap-20 pb-10">
          <div className="flex items-center justify-between bg-[#393835] w-56 h-14 px-6 rounded-full shadow-lg">
            <p className="font-bold text-lg">Itinenary</p>
            <img src={Itenary} alt="Itenary" />
          </div>
          <a
            href=""
            className="bg-[#393835] w-36 text-center my-auto p-3 rounded-md border border-[#FFC265]"
          >
            Daftar Sekarang
          </a>
          <div className="flex items-center justify-between bg-[#393835] w-56 h-14 px-6 rounded-full shadow-lg">
            <p className="font-bold text-lg">Flyer</p>
            <img src={Flyer} alt="Flyer" />
          </div>
        </div>
        <div>
          <img src={Detail} className="rounded-lg mx-auto pb-10" alt="Detail Paket" />
          <div className="w-full h-[1px] bg-white mb-10"></div>
        </div>
        <div className="text-white">
          <h1 className="text-2xl text-center pb-10">INFORMASI PESAWAT</h1>
          <img src={Pesawat} className="mx-auto pb-10" alt="Informasi Pesawat" />
          <div className="w-full h-[1px] bg-white mb-10"></div>
        </div>
        <div className="text-white">
          <h1 className="text-2xl text-center pb-10">INFORMASI HOTEL</h1>
          <div className="flex justify-evenly">
            <div>
              <div className="bg-black p-5 rounded-2xl mb-5">
                <img src={Hotel1} className="mx-auto" alt="Informasi Hotel" />
              </div>
              <h2 className="text-center text-xl font-bold">HOTEL TALAD AJYAD</h2>
              <p className="text-center text-xl font-bold">(Makkah)</p>
            </div>
            <div>
              <div className="bg-black p-5 rounded-2xl mb-5">
                <img src={Hotel2} className="mx-auto" alt="Informasi Hotel" />
              </div>
              <h2 className="text-center text-xl font-bold">HOTEL KAYAN INTERNATIONAL</h2>
              <p className="text-center text-xl font-bold">(Madinah)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
