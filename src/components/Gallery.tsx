import { useState, useRef } from "react";
import Thumbnail from "../assets/img/Thumbnail.png";
import Gallery from "../assets/img/Gallery.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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

  // PHOTO SLIDER FOR MOBILE
  const photos = [Gallery, Gallery, Gallery, Gallery, Gallery];
  const [photoIndex, setPhotoIndex] = useState(0);

  // 🔥 FIX: Tambah tipe untuk menghindari null error
  const photoRef = useRef<HTMLDivElement | null>(null);

  const handlePhotoScroll = () => {
    // 🔥 FIX: Cek null dulu agar Vercel tidak error
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

            {/* RESPONSIVE VIDEO SLIDER */}
            <div className="relative w-full max-w-[900px] md:max-w-[750px] overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${videoIndex * 100}%)` }}
              >
                {videoThumbnails.map((thumb, idx) => (
                  <img
                    key={idx}
                    src={thumb}
                    className="w-full flex-shrink-0 object-cover 
                               h-52 sm:h-64 md:h-auto"
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

            {/* SLIDER */}
            <div
              ref={photoRef}
              onScroll={handlePhotoScroll}
              className="flex overflow-x-auto snap-x snap-mandatory space-x-4 pb-4 scroll-smooth"
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
                    ${photoIndex === i ? "bg-[#4A4A4A] scale-110" : "bg-gray-400 opacity-70"}
                  `}
                ></div>
              ))}
            </div>
          </div>

          {/* DESKTOP GRID */}
          <div
            className="
              hidden sm:grid 
              grid-cols-5 grid-rows-2 gap-10 
              md:gap-6
            "
          >
            <img
              src={Gallery}
              className="row-span-2 w-full h-full object-cover"
              alt="Gallery"
            />
            {photos.slice(1).map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-full h-full object-cover"
                alt="Gallery"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
