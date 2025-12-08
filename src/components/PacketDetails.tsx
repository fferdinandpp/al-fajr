// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";

// import Background from "../assets/img/BGDetailPaket.png";
// import ItenaryIcon from "../assets/icons/Itenary.png";
// import FlyerIcon from "../assets/icons/Flyer.png";

// interface AkomodasiItem {
//   nama: string;
//   kota: string;
//   gambar?: string | null;
// }

// interface PaketDetail {
//   id: number;
//   nama_paket: string;
//   judul: string;
//   harga_tampil: number;
//   kategori: string;
//   maskapai: string;
//   durasi_paket: string;
//   bandara_keberangkatan: string;
//   kota_keberangkatan: string;
//   gambar_url: string;
//   itinerary_url: string | null;
//   akomodasi: AkomodasiItem[];
// }

// export default function PacketDetails() {
//   const [params] = useSearchParams();
//   const id = params.get("id");

//   const [paket, setPaket] = useState<PaketDetail | null>(null);

//   useEffect(() => {
//     if (!id) return;

//     fetch(`https://adminside.alfajrumroh.co.id/api/paket/${id}`)
//       .then((r) => r.json())
//       .then((json) => setPaket(json?.data ?? null))
//       .catch((err) => console.log("Detail Paket Error:", err));
//   }, [id]);

//   if (!paket)
//     return (
//       <div className="text-center text-xl py-40">Memuat detail paket...</div>
//     );

//   const openItinerary = () => {
//     if (!paket.itinerary_url) {
//       alert("Itinerary belum tersedia");
//       return;
//     }

//     window.open(paket.itinerary_url, "_blank");
//   };

//   const daftarSekarang = () => {
//     const message = encodeURIComponent(
//       `Halo, saya ingin mendaftar paket: ${paket.nama_paket}`
//     );
//     window.open(`https://wa.me/6281385233145?text=${message}`, "_blank");
//   };

//   return (
//     <div
//       className="
//         min-h-screen bg-cover bg-center 
//         px-5 py-8 md:px-10 lg:px-20
//         pt-28 md:pt-32 lg:pt-36 text-white
//       "
//       style={{ backgroundImage: `url(${Background})` }}
//     >
//       <div className="text-center">
//         <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold pb-6">
//           {paket.nama_paket}
//         </h1>

//         <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
//           <img
//             src={paket.gambar_url}
//             alt="Poster Paket"
//             className="w-full h-[260px] md:h-[320px] lg:h-[380px] object-cover object-center rounded-lg shadow-lg"
//           />
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row justify-center items-center gap-6 pb-10 mt-14">
//         <button
//           onClick={openItinerary}
//           className="
//             flex items-center justify-between 
//             bg-[#393835] w-full md:w-56 h-14 px-6 
//             rounded-full shadow-lg hover:scale-105 
//             transition-all
//           "
//         >
//           <p className="font-bold text-lg">Itinerary</p>
//           <img src={ItenaryIcon} alt="Itenary" />
//         </button>

//         <button
//           onClick={daftarSekarang}
//           className="
//             bg-[#393835] w-full md:w-36 text-center 
//             p-3 rounded-md border border-[#FFC265]
//             hover:bg-[#4c4b49] transition
//           "
//         >
//           Daftar Sekarang
//         </button>

//         <a
//           href={paket.gambar_url}
//           target="_blank"
//           className="
//             flex items-center justify-between 
//             bg-[#393835] w-full md:w-56 h-14 px-6 
//             rounded-full shadow-lg hover:scale-105 
//             transition-all
//           "
//         >
//           <p className="font-bold text-lg">Flyer</p>
//           <img src={FlyerIcon} alt="Flyer" />
//         </a>
//       </div>

//       <div className="text-center">
//         <div className="bg-white h-[1px] w-full my-10 opacity-50"></div>

//         <h1 className="text-xl md:text-2xl pb-6">INFORMASI PENERBANGAN</h1>

//         <div className="text-lg leading-relaxed pb-8">
//           <p>
//             Maskapai: <b>{paket.maskapai}</b>
//           </p>
//           <p>
//             Durasi: <b>{paket.durasi_paket} Hari</b>
//           </p>
//           <p>
//             Kota Keberangkatan: <b>{paket.kota_keberangkatan}</b>
//           </p>
//           <p>
//             Bandara: <b>{paket.bandara_keberangkatan}</b>
//           </p>
//         </div>

//         <div className="bg-white h-[1px] w-full my-10 opacity-50"></div>

//         <h1 className="text-xl md:text-2xl pb-8">INFORMASI HOTEL</h1>

