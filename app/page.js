import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative mt-15 sm:mt-16 md:mt-15 lg:mt-15 xl:mt-15 overflow-hidden">
        <Image
          src="/img/web1.png"
          alt="background"
          width="2000"
          height="1000"
          className="object-cover"
          priority
        ></Image>
      </section>
      <section className="mt-10">
        <div className="max-w-screen-xl mx-auto ">
          <h1 className="text-red-600  text-[32px] sm:text-[40px] md:text-[45px] lg:text-[48px] font-bold text-left pl-5">
            เห็น เด่น ชัด ทุกสายตา ป้ายโฆษณาเพื่อธุรกิจคุณ
            สร้างแบรนด์ให้เป็นที่จดจำ ด้วยป้ายคุณภาพจากเรา
          </h1>
          <h2 className="text-blue-600 font-bold text-left pl-5 mt-5 text-[32px] sm:text-[40px] md:text-[45px] lg:text-[48px]">
            ด้วยประสบการณ์งานป้ายมากกว่า 15 ปี
          </h2>
          <p className="text-blue-600 font-bold   text-left pl-5  text-[20px] sm:text-[23px] md:text-[25px] lg:text-[25px] ">
            ในการสร้างสรรค์ป้ายให้ธุรกิจหลากหลายประเภท ทีมงานมืออาชีพ
            <br />
            พร้อมให้คำปรึกษา ออกแบบ และติดตั้ง วัสดุคุณภาพสูง ทนทาน
            <br />
            คุ้มค่าแก่การลงทุนในระยะยาว
          </p>
          <p className="text-blue-600 font-bold text-left pl-5 mt-5 text-[32px] sm:text-[40px] md:text-[45px] lg:text-[48px]">
            บริการครบวงจร
          </p>
          <p className=" text-blue-600 font-bold text-3xl text-left pl-5 text-[20px] sm:text-[23px] md:text-[25px] lg:text-[27px]">
            ตั้งแต่ปรึกษา ออกแบบ ผลิต
            ติดตั้งและการบริการดูแลหลังการขายอย่างจริงใจ
          </p>
          <p className="text-gray-600 text-left0 font-bold text-[20px] sm:text-[23px] md:text-[25px] lg:text-[25px] pl-5 mt-5">
            ไวนิล อักษรโลหะ อักษรพลาสวูด ป้ายตู้ไฟ ป้ายอลูมีเนียมคอมโพสิต
            <br />
            สื่อสิ่งพิมพ์ นามบัตร โบชัวร์ เมนูอาหาร ป้ายโครงสร้างใหญ่
            <br />
            ป้ายทาวน์เวอร์ ป้ายตกแต่งภายในอาคาร
            <br />
          </p>
          <p className="text-red-600 font-bold text-left pl-5 mt-5 text-[26px] sm:text-[40px] md:text-[45px] lg:text-[48px]  ">
            ประสบการณ์ในโครงการใหญ่ มาตรฐานความปลอดภัยระดับสูง
          </p>
        </div>
      </section>

      <section className="mt-10 ">
        <div className=" w-full backdrop-blur-md bg-white/30 rounded-2xl shadow-md p-8 text-center border border-white/20">
          <h1 className="text-4xl md:text-6xl font-bold text-red-600 leading-tight">
            ป้ายโฆษณาครบวงจร
            <br className="hidden md:block" />
            <span className="block md:inline">ตอบโจทย์ทุกขนาดธุรกิจ</span>
          </h1>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center gap-8 my-10 pt-6">
    
        <div
          className="w-60 h-60 flex items-center justify-center border-4 border-orange-400 rounded-full text-center
              text-orange-500 text-2xl font-bold
              hover:scale-105 hover:shadow-xl hover:ring-4 hover:ring-orange-100
              transition duration-300 ease-in-out cursor-pointer"
        >
          <p>
            สำหรับ SME
            <br />
            และ Startup
          </p>
        </div>

        {/* ปุ่ม 2: ธุรกิจประเภทต่างๆ */}
        <div
          className="w-60 h-60 flex items-center justify-center border-4 border-blue-700 rounded-full text-center
              text-blue-700 text-2xl font-bold
              hover:scale-105 hover:shadow-xl hover:ring-4 hover:ring-blue-100
              transition duration-300 ease-in-out cursor-pointer"
        >
          <p>
            ธุรกิจประเภท
            <br />
            ต่างๆ
          </p>
        </div>

        {/* ปุ่ม 3: ธุรกิจขนาดกลางถึงใหญ่ */}
        <div
          className="w-60 h-60 flex items-center justify-center border-4 border-pink-600 rounded-full text-center
              text-pink-600 text-2xl font-bold
              hover:scale-105 hover:shadow-xl hover:ring-4 hover:ring-pink-100
              transition duration-300 ease-in-out cursor-pointer"
        >
          <p>
            สำหรับ
            <br />
            ธุรกิจขนาด
            <br />
            กลางถึงใหญ่
          </p>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 px-8">
        <h3 className="text-3xl font-semibold text-center mb-12">
          ตัวอย่างงานของเรา
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 text-center max-w-4xl mx-auto ">
          {[
            {
              title: "ป้ายไวนิล/สติ๊กเกอร์/สแตนดี้",
              link: "/showvie",
              img: "/img/service/040/2.jpg",
            },
            {
              title: "อักษรโลหะ/อักษรพลาสวูด",
              link: "/show2",
              img: "/img/service/050/42.jpg",
            },
            {
              title: "อลูมีเนียมคอมโพสิต",
              link: "/show3",
              img: "/img/service/010/8.jpg",
            },
            {
              title: "ป้ายตู้ไฟ",
              link: "/show4",
              img: "/img/service/020/13.jpg",
            },
            {
              title: "ป้ายนีออนเฟล็ค",
              link: "/show5",
              img: "/img/service/030/3.jpg",
            },
            {
              title: "งานอีเว้นท์และอื่นๆ",
              link: "/show6",
              img: "/img/service/060/59.jpg",
            },
          ].map(({ title, desc, img, link }, i) => (
            <div
              key={i}
              className="col-span-3 p-6 rounded-xl shadow-lg border border-white/20 bg-white/30 backdrop-blur-md"
            >
              <h4 className="text-xl font-bold mb-2">{title}</h4>
              <Image
                src={img}
                alt={title}
                width={500}
                height={500}
                className="w-50 h-48 object-cover rounded-lg mb-4  block mx-auto "
              />

              <a
                href={link}
                className="mt-4 inline-block border-2 border-gray-600 text-sky-600 px-6 py-2 rounded-full hover:bg-sky-100 hover:text-sky-800 transition transform hover:-translate-y-1 hover:shadow-lg"
              >
                รับชมผลงาน
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Facebook Section */}
      <section id="Facebook" className="py-5 px-6 ">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            ติดตามเรา
          </h1>
          <p className="text-gray-500 text-lg">
            บนเพจ Facebook เพื่อรับข่าวสารล่าสุด
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="p-6 md:p-8 rounded-2xl shadow-xl bg-white/70 backdrop-blur-lg border border-gray-200 flex justify-center">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FArtistAdvertisingCM&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="340"
              height="331"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="pricing" className="py-20 bg-gray-50 px-8 mt-10">
        <h3 className="text-3xl font-semibold text-center mb-12">
          ช่องทางการติดต่อ
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-screen-xl mx-auto">
          <div className="p-8 border rounded-xl shadow-md flex flex-col items-center border-white/20 bg-white/30 backdrop-blur-md">
            <h4 className="text-xl font-bold mb-6">เพจเฟสบุ๊ค</h4>
            <i className="fa-brands fa-facebook-messenger text-7xl text-blue-600 mb-8 transition-transform duration-300 hover:scale-110 hover:rotate-6"></i>
            <a
              href="https://m.me/ArtistAdvertisingCM?ref=สนใจสอบถามครับ"
              target="_blank"
              rel="noopener noreferrer"
              className=" mt-5 inline-block border-2 border-gray-600 text-black px-6 py-2 rounded hover:bg-sky-100 transition transform hover:-translate-y-1 hover:shadow-lg "
            >
              สนใจติดต่อ
            </a>
          </div>

          <div className="p-8 border rounded-xl shadow-md border-white/20 bg-white/30 backdrop-blur-md">
            <h4 className="text-xl font-bold mb-6">เบอร์ติดต่อ</h4>
            <i className="fa-solid fa-phone-volume text-5xl text-green-600 mb-8 transition-transform duration-300 hover:scale-110 hover:rotate-6"></i>
            <ul className="text-sm mb-6">
              <li>• 097-881-4791</li>
            </ul>
            <a
              href="tel:0978814791"
              className="inline-block border-2 border-gray-600 text-black px-6 py-2 rounded hover:bg-sky-100 transition transform hover:-translate-y-1 hover:shadow-lg"
            >
              สนใจติดต่อ
            </a>
          </div>

          <div className="p-8 border rounded-xl shadow-md flex flex-col items-center border-white/20 bg-white/30 backdrop-blur-md">
            <h4 className="text-xl font-bold mb-6">Line</h4>
            <i className="fa-brands fa-line text-7xl text-green-500 mb-8 transition-transform duration-300 hover:scale-110 hover:rotate-6"></i>
            <a className="mt-5 inline-block border-2 border-gray-600 text-black px-6 py-2 rounded hover:bg-sky-100 transition transform hover:-translate-y-1 hover:shadow-lg">
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
