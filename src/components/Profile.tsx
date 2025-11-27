import Logo_2 from "../assets/img/Logo_2.png";
import Legal from "../assets/icons/Legal.png";

function App() {
  return (
    <>
      <div className="w-full h-fit p-20 flex justify-center gap-24 bg-gradient-to-br from-[#CDC8A3] via-[#9A967B] to-[#B3AF8F]">
        <div className="flex items-center">
          <img src={Logo_2} className="w-72" alt="Logo" />
        </div>
        <div className="w-[2px] bg-black"></div>
        <div className="w-1/2">
          <h1 className="text-center text-4xl font-extrabold pb-5">Profil Perusahaan</h1>
          <p className="text-justify pb-7">
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
            Al-Qur’an dan sunnah, mulai dari pendaftaran hingga kepulangan
            jamaah.
          </p>
          <h2 className="text-center text-2xl font-extrabold pb-5">Legalitas Kami</h2>
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center gap-3 bg-[#174623] border-2 border-[#7C7C7C] rounded-md w-1/2 py-2">
                <div>
                    <img src={Legal} className="w-10" alt="Legal" />
                </div>
                <div >
                    <p className="text-sm text-white">IZIN UMROH (PPIU) KEMENAG RI</p>
                    <p className="text-[#CACF2C]">SK U. 165 TAHUN 2021</p>
                </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-[#174623] border-2 border-[#7C7C7C] rounded-md w-1/2 py-2">
                <div>
                    <img src={Legal} className="w-10" alt="Legal" />
                </div>
                <div >
                    <p className="text-sm text-white">IZIN UMROH (PPIU) KEMENAG RI</p>
                    <p className="text-[#CACF2C]">SK U. 165 TAHUN 2021</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
