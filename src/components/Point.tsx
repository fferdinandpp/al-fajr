import Plane from "../assets/icons/Plane.png";
import Mosque from "../assets/icons/Mosque.png";
import Graduation from "../assets/icons/Graduation.png";
import Maps from "../assets/icons/Maps.png";

function App() {
  return (
    <>
      <div className="w-full h-fit p-6 md:p-10 lg:p-12 flex flex-col justify-center items-center bg-gradient-to-br from-[#FFF4D5] via-[#D4CBB0] to-[#999380]">

        {/* TITLE */}
        <div className="text-center text-[#4A4A4A] w-full md:w-2/3 lg:w-1/3">
          <h1 className="text-2xl md:text-3xl font-extrabold pb-4 md:pb-5">
            Mengapa AlFajr Travelindo dibanding travel yang lain?
          </h1>
          <p className="pb-8 md:pb-10 text-sm md:text-base">
            Karena kepercayaan jamaah adalah prioritas kami untuk selalu
            memberikan yang terbaik
          </p>
        </div>

        {/* CARD WRAPPER */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-14 w-full">

          {[ 
            { icon: Plane, title: "Paket Umroh Beragam & Fleksibel" },
            { icon: Mosque, title: "Layanan Umroh Private (Custom)" },
            { icon: Graduation, title: "Pembimbing Sesuai Syariat" },
            { icon: Maps, title: "Tercepat & Memiliki Jaringan Luas" }
          ].map((item, i) => (
            <div
              key={i}
              className="
                flex flex-col bg-[#E2D798] rounded-lg p-5 md:p-6 lg:p-7 
                w-full sm:w-1/2 md:w-2/5 lg:w-2/5 gap-2 
                shadow-[0_8px_10px_rgba(0,0,0,0.25)]
              "
            >
              <div className="bg-black w-fit p-3 rounded-full mb-2">
                <img src={item.icon} className="w-6 md:w-7 lg:w-8" alt="Icon" />
              </div>

              <h3 className="font-bold text-lg md:text-xl">
                {item.title}
              </h3>

              <p className="text-xs md:text-sm">
                Mulai dari Umroh Reguler, Umroh Plus (Turki, Dubai, Malaysia),
                hingga program Super Ekonomis 23jt- all-in dan Super Joss 24jt
                (tanpa direct transit)
              </p>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}

export default App;
