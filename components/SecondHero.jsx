import React from 'react'
import CustomCard from './CustomCard'
import { FaTasks,FaCode } from "react-icons/fa";
import { TbFileReport } from "react-icons/tb";
import Text from './Text';


export default function SecondHero() {
    const data = [
        {
            icon: <FaTasks />,
            title: "Jasa Joki Tugas Kuliah",
            desc: "Layanan joki tugas kuliah , anda cukup rebahan santai tapi tugas anda tetap selesai"
        },
        {
            icon: <FaCode />,
            title: "Pembuatan Web untuk Tugas Kuliah",
            desc: "Desain responsif dan fungsionalitas khusus untuk tugas kuliah, membantu Anda mencapai hasil terbaik."
        },
        {
            icon: <TbFileReport />,
            title: "Web untuk Laporan Magang atau Skripsi",
            desc: "Pembuatan aplikasi berbasis web untuk mendukung presentasi dan dokumentasi laporan magang atau skripsi Anda."
        },
    ]
    return (
        <div className='flex justify-center items-center flex-col gap-2 w-full p-2  min-h-screen'>
            <h2 className='text-center text-md font-bold uppercase '>Cara Kerja Kami</h2>
            <Text className={"text-center md:w-2/3 w-full"}>Apa yang Anda Dapatkan dengan Layanan Bantuan Akademis Kami</Text>
            <p className='text-md  text-center '>Membantu Anda menyelesaikan tugas kuliah, pembuatan web untuk tugas kuliah, dan pengembangan situs web untuk laporan magang atau skripsi dengan profesional dan efisien.</p>
            <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-4 px-2 py-4'>
                {data.map(({ icon, title, desc }, i) => (
                    <CustomCard key={i} icon={icon} title={title} desc={desc} />
                ))}
            </div>
        </div>
    )
}
