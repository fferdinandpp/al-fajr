import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Background from "../assets/img/BGDetailPaket.png";
import ItenaryIcon from "../assets/icons/Itenary.png";
import FlyerIcon from "../assets/icons/Flyer.png";

interface AkomodasiItem {
  nama: string;
  kota: string;
  gambar?: string | null;
}

interface PaketDetail {
  id: number;
  nama_paket: string;
  judul: string;
  harga_tampil: number;
  kategori: string;
  maskapai: string;
  durasi_paket: string;
  bandara_keberangkatan: string;
  kota_keberangkatan: string;
  gambar_url: string;
  itinerary_url: string | null;
  akomodasi: AkomodasiItem[];
}

export default function PacketDetails() {
  const [params] = useSearchParams();
  const id = params.get("id");

  const [paket, setPaket] = useState<PaketDetail | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://adminside.alfajrumroh.co.id/api/paket/${id}`)
      .then((r) => r.json())
      .then((json) => setPaket(json?.data ?? null))
      .catch((err) => console.log("Detail Paket Error:", err));
  }, [id]);

  if (!paket)
    return (
      <div className="text-center text-xl py-40">Memuat detail paket...</div>
    );

  const openItinerary = () => {
    if (!paket.itinerary_url) {
      alert("Itinerary belum tersedia");
      return;
    }

    window.open(paket.itinerary_url, "_blank");
  };

  const daftarSekarang = () => {
    const message = encodeURIComponent(
      `Halo, saya ingin mendaftar paket: ${paket.nama_paket}`
    );
    window.open(`https://wa.me/6281385233145?text=${message}`, "_blank");
  };

  return (
    <div
      className="
        min-h-screen bg-cover bg-center 
        px-5 py-8 md:px-10 lg:px-20
        pt-28 md:pt-32 lg:pt-36 text-white
      "
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold pb-6">
          {paket.nama_paket}
        </h1>

        <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
          <img
            src={paket.gambar_url}
            alt="Poster Paket"
            className="w-full h-[260px] md:h-[320px] lg:h-[380px] object-cover object-center rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 pb-10 mt-14">
        <button
          onClick={openItinerary}
          className="
            flex items-center justify-between 
            bg-[#393835] w-full md:w-56 h-14 px-6 
            rounded-full shadow-lg hover:scale-105 
            transition-all
          "
        >
          <p className="font-bold text-lg">Itinerary</p>
          <img src={ItenaryIcon} alt="Itenary" />
        </button>

        <button
          onClick={daftarSekarang}
          className="
            bg-[#393835] w-full md:w-36 text-center 
            p-3 rounded-md border border-[#FFC265]
            hover:bg-[#4c4b49] transition
          "
        >
          Daftar Sekarang
        </button>

        <a
          href={paket.gambar_url}
          target="_blank"
          className="
            flex items-center justify-between 
            bg-[#393835] w-full md:w-56 h-14 px-6 
            rounded-full shadow-lg hover:scale-105 
            transition-all
          "
        >
          <p className="font-bold text-lg">Flyer</p>
          <img src={FlyerIcon} alt="Flyer" />
        </a>
      </div>

      <div className="text-center">
        <div className="bg-white h-[1px] w-full my-10 opacity-50"></div>

        <h1 className="text-xl md:text-2xl pb-6">INFORMASI PENERBANGAN</h1>

        <div className="text-lg leading-relaxed pb-8">
          <p>
            Maskapai: <b>{paket.maskapai}</b>
          </p>
          <p>
            Durasi: <b>{paket.durasi_paket} Hari</b>
          </p>
          <p>
            Kota Keberangkatan: <b>{paket.kota_keberangkatan}</b>
          </p>
          <p>
            Bandara: <b>{paket.bandara_keberangkatan}</b>
          </p>
        </div>

        <div className="bg-white h-[1px] w-full my-10 opacity-50"></div>

        <h1 className="text-xl md:text-2xl pb-8">INFORMASI HOTEL</h1>

        <div className="flex flex-col md:flex-row justify-evenly items-center gap-10">
          {paket.akomodasi.length === 0 ? (
            <p>Informasi hotel belum tersedia</p>
          ) : (
            paket.akomodasi.map((hotel: AkomodasiItem, idx: number) => (
              <div key={idx} className="text-center">
                <div className="bg-black p-5 rounded-2xl mb-5 w-full max-w-sm mx-auto">
                  <img
                    src={hotel.gambar ?? ""}
                    className="mx-auto"
                    alt={hotel.nama}
                  />
                </div>

                <h2 className="text-lg md:text-xl font-bold">{hotel.nama}</h2>
                <p className="text-lg md:text-xl font-bold">({hotel.kota})</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
