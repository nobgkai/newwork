export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-4">Triple-S Media Design</h4>
          <p>ออกแบบและผลิตป้ายทุกชนิด ด้วยประสบการณ์มืออาชีพ</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">ลิงก์ด่วน</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://m.me/ArtistAdvertisingCM?ref=สนใจสอบถามครับ"
                className="hover:underline"
              >
                บริการ
              </a>
            </li>
            <li>
              <a href="/show6" className="hover:underline">
                ผลงาน
              </a>
            </li>
            <li>
              <a
                href="https://m.me/ArtistAdvertisingCM?ref=สนใจสอบถามครับ"
                className="hover:underline"
              >
                ติดต่อ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">ติดต่อเรา</h4>

          <p>โทร: 091-123-4567</p>
          <p>อีเมล: triple-sign@email.com</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">ติดตามเรา</h4>
          <a
            href="https://facebook.com/TripleSCM"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Facebook: Triple-S Media
          </a>
        </div>
      </div>
      <p className="text-center text-sm mt-8 text-gray-400">
        © 2025 Triple-S Media Design. All rights reserved.
      </p>
    </footer>
  );
}
