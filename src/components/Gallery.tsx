import { useState, useRef } from "react";
import Thumbnail from "../assets/img/Thumbnail.png";
import Gallery from "../assets/img/Gallery.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const videoThumbnails = [Thumbnail, Thumbnail, Thumbnail];
  const [videoIndex, setVideoIndex] = useState(0);

  const prevVideo = () => {
    setVideoIndex((prev) =>
      prev === 0 ? videoThumbnails.length - 1 : prev - 1
    );
  };

  const nextVideo = () => {
    setVideoIndex((prev) =>
      prev === videoThumbnails.length - 1 ? 0 : prev + 1
    );
  };

  // PHOTO SLIDER (MOBILE)
  const photos = [Gallery, Gallery, Gallery, Gallery, Gallery];
  const [photoIndex, setPhotoIndex] = useState(0);
  const photoRef = useRef<HTMLDivElement | null>(null);

  const handlePhotoScroll = () => {
    if (!photoRef.current) return;

    const scrollLeft = photoRef.current.scrollLeft ?? 0;
    const width = photoRef.current.clientWidth || 1;
    const newIndex = Math.round(scrollLeft / width);
    setPhotoIndex(newIndex);
  };

  return (
    <>
      <div className="bg-[#FFF2CC] px-20 py-10 md:px-10 sm:px-5 sm:py-8 overflow-hidden">
        {/* TITLE */}
        <div className="text-center text-[#4A4A4A] pb-7">
          <h1 className="text-3xl font-extrabold pb-2 sm:text-2xl">
            Dokumentasi Bersama Al-Fajr
          </h1>
          <p className="sm:text-sm">
            Kami memberikan kenyamanan bagi pelanggan kami, dengan berbagai
            fasilitas yang kami berikan
          </p>
        </div>

        {/* VIDEO SECTION */}
        <div className="flex flex-col items-center pb-10">
          <h3 className="font-semibold text-2xl pb-5 sm:text-xl">Video</h3>

          <div className="flex items-center justify-center gap-5 md:gap-10">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-3xl sm:text-2xl cursor-pointer"
              onClick={prevVideo}
            />

            <div className="relative w-full max-w-[900px] md:max-w-[750px] overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${videoIndex * 100}%)` }}
              >
                {videoThumbnails.map((thumb, idx) => (
                  <img
                    key={idx}
                    src={thumb}
                    className="w-full flex-shrink-0 object-cover h-52 sm:h-64 md:h-auto"
                    alt="Video Thumbnail"
                  />
                ))}
              </div>
            </div>

            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-3xl sm:text-2xl cursor-pointer"
              onClick={nextVideo}
            />
          </div>
        </div>

        {/* PHOTO SECTION */}
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-2xl pb-5 sm:text-xl">Foto</h3>

          {/* MOBILE SLIDER */}
          <div className="block sm:hidden w-full overflow-hidden">
            <div
              ref={photoRef}
              onScroll={handlePhotoScroll}
              className="flex overflow-x-auto snap-x snap-mandatory space-x-4 pb-4 scroll-smooth no-scrollbar"
            >
              {photos.map((img, idx) => (
                <div
                  key={idx}
                  className="min-w-full snap-start rounded-xl overflow-hidden shadow-md"
                >
                  <img
                    src={img}
                    alt={`slide-${idx}`}
                    className="w-full h-56 object-cover"
                  />
                </div>
              ))}
            </div>

            {/* DOTS */}
            <div className="flex justify-center mt-2 space-x-2">
              {photos.map((_, i) => (
                <div
                  key={i}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${
                      photoIndex === i
                        ? "bg-[#4A4A4A] scale-110"
                        : "bg-gray-400 opacity-70"
                    }
                  `}
                ></div>
              ))}
            </div>
          </div>

          {/* DESKTOP GRID (ASIMETRIS SEPERTI GAMBAR) */}
          {/* DESKTOP GRID (Premium Layout) */}
          <div
            className="
    hidden sm:grid 
    grid-cols-3 gap-6 
    w-full max-w-6xl
  "
          >
            {/* KOLOM KIRI – FOTO BESAR */}
            <div className="col-span-1 flex">
              <img
                src={photos[0]}
                className="w-full h-full object-cover rounded-xl"
                alt="Gallery Large"
              />
            </div>

            {/* KOLOM KANAN – 4 FOTO KECIL */}
            <div className="col-span-2 grid grid-cols-2 gap-6">
              <img
                src={photos[1]}
                className="w-full h-48 object-cover rounded-xl"
                alt="Gallery Small"
              />
              <img
                src={photos[2]}
                className="w-full h-48 object-cover rounded-xl"
                alt="Gallery Small"
              />
              <img
                src={photos[3]}
                className="w-full h-48 object-cover rounded-xl"
                alt="Gallery Small"
              />
              <img
                src={photos[4]}
                className="w-full h-48 object-cover rounded-xl"
                alt="Gallery Small"
              />
            </div>
          </div>

          {/* BUTTON SHOW ALL – DESKTOP */}
          <div className="hidden sm:flex w-full max-w-6xl justify-end mt-3">
            <button className="bg-[#1DA599] text-white px-4 py-2 rounded-lg shadow text-sm font-semibold">
              Show all photos
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
