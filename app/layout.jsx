import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'
 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jasa Joki Tugas Web Profesional | DIjokiin",
  description: "Dijokiin: Solusi Profesional Tugas Web. Tim joki kami berpengalaman dalam pengembangan dan desain situs responsif. Percayakan proyek Anda pada kami untuk hasil terbaik dengan kecepatan dan kualitas unggul.",
  keywords: ['Dijokiin', 'dreamice','Rebahan', 'Tugas Kuliah', 'kuliah', 'tugas web', 'joki tugas', 'Web Development', 'Website Development','buatin tugasku','buatin tugas','joki tugas','jasa joki tugas','jasa tugas','jasa pengerjaan tugas','jasa pembuatan tugas','tugas sekolah','tugas kuliah','tugas web PHP','tugas web HTML','tugas web CSS','Joki tugas murah','Joki tugas cepat',''],
  authors: [{ name: 'Fathullah Munadi' }],
  creator: 'Fathullah Munadi',
  publisher: 'Fathullah Munadi', 
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  metadataBase: new URL('https://dijokiin.dreamice.my.id'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },  
  openGraph: {
    title: 'Jasa Joki Tugas Web Profesional | DIjokiin',
    description: 'Dijokiin membantu Anda menyelesaikan tugas web dengan mudah dan cepat. Kami memiliki tim joki tugas profesional yang berpengalaman dan berdedikasi untuk memberikan layanan terbaik. DIjokiin hadir untuk memenuhi kebutuhan Anda.',
    url: 'https://dijokiin.dreamice.my.id',
    siteName: 'DIjokiin',
    locale: 'id_ID',
    type: 'website',
  },
  category: 'technology',
  // verification: {
  //   google: 'C_sDwgcAW8MJ34AFTSMKO10Jbau3nAP33QysY2Oe6mE',
  // },
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
      <GoogleAnalytics  gaId="G-PLT7VYP6VX" />
    </html> 
  );
}
