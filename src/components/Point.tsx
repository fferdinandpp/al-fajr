import Point1 from "../assets/icons/Point1.png";
import Point2 from "../assets/icons/Point2.png";
import Point3 from "../assets/icons/Point3.png";
import Point4 from "../assets/icons/Point4.png";

function App() {
  return (
    <>
      <div className="w-full h-fit p-6 md:p-10 lg:p-12 flex flex-col justify-center items-center bg-gradient-to-br from-[#FFF4D5] via-[#D4CBB0] to-[#999380]">
        <div className="text-center text-[#4A4A4A] w-full md:w-2/3 lg:w-1/3">
          <h1 className="text-2xl md:text-3xl font-extrabold pb-4 md:pb-5">
            Mengapa AlFajr Travelindo dibanding travel yang lain?
          </h1>
          <p className="pb-8 md:pb-10 text-sm md:text-base">
            Karena kepercayaan jamaah adalah prioritas kami untuk selalu
            memberikan yang terbaik
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-14 w-full">
          {[
            {
              icon: Point1,
              title: "Paket Umroh Beragam & Fleksibel",
              desc: "Alfajr menyediakan paket Umroh Reguler, Umroh Plus (Turki, Dubai, Malaysia, Singapura), hingga Umroh Ramadhan. Tersedia juga program Super Ekonomis 23jt all-in dan Super Joss 24jt tanpa transit.",
            },
            {
              icon: Point2,
              title: "Layanan Umroh Private (Custom)",
              desc: "Jamaah dapat menentukan sendiri durasi keberangkatan, pilihan hotel, maskapai, tour leader, bahkan muthowif. Semua dapat disesuaikan dengan kebutuhan keluarga atau rombongan.",
            },
            {
              icon: Point3,
              title: "Pembimbing Sesuai Syariat",
              desc: "Dibimbing oleh tour leader dan muthowif profesional dengan latar pendidikan dari Timur Tengah seperti Al-Azhar Mesir, Sudan, Maroko, Saudi Arabia (UIM & Ummul Quro). Ibadah lebih tenang dan terarah.",
            },
            {
              icon: Point4,
              title: "Tercepat & Memiliki Jaringan Luas",
              desc: "Memiliki kantor operasional di Solo, Jakarta, Tangerang, Jogja, serta lebih dari 13 mitra di berbagai kota besar. Jamaah dari seluruh Indonesia mudah mendapatkan pelayanan resmi dan terpercaya.",
            },
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

              <h3 className="font-bold text-lg md:text-xl">{item.title}</h3>

              <p className="text-xs md:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
