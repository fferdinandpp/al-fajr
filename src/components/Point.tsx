import Plane from "../assets/icons/Plane.png";
import Mosque from "../assets/icons/Mosque.png";
import Graduation from "../assets/icons/Graduation.png";
import Maps from "../assets/icons/Maps.png";

function App() {
  return (
    <>
      <div className="w-full h-fit p-12 flex flex-col justify-center items-center bg-gradient-to-br from-[#FFF4D5] via-[#D4CBB0] to-[#999380]">
        <div className="text-center text-[#4A4A4A] w-1/3">
          <h1 className="text-3xl font-extrabold pb-5">
            Mengapa AlFajr Travelindo dibanding travel yang lain?
          </h1>
          <p className="pb-10">
            Karena kepercayaan jamaah adalah prioritas kami untuk selalu
            memberikan yang terbaik
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-14">
          <div className=" flex flex-col bg-[#E2D798] rounded-lg p-7 w-2/5 gap-2 shadow-[0_8px_10px_rgba(0,0,0,0.25)]">
            <div className="bg-black w-fit p-3 rounded-full">
              <img src={Plane} className="w-8" alt="Plane" />
            </div>
            <h3 className="font-bold text-xl">
              Paket Umroh Beragam & Fleksibel
            </h3>
            <p className="text-sm">
              Mulai dari Umroh Reguler, Umroh Plus (Turki, Dubai, Malaysia),
              hingga program Super Ekonomis 23jt- all-in dan Super Joss 24jt
              (tanpa direct transit)
            </p>
          </div>
          <div className=" flex flex-col bg-[#E2D798] rounded-lg p-7 w-2/5 gap-2 shadow-[0_8px_10px_rgba(0,0,0,0.25)]">
            <div className="bg-black w-fit p-3 rounded-full">
              <img src={Mosque} className="w-8" alt="Mosque" />
            </div>
            <h3 className="font-bold text-xl">
              Layanan Umroh Private (Custom)
            </h3>
            <p className="text-sm">
              Mulai dari Umroh Reguler, Umroh Plus (Turki, Dubai, Malaysia),
              hingga program Super Ekonomis 23jt- all-in dan Super Joss 24jt
              (tanpa direct transit)
            </p>
          </div>
          <div className=" flex flex-col bg-[#E2D798] rounded-lg p-7 w-2/5 gap-2 shadow-[0_8px_10px_rgba(0,0,0,0.25)]">
            <div className="bg-black w-fit p-3 rounded-full">
              <img src={Graduation} className="w-8" alt="Graduation" />
            </div>
            <h3 className="font-bold text-xl">Pembimbing Sesuai Syariat</h3>
            <p className="text-sm">
              Mulai dari Umroh Reguler, Umroh Plus (Turki, Dubai, Malaysia),
              hingga program Super Ekonomis 23jt- all-in dan Super Joss 24jt
              (tanpa direct transit)
            </p>
          </div>
          <div className=" flex flex-col bg-[#E2D798] rounded-lg p-7 w-2/5 gap-2 shadow-[0_8px_10px_rgba(0,0,0,0.25)]">
            <div className="bg-black w-fit p-3 rounded-full">
              <img src={Maps} className="w-8" alt="Maps" />
            </div>
            <h3 className="font-bold text-xl">
              Tercepat & Memiliki Jaringan Luas
            </h3>
            <p className="text-sm">
              Mulai dari Umroh Reguler, Umroh Plus (Turki, Dubai, Malaysia),
              hingga program Super Ekonomis 23jt- all-in dan Super Joss 24jt
              (tanpa direct transit)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
