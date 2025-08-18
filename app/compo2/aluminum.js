"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  { src: "/img/service/050/43.jpg", alt: "ภาพ 1" },
  { src: "/img/service/050/37.jpg", alt: "ภาพ 2" },
  { src: "/img/service/050/34.jpg", alt: "ภาพ 3" },
  { src: "/img/service/010/7.jpg", alt: "ภาพ 4" },
  { src: "/img/service/020/27.jpg", alt: "ภาพ 5" },
  { src: "/img/service/020/28.jpg", alt: "ภาพ 6" },
  { src: "/img/service/020/29.jpg", alt: "ภาพ 7" },
  { src: "/img/service/020/30.jpg", alt: "ภาพ 8" },
  { src: "/img/service/020/32.jpg", alt: "ภาพ 9" },
];

// ให้ Lightbox เรนเดอร์ที่ document.body เพื่อให้ fixed เต็มจอจริงทุกหน้า
function LightboxPortal({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

export default function Aluminum() {
  const [selectedImage, setSelectedImage] = useState(null);

  // AOS
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

  // ปิดด้วย Esc
  const onKeyDown = useCallback((e) => {
    if (e.key === "Escape") setSelectedImage(null);
  }, []);
  useEffect(() => {
    if (!selectedImage) return;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedImage, onKeyDown]);

  // ล็อกสกโรลตอนเปิด
  useEffect(() => {
    if (!selectedImage) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [selectedImage]);

  const handleImgLoad = () => AOS.refresh();

  return (
    <>
      {/* แกลเลอรีภาพแบบ responsive */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-6 lg:px-8 my-8"
        data-aos="fade-up"
      >
        {images.map(({ src, alt }, idx) => {
          const col = idx % 3; // ซ้าย/กลาง/ขวา
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
              data-aos-delay={100 + (idx % 6) * 80}
            />
          );
        })}
      </div>

      {/* Lightbox ผ่าน Portal */}
      {selectedImage && (
        <LightboxPortal>
          <div
            className="fixed inset-0 z-[9999] bg-black/85 flex items-center justify-center animate-fadein"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
          >
            <img
              src={selectedImage}
              alt="ขยายรูป"
              className="max-w-[95vw] max-h-[90vh] rounded-lg shadow-lg animate-zoomin"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 transition"
              aria-label="ปิดรูปภาพ"
            >
              ✕
            </button>
          </div>
        </LightboxPortal>
      )}

      {/* Keyframes */}
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
