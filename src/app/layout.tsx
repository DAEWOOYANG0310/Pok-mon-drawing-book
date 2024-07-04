import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "포켓몬 도감",
  description: "Next.js로 만든 포켓몬 도감 애플리케이션",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-gray-100 min-h-screen`}>
        <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
          <div className="container mx-auto py-12 px-4 m-5">
            <h1 className="md:text-6xl font-bold text-center ">포켓몬 도감</h1>
            <p className="text-center mt-4 text-xl">
              당신의 포켓몬 여행을 시작하세요!
            </p>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-800 text-white py-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 포켓몬 도감. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
