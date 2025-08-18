"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Slide from "../components/Slide";
import Vinyl from "../compo2/vinyl";

export default function ShowVie() {
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
      {/* Slide บนสุด */}
      <div data-aos="fade-up">
        <Slide />
      </div>

      {/* หัวข้อ */}
      <div
        className="text-center my-10"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 relative inline-block pb-2">
          ผลงานของร้าน ป้ายไวนิล
          <span className="block h-0.5 bg-black mx-auto mt-2 rounded opacity-70"></span>
        </h2>
      </div>

      {/* แกลเลอรีไวนิล */}
      <section data-aos="fade-up" data-aos-delay="250">
        <Vinyl />
      </section>
    </>
  );
}
