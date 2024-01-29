import Text from "./Text";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function Faqs() {
    const data = [
        {
            question: "Berapa biaya jasa pembuatan website atau pengerjaan tugas kuliah?",
            answer: "Biaya layanan kami bervariasi tergantung pada kompleksitas proyek. Kami berkomitmen untuk menjaga harga tetap terjangkau untuk kantong mahasiswa. Untuk mendapatkan perkiraan harga, silakan hubungi kami untuk konsultasi lebih lanjut"
        },
        {
            question: "Apakah ada biaya tambahan untuk revisi pada website yang sudah jadi atau selesai di kerjakan?",
            answer: "Biaya revisi akan disesuaikan dengan fitur yang diminta. Revisi pada source code yang sudah ada mungkin tidak menimbulkan biaya tambahan, namun penambahan fitur atau perubahan besar akan dikenakan biaya tambahan. Kami berusaha memberikan kejelasan terkait biaya untuk memastikan kepuasan Anda."
        },
        {
            question: "Bagaimana sistem pembayaran yang berlaku?",
            answer: "Setelah kesepakatan harga, Anda akan diminta untuk melakukan pembayaran awal sebesar 20% sebagai tanda jadi. Pembayaran final dilakukan setelah proyek selesai dan Anda puas dengan hasilnya. Kami menerima berbagai metode pembayaran untuk kenyamanan Anda."
        },

    ]
    return (
        <div className="flex flex-col gap-2 my-8 justify-center items-center ">
            <h2 className="text-md font-semibold">FAQS</h2>
            <Text className="w-full text-center">Pertanyaan yang Sering Diajukan</Text>
            <div className="flex flex-col gap-2">
                {data.map((e, i) => (
                    <Card key={i}>
                        <CardHeader>
                            <CardTitle className="text-xl text-blue-600">{e.question}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{e.answer}</p>
                        </CardContent>
                    </Card>

                ))}
            </div>
        </div>
    )
}
