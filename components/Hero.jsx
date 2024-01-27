import React from 'react'
import ConsultationNow from './ConsultationNow'

const Hero = () => {
  return (
    <div className='min-h-[80vh] md:p-10 py-10 px-2 w-full flex justify-center items-start flex-col gap-2'>
        <h2 className='md:text-5xl text-3xl font-bold  text-start capitalize '>rebahan santai tugas <span className='bg-gradient-to-r from-blue-600 to-indigo-300 bg-clip-text text-transparent'>Selesai</span></h2>
        <h3 className='text-blue-600 text-lg font-semibold'>Kami menawarkan berbagai layanan joki tugas, termasuk pengembangan situs web atau pembuatan web untuk tugas anda.</h3>
        <p>Bersama Dijokiinn</p>
        <h3 className='md:text-3xl text-xl font-semibold bg-gradient-to-l from-indigo-600 to-blue-600 bg-clip-text text-transparent'>Tugas Tuntas Tanpa Stress</h3>
       <ConsultationNow/>
    </div>
  )
} 
   
export default Hero