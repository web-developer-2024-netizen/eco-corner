import Link from 'next/link'
import React from 'react'
import { FaLeaf } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div data-aos-duration="1000" data-aos="fade-down" className='flex justify-between items-center px-4 md:px-20 fixed w-full z-40 bg-white shadow-md'>
      <Link href={'/#home'}>
        <div className='flex items-center gap-2 relative p-4 cursor-pointer'>
          <div className='bg-[#3c7c67] w-10 h-10 rounded-full text-white flex items-center justify-center'>
            <FaLeaf size={20} />
          </div>
          <h1 className='text-3xl font-bold text-black'>Eco Life</h1>
        </div>
      </Link>

      <div>
        <ul className='hidden md:flex gap-10 text-lg font-medium text-black'>
          <li>
            <Link href="#home" className='hover:text-green-700 cursor-pointer bg-green-100/90 hover:bg-green-800 hover:text-white duration-400 px-10 py-3 rounded-md'>
              Uy
            </Link>
          </li>
          <li>
            <Link href="#aksiyalar" className='hover:text-green-700 cursor-pointer bg-green-100/90 hover:bg-green-800 hover:text-white duration-400 px-10 py-3 rounded-md'>
              Aksiyalar
            </Link>
          </li>
          <li>
            <Link href="#targibotlar" className='hover:text-green-700 cursor-pointer bg-green-100/90 hover:bg-green-800 hover:text-white duration-400 px-10 py-3 rounded-md'>
              Targ‘ibotlar
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
