import StoreData from "@/components/StoreData";

export const metadata = {
  title: "Toko Source code web siap pakai | DiJokiin",
  description:
    "Jasa joki tugas: source code web siap pakai, harga terjangkau, sesuai anggaran mahasiswa.",
  keywords: [
    "Dijokiin",
    "dreamice",
    "Rebahan",
    "Tugas Kuliah",
    "kuliah",
    "tugas web",
    "joki tugas",
    "Web Development",
    "Website Development",
    "buatin tugasku",
    "buatin tugas",
    "joki tugas",
    "jasa joki tugas",
    "jasa tugas",
    "jasa pengerjaan tugas",
    "jasa pembuatan tugas",
    "tugas sekolah",
    "tugas kuliah",
    "tugas web PHP",
    "tugas web HTML",
    "tugas web CSS",
    "Joki tugas murah",
    "Joki tugas cepat",
    "store",
  ],
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
