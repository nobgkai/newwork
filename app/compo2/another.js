"use client";

import { useState, useEffect, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  { src: "/img/service/020/19.jpg", alt: "ภาพ 1" },
  { src: "/img/service/020/23.jpg", alt: "ภาพ 2" },
  { src: "/img/service/040/17.jpg", alt: "ภาพ 3" },
  { src: "/img/service/040/23.jpg", alt: "ภาพ 4" },
  { src: "/img/service/040/26.jpg", alt: "ภาพ 5" },
  { src: "/img/service/050/2.jpg", alt: "ภาพ 6" },
  { src: "/img/service/050/21.jpg", alt: "ภาพ 7" },
  { src: "/img/service/050/63.jpg", alt: "ภาพ 8" },
  { src: "/img/service/050/73.jpg", alt: "ภาพ 9" },
  { src: "/img/service/050/76.jpg", alt: "ภาพ 10" },
  { src: "/img/service/060/9.jpg", alt: "ภาพ 11" },
  { src: "/img/service/060/29.jpg", alt: "ภาพ 12" },
  { src: "/img/service/060/30.jpg", alt: "ภาพ 13" },
  { src: "/img/service/060/50.jpg", alt: "ภาพ 14" },
  { src: "/img/service/060/58.jpg", alt: "ภาพ 15" },
];

export default function Another() {
  const [selectedImage, setSelectedImage] = useState(null);

  // init AOS (ปิดอัตโนมัติถ้าผู้ใช้ตั้ง reduced motion)
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out",
      once: true,
      offset: 80,
      disable: () =>
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  // ปิด Lightbox ด้วย Esc
  const onKeyDown = useCallback((e) => {
    if (e.key === "Escape") setSelectedImage(null);
  }, []);
  useEffect(() => {
    if (!selectedImage) return;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedImage, onKeyDown]);

  // refresh AOS เมื่อรูปโหลด
  const handleImgLoad = () => AOS.refresh();

  return (
    <>
      {/* หัวข้อ */}
      <div className="text-center my-10" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 relative inline-block pb-2">
          ผลงานอื่นๆ ของทางร้าน
          <span className="block  h-0.5 bg-black mx-auto mt-2 rounded opacity-70"></span>
        </h2>
      </div>

      {/* แกลเลอรีภาพแบบ responsive */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-6 lg:px-8 my-8"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {images.map(({ src, alt }, idx) => {
          const col = idx % 3; // 0=ซ้าย,1=กลาง,2=ขวา
          const effect =
            col === 0 ? "fade-right" : col === 1 ? "zoom-in" : "fade-left";
          return (
            <img
              key={idx}
              src={src}
              alt={alt}
              loading="lazy"
              onLoad={handleImgLoad}
              className="w-full h-48 object-cover rounded shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(src)}
              data-aos={effect}
              data-aos-delay={100 + (idx % 6) * 80} // ไล่ดีเลย์เป็นคลื่น
            />
          );
        })}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 animate-fadein"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="ขยายรูป"
            className="max-w-[95vw] max-h-[90vh] rounded-lg shadow-lg transform scale-100 animate-zoomin"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition"
            aria-label="ปิดรูปภาพ"
          >
            ✕
          </button>
        </div>
      )}

      {/* Keyframes ของ lightbox */}
      <style jsx global>{`
        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes zoomin {
          from {
            transform: scale(0.85);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fadein {
          animation: fadein 0.3s ease-out forwards;
        }
        .animate-zoomin {
          animation: zoomin 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
