import React from 'react'
import ConsultationNow from './ConsultationNow'

const Hero = () => {
  return (
    <div className='h-[80vh] md:p-10 py-10 px-2 w-full flex justify-center items-start flex-col gap-2'>
        <h1 className='md:text-5xl text-3xl font-bold  text-start capitalize '>rebahan santai tugas <span className='bg-gradient-to-r from-blue-600 to-indigo-300 bg-clip-text text-transparent'>Selesai</span></h1>
        <p className='text-blue-600 font-semibold'>Bersama Dijokiin</p>
        <h3 className='md:text-3xl text-xl font-semibold bg-gradient-to-l from-indigo-600 to-blue-600 bg-clip-text text-transparent'>Tugas Tuntas Tanpa Stress</h3>
       <ConsultationNow/>
    </div>
  )
}

export default Hero