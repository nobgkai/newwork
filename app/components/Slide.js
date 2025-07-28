export default function Slide() {
  return (
    <>
      <div className="relative w-full h-[500px] rounded-lg shadow-lg overflow-hidden">
        {/* รูปภาพพื้นหลังเต็มพื้นที่ */}
        <img
          src="/img/web3.png"
          alt="พื้นหลัง"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* กล่องข้อความเป็น overlay ไล่เฉดสีดำ */}
        <div
          className="absolute top-0 left-0 h-full
  w-full sm:w-1/2
  bg-gradient-to-r from-black/70 via-black/40 to-transparent
  backdrop-blur-sm p-8 text-white flex flex-col justify-center items-start
  rounded-tr-lg rounded-br-lg"
        >
          <div className="max-w-lg mx-auto text-lg space-y-6">
            <h2 className="text-3xl font-bold">รับผลิตอักษรโลหะ คุณภาพสูง</h2>
            <p className="mt-5 leading-relaxed">
              รับออกแบบ ผลิตติดตั้ง ป้ายเชียงใหม่
              <br />
              พร้อมประเมิณภาษีป้ายเบื้องต้นฟรี
              <br />
              ขึ้นรูปอักษรทุกชนิด พร้อมออกแบบ 3D
              <br />
              มีแบบป้ายสวยๆคุณภาพสูงไว้คอยบริการลูกค้า
              <br />
              ทั่วเชียงใหม่และภาคเหนือ
            </p>

            <a
              className="mt-16 w-36 px-5 py-3 border border-white rounded hover:bg-white hover:text-black transition"
              href="https://m.me/ArtistAdvertisingCM?ref=สนใจสอบถามครับ"
              target="_blank"
              rel="noopener noreferrer"
            >
              CLICK ME
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
