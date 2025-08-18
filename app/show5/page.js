"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Slide from "../components/Slide";
import Neon from "../compo2/neon";

export default function Show4() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <>
      {/* Slide */}
      <div data-aos="fade-up">
        <Slide />
      </div>

      {/* หัวข้อ */}
      <div
        className="text-center my-10"
        data-aos="fade-up"
        data-aos-delay="120"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 relative inline-block pb-2">
          ผลงานของร้าน งานนีออนเฟล็ค
          <span className="block h-0.5 bg-black mx-auto mt-2 rounded opacity-70"></span>
        </h2>
      </div>

      {/* แกลเลอรีนีออนเฟล็ค */}
      <section data-aos="fade-up" data-aos-delay="220">
        <Neon />
      </section>
    </>
  );
}
