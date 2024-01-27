import StoreData from "@/components/StoreData";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata = {
  title: "Dijokiin | Store",
};

export default function page() {
  return (
      <div className="flex justify-start items-center min-h-screen flex-col p-2">
        <p className="text-black font-semibold text-center ">
          Kami Juga Meyediakan Source Code Atau Aplikasi Yang Sudah Jadi
        </p>
        <h2 className="text-xl font-bold text-blue-600 text-center ">
          Tentu Saja Dengan Harga Yang Lebih Murah Pas Untuk Kantong Mahasiswa
        </h2>
        <StoreData />
      </div>
  );
}
