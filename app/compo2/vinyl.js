"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  { src: "/img/service/040/2.jpg", alt: "ภาพ 1" },
  { src: "/img/service/040/5.jpg", alt: "ภาพ 2" },
  { src: "/img/service/040/6.jpg", alt: "ภาพ 3" },
  { src: "/img/service/040/7.jpg", alt: "ภาพ 4" },
  { src: "/img/service/040/8.jpg", alt: "ภาพ 5" },
  { src: "/img/service/040/10.jpg", alt: "ภาพ 6" },
  { src: "/img/service/040/13.jpg", alt: "ภาพ 7" },
  { src: "/img/service/040/14.jpg", alt: "ภาพ 8" },
  { src: "/img/service/040/15.jpg", alt: "ภาพ 9" },
];

function LightboxPortal({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

export default function Vinyl() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);

  // ล็อกสกโรลตอนเปิด lightbox
  useEffect(() => {
    if (!selectedImage) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selectedImage]);

  return (
    <>
      {/* แกลเลอรี */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-6 lg:px-8 my-8">
        {images.map(({ src, alt }, idx) => (
          <img
            key={idx}
            src={src}
            alt={alt}
            className="w-full h-48 object-cover rounded shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedImage(src)}
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
            loading="lazy"
          />
        ))}
      </div>

      {/* Lightbox เรนเดอร์ที่ document.body เพื่อให้เต็มจอจริง */}
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
          animation: fadein 0.25s ease-out forwards;
        }
        .animate-zoomin {
          animation: zoomin 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
