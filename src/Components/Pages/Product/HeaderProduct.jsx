import React from 'react'
import { Location } from 'iconsax-react'

export default function HeaderProduct() {
    return (

        <section>
            <ul className="flex items-center gap-2 text-Neutral-20 text-sm sm:text-xs md:text-base">
                <Location size="24" color="#333333" variant="TwoTone" />
                <li className="font-IRANSansX">خانه</li>
                <li>/</li>
                <li className="font-IRANSansX ">ویپ | Vape</li>
                <li>/</li>
                <li className="font-IRANSansX">Vaporesso</li>
                <li>/</li>
                <li className="text-Neutral-60 font-IRANSansX truncate max-w-[200px] sm:max-w-[400px]">
                ویپ آرمور مکس ویپرسو VAPORESSO ARMOUR MAX
                </li>
            </ul>

            <h1 className="text-Neutral-10 mt-6 font-IRANSansXBold text-lg sm:text-base font-bold">
                ویپ آرمور مکس ویپرسو VAPORESSO ARMOUR MAX
            </h1>

        </section>

    )
}
