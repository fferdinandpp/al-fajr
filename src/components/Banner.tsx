import Banner from "../assets/img/Banner.png";

function App() {
  return (
    <>
      <div
        className="h-[940px] flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="flex flex-col items-center w-[450px] text-[#3F3F3F] text-center gap-5">
          <h1 className="text-4xl font-extrabold">
            Berangkat Umroh Lebih Mudah, Aman, dan Nyaman Bersama Alfajr
          </h1>
          <p>
            Pilih paket Umrah dan Haji Plus yang sesuai, dijamin murah,
            bergaransi, dan amanah
          </p>
          <a
            href=""
            className="w-fit bg-[#CFAD48] p-3 rounded-lg font-extrabold shadow-[0_8px_10px_rgba(0,0,0,0.25)]"
          >
            Kontak Kami
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
