import Link from 'next/link'
import FirstImage from "../public/images/1.jpg"
import SecondImage from "../public/images/2.jpg"
import ThirdImage from "../public/images/3.jpg"
import FourthImage from "../public/images/4.jpg"
import Image from 'next/image'

const BizningIshlar = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto bg-[#3c7c67] text-white rounded-2xl p-10 mt-20 mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Bizning amalga oshirayotgan ishlarimiz
                </h1>

                <p className="text-lg opacity-90 mb-10 max-w-3xl">
                    Ekologik muammolarga yechim topish, chiqindilarni kamaytirish va barqaror
                    kelajak yaratish maqsadida keng ko‘lamli loyihalarni amalga oshirmoqdamiz.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 1 */}
                    <div className="bg-white/10 rounded-xl overflow-hidden hover:scale-[1.02] transition">
                        <Image
                            src={FirstImage}
                            alt="Plastik yig‘ish"
                            className="w-full h-70 object-cover"
                        />
                        <div className="p-6">
                            <h1 className="text-xl font-semibold mb-2">
                                Plastik chiqindilarni yig‘ish
                            </h1>
                            <p className="opacity-90">
                                Aholidan plastik idishlarni tizimli ravishda qabul qilib,
                                ularni qayta ishlashga yo‘naltiramiz va atrof-muhit
                                ifloslanishini kamaytiramiz.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/10 rounded-xl overflow-hidden hover:scale-[1.02] transition">
                        <Image
                            src={SecondImage}
                            alt="Rag‘batlantirish"
                            className="w-full h-70 object-cover"
                        />
                        <div className="p-6">
                            <h1 className="text-xl font-semibold mb-2">
                                Moliyaviy rag‘batlantirish
                            </h1>
                            <p className="opacity-90">
                                Har bir topshirilgan kilogramm plastik uchun
                                ishtirokchilarga belgilangan miqdorda pul to‘lab,
                                ekologik faollikni qo‘llab-quvvatlaymiz.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/10 rounded-xl overflow-hidden hover:scale-[1.02] transition">
                        <Image
                            src={ThirdImage}
                            alt="Eco loyihalar"
                            className="w-full h-70 object-cover"
                        />
                        <div className="p-6">
                            <h1 className="text-xl font-semibold mb-2">
                                Hududiy eco-loyihalar
                            </h1>
                            <p className="opacity-90">
                                Shahar va qishloqlarda ekologik tashabbuslarni
                                joriy etib, chiqindilarni saralash madaniyatini
                                keng ommaga singdiramiz.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white/10 rounded-xl overflow-hidden hover:scale-[1.02] transition">
                        <Image
                            src={FourthImage}
                            alt="Hamkorlik"
                            className="w-full h-70 object-cover"
                        />
                        <div className="p-6">
                            <h1 className="text-xl font-semibold mb-2">
                                Hamkorlik dasturlari
                            </h1>
                            <p className="opacity-90">
                                Tashkilotlar va biznes vakillari bilan hamkorlik
                                qilib, ekologik loyihalarni kengaytiramiz va
                                barqaror tizim yaratamiz.
                            </p>
                        </div>
                    </div>


                </div>
                <div className='flex justify-center'>
                <Link href={'/barchaIshlarimiz'}>
                    <button className="mt-10 bg-white text-[#3c7c67] px-8 py-3 rounded-full font-bold hover:bg-green-100 transition">
                        Barcha ishlarni ko`rish
                    </button>
                </Link>
                </div>
            </div>

        </div>
    )
}

export default BizningIshlar