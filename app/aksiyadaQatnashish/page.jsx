"use client"
import React, { useState } from 'react'
import Navbar from '@/components/navbar'

const Page = () => {
  const [cardNumber, setCardNumber] = useState("")
  const [weight, setWeight] = useState("")
  const [wasteType, setWasteType] = useState("")
  const [image, setImage] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = () => {
    if (!cardNumber || !weight || !wasteType || !image) {
      alert("Iltimos, barcha maydonlarni to‘ldiring")
      return
    }

    setSuccess(true)
  }

  return (
    <div>
      <Navbar />
      <div className="home-page">
        <div className="flex flex-col pt-30 items-center justify-center min-h-[80vh] px-4 relative">
          <div className="bg-[#3c7c67] text-white rounded-2xl p-8 max-w-xl w-full">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">
              Aksiyada qatnashing
            </h1>

            <p className="text-center opacity-90 mb-6">
              Chiqindini topshiring, karta orqali pulingizni oling va
              tabiatni asrashga hissa qo‘shing.
            </p>
            {/* KARTA RASMI */}
            <div className="mb-6">
              <img
                src="https://avatars.mds.yandex.net/i?id=da3d070c85d21daebcd4caab62f0375d76fafb31-4876380-images-thumbs&n=13"
                alt="Kredit karta"
                className="w-full object-cover md:h-70 h-40"
              />
            </div>

            {!success ? (
              <div className="space-y-4">

                {/* CHIQINDI TURI */}
                <select
                  className="w-full p-3 rounded-lg text-white border outline-none bg-white/10"
                  value={wasteType}
                  onChange={(e) => setWasteType(e.target.value)}
                >
                  <option className='text-black' value="">Chiqindi turini tanlang</option>
                  <option className='text-black' value="plastik">Plastik (baklashka)</option>
                  <option className='text-black' value="qogoz">Qog‘oz</option>
                  <option className='text-black' value="shisha">Shisha</option>
                  <option className='text-black' value="metall">Metall</option>
                </select>

                {/* CHIQINDI VAZNI */}
                <input
                  type="number"
                  placeholder="Chiqindi vazni (kg)"
                  className="w-full p-3 rounded-lg text-white border outline-none"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />

                {/* KARTA RAQAMI */}
                <input
                  type="text"
                  placeholder="Karta raqami (8600 **** **** ****)"
                  className="w-full p-3 rounded-lg text-white border outline-none"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />

                {/* RASM YUKLASH */}
                <input
                  type="file"
                  accept="image/*"
                  className="w-full p-2 bg-white rounded-lg text-black"
                  onChange={(e) => setImage(e.target.files[0])}
                />

                {/* SUBMIT */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-white text-[#3c7c67] font-bold py-3 rounded-full hover:bg-green-100 transition"
                >
                  Yuborish va pulni olish
                </button>

              </div>
            ) : (
              /* SUCCESS MESSAGE */
              <div className="text-center py-10">
                <h2 className="text-2xl font-bold mb-2">✅ Muvaffaqiyatli yuborildi!</h2>
                <p className="opacity-90">
                  Ma’lumotlaringiz qabul qilindi. Pul qisqa vaqt ichida
                  kartangizga o‘tkaziladi.
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
