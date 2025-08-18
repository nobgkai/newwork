import Link from "next/link";
import Image from "next/image";

export default function Navarbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-sm text-white">
      <div className="flex items-center px-4 sm:px-8 py-3 max-w-screen-xl mx-auto">
        <Image
          src="/img/logo1.jpg"
          alt="โลโก้ร้าน"
          width={40}
          height={40}
          className="rounded mr-3"
        />
        <Link
          href="/"
          className="text-lg sm:text-xl font-semibold text-white hover:text-gray-300 transition"
        >
          Artist Advertising And Organizer
        </Link>
      </div>
    </header>
  );
}
