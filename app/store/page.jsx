
import CustomDrawer from "@/components/CustomDrawer";
import * as React from "react"



export const metadata = {
    title: "T3S | Store",
    description: "Store | Rebahan Santai Tugas Selesai",
};


export default async  function page() {
    const data = [
        {
            title:"",
            img:"",
            price:"",
        }
    ]

    const getStoreData = async ()=>{
    try {
        const data = await fetch('api/v1')
        return data.json()
    } catch (error) {
        console.log(error)
    }
    }
    const datas = await getStoreData()
    console.log(datas)
    return (
        <div className="flex justify-start items-center h-screen flex-col p-2">
            <p className="text-black font-semibold">
                Kami Juga Meyediakan Source Code Atau Aplikasi Yang Sudah Jadi
            </p>
            <h1 className="text-xl font-bold text-blue-600">Tentu Saja Dengan Harga Yang Lebih Murah Pas Untuk Kantong Mahasiswa</h1>
           <CustomDrawer/>
        </div>
    )
}





