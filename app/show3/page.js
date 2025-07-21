import Slide from "../components/Slide";
import Show0 from "../compo2/show0";
import Aluminum from "../compo2/aluminum";

export default function Show3() {
  return (
    <>
      <Slide />
      <div className="text-center my-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 relative inline-block pb-2">
          ผลงานของร้าน งานอลูมิเนียม
          <span className="block  h-0.5 bg-black mx-auto mt-2 rounded opacity-70"></span>
        </h2>
      </div>
      <Aluminum />
    </>
  );
}
