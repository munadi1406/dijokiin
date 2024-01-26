import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DIjokiin | Rebahan Santai Tugas Selesai",
  description: "Dijokiin, destinasi utama untuk pengerjaan tugas web dengan kemudahan dan kenyamanan. Dengan fokus khusus pada tugas di dunia web, kami membantu Anda menyelesaikan proyek-proyek dengan efisien dan profesional. Dari pengembangan situs hingga desain responsif, DIjokiin hadir untuk memenuhi kebutuhan Anda. Temukan layanan pengerjaan tugas terbaik, eksplorasi kreatif, dan solusi web yang inovatif di satu tempat. Mari bergabung dengan kami dan alami pengalaman pengerjaan tugas yang tak tertandingi, khususnya di dunia web.",
  generator: 'Next.js',
  applicationName: 'DiJokiin - Rebahan Santai Tugas Selesai',
  referrer: 'origin-when-cross-origin',
  keywords: ['Dijokiin', 'dreamice','Rebahan', 'Tugas Kuliah', 'kuliah', 'tugas web', 'joki tugas', 'Web Development', 'Website Development','buatin tugasku','buatin tugas','joki tugas','jasa joki tugas','jasa tugas','jasa pengerjaan tugas','jasa pembuatan tugas','tugas sekolah','tugas kuliah'],
  authors: [{ name: 'Fathullah Munadi' }],
  creator: 'Fathullah Munadi',
  publisher: 'Fathullah Munadi',
  bingbot:"index, follow",
  googlebot:"index, follow",
  robots:"index, follow",
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
