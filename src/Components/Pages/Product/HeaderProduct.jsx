import React from 'react'
import { Location, Message, Star1 } from 'iconsax-react'

export default function HeaderProduct() {
    return (

        <section className="container  px-4 md:px-10 lg:px-20">
            <div className='border-b-2 pb-3 border-Neutral-90'>
                <ul className="flex flex-wrap items-center gap-1 text-Neutral-20 text-xs sm:text-sm md:text-base font-IRANSansX">
                    <Location size="20" className="sm:size-6" color="#333333" variant="TwoTone" />
                    <li>خانه</li>
                    <li className="before:content-['/'] before:mx-2">ویپ | Vape</li>
                    <li className="before:content-['/'] before:mx-2">Vaporesso</li>
                    <li className="before:content-['/'] before:mx-2 text-Neutral-60 truncate max-w-[150px] sm:max-w-[250px] md:max-w-[400px]">
                        ویپ آرمور مکس ویپرسو VAPORESSO ARMOUR MAX
                    </li>
                </ul>

                <h1 className="text-Neutral-10 mt-4 sm:mt-6 font-IRANSansXBold text-base sm:text-lg md:text-xl font-bold">
                    ویپ آرمور مکس ویپرسو VAPORESSO ARMOUR MAX
                </h1>
                <div className='flex items-center gap-x-2 mt-4'>
                    <Star1 size="18" color="#FBD54F" />
                    <span className='text-Neutral-20'>4.8</span>
                    <span className=' text-Neutral-60 font-IRANSansX'>(240نفر)</span>
                    <span className='w-1 h-1 bg-Neutral-60 rounded-full'></span>
                    <Message size="18" color="#0072DA" />
                    <span className='text-Semantic-Active font-IRANSansX'>40 دیدگاه</span>
                </div>
            </div>
            

        </section>

    )
}
