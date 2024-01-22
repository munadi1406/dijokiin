import Text from "@/components/Text";
import { IoConstructSharp } from "react-icons/io5";

export const metadata = {
    title: "T3S | Store",
    description: "Store | Rebahan Santai Tugas Selesai",
  };


export default function page() {
    return (
        <div className="flex justify-center items-center h-screen flex-col">
            <div className="text-blue-600 border border-blue-600 p-10 rounded-full">
                <IoConstructSharp className="text-5xl" />
            </div>
            <Text>
                Sedang Di Lakukan Konstruksi Disini
            </Text>
        </div>
    )
}
