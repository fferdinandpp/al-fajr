import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Airport from "../assets/icons/Airport.png";
import Sleep from "../assets/icons/Sleep.png";
import Buildings from "../assets/icons/Buildings.png";
import Mascapai from "../assets/icons/Mascapai.png";

interface MarketingData {
  name: string;
  phone: string;
}

interface PaketData {
  id: number;
  judul: string;
  nama_paket: string;
  kategori: string;
  maskapai: string;
  harga_tampil: number;
  gambar_url: string;
  kota_keberangkatan: string;
  bandara_keberangkatan: string;
  durasi_paket: string;
  status_paket?: string;
}

function Packet() {
  const [pakets, setPakets] = useState<PaketData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  // State untuk menyimpan data Marketing lengkap
  const [marketing, setMarketing] = useState<MarketingData | null>(null);

  // 1. Fetch Data Paket
  useEffect(() => {
    fetch("https://adminside.alfajrumroh.co.id/api/paket")
      .then((res) => res.json())
      .then((json) => {
        if (json?.data) {
          setPakets(json.data);
          setError(false);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  // 2. Fetch Data Marketing (Logika Baru)
  useEffect(() => {
    fetch("https://adminside.alfajrumroh.co.id/api/marketing-current")
      .then((res) => res.json())
      .then((json) => {
        const data = json?.data;
        if (!data) return;

        setMarketing({
          name: data.name,
          phone: data.phone_number || "", // Simpan apa adanya dulu
        });
      })
      .catch((err) => console.log("Marketing API Error:", err));
  }, []);

  // 3. Fungsi Handler Klik Daftar (Logika Pembersihan Nomor)
  const handleDaftar = (e: React.MouseEvent, namaPaket: string) => {
    e.preventDefault(); 

    if (!marketing?.phone) {
      alert("Sedang memuat kontak marketing, mohon tunggu sebentar...");
      return;
    }

    // Bersihkan nomor
    let cleanPhone = marketing.phone.replace(/\D/g, "");

    // Format Internasional (WA wajib 62 bukan 0)
    if (cleanPhone.startsWith("0")) {
      cleanPhone = "62" + cleanPhone.substring(1);
    }

    const message = encodeURIComponent(
      `Halo, saya ingin mendaftar paket: ${namaPaket}`
    );
    
    window.open(`https://wa.me/${cleanPhone}?text=${message}`, "_blank");
  };

  return (
    <>
      <div className="w-full p-6 md:p-10 lg:p-12 bg-[#EEEEEE]">
        <div className="flex flex-col items-center text-center text-[#4A4A4A]">
          <h1 className="w-full md:w-2/3 lg:w-1/3 text-2xl md:text-3xl lg:text-4xl font-extrabold pb-3 md:pb-5">
            Paket Umrah dan Haji Plus Al-Fajr Travelindo
          </h1>
          <p className="w-full md:w-2/3 lg:w-1/3 pb-8 md:pb-10 text-sm md:text-base">
            Pilih paket terbaik sesuai kebutuhan Anda. Terjangkau & terpercaya.
          </p>
        </div>

        {loading && (
          <div className="text-center py-20">
             <span className="loading loading-dots loading-lg text-[#F69500]"></span>
             <p className="text-gray-500 mt-2">Memuat paket...</p>
          </div>
        )}

        {!loading && error && (
          <p className="text-red-500 text-center font-semibold py-10">
            Gagal memuat paket. Silakan coba lagi nanti.
          </p>
        )}

        {!loading && !error && (
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 pb-10">
            {pakets.map((item) => (
              <div
                key={item.id}
                className="
                  flex flex-col bg-[#4A4D4E] rounded-lg p-5 md:p-6 lg:p-7 
                  w-full sm:w-1/2 md:w-1/2 lg:w-1/2
                  max-w-[400px]
                  gap-2
                  hover:scale-105 transition-transform duration-300 shadow-xl
                "
              >
                <img
                  src={item.gambar_url}
                  className="w-full h-48 md:h-56 object-cover rounded-lg pb-3 md:pb-5"
                  alt={item.nama_paket}
                />

                <div className="flex justify-between pb-2">
                  <p className="text-[#E2D798] font-semibold text-base md:text-lg">
                    {item.kategori}
                  </p>
                  <p className="bg-[#E2D798] py-1 md:py-2 px-3 md:px-5 rounded-l-full font-bold text-xs md:text-sm shadow-md">
                    {item.status_paket || "Best Seller"}
                  </p>
                </div>

                <h3 className="font-extrabold text-base md:text-lg text-white line-clamp-2 min-h-[56px]">
                  {item.nama_paket}
                </h3>

                <h3 className="font-extrabold text-xl md:text-2xl text-white">
                  Rp {item.harga_tampil.toLocaleString("id-ID")}
                  <span className="text-sm font-normal text-gray-300"> / pax</span>
                </h3>

                <div className="flex flex-col gap-3 pb-4 md:pb-5 mt-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                      <img
                        src={Mascapai}
                        className="w-5 md:w-6"
                        alt="Maskapai"
                      />
                    </div>
                    <p className="text-[#E2D798] text-sm md:text-base">
                      {item.maskapai}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                      <img src={Sleep} className="w-5 md:w-6" alt="Durasi" />
                    </div>
                    <p className="text-[#E2D798] text-sm md:text-base">
                      Durasi {item.durasi_paket} hari
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                      <img src={Buildings} className="w-5 md:w-6" alt="Kota" />
                    </div>
                    <p className="text-[#E2D798] text-sm md:text-base">
                      {item.kota_keberangkatan}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-[#FFC265] w-fit p-2 rounded-lg">
                      <img src={Airport} className="w-5 md:w-6" alt="Bandara" />
                    </div>
                    <p className="text-[#E2D798] text-sm md:text-base">
                      {item.bandara_keberangkatan}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col text-center items-end gap-3 mt-auto">
                  {/* BUTTON DAFTAR SEKARANG */}
                  <button
                    onClick={(e) => handleDaftar(e, item.nama_paket)}
                    className="
                      bg-[#F69500] border-2 border-[#FFC265] 
                      text-white font-bold text-sm 
                      w-1/2 md:w-2/5 py-2 rounded-md
                      hover:bg-[#d58200] transition-colors
                    "
                  >
                    Daftar Sekarang
                  </button>

                  <Link
                    to={`/packet-details?id=${item.id}`}
                    className="
                      border-2 border-[#FFC265] text-[#FFC265] 
                      text-sm w-1/2 md:w-2/5 py-2 rounded-md font-semibold
                      hover:bg-[#FFC265] hover:text-black transition-colors
                    "
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-lg md:text-xl lg:text-2xl text-center font-semibold leading-relaxed">
          Yuk, segera daftarkan diri Anda bersama keluarga,
          <br className="hidden md:block" />
          dan percayakan AlFajr Travelindo sebagai pendamping ibadah Anda.
        </div>
      </div>
    </>
  );
}

export default Packet;