import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "T3S | Rebahan Santai Tugas Selesai",
  description: "Rebahan Santai Tugas Selesai",
  generator: 'Next.js',
  applicationName: 'T3S - Rebahan Santai Tugas Selesai',
  referrer: 'origin-when-cross-origin',
  keywords: ['T3S', 'Rebahan', 'Tugas Kuliah', 'kuliah', 'tugas web', 'joki tugas', 'Web Development', 'Website Development'],
  authors: [{ name: 'Fathullah Munadi' }],
  creator: 'Fathullah Munadi',
  publisher: 'Fathullah Munadi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
