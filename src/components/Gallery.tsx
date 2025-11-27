import Thumbnail from "../assets/img/Thumbnail.png";
// import Gallery from "../assets/img/Gallery.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div className="bg-[#FFF2CC] px-20 py-10">
        <div className="text-center text-[#4A4A4A] pb-7">
          <h1 className="text-3xl font-extrabold pb-2">
            Dokumentasi Bersama Al-Fajr
          </h1>
          <p>
            Kami memberikan kenyamanan bagi pelanggan kami, dengan berbagai
            fasilitas yang kami berikan
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-2xl pb-5">Video</h3>
          <div className="flex items-center gap-32">
            <FontAwesomeIcon icon={faChevronLeft} className="text-3xl" />
            <img src={Thumbnail} className="w-[800px]" alt="Thumbnail" />
            <FontAwesomeIcon icon={faChevronRight} className="text-3xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
