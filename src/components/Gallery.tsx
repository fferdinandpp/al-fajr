import { useState, useRef, useEffect } from "react";
import Thumbnail from "../assets/img/Thumbnail.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
  faExpand,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

function Gallery() {
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

  const getDriveImage = (url: string) => {
    const regex = /\/d\/([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    const id = match ? match[1] : null;

    if (id) {
      return `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;
    }
    return url;
  };

  const photoLinks = [
    "https://drive.google.com/file/d/1z-C7pDOHdUzphYwcDy0T6g09eJXAkwYz/view?usp=drive_link",
    "https://drive.google.com/file/d/1GjoxjdNn4cKhdrjjDmxbzH9Z4-W_O9ty/view?usp=drive_link",
    "https://drive.google.com/file/d/1IkXuVeeymfiWlwGG1u1AX-8rPVDhwqEn/view?usp=drive_link",
    "https://drive.google.com/file/d/19uIi-ekb28nvVAZ83_-8R9WBJ2hr6oZD/view?usp=drive_link",
    "https://drive.google.com/file/d/18JrgJmQhzeMtWrupsY33ku05lh6R_E_Z/view?usp=drive_link",
  ];

  const photos = photoLinks.map(getDriveImage);

  const [photoIndex, setPhotoIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const photoRef = useRef<HTMLDivElement | null>(null);

  const handlePhotoScroll = () => {
    if (!photoRef.current) return;
    const scrollLeft = photoRef.current.scrollLeft ?? 0;
    const width = photoRef.current.clientWidth || 1;
    const newIndex = Math.round(scrollLeft / width);
    setPhotoIndex(newIndex);
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src =
      "https://via.placeholder.com/400x300?text=No+Image+Access";
  };

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const openModal = (imgUrl: string) => {
    setSelectedImage(imgUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#FFFBF0] via-[#FFF5D6] to-[#FFE8B3] px-5 py-16 md:px-10 lg:px-20 font-sans relative overflow-hidden">
        
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#FFD700] opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#FFC265] opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="text-center pb-14 relative z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-[#CFAD48]/10 text-[#B48E26] font-bold text-xs tracking-[0.2em] uppercase mb-4 border border-[#CFAD48]/20">
            Galeri Eksklusif
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#4A4A4A] mb-4 drop-shadow-sm">
            Momen Indah <span className="text-[#CFAD48]">Bersama Kami</span>
          </h1>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Setiap perjalanan adalah cerita. Kami mengabadikan senyum dan
            kekhusyukan Anda dalam setiap langkah menuju Baitullah.
          </p>
        </div>

        <div className="flex flex-col items-center pb-20 relative z-10">
          <div className="w-full max-w-5xl bg-white/40 backdrop-blur-sm border border-white/50 p-4 md:p-6 rounded-3xl shadow-xl">
            <div className="flex items-center gap-4 md:gap-8">
              
              <button
                onClick={prevVideo}
                className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-white text-[#CFAD48] shadow-lg hover:bg-[#CFAD48] hover:text-white hover:scale-110 transition-all duration-300 z-20"
              >
                <FontAwesomeIcon icon={faChevronLeft} size="lg" />
              </button>

              <div className="relative w-full overflow-hidden rounded-2xl shadow-inner bg-black">
                <div
                  className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{ transform: `translateX(-${videoIndex * 100}%)` }}
                >
                  {videoThumbnails.map((thumb, idx) => (
                    <div key={idx} className="min-w-full relative group cursor-pointer">
                      <img
                        src={thumb}
                        className="w-full object-cover h-[200px] sm:h-[300px] md:h-[450px] opacity-90 group-hover:opacity-100 transition-opacity"
                        alt="Video Thumbnail"
                      />
                      
                      {/* Overlay Play Button Effect */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-300">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform duration-300">
                           <div className="w-12 h-12 bg-[#CFAD48] rounded-full flex items-center justify-center shadow-lg">
                              <FontAwesomeIcon icon={faPlay} className="text-white ml-1" />
                           </div>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                        <p className="font-bold text-lg md:text-xl">Highlight Perjalanan {idx + 1}</p>
                        <p className="text-sm text-gray-300">Dokumentasi Video</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={nextVideo}
                className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-white text-[#CFAD48] shadow-lg hover:bg-[#CFAD48] hover:text-white hover:scale-110 transition-all duration-300 z-20"
              >
                <FontAwesomeIcon icon={faChevronRight} size="lg" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center relative z-10">
          <h3 className="font-bold text-3xl text-[#4A4A4A] pb-8 relative inline-block">
            Galeri Foto
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-[#CFAD48] rounded-full"></span>
          </h3>
          <div className="block sm:hidden w-full overflow-visible">
            <div
              ref={photoRef}
              onScroll={handlePhotoScroll}
              className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 px-4 scroll-smooth no-scrollbar"
            >
              {photos.map((img, idx) => (
                <div
                  key={idx}
                  className="min-w-[85%] snap-center rounded-2xl overflow-hidden shadow-xl relative group border-2 border-white"
                  onClick={() => openModal(img)}
                >
                  <img
                    src={img}
                    alt={`slide-${idx}`}
                    className="w-full h-80 object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-black/0 group-active:bg-black/20 transition-all flex items-center justify-center">
                     <span className="text-white font-semibold opacity-0 group-active:opacity-100 bg-black/50 px-3 py-1 rounded-full text-sm">Tap to view</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center space-x-2">
              {photos.map((_, i) => (
                <div
                  key={i}
                  className={`
                    h-2 rounded-full transition-all duration-500 ease-out
                    ${
                      photoIndex === i
                        ? "w-8 bg-[#CFAD48]"
                        : "w-2 bg-[#CFAD48]/30"
                    }
                  `}
                ></div>
              ))}
            </div>
          </div>

          <div className="hidden sm:grid grid-cols-4 grid-rows-2 gap-5 w-full max-w-6xl h-[500px]">
            
            <div 
                className="col-span-2 row-span-2 relative group overflow-hidden rounded-3xl shadow-2xl cursor-pointer border-4 border-white/60"
                onClick={() => openModal(photos[0])}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 z-10 transition-all duration-300"></div>
              <img
                src={photos[0]}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                alt="Main Gallery"
                referrerPolicy="no-referrer"
                onError={handleImageError}
              />
              <div className="absolute bottom-5 left-5 z-20 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                 <div className="bg-white/90 backdrop-blur text-[#CFAD48] px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
                    <FontAwesomeIcon icon={faExpand} /> Perbesar
                 </div>
              </div>
            </div>
            {photos.slice(1).map((photo, idx) => (
               <div 
                  key={idx} 
                  className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl shadow-lg cursor-pointer border-2 border-white/40"
                  onClick={() => openModal(photo)}
               >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 z-10 transition-all duration-300"></div>
                  <img
                    src={photo}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-out"
                    alt={`Thumb ${idx}`}
                    referrerPolicy="no-referrer"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <FontAwesomeIcon icon={faExpand} className="text-white text-2xl drop-shadow-md" />
                  </div>
               </div>
            ))}
          </div>
        </div>
      </div>
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fadeIn"
            onClick={closeModal}
        >
            <button 
                onClick={closeModal}
                className="absolute top-6 right-6 text-white/70 hover:text-white hover:bg-white/10 rounded-full w-12 h-12 flex items-center justify-center transition-all z-50 border border-white/20"
            >
                <FontAwesomeIcon icon={faTimes} size="xl" />
            </button>

            <div 
                className="relative w-full max-w-6xl max-h-screen flex items-center justify-center p-2"
                onClick={(e) => e.stopPropagation()}
            >
                <img 
                    src={selectedImage} 
                    alt="Full Preview" 
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-scaleIn"
                    referrerPolicy="no-referrer"
                />
            </div>
        </div>
      )}
    </>
  );
}

export default Gallery;