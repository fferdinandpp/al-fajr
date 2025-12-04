import Logo from "../assets/img/LogoNoBG.png";
import Legal from "../assets/icons/Legal.png";

function App() {
  return (
    <>
      <div
        className="
        w-full h-fit 
        p-6 md:p-12 lg:p-20 
        flex flex-col lg:flex-row 
        items-center lg:items-start 
        justify-center 
        gap-10 md:gap-16 lg:gap-24
        bg-gradient-to-br from-[#CDC8A3] via-[#9A967B] to-[#B3AF8F]
      "
      >
        {/* LOGO */}
        <div className="flex items-center justify-center lg:justify-start">
          <img src={Logo} className="w-40 md:w-56 lg:w-72" alt="Logo" />
        </div>

        {/* VERTICAL LINE */}
        <div className="hidden lg:block w-[2px] bg-black"></div>

        {/* CONTENT */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold pb-5">
            Profil Perusahaan
          </h1>

          <p className="text-justify text-sm md:text-base pb-7 leading-relaxed">
            Alfajr Travelindo Indonesia adalah biro perjalanan Umroh & Haji yang
            berdiri sejak 2017 dan telah resmi berizin Kementerian Agama,
            menjadikannya salah satu penyelenggara yang tepercaya. Berkantor
            pusat di Solo dan didukung jaringan kantor serta mitra di berbagai
            kota, Alfajr melayani jamaah dari seluruh Indonesia. Mereka
            menyediakan berbagai paket umroh, termasuk umroh reguler, umroh
            plus, dan umroh Ramadhan, yang dapat disesuaikan dengan kebutuhan
            jamaah. Ribuan jamaah telah diberangkatkan dengan tingkat kepuasan
            yang tinggi berkat pelayanan profesional dan pendampingan yang
            menyeluruh. Dengan visi menjadi penyelenggara perjalanan yang amanah
            dan berkualitas, Alfajr berkomitmen memberikan layanan sesuai
            Al-Qur’an dan sunnah.
          </p>

          <h2 className="text-center text-xl md:text-2xl font-extrabold pb-5">
            Legalitas Kami
          </h2>

          {/* LEGAL CARDS */}
          <div className="flex flex-col md:flex-row items-center gap-5">
            {/* Card 1 — IZIN UMROH */}
            <a
              href="https://drive.google.com/file/d/1ha9QaBCvJUjXX9eDsURBT7HjffyQClhS/view"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-3 
                bg-[#174623] border-2 border-[#7C7C7C] rounded-md 
                w-full md:w-1/2 py-3 cursor-pointer hover:scale-[1.03] 
                transition-transform duration-300
              "
            >
              <img src={Legal} className="w-8 md:w-10" alt="Legal" />
              <div>
                <p className="text-xs md:text-sm text-white">
                  IZIN UMROH (PPIU) KEMENAG RI
                </p>
                <p className="text-[#CACF2C] text-xs md:text-sm">
                  Klik untuk melihat dokumen
                </p>
              </div>
            </a>

            {/* Card 2 — AKREDITASI */}
            <a
              href="https://drive.google.com/file/d/1eQTMgzpHcx3O2vh62UGsG_43z1JPeu7m/view"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-3 
                bg-[#174623] border-2 border-[#7C7C7C] rounded-md 
                w-full md:w-1/2 py-3 cursor-pointer hover:scale-[1.03]
                transition-transform duration-300
              "
            >
              <img src={Legal} className="w-8 md:w-10" alt="Legal" />
              <div>
                <p className="text-xs md:text-sm text-white">
                  AKREDITASI RESMI KEMENAG RI
                </p>
                <p className="text-[#CACF2C] text-xs md:text-sm">
                  Klik untuk melihat dokumen
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
