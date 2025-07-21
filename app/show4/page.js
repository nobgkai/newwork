import Slide from "../components/Slide";
import Electric from "../compo2/electric";
export default function Show4() {
  return (
    <>
      <Slide />
      <div className="text-center my-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 relative inline-block pb-2">
          ผลงานของร้าน งานนีออนเฟล็ค
          <span className="block  h-0.5 bg-black mx-auto mt-2 rounded opacity-70"></span>
        </h2>
      </div>
      <Electric />
    </>
  );
}
