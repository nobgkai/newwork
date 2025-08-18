"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  { src: "/img/service/030/10.jpg", alt: "ภาพ 1" },
  { src: "/img/service/030/12.jpg", alt: "ภาพ 2" },
  { src: "/img/service/030/15.jpg", alt: "ภาพ 3" },
  { src: "/img/service/030/16.jpg", alt: "ภาพ 4" },
  { src: "/img/service/030/18.jpg", alt: "ภาพ 5" },
  { src: "/img/service/030/3.jpg", alt: "ภาพ 6" },
  { src: "/img/service/030/6.jpg", alt: "ภาพ 7" },
  { src: "/img/service/030/5.jpg", alt: "ภาพ 8" },
  { src: "/img/service/030/2.jpg", alt: "ภาพ 9" },
];

export default function Neon() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800, // ความเร็วอนิเมชัน
      easing: "ease-out", // ลื่นตา
      once: true, // เล่นครั้งเดียวเมื่อเลื่อนถึง
      offset: 80, // เริ่มก่อนเข้า viewport นิดนึง
    });
  }, []);

  return (
    <>
      {/* แกลเลอรีภาพแบบ responsive */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-6 lg:px-8 my-8"
        data-aos="fade-up"
      >
        {images.map(({ src, alt }, idx) => {
          // เลือกเอฟเฟ็กต์ตามคอลัมน์: ซ้าย -> ขวา
          const col = idx % 3;
          const effect =
            col === 0 ? "fade-right" : col === 1 ? "zoom-in" : "fade-left";

          return (
            <img
              key={idx}
              src={src}
              alt={alt}
              className="w-full h-48 object-cover rounded shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(src)}
              data-aos={effect}
              data-aos-delay={100 + (idx % 6) * 80} // ไล่สเต็ปเป็นคลื่น
            />
          );
        })}
      </div>

      {/* Lightbox แบบค่อย ๆ โผล่ พร้อมขยายเต็มมากขึ้น */}
      {selectedImage && (
        <div
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
