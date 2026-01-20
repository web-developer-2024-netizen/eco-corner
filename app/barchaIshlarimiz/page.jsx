import React from 'react'
import Navbar from '@/components/navbar'
import Image from 'next/image'

const page = () => {

    const ecoWorks = [
        {
            id: 1,
            title: "Plastik chiqindilarni yig‘ish",
            description:
                "Aholidan plastik idishlarni tizimli ravishda qabul qilib, ularni qayta ishlashga yo‘naltiramiz va atrof-muhit ifloslanishini kamaytiramiz.",
            image: '/images/1.jpg',
            alt: "Plastik yig‘ish",
        },
        {
            id: 2,
            title: "Moliyaviy rag‘batlantirish",
            description:
                "Har bir topshirilgan kilogramm plastik uchun ishtirokchilarga belgilangan miqdorda pul to‘lab, ekologik faollikni qo‘llab-quvvatlaymiz.",
            image: '/images/2.jpg',
            alt: "Rag‘batlantirish",
        },
        {
            id: 3,
            title: "Hududiy eco-loyihalar",
            description:
                "Shahar va qishloqlarda ekologik tashabbuslarni joriy etib, chiqindilarni saralash madaniyatini keng ommaga singdiramiz.",
             image: '/images/3.jpg',
            alt: "Eco loyihalar",
        },
        {
            id: 4,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
             image: '/images/4.jpg',
            alt: "Hamkorlik",
        },
        {
            id: 5,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
             image: '/images/5.jpg',
            alt: "Hamkorlik",
        },
        {
            id: 6,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
            image: '/images/6.jpg',
            alt: "Hamkorlik",
        },
        {
            id: 7,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
             image: '/images/7.jpg',
            alt: "Hamkorlik",
        },
        {
            id: 8,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
             image: '/images/8.jpg',
            alt: "Hamkorlik",
        },
        {
            id: 9,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
            image: '/images/9.jpg',
            alt: "Hamkorlik",
        },
        {
            id: 10,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
             image: '/images/10.jpg',
            alt: "Hamkorlik",
        },
        {
            id: 11,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
            image: '/images/11.jpg',
            alt: "Hamkorlik",
        },
        {
            id: 12,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
             image: '/images/12.jpg',
            alt: "Hamkorlik",
        },
        {            id: 13,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
             image: '/images/13.jpg',
            alt: "Hamkorlik",   
        },
        {            id: 14,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
             image: '/images/14.jpg',
            alt: "Hamkorlik",   
        },
        {            id: 15,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
                image: '/images/15.jpg',
            alt: "Hamkorlik",   
        },
        {            id: 16,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
            image: '/images/16.jpg',
            alt: "Hamkorlik",
        },
        {            id: 17,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
             image: '/images/17.jpg',
            alt: "Hamkorlik",
        },
        {            id: 18,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
             image: '/images/18.jpg',
            alt: "Hamkorlik",
        },
        {            id: 19,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
            image: '/images/19.jpg',
            alt: "Hamkorlik",
        },
        {            id: 20,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
             image: '/images/20.jpg',
            alt: "Hamkorlik",
        },
        {            id: 21,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
             image: '/images/21.jpg',
            alt: "Hamkorlik",
        },
        {            id: 22,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
             image: '/images/22.jpg',
            alt: "Hamkorlik",
        },
        {            id: 23,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
             image: '/images/23.jpg',
            alt: "Hamkorlik",
        },
        {            id: 24,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
             image: '/images/24.jpg',
            alt: "Hamkorlik",
        },
        {            id: 25,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
            image: '/images/25.jpg',
            alt: "Hamkorlik",
        },
        {            id: 26,
            title: "Hamkorlik dasturlari",
            description:
                "Tashkilotlar va biznes vakillari bilan hamkorlik qilib, ekologik loyihalarni kengaytiramiz va barqaror tizim yaratamiz.",
             image: '/images/26.jpg',
            alt: "Hamkorlik",
        },
    ];


    return (
        <div>
            <Navbar />
            <div className='home-page'>
                <div className="flex flex-col gap-4 text-center items-center relative z-10 justify-center min-h-[80vh] px-4">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
               Biz birgalikda atrof-muhitni <br /> muhofaza qilaylik!
              </h1>
            </div>

          </div>
            </div>
            <div className="max-w-7xl mx-auto bg-[#3c7c67] text-white relative z-10 rounded-2xl p-10 mt-20 mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Bizning amalga oshirayotgan ishlarimiz
                </h1>

                <p className="text-lg opacity-90 mb-10 max-w-3xl">
                    Ekologik muammolarga yechim topish, chiqindilarni kamaytirish va barqaror
                    kelajak yaratish maqsadida keng ko‘lamli loyihalarni amalga oshirmoqdamiz.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {ecoWorks.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white/10 rounded-xl overflow-hidden hover:scale-[1.02] transition"
                        >
                            <Image
                                src={item.image}
                                alt={item.alt}
                                width={300}
                                height={202}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h1 className="text-xl font-semibold mb-2">
                                    {item.title}
                                </h1>
                                <p className="opacity-90">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default page