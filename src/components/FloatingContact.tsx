import { useEffect, useState } from "react";
import WAIcon from "../assets/icons/Whatsapp.png";

interface MarketingData {
  name: string;
  phone: string;
}

function FloatingContact({ hidden }: { hidden: boolean }) {
  const [marketing, setMarketing] = useState<MarketingData | null>(null);

  useEffect(() => {
    fetch("https://adminside.alfajrumroh.co.id/api/marketing-current")
      .then((res) => res.json())
      .then((json) => {
        const data = json?.data;
        if (!data) return;

        setMarketing({
          name: data.name,
          // Simpan data apa adanya dulu, formatting dilakukan saat klik
          phone: data.phone_number || "", 
        });
      })
      .catch((err) => console.log("API Error:", err));
  }, []);

  const openWA = () => {
    if (!marketing?.phone) {
      alert("Nomor WA tidak tersedia");
      return;
    }

    // 1. Bersihkan karakter selain angka
    let cleanPhone = marketing.phone.replace(/\D/g, "");

    // 2. Ubah 0 di depan menjadi 62 (Format Internasional WA)
    if (cleanPhone.startsWith("0")) {
      cleanPhone = "62" + cleanPhone.substring(1);
    }

    // 3. Encode Pesan Default
    const message = encodeURIComponent(
      "Halo, saya ingin bertanya informasi mengenai paket Umroh Alfajr."
    );

    window.open(`https://wa.me/${cleanPhone}?text=${message}`, "_blank");
  };

  return (
    <div
      onClick={openWA}
      className={`
        fixed right-5 bottom-5 z-[99999]
        flex items-center gap-3
        bg-[#E8E0B2] backdrop-blur-xl
        shadow-xl border border-white/50
        px-4 py-2 rounded-full cursor-pointer select-none
        hover:scale-105 hover:shadow-2xl
        transition-all duration-300

        ${
          hidden
            ? "opacity-0 translate-x-10 pointer-events-none"
            : "opacity-100 translate-x-0"
        }
      `}
    >
      <img src={WAIcon} className="w-7 h-7" alt="WhatsApp" />

      <div className="flex flex-col leading-tight">
        <p className="text-[11px] font-semibold text-[#525252]">
          Marketing Online
        </p>
        <p className="text-sm font-bold text-[#525252]">
          {marketing?.name ?? "Admin"}
        </p>
      </div>
    </div>
  );
}

export default FloatingContact;