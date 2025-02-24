import React from 'react'

export default function Navbar() {
    return (

        <section>
            <ul className='flex items-center gap-3  text-Neutral-20'>
                <Location size="24" color="#333333" variant="TwoTone" />
                <li className='font-IRANSansX'>خانه </li>
                <li >/</li>
                <li className='font-IRANSansX'>ویپ | Vape</li>
                <li>/</li>
                <li className='font-IRANSansX'>Vaporesso</li>
                <li>/</li>
                <li className='text-Neutral-60 font-IRANSansX'>ویپ آرمور مکس ویپرسو VAPORESSO ARMOUR MAX</li>
            </ul>
            <h1 className='text-Neutral-10 mt-8 font-IRANSansXBold text-xl font-bold'>ویپ آرمور مکس ویپرسو  VAPORESSO ARMOUR MAX</h1>
        </section>

    )
}
