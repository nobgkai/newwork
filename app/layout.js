import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navarbar from "./components/Navarbar";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Artis ป้ายร้านคุณภาพสูง | รับทำป้ายครบวงจร ราคาย่อมเยา",
  description:
    "Artis ผู้เชี่ยวชาญด้านการออกแบบและผลิตป้ายร้าน ป้ายไวนิล ป้ายกล่องไฟ ป้ายไดคัท พร้อมบริการออกแบบฟรี จัดส่งทั่วประเทศ ในราคาที่คุณจับต้องได้",
  keywords:
    "ทำป้าย, ป้ายร้าน, ป้ายไวนิล, ป้ายกล่องไฟ, ออกแบบป้าย, ร้านทำป้าย, ป้ายหน้าร้าน, Artis ป้าย, ป้ายราคาถูก",
  authors: [{ name: "Artis Team", url: "https://yourdomain.com" }],
  creator: "Artis",
  openGraph: {
    title: "Artis | รับทำป้ายร้านคุณภาพสูง พร้อมออกแบบฟรี",
    description:
      "สั่งทำป้ายร้านทุกรูปแบบ ป้ายไวนิล ป้ายกล่องไฟ พร้อมบริการออกแบบฟรี ส่งทั่วไทย",
    url: "https://yourdomain.com",
    siteName: "Artis",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // รูปที่แสดงตอนแชร์ (1200x630 px)
        width: 1200,
        height: 630,
      },
    ],
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="bg-white text-gray-800">
        <header>
          <link
            href="https://fonts.googleapis.com/css2?family=Prompt&family=Inter&display=swap"
            rel="stylesheet"
          ></link>
        </header>
        <Navarbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
