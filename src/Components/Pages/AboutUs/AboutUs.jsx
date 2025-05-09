import { CallCalling } from 'iconsax-react'
import React from 'react'

export default function AboutUs() {
    return (
        <section className="px-4 md:px-10 lg:px-20">
            <div className="flex justify-between items-start gap-4 ">
                <div className="w-10 h-20 bg-Primary-Pressed"></div>
                <div className="flex-1  justify-start">
                    <div className='flex items-center gap-2'>
                        <CallCalling size="24" color="#329A86" />
                        <h2 className='text-Primary-main text-lg font-IRANSansX'>تماس با ما</h2>
                    </div>
                    <p className='text-Primary-Pressed text-2xl font-IRANSansX mt-5'>راه‌های ارتباط با ما</p>
                </div>

                <div className="w-10 h-20 bg-Primary-Pressed"></div>
            </div>
        </section>


    )
}
