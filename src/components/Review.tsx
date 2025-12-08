// import { useEffect, useState } from "react";
// import axios from "axios";
// import Review from "../assets/img/Review.png";

// interface Testimoni {
//   id: number;
//   nama: string;
//   text_description: string;
// }

// function ReviewSection() {
//   const [data, setData] = useState<Testimoni[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     axios
//       .get("https://adminside.alfajrumroh.co.id/api/testimoni")
//       .then((res) => {
//         setData(res.data.data);
//         setError(false);
//       })
//       .catch(() => {
//         setError(true);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <div
//       className="
//         w-full bg-cover bg-center 
//         px-20 py-10 
//         md:px-12 
//         max-sm:px-4 max-sm:py-8
//       "
//       style={{ backgroundImage: `url(${Review})` }}
//     >
//       <div className="text-white text-center">
//         <h1
//           className="
//             text-4xl font-extrabold pb-5 
//             sm:text-2xl
//           "
//         >
//           Testimoni dari Jamaah Kami
//         </h1>

//         <p
//           className="
//             max-w-2xl mx-auto pb-10
//             text-base max-sm:text-sm px-2
//           "
//         >
//           Kami sudah bersama 500.000+ Jamaah, inilah testimoni dari Jamaah
//           yang bersama kami.
//         </p>
//       </div>

//       {/* LOADING */}
//       {loading && (
//         <p className="text-white text-center italic py-10">
//           Memuat testimoni...
//         </p>
//       )}

//       {/* ERROR */}
//       {error && !loading && (
//         <p className="text-red-300 text-center font-semibold py-10">
//           Gagal memuat testimoni. Silakan coba lagi nanti.
//         </p>
//       )}

//       {/* LIST TESTIMONI */}
//       {!loading && !error && (
//         <div
//           className="
//             flex flex-wrap justify-center gap-5 pb-10
//             max-sm:gap-4
//           "
//         >
//           {data.map((item) => (
//             <div
//               key={item.id}
//               className="
//                 bg-white/20 text-white italic 
//                 w-1/5 p-4 rounded-3xl 
//                 md:w-1/3 
//                 max-sm:w-full max-sm:p-4
//               "
//             >
//               <h3
//                 className="
//                   text-center font-extrabold pb-2 
//                   sm:text-base
//                 "
//               >
//                 {item.nama}
//               </h3>

//               <p
//                 className="
//                   text-xs sm:text-[11px] leading-relaxed 
//                   text-left
//                 "
//               >
//                 "{item.text_description}"
//               </p>
//             </div>
//           ))}
//         </div>
//       )}

//       <div
//         className="
//           text-white text-2xl font-extrabold text-center
//           sm:text-lg sm:px-2
//         "
//       >
//         Testimoni adalah bagian dari perjalanan kami untuk terus <br className="sm:hidden" />
//         tumbuh dan menjadi yang lebih baik dari kemarin.
//       </div>
//     </div>
//   );
// }

// export default ReviewSection;


import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Review from "../assets/img/Review.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faStar,
  faChevronLeft,
  faChevronRight,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

interface Testimoni {
  id: number;
  nama: string;
  text_description: string;
}

function ReviewSection() {
  const [data, setData] = useState<Testimoni[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    axios
      .get("https://adminside.alfajrumroh.co.id/api/testimoni")
      .then((res) => {
        setData(res.data.data);
        setError(false);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { current } = sliderRef;
      const scrollAmount =
        direction === "left"
          ? -current.offsetWidth / 1.2
          : current.offsetWidth / 1.2;

      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <div
      className="relative w-full min-h-[600px] bg-cover bg-center bg-fixed overflow-hidden flex flex-col justify-center"
      style={{ backgroundImage: `url(${Review})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

      <div className="relative z-10 px-4 py-16 md:px-12 lg:px-20 w-full max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-[#CFAD48]/20 text-[#FFD700] font-bold text-xs tracking-widest uppercase mb-4 border border-[#CFAD48]/30">
            Kata Mereka
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Testimoni Jamaah
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Kepercayaan 500.000+ Jamaah adalah amanah bagi kami. Berikut adalah
            cerita pengalaman nyata mereka beribadah bersama Al-Fajr.
          </p>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#CFAD48]"></div>
          </div>
        )}

        {error && !loading && (
          <div className="text-center py-10 bg-red-500/10 rounded-xl border border-red-500/30">
            <p className="text-red-200 font-semibold">
              Gagal memuat testimoni. Silakan periksa koneksi internet Anda.
            </p>
          </div>
        )}

        {!loading && !error && data.length > 0 && (
          <div className="relative group">
            
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-20 bg-white/10 hover:bg-[#CFAD48] text-white p-3 md:p-4 rounded-full backdrop-blur-md border border-white/20 shadow-lg transition-all hidden md:flex items-center justify-center group-hover:scale-110"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 px-4 scroll-smooth no-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {data.map((item) => (
                <div
                  key={item.id}
                  className="
                    flex-shrink-0 snap-center
                    w-[85vw] md:w-[400px] 
                    bg-white/10 backdrop-blur-md 
                    border border-white/10 hover:border-[#CFAD48]/50
                    p-8 rounded-3xl 
                    shadow-2xl transition-all duration-300
                    flex flex-col justify-between
                  "
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex text-yellow-400 text-sm gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FontAwesomeIcon key={star} icon={faStar} />
                        ))}
                      </div>
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className="text-4xl text-[#CFAD48] opacity-30"
                      />
                    </div>
                    <p className="text-gray-200 italic leading-relaxed text-sm md:text-base mb-6 font-light">
                      "{item.text_description}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-white/10 pt-4 mt-auto">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-[#CFAD48] to-[#F69500] flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {item.nama ? getInitials(item.nama) : <FontAwesomeIcon icon={faUserCircle} />}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base md:text-lg">
                        {item.nama}
                      </h4>
                      <p className="text-[#CFAD48] text-xs uppercase tracking-wide">
                        Jamaah Umrah
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-20 bg-white/10 hover:bg-[#CFAD48] text-white p-3 md:p-4 rounded-full backdrop-blur-md border border-white/20 shadow-lg transition-all hidden md:flex items-center justify-center group-hover:scale-110"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        )}
        <div className="mt-12 text-center border-t border-white/10 pt-8">
          <p className="text-gray-400 font-light text-sm md:text-lg italic">
            "Testimoni adalah cermin komitmen kami untuk terus melayani tamu Allah dengan sepenuh hati."
          </p>
        </div>

      </div>
    </div>
  );
}

export default ReviewSection;