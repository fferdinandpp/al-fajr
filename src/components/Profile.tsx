import Background from "../assets/img/BGProfil.png";
import Logo from "../assets/img/LogoNoBG.png";
import Legal from "../assets/icons/Legal.png";

function App() {
  return (
    <>
      <div
        className="
        relative
        w-full h-fit 
        p-6 md:p-12 lg:p-20 
        flex flex-col lg:flex-row 
        items-center lg:items-start 
        justify-center 
        gap-10 md:gap-16 lg:gap-24
        bg-cover bg-center
        "
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 md:gap-16 lg:gap-24 w-full">
          <div
            className="flex justify-center lg:justify-center self-center w-full lg:w-auto"
          >
            <img
              src={Logo}
              className="bg-white rounded-3xl p-5 w-48 md:w-64 lg:w-[400px]" /* dibesarkan */
              alt="Logo"
            />
          </div>

          <div className="hidden lg:block w-[2px] bg-white"></div>

          <div className="w-full lg:w-1/2 text-white">
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold pb-5">
              Profil Perusahaan
            </h1>

            <p className="text-justify text-sm md:text-base lg:text-sm pb-7 leading-relaxed">
              Alfajr Travelindo Indonesia adalah biro perjalanan Umroh & Haji
              yang berdiri sejak tahun 2017 dan telah resmi berizin Kementerian
              Agama Republik Indonesia. Dengan kantor pusat di Solo serta
              jaringan mitra di berbagai kota, Alfajr berkomitmen menyediakan
              pelayanan perjalanan ibadah yang amanah, berkualitas, dan sesuai
              tuntunan Al-Qur’an dan sunnah. Komitmen ini menjadi prinsip yang
              terus dijaga dalam setiap aspek operasional perusahaan, mulai dari
              proses pendaftaran hingga jamaah kembali ke tanah air. Sebagai
              penyelenggara perjalanan yang terpercaya, Alfajr menawarkan
              beragam pilihan paket umroh yang fleksibel—mulai dari Umroh
              Reguler, Umroh Plus (Turki, Dubai, Malaysia, Singapura), hingga
              Umroh Ramadhan—yang dapat disesuaikan dengan kebutuhan jamaah.
              Ribuan jamaah telah diberangkatkan dengan tingkat kepuasan yang
              tinggi berkat pendampingan profesional, pelayanan ramah, dan
              bimbingan ibadah yang komprehensif. Dengan dukungan tim tour
              leader dan muthowif berpengalaman yang menempuh pendidikan di
              Timur Tengah dan berbagai lembaga Islam internasional, Alfajr
              memastikan setiap jamaah mendapatkan pengalaman ibadah yang benar,
              nyaman, dan penuh ketenangan. Selain itu, kehadiran kantor
              operasional di Jakarta, Tangerang, Jogja, Solo, serta belasan
              mitra lainnya di berbagai kota besar semakin memudahkan jamaah
              dari seluruh Indonesia untuk mendapatkan pelayanan terbaik. Dalam
              perjalanannya, Alfajr Travelindo Indonesia terus berinovasi,
              menjaga amanah jamaah, dan berupaya menjadi penyelenggara
              perjalanan umroh yang terpercaya, profesional, dan memberikan
              pengalaman ibadah yang berkesan.
            </p>

            <h2 className="text-center text-xl md:text-2xl font-extrabold pb-5">
              Legalitas Kami
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-5">
              <a
                href="https://drive.google.com/file/d/1ha9QaBCvJUjXX9eDsURBT7HjffyQClhS/view"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center gap-3 
                  bg-[#174623] border-2 border-[#7C7C7C] rounded-md 
                  w-full md:w-1/2 py-3 cursor-pointer hover:scale-[1.03] 
                  transition-transform duration-300"
              >
                <img src={Legal} className="w-8 md:w-10" alt="Legal" />
                <div>
                  <p className="text-xs text-white">
                    IZIN UMROH (PPIU) KEMENAG RI
                  </p>
                  <p className="text-[#CACF2C] text-xs">
                    Klik untuk melihat dokumen
                  </p>
                </div>
              </a>

              <a
                href="https://drive.google.com/file/d/1eQTMgzpHcx3O2vh62UGsG_43z1JPeu7m/view"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center gap-3 
                  bg-[#174623] border-2 border-[#7C7C7C] rounded-md 
                  w-full md:w-1/2 py-3 cursor-pointer hover:scale-[1.03]
                  transition-transform duration-300"
              >
                <img src={Legal} className="w-8 md:w-10" alt="Legal" />
                <div>
                  <p className="text-xs text-white">
                    AKREDITASI RESMI KEMENAG RI
                  </p>
                  <p className="text-[#CACF2C] text-xs">
                    Klik untuk melihat dokumen
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
