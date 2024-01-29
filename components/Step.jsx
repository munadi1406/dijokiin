import Image from "./Image";
import CustomCard from "@/components/CustomCard";
import { AiOutlineMessage } from "react-icons/ai";
import { TbMoneybag } from "react-icons/tb";
import { FiCoffee } from "react-icons/fi";
import { IoIosCode } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import Text from "./Text";


export default function Step() {
  const data = [
    {
      icon: <AiOutlineMessage />,
      title: "Konsultasi",
      desc: "Mulailah dengan mendiskusikan kebutuhan website Anda bersama kami. Apakah itu tugas kuliah atau aplikasi web untuk laporan magang anda, kami akan membimbing Anda melalui konsultasi awal untuk memahami kebutuhan Anda dan memberikan wawasan.",
    },
    {
      icon: <TbMoneybag />,
      title: "Diskusi Harga",
      desc: "Setelah memahami website Anda, kami akan memberikan struktur harga yang detail. Jika Anda puas, kita dapat melangkah lebih jauh. Ini adalah kesempatan bagi kita untuk membahas dan menyelesaikan syarat sebelum beralih ke fase pengembangan.",
    },
    {
      icon: <FiCoffee />,
      title: "Deposit & Kickstart",
      desc: "Untuk memulai proyek website anda, lakukan pembayaran muka sebesar 20% sebagai uang jaminan. Ini membantu kami mendapatkan 'kopi dan snack' yang diperlukan untuk memberdayakan sesi pengkodean kami. Setelah deposit diterima, kami mulai bekerja pada website Anda.",
    },
    {
      icon: <IoIosCode />,
      title: "Pengembangan",
      desc: "Kami akan bekerja dengan tekun pada proyek website Anda, memberi Anda pembaruan tentang kemajuan. Tergantung pada kompleksitas aplikasi, kami bertujuan untuk menyelesaikannya dalam waktu kurang dari seminggu. Komunikasi tetap terbuka sepanjang fase ini.",
    },
    {
      icon: <CiCircleCheck />,
      title: "Penyelesaian & Pembayaran Akhir",
      desc: "Setelah website selesai, kami akan berbagi kode sumber untuk website Anda. Setelah ulasan dan kepuasan Anda, lakukan pembayaran akhir. Dengan itu, website impian Anda siap diluncurkan!",
    },
  ];
  
  return (
    <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-2 md:px-24 px-4 my-8">
      <div className="flex flex-col gap-2 lg:col-span-1 col-span-full">
        <Text className={"lg:text-start text-center capitalize"}>
          {" "}
          Selesaikan Tugas kuliah Anda dengan mudah bersama Dijokiin dalam
          beberapa langkah sederhana.
        </Text>
        <div className="mt-3 flex justify-center items-center">
          <div className="border-l-2 pl-2 w-max border-blue-600 flex flex-col gap-2">
            {data.map(({ icon, title, desc }, i) => (
              <CustomCard
                key={i}
                icon={icon}
                title={`Langkah ${i + 1} ${title}`}
                desc={desc}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="lg:flex hidden justify-center p-2 items-center bg-gradient-to-b from-blue-500 to-indigo-800 rounded-md">
        <Image
          id={'step.webp'}
          alt="dijokiin rebahan santai tugas selesai"
          className="rounded-md w-full h-auto"
          blurDataURL={`data:image/jpeg;base64,/assets/img/step.webp`}
        />
      </div>
    </div>
  );
}
