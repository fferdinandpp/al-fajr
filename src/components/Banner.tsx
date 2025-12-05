import Banner from "../assets/img/Banner.png";

function App() {
  return (
    <div className="w-full h-[100dvh] relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Banner})` }}
      />

      <div
        className="
          absolute top-[120px] left-[40px]
          bg-[#393939] text-[#FFC265]
          px-6 py-2 rounded-full font-semibold
          shadow-lg text-sm md:text-base
          z-20
        "
      >
        No. 1 Di Indonesia
      </div>

      <div
        className="
        relative z-10 
        h-full 
        flex flex-col justify-center items-center 
        text-center text-[#3F3F3F] gap-5
        px-4 w-[90%] max-w-[450px] mx-auto
      "
      >
        <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
          Berangkat Umroh Lebih Mudah, Aman, dan Nyaman Bersama Alfajr
        </h1>

        <p className="text-sm md:text-base leading-relaxed">
          Pilih paket Umrah dan Haji Plus yang sesuai, dijamin murah,
          bergaransi, dan amanah
        </p>

        <a
          className="
            w-fit bg-[#CFAD48] py-3 px-6 rounded-lg font-extrabold
            shadow-[0_8px_10px_rgba(0,0,0,0.25)]
            text-base md:text-lg
          "
        >
          Kontak Kami
        </a>
      </div>
    </div>
  );
}

export default App;
