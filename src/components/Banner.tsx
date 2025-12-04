import Banner from "../assets/img/Banner.png";

function App() {
  return (
    <>
      <div
        className="
          min-h-screen
          w-full
          flex justify-center items-center
          bg-cover bg-center bg-no-repeat
          pt-[100px]         /* kompensasi navbar */
          md:pt-[120px]
          lg:pt-[140px]
        "
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="flex flex-col items-center text-[#3F3F3F] text-center gap-5 
                        w-[90%] max-w-[450px] px-4">
          
          <h1 className="text-3xl md:text-4xl font-extrabold leading-snug m-0">
            Berangkat Umroh Lebih Mudah, Aman, dan Nyaman Bersama Alfajr
          </h1>

          <p className="text-sm md:text-base leading-relaxed m-0">
            Pilih paket Umrah dan Haji Plus yang sesuai, dijamin murah,
            bergaransi, dan amanah
          </p>

          <a
            className="w-fit bg-[#CFAD48] py-3 px-6 rounded-lg font-extrabold 
                       shadow-[0_8px_10px_rgba(0,0,0,0.25)] text-base md:text-lg"
          >
            Kontak Kami
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
