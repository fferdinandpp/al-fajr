import Review from "../assets/img/Review.png";

function App() {
  return (
    <>
      <div
        className="
          w-full bg-cover bg-center 
          px-20 py-10 
          md:px-12 
          max-sm:px-4 max-sm:py-8
        "
        style={{ backgroundImage: `url(${Review})` }}
      >
        <div className="text-white text-center">
          <h1
            className="
              text-4xl font-extrabold pb-5 
              sm:text-2xl
            "
          >
            Testimoni dari Jamaah Kami
          </h1>

          <p
            className="
              max-w-2xl mx-auto pb-10
              text-base max-sm:text-sm px-2
            "
          >
            Kami sudah bersama 500.000+ Jamaah, inilah testimoni dari Jamaah
            yang bersama kami.
          </p>
        </div>

        <div
          className="
            flex flex-wrap justify-center gap-5 pb-10
            max-sm:gap-4
          "
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="
                bg-white/20 text-white italic 
                w-1/5 p-4 rounded-3xl 
                md:w-1/3 
                max-sm:w-full max-sm:p-4
              "
            >
              <h3
                className="
                  text-center font-extrabold pb-2 
                  sm:text-base
                "
              >
                Haji Gus Ghofur Chan
              </h3>

              <p
                className="
                  text-xs sm:text-[11px] leading-relaxed 
                  text-left
                "
              >
                ”Saya sangat berterimakasih kepada Al-Fajr Travelindo yang
                sangat profesional dalam membimbing kami selama ibadah Haji Plus
                di Tanah Suci.”
              </p>
            </div>
          ))}
        </div>

        <div
          className="
            text-white text-2xl font-extrabold text-center
            sm:text-lg sm:px-2
          "
        >
          Testimoni adalah bagian dari perjalanan kami untuk terus
          <br className="sm:hidden" />
          tumbuh dan menjadi yang lebih baik dari kemarin.
        </div>
      </div>
    </>
  );
}

export default App;
