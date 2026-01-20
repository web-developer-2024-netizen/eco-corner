import Link from 'next/link'
import React from 'react'

const Aksiyalar = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto bg-[#3c7c67] text-white rounded-2xl p-10 mt-20 mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Atrof-muhitni asraymiz — birga foyda ko‘ramiz
                </h1>

                <p className="text-lg opacity-90 mb-8 max-w-3xl">
                    Biz ekologiyani asrashni rag‘batlantiramiz. Har bir topshirilgan plastik chiqindi —
                    bu toza kelajak sari tashlangan qadam. Siz tabiatga foyda keltirasiz, biz esa mehnatingizni qadrlaymiz.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white/10  p-6 rounded-xl">
                        <h2 className="text-xl font-semibold mb-2">♻️ Plastik yig‘ish</h2>
                        <p className="opacity-90">
                            Har 1 kg plastik (baklashka) topshirganingiz uchun
                            <span className="font-bold"> 2 000 so‘m</span> to‘lov amalga oshiriladi.
                        </p>
                    </div>

                    <div className="bg-white/10  p-6 rounded-xl">
                        <h2 className="text-xl font-semibold mb-2">🌍 Tabiatga hissa</h2>
                        <p className="opacity-90">
                            Siz chiqindilarni qayta ishlashga yo‘naltirib,
                            shahar va tabiat tozaligiga bevosita hissa qo‘shasiz.
                        </p>
                    </div>

                    <div className="bg-white/10  p-6 rounded-xl">
                        <h2 className="text-xl font-semibold mb-2">💚 Har kim qatnasha oladi</h2>
                        <p className="opacity-90">
                            Aksiya barcha uchun ochiq. Yig‘ing, topshiring va daromad oling —
                            oddiy va foydali.
                        </p>
                    </div>
                </div>
                <div className='flex justify-center md:block'>
                <Link href={'/aksiyadaQatnashish'}>
                    <button className="mt-10 bg-white text-[#3c7c67] px-8 py-3 rounded-full font-bold hover:bg-green-100 transition">
                        Aksiyada qatnashish
                    </button>
                </Link>
                </div>
            </div>

        </div>
    )
}

export default Aksiyalar