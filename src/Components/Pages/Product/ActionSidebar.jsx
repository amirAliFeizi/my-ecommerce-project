import { Heart, Notification, Share } from 'iconsax-react'
import React from 'react'

export default function ActionSidebar() {
    return (

        <section className='container mt-1 px-4 md:px-10 lg:px-20'>
            <div className='w-14 h-[460px]  flex flex-col gap-12  rounded-xl bg-Neutral-93 items-center justify-center'>
                <Heart size="24" color="#333333" />
                <Notification size="24" color="#333333" />
                <Share size="24" color="#333333" />
                <Share size="24" color="#333333" />
            </div>
        </section>

    )
}
