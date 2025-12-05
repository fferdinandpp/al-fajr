import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface FAQItem {
  id: number;
  pertanyaan: string;
  jawaban: string;
}

function FAQ() {
  const [faq, setFaq] = useState<FAQItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://adminside.alfajrumroh.co.id/api/faq")
      .then((res) => {
        setFaq(res.data.data);
        setError(false);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="px-20 py-12 md:px-10 max-sm:px-3 max-sm:py-6">
      <div className="text-center text-[#4A4A4A] pb-7">
        <h1 className="text-3xl font-extrabold pb-2 max-sm:text-2xl">
          Frequently Asked Questions
        </h1>
        <p className="max-sm:text-base leading-relaxed">
          Temukan pertanyaan yang paling sering ditanyakan tentang Umrah & Haji Plus
        </p>
      </div>

      {loading && (
        <p className="text-center text-gray-500 italic py-10">
          Memuat pertanyaan...
        </p>
      )}

      {error && !loading && (
        <p className="text-center text-red-500 font-semibold py-10">
          Gagal memuat pertanyaan. Silakan coba lagi nanti.
        </p>
      )}

      {!loading && !error && (
        <div className="flex flex-col gap-5 justify-center items-center pb-10">
          {faq.map((item, i) => (
            <div
              key={item.id}
              className="
                border border-black rounded-xl w-2/3 p-5
                md:w-4/5 
                max-sm:w-full max-sm:p-5 max-sm:text-base
              "
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggle(i)}
              >
                <h3 className="max-sm:text-base">{item.pertanyaan}</h3>
                <FontAwesomeIcon
                  icon={openIndex === i ? faChevronUp : faChevronDown}
                />
              </div>

              {openIndex === i && (
                <p className="text-xs max-sm:text-sm text-justify text-[#454545] pt-5 whitespace-pre-line leading-relaxed">
                  {item.jawaban}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FAQ;
