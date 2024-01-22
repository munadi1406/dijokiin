import React from 'react'

export default function Footer() {
    return (
        <div className='flex w-full p-4 '>
            <p className='text-md text-blue-600 text-center font-semibold w-full '>
                &copy; T3S - Rebahan Santai Tugas Selesai <span className='font-bold'>{new Date().getFullYear()}</span> - Develov By <span className="font-bold">mun</span>
            </p>
        </div>
    )
}