//         <div className="flex flex-col md:flex-row justify-evenly items-center gap-10">
//           {paket.akomodasi.length === 0 ? (
//             <p>Informasi hotel belum tersedia</p>
//           ) : (
//             paket.akomodasi.map((hotel: AkomodasiItem, idx: number) => (
//               <div key={idx} className="text-center">
//                 <div className="bg-black p-5 rounded-2xl mb-5 w-full max-w-sm mx-auto">
//                   <img
//                     src={hotel.gambar ?? ""}
//                     className="mx-auto"
//                     alt={hotel.nama}
//                   />
//                 </div>

//                 <h2 className="text-lg md:text-xl font-bold">{hotel.nama}</h2>
//                 <p className="text-lg md:text-xl font-bold">({hotel.kota})</p>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Background from "../assets/img/BGDetailPaket.png";
import ItenaryIcon from "../assets/icons/Itenary.png";
import FlyerIcon from "../assets/icons/Flyer.png";

// --- INTERFACES ---
interface MarketingData {
  name: string;
  phone: string;
}

interface DaftarHarga {
  tipe: string;
  label: string;
  harga: string;
}

interface AkomodasiItem {
  kota: string;
  nama_hotel: string;
  bintang: string;
  jarak: string;
  gambar: string | null;
}

interface PaketDetail {
  id: number;
  judul: string;
  nama_paket: string;
  kategori: string;
  maskapai: string;
  deskripsi: string;
  jadwal_keberangkatan: string;
  durasi_paket: string;
  bandara_keberangkatan: string;
  kota_keberangkatan: string;
  rute_penerbangan: string;
  status_paket: string;
  gambar_url: string;
  itinerary_url: string | null;
  harga_tampil: number;
  daftar_harga: DaftarHarga[];
  akomodasi: AkomodasiItem[];
  harga_termasuk: string[];
  harga_tidak_termasuk: string[];
}

// --- ICONS COMPONENTS ---
const PlaneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
);
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
);
const HotelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#FFC265]" viewBox="0 0 24 24" fill="currentColor"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>
);
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);
const CrossIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

