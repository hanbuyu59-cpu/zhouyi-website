import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "承易經之道｜明人生之理",
  description:
    "世事皆有象，萬事皆有解。以易經智慧為根本，提供事業、財運、感情、婚姻、學業與人生方向之命理諮詢。",
  keywords: [
    "周易命理",
    "易經諮詢",
    "人生方向",
    "事業運勢",
    "財運分析",
    "感情姻緣",
  ],
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
