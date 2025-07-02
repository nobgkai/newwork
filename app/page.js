import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="w-full py-20 h-[570px] bg-center bg-no-repeat mt-1"
        style={{
          backgroundImage: "url('./img/1.png')",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></section>
      <section className="">
        <h1 className="text-red-600 text-[55px] font-bold text-left pl-20 mt-9">
          เห็น เด่น ชัด ทุกสายตา ป้ายโฆษณาเพื่อธุรกิจคุณ
          สร้างแบรนด์ให้เป็นที่จดจำ ด้วยป้ายคุณภาพจากเรา
        </h1>
        <h2
          className="text-blue-600 font-bold text-left pl-20 mt-9"
          style={{ fontSize: "48px" }}
        >
          ด้วยประสบการณ์งานป้ายมากกว่า 15 ปี
        </h2>
        <p className="text-blue-600 font-bold  text-3xl text-left pl-20 ">
          ในการสร้างสรรค์ป้ายให้ธุรกิจหลากหลายประเภท ทีมงานมืออาชีพ
          <br />
          พร้อมให้คำปรึกษา ออกแบบ และติดตั้ง วัสดุคุณภาพสูง ทนทาน
          <br />
          คุ้มค่าแก่การลงทุนในระยะยาว
        </p>
        <p
          className="text-blue-600 font-bold text-left pl-20 mt-9"
          style={{ fontSize: "48px" }}
        >
          บริการครบวงจร
        </p>
        <p className=" text-blue-600 font-bold text-3xl text-left pl-20">
          ตั้งแต่ปรึกษา ออกแบบ ผลิต ติดตั้งและการบริการดูแลหลังการขายอย่างจริงใจ
        </p>
        <p className="text-gray-600 text-left pl-20 py-10 font-bold text-3xl">
          ไวนิล อักษรโลหะ อักษรพลาสวูด ป้ายตู้ไฟ ป้ายอลูมีเนียมคอมโพสิต
          <br />
          สื่อสิ่งพิมพ์ นามบัตร โบชัวร์ เมนูอาหาร ป้ายโครงสร้างใหญ่
          <br />
          ป้ายทาวน์เวอร์ ป้ายตกแต่งภายในอาคาร
          <br />
        </p>
        <p
          className="text-red-600 font-bold text-left pl-20 "
          style={{ fontSize: " 46px" }}
        >
          ประสบการณ์ในโครงการใหญ่ มาตรฐานความปลอดภัยระดับสูง
        </p>
      </section>
      <section className="max-w-screen-xl max-auto">
        <h1 className="text-6xl font-bold text-red-600 text-left pl-20 py-10">
          ป้ายโฆษณาครบวงจร ตอบโจทย์ทุกขนาดธุรกิจ
        </h1>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 px-8">
        <h3 className="text-3xl font-semibold text-center mb-12">
          บริการของเรา
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 text-center max-w-screen-xl mx-auto ">
          {[
            {
              title: "ป้ายไวนิล",
              desc: "เหมาะสำหรับงานโฆษณากลางแจ้ง ติดตั้งง่าย ทนทาน",
            },
            {
              title: "นีออนเฟก",
              desc: "เหมาะสำหรับงานโฆษณากลางแจ้ง ติดตั้งง่าย ทนทาน",
            },
            {
              title: "อักษรพลาสวูด",
              desc: "เหมาะสำหรับงานโฆษณากลางแจ้ง ติดตั้งง่าย ทนทาน",
            },
            {
              title: "อักษรโลหะ",
              desc: "เหมาะสำหรับงานโฆษณากลางแจ้ง ติดตั้งง่าย ทนทาน",
            },
            {
              title: "ตู้ไฟ",
              desc: "เหมาะสำหรับงานโฆษณากลางแจ้ง ติดตั้งง่าย ทนทาน",
            },
            {
              title: "ป้ายไฟ LED",
              desc: "ดึงดูดสายตาทั้งกลางวันและกลางคืน เหมาะสำหรับการตลาด",
            },
          ].map(({ title, desc }, i) => (
            <div
              key={i}
              className="col-span-3 p-6 rounded-xl shadow-lg border border-white/20 bg-white/30 backdrop-blur-md"
            >
              <h4 className="text-xl font-bold mb-2">{title}</h4>
              <p>{desc}</p>
              <a
                href="#contact"
                className="mt-4 inline-block border-2 border-gray-600 text-sky-600 px-6 py-2 rounded-full hover:bg-sky-100 hover:text-sky-800 transition transform hover:-translate-y-1 hover:shadow-lg"
              >
                รับชมผลงาน
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Facebook Section */}
      <section id="Facebook" className="py-20 px-7">
        <div className="grid grid-cols-1 md:grid-cols-1 max-w-screen-xl mx-auto gap-8">
          <div className="p-8 border rounded-xl shadow-md flex flex-col md:flex items-center py-20">
            <div
              className="fb-page"
              data-href="https://www.facebook.com/TripleSCM/?locale=th_TH"
              data-tabs="timeline"
              data-width="700"
              data-height="500"
              data-small-header="false"
              data-adapt-container-width="false"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/TripleSCM"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/TripleSCM">Triple-S Media</a>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="pricing" className="py-20 bg-gray-50 px-8">
        <h3 className="text-3xl font-semibold text-center mb-12">
          ช่องทางการติดต่อ
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-screen-xl mx-auto">
          <div className="p-8 border rounded-xl shadow-md flex flex-col items-center border-white/20 bg-white/30 backdrop-blur-md">
            <h4 className="text-xl font-bold mb-6">เพจเฟสบุ๊ค</h4>
            <i className="fa-brands fa-facebook-messenger text-7xl text-blue-600 mb-8"></i>
            <a
              href="https://m.me/TripleSCM/?locale=th_TH"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-gray-600 text-black px-6 py-2 rounded hover:bg-sky-100 transition transform hover:-translate-y-1 hover:shadow-lg "
            >
              สนใจติดต่อ
            </a>
          </div>

          <div className="p-8 border rounded-xl shadow-md border-white/20 bg-white/30 backdrop-blur-md">
            <h4 className="text-xl font-bold mb-6">เบอร์ติดต่อ</h4>
            <i className="fa-solid fa-phone-volume text-green-600 mb-6 text-5xl"></i>
            <ul className="text-sm mb-6">
              <li>• 097-881-4791</li>
            </ul>
            <a className="inline-block border-2 border-gray-600 text-black px-6 py-2 rounded hover:bg-sky-100 transition transform hover:-translate-y-1 hover:shadow-lg">
              สั่งเลย
            </a>
          </div>

          <div className="p-8 border rounded-xl shadow-md flex flex-col items-center border-white/20 bg-white/30 backdrop-blur-md">
            <h4 className="text-xl font-bold mb-6">Line</h4>
            <i
              className="fa-brands fa-line"
              style={{
                color: "#00ff2a",
                fontSize: "4.5rem",
                marginBottom: "1.75rem",
              }}
            ></i>
            <a className="inline-block border-2 border-gray-600 text-black px-6 py-2 rounded hover:bg-sky-100 transition transform hover:-translate-y-1 hover:shadow-lg">
              สนใจติดต่อ
            </a>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16 bg-gray-200 text-center">
        <h3 className="text-2xl font-bold mb-8">Google Map</h3>
        <div className="flex justify-center mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.551972948434!2d99.0281366761065!3d18.818109582334145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da2523bfa4bf17%3A0xec4af778c9e0f651!2zVHJpcGxlLVMgTWVkaWEgRGVzaWduIOC4l-C4s-C4m-C5ieC4suC4ouC5gOC4iuC4teC4ouC4h-C5g-C4q-C4oeC5iA!5e0!3m2!1sth!2sth!4v1745511889429!5m2!1sth!2sth"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-md w-full max-w-4xl"
          ></iframe>
        </div>
        <a
          href="https://maps.app.goo.gl/YgnsnUA9cMfyZRt59"
          className="inline-block border-2 border-gray-600 text-black px-6 py-2 rounded hover:bg-sky-100 transition transform hover:-translate-y-1 hover:shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          เปิด Google
        </a>
      </section>
    </>
  );
}
