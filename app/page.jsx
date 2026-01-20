'use client'

import React from 'react'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Aksiyalar from '../components/aksiyalar'
import BizningIshlar from '../components/bizning-ishlar'

const Page = () => {
  return (
    <div>
      <Navbar />

      <main>
        {/* HOME SECTION */}
        <div id="home" className='home-page'>
          <div className="flex flex-col gap-4 text-center items-center relative z-10 justify-center min-h-[80vh] px-4">
            <div className="text-white">
              <h2 className="text-sm uppercase tracking-widest opacity-80 mb-2">
                Barqaror turmush tarzi
              </h2>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Yashil hayot kechiring,<br />
                toza havodan nafas oling
              </h1>

              <p className="text-lg opacity-90 max-w-xl">
                Sog‘lom sayyora va yanada xotirjam, ongli hayot sari intiluvchi
                jamoaga qo‘shiling.
              </p>
            </div>
          </div>
        </div>

        {/* BIZNING ISHLAR SECTION */}
        <div id="aksiyalar">
          <BizningIshlar />
        </div>

        {/* AKSIYALAR SECTION */}
        <div id="targibotlar">
          <Aksiyalar />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Page
