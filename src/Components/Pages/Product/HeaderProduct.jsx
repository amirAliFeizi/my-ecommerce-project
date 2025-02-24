import React from 'react'
import { Location } from 'iconsax-react'

export default function HeaderProduct() {
    return (

        <section className="container px-4 md:px-10 lg:px-20">
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
        </section>

    )
}
