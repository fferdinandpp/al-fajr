import Logo from "../assets/img/Logo.png"
import Call from "../assets/icons/Call.png"

function App() {
  return (
    <>
    <div className="px-20 flex items-center justify-between">
        <div className="h-28 flex justify-center items-center text-center text-[#525252] gap-10">
        <img src={Logo} alt="Logo" />
        <p>Beranda</p>
        <p>Tentang Kami</p>
        <p>Paket</p>
        <p>Fasilitas</p>
        <p>Galeri</p>
        <div className="flex gap-2 items-center">
            <img src={Call} className="w-7 h-7" alt="Call" />
            <p>+62 587123456</p>
        </div>
        <p>alfajr@travelindo.co.id</p>
        </div>
        <div className="border">
            <a href="" className="bg-[#CFAD48] rounded-lg p-4">Booking Sekarang</a>
        </div>
    </div>
    </>
  )
}

export default App
