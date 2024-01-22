import ConsultationNow from "@/components/ConsultationNow";
import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import SecondHero from "@/components/SecondHero";
import Step from "@/components/Step";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {

  return (
    <main className="px-20 p-4">
      
      <Hero />
      <SecondHero />
      <Step />
      <Faqs />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 py-10">
        <div className="flex justify-start items-center flex-col gap-2">
          <Text>Kami Juga Menyediakan Source Web App Yang Sudah Jadi</Text>
          <p className="text-blue-600">Bebas Untuk Anda Kembangkan Lagi, Dan Tentu Saja Dengan Harga Yang Lebih Terjangkau Sesuai Untuk Kantong Mahasiswa</p>
          <div>
            <Button className="bg-blue-600">
              <Link href={'/store'}>Store</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-start items-center">
          <p className="text-blue-600 font-semibold">Percayakan Tugas Anda Dengan T3S</p>
          <Text>Rebahan Santai Tugas Selesai</Text>
          <div>
            <ConsultationNow />
          </div>
        </div>
      </div>
    </main>
  );
}