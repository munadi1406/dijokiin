
export default function CustomCard({ icon, title, desc }) {
    return (
        <div className="flex gap-4 justify-start items-start ">
            <div className="p-4 h-max flex justify-center items-center text-3xl bg-blue-600 text-white rounded-full">
                {icon}
            </div>
            <div className="flex gap-2 flex-col">
                <h2 className="text-2xl font-bold bg-gradient-to-tr from-blue-700 to-indigo-900 bg-clip-text text-transparent">{title}</h2>
                <p className="pr-2 text-gray-900">{desc}</p>
            </div>
        </div>
    )
}
