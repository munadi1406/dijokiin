import Text from "@/components/Text";

export const metadata = {
    title: "About | DiJokiin",
    description: "Anda memerlukan website untuk presentasi tugas, proyek kelompok, atau laporan magang? Kami siap membantu Anda merancang dan mengembangkan website sesuai kebutuhan spesifik Anda",
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
        "about",
      ],
  };
const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-3 px-6">
      <Text>About DiJokiin</Text>
      <p className="text-md text-bold ">
        <span className="text-2xl font-bold text-blue-600 text-justify">
          Kami
        </span>{" "}
        adalah kelompok mahasiswa di jurusan Teknik Informatika yang dengan
        penuh antusias menyediakan solusi pengerjaan tugas khusus. Bukan
        perusahaan, tapi tim kolaboratif individu yang berkomitmen untuk
        membantu Anda dalam pembuatan website yang sesuai dengan kebutuhan Anda.
        Fokus utama kami adalah membantu Anda menyelesaikan <span className="font-semibold text-blue-600">tugas kuliah dan
        menyusun laporan magang melalui pengembangan website</span>. Dalam proses
        pembuatan website, kami menawarkan pelayanan personal yang sesuai dengan
        permintaan Anda. Tim kami terdiri dari mahasiswa dengan pengalaman dan
        pengetahuan dalam bidang teknik informatika, memastikan bahwa setiap
        proyek mendapat perhatian yang memadai.
      </p>

      <p className="text-md text-bold ">
        <span className="text-2xl font-bold text-blue-600 text-justify">
          Percayalah
        </span>{" "}
        bahwa pembelajaran sejati terjadi melalui praktek, dan itulah mengapa
        kami ingin membantu Anda mengaplikasikan konsep-konsep teoritis yang
        Anda pelajari dalam proyek nyata.
      </p>
      <p className="text-md text-bold ">
        <span className="text-2xl font-bold text-blue-600 text-justify">
          Apakah
        </span>{" "}
        Anda memerlukan website untuk <span className="text-blue-600 font-semibold">presentasi tugas, proyek kelompok, atau
        laporan magang?</span> Kami siap membantu Anda merancang dan mengembangkan
        website sesuai kebutuhan spesifik Anda. Kami juga menyediakan ruang
        diskusi dan konsultasi awal untuk memahami dengan lebih baik kebutuhan
        proyek Anda.
      </p>
      <p className="text-md text-bold ">
        <span className="text-2xl font-bold text-blue-600 text-justify">
          Setiap
        </span>{" "}
        proyek bagi kami adalah kesempatan untuk berkontribusi pada pertumbuhan
        dan pengembangan Anda di dunia teknik informatika. Jangan ragu untuk
        menghubungi kami dan diskusikan proyek Anda. Kami berharap dapat menjadi
        mitra Anda dalam menyelesaikan tugas-tugas website anda.
      </p>
      <h5 className="text-xs font-semibold text-blue-600">DiJokiin Rebahan Santai Tugas Selesai</h5>
      <h5 className="text-xs font-semibold text-blue-600">Tugas Tuntas Tanpa Stress</h5>
    </div>
  );
};

export default page;
