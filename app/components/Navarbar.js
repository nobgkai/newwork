import Link from "next/link";
import Image from "next/image";

export default function Navarbar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md bg-white text-gray-800">
      <div className="flex items-center">
        <Image
          src="/img/logo.jpg"
          alt="โลโก้ร้าน"
          width={40}
          height={40}
          className="mr-2 ml-16"
        />
        <h1 className="text-xl font-semibold">Triple-S Media Design</h1>
      </div>
      <nav className="space-x-6 text-sm">
        <Link href="#services" className="hover:text-blue-600">
          บริการ
        </Link>
        <Link href="#portfolio" className="hover:text-blue-600">
          ผลงาน
        </Link>
        <Link href="#contact" className="hover:text-blue-600">
          ติดต่อ
        </Link>
      </nav>
    </header>
  );
}
