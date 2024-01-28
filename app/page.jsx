import ConsultationNow from "@/components/ConsultationNow";
import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import SecondHero from "@/components/SecondHero";
import Step from "@/components/Step";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";

import Link from "next/link";


export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: "Jasa Joki Tugas Web Profesional | DIjokiin",
    image: "/assets/img/web.png",
    description: "Dijokiin: Solusi Profesional Tugas Web. Tim joki kami berpengalaman dalam pengembangan dan desain situs responsif. Percayakan proyek Anda pada kami untuk hasil terbaik dengan kecepatan dan kualitas unggul.",
  }
  return (
    <main className="md:px-20 px-2 p-4">
     
      <Hero />
      <SecondHero />
      <Step />
      <Faqs />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 py-10">
        <div className="flex justify-start items-center flex-col gap-2">
          <p className="text-blue-600 w-full text-center font-semibold">Bebas Untuk Anda Kembangkan Lagi, Dan Tentu Saja Dengan Harga Yang Lebih Terjangkau Sesuai Untuk Kantong Mahasiswa</p>
          <Text className={"w-full text-center"}>Kami Juga Menyediakan Source Web App Yang Sudah Jadi</Text> 
          <div>
            <Button className="bg-blue-600">
              <Link href={'/store'}>Store</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-start items-center">
          <p className="text-blue-600 font-semibold w-full text-center">Percayakan Tugas Anda Dengan Dijokiin</p>
          <Text className={"w-full text-center"}>Rebahan Santai Tugas Selesai</Text>
          <div>
            <ConsultationNow />
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
