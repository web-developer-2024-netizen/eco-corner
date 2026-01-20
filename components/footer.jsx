import React from 'react'
import { FaLeaf } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='max-w-7xl mx-auto rounded-2xl text-white bg-[#3c7c67] mt-20 mb-10 p-10 flex flex-col  justify-between gap-6 relative'>
            <h1 className='font-bold text-5xl'>Bugun jamoamizga qo`shiling</h1>
            <p className='w-1/3'>
                Biz bilan birga rivojlaning va yangi imkoniyatlarni kashf eting.
                Platformamiz sizga qulaylik, ishonchlilik va samaradorlikni taqdim etadi.
                Maqsadimiz — foydalanuvchilarga sifatli xizmat ko`rsatish va doimiy rivojlanish uchun mustahkam muhit yaratish.
            </p>
            <button className='bg-white w-fit text-[#3c7c67] px-6 py-2 rounded-full font-bold hover:bg-green-100 duration-400'>Safimizga qo`shiling</button>
            <FaLeaf className='absolute size-40 text-white/10 animate-bounce top-0 right-50 rotate-270' />
            <FaLeaf className='absolute size-40 text-white/10 animate-bounce bottom-0 right-5 rotate-90' />
            <FaLeaf className='absolute size-40 text-white/10 animate-bounce top-0 right-5' />
            <FaLeaf className='absolute size-40 text-white/10 animate-bounce bottom-0 right-50 rotate-180' />
        </div>
    )
}

export default Footer