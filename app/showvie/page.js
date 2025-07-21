import Slide from "../components/Slide";
import Vinyl from "../compo2/vinyl";
import Image from "next/image";
import Show0 from "../compo2/show0";
export default function ShowVie() {
  return (
    <>
      <Slide />
      <div className="text-center my-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 relative inline-block pb-2">
          ผลงานของร้าน ป้ายไวนิล
          <span className="block  h-0.5 bg-black mx-auto mt-2 rounded opacity-70"></span>
        </h2>
      </div>
      <Vinyl />
    </>
  );
}
