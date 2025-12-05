import { useEffect, useState } from "react";
import Banner from "../assets/img/Banner.png";

interface MarketingData {
  name: string;
  phone: string;
}

function App() {
  const [marketing, setMarketing] = useState<MarketingData | null>(null);

  useEffect(() => {
    fetch("https://adminside.alfajrumroh.co.id/api/marketing-current")
      .then((res) => res.json())
      .then((json) => {
        const data = json?.data;
        if (!data) return;

        setMarketing({
          name: data.name,
          phone: (data.phone_number || "").replace(/\D/g, ""),
        });
      })
      .catch((err) => console.log("API Error:", err));
  }, []);

  const openWA = () => {
    if (!marketing?.phone) {
      alert("Nomor WA tidak tersedia");
      return;
    }

    // Bersihkan nomor
    let cleanPhone = marketing.phone.replace(/\D/g, "");

    // WA membutuhkan format internasional
    if (cleanPhone.startsWith("0")) {
      cleanPhone = "62" + cleanPhone.substring(1);
    }

    // Encode pesan
    const message = encodeURIComponent(
      "Halo, saya ingin bertanya informasi mengenai paket Umroh Alfajr."
    );

    const url = `https://wa.me/${cleanPhone}?text=${message}`;

    console.log("WA URL:", url); // Debug
    window.open(url, "_blank");
  };

  return (
    <div className="w-full h-[100dvh] relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Banner})` }}
      />

      {/* Tag No. 1 */}
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

      {/* MAIN CONTENT */}
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

        <button
          onClick={openWA}
          className="
            w-fit bg-[#CFAD48] py-3 px-6 rounded-lg font-extrabold
            shadow-[0_8px_10px_rgba(0,0,0,0.25)]
            text-base md:text-lg
          "
        >
          Kontak Kami
        </button>
      </div>
    </div>
  );
}

export default App;