export default function PacketDetails() {
  const [params] = useSearchParams();
  const id = params.get("id");
  
  const [paket, setPaket] = useState<PaketDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  // State untuk Data Marketing
  const [marketing, setMarketing] = useState<MarketingData | null>(null);

  // --- HELPERS ---
  const formatRupiah = (angka: string | number) => {
    const val = typeof angka === "string" ? parseInt(angka) : angka;
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(val);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  };

  // --- FETCH DATA PAKET ---
  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://adminside.alfajrumroh.co.id/api/paket/${id}`);
        const json = await response.json();
        setPaket(json?.data ?? null);
      } catch (err) {
        console.log("Detail Paket Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  // --- FETCH DATA MARKETING (LOGIKA BARU) ---
  useEffect(() => {
    fetch("https://adminside.alfajrumroh.co.id/api/marketing-current")
      .then((res) => res.json())
      .then((json) => {
        const data = json?.data;
        if (!data) return;

        // Simpan data mentah dulu, pembersihan dilakukan saat klik
        setMarketing({
          name: data.name,
          phone: data.phone_number || "", 
        });
      })
      .catch((err) => console.log("Marketing API Error:", err));
  }, []);

  // --- ACTIONS ---
  const daftarSekarang = () => {
    if (!paket) return;

    if (!marketing?.phone) {
      alert("Sedang memuat kontak marketing atau nomor tidak tersedia...");
      return;
    }

    // 1. Bersihkan karakter non-digit
    let cleanPhone = marketing.phone.replace(/\D/g, "");

    // 2. Format Internasional (0 -> 62)
    if (cleanPhone.startsWith("0")) {
      cleanPhone = "62" + cleanPhone.substring(1);
    }

    const message = encodeURIComponent(`Halo, saya tertarik paket: ${paket.nama_paket} (${paket.jadwal_keberangkatan})`);
    
    // 3. Buka WA
    window.open(`https://wa.me/${cleanPhone}?text=${message}`, "_blank");
  };

  const openItinerary = () => paket?.itinerary_url && window.open(paket.itinerary_url, "_blank");

  if (loading) return <div className="min-h-screen bg-gray-900 flex items-center justify-center text-[#FFC265]">Loading...</div>;
  if (!paket) return <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">Data tidak ditemukan</div>;

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-200 font-sans pb-20">
      {/* Background Banner */}
      <div 
        className="h-[35vh] w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Background})` }}
      >
         <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-[#1a1a1a]"></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* --- LEFT COLUMN (STICKY SIDEBAR) --- */}
          <div className="w-full lg:w-[380px] flex-shrink-0">
            <div className="bg-[#252525] rounded-2xl shadow-2xl border border-gray-700 overflow-hidden lg:sticky lg:top-24">
              
              {/* Image */}
              <div className="relative h-56 w-full">
                <img src={paket.gambar_url} alt={paket.nama_paket} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#FFC265] border border-[#FFC265]/30">
                  {paket.kategori}
                </div>
              </div>

              {/* Main Info Card */}
              <div className="p-6">
                <h1 className="text-2xl font-bold text-white mb-2 leading-tight">{paket.nama_paket}</h1>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${paket.status_paket === 'Tersedia' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                        {paket.status_paket}
                    </span>
                    <span>• {paket.durasi_paket} Hari</span>
                </div>

                <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-lg"><CalendarIcon /></div>
                        <div>
                            <p className="text-xs text-gray-500">Keberangkatan</p>
                            <p className="text-sm font-semibold text-white">{formatDate(paket.jadwal_keberangkatan)}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-lg"><PlaneIcon /></div>
                        <div>
                            <p className="text-xs text-gray-500">Maskapai</p>
                            <p className="text-sm font-semibold text-white">{paket.maskapai}</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-4 mb-6">
                    <p className="text-sm text-gray-400 mb-1">Mulai dari</p>
                    <p className="text-3xl font-bold text-[#FFC265]">{formatRupiah(paket.harga_tampil)}</p>
                </div>

                <div className="space-y-3">
                    <button onClick={daftarSekarang} className="w-full py-3 bg-[#FFC265] hover:bg-[#ffb640] text-black font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20">
                        Daftar Sekarang
                    </button>
                    <div className="flex gap-3">
                        <button onClick={openItinerary} className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 border border-gray-600 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                             <img src={ItenaryIcon} className="w-4 h-4 opacity-70" alt="PDF"/> Itinerary
                        </button>
                        <a href={paket.gambar_url} target="_blank" className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 border border-gray-600 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                            <img src={FlyerIcon} className="w-4 h-4 opacity-70" alt="Flyer"/> Flyer
                        </a>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN (SCROLLABLE DETAILS) --- */}
          <div className="flex-1 space-y-6">
            
            {/* Section: Deskripsi */}
            <div className="bg-[#252525] rounded-2xl p-6 border border-gray-700">
                <h2 className="text-xl font-bold text-white mb-4">Tentang Paket</h2>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {paket.deskripsi}. Paket perjalanan ibadah umrah yang dirancang khusus untuk kenyamanan Anda.
                    Menggunakan maskapai {paket.maskapai} dengan rute {paket.rute_penerbangan} dari {paket.kota_keberangkatan}.
                </p>
            </div>

            {/* Section: Pilihan Harga */}
            <div className="bg-[#252525] rounded-2xl p-6 border border-gray-700">
                <h2 className="text-xl font-bold text-white mb-4">Pilihan Kamar</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {paket.daftar_harga.map((item, i) => (
                        <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-[#FFC265]/50 transition-colors">
                            <p className="text-sm text-gray-400 mb-1">{item.tipe}</p>
                            <p className="text-xs text-gray-500 mb-3">{item.label}</p>
                            <p className="text-lg font-bold text-[#FFC265]">{formatRupiah(item.harga)}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section: Akomodasi */}
            <div className="bg-[#252525] rounded-2xl p-6 border border-gray-700">
                <h2 className="text-xl font-bold text-white mb-4">Akomodasi Hotel</h2>
                <div className="space-y-4">
                    {paket.akomodasi.length > 0 ? paket.akomodasi.map((hotel, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-black/20 p-4 rounded-xl">
                            <div className="bg-[#FFC265]/10 p-3 rounded-lg">
                                <HotelIcon />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-white">{hotel.nama_hotel}</h3>
                                    <span className="text-xs bg-white/10 px-2 py-1 rounded text-[#FFC265]">⭐ {hotel.bintang}</span>
                                </div>
                                <div className="flex justify-between items-center mt-1">
                                    <p className="text-sm text-gray-400">{hotel.kota}</p>
                                    <p className="text-xs text-gray-500">Jarak: {hotel.jarak}</p>
                                </div>
                            </div>
                        </div>
                    )) : <p className="text-gray-500 italic">Informasi hotel belum tersedia.</p>}
                </div>
            </div>

            {/* Section: Include & Exclude */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#252525] rounded-2xl p-6 border border-gray-700 h-full">
                    <h3 className="text-lg font-bold text-green-400 mb-4 pb-2 border-b border-gray-700">Termasuk</h3>
                    <ul className="space-y-3">
                        {paket.harga_termasuk.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                <CheckIcon />
                                <span className="leading-tight">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-[#252525] rounded-2xl p-6 border border-gray-700 h-full">
                    <h3 className="text-lg font-bold text-red-400 mb-4 pb-2 border-b border-gray-700">Tidak Termasuk</h3>
                    <ul className="space-y-3">
                        {paket.harga_tidak_termasuk.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                <CrossIcon />
                                <span className="leading-tight">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

          </div>
          {/* End Right Column */}

        </div>
      </div>
    </div>
  );
}