import { CallCalling } from 'iconsax-react'
import React from 'react'
import PicAbout from "/images/Picabout.png";

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

                <div className="w-20 h-20 bg-Primary-Pressed"></div>
            </div>
            <div className='mt-16 flex items-center gap-x-10 '>
                <div>
                    <img src={PicAbout} alt="" />
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-3 justify-center px-5 bg-Neutral-100 border-r-2 border-Primary-main rounded-xl shadow-lg  w-[847px] h-[160px]'>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 bg-Primary-main rounded-sm'></div>
                            <span className='text-Neutral-60 font-IRANSansX'>شماره تماس ثابت (تلفن گویا)</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span className='text-Neutral-10 text-2xl font-IRANSansX'>برای ارتباط مستقیم با <span className='text-Primary-main text-2xl'>مجموعه</span> با شماره رو به رو تماس بگیرید</span>
                            <span className='text-Primary-main text-2xl font-IRANSansX'>021-88056381</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 justify-center px-5 bg-Neutral-100 border-r-2 border-Semantic-Active rounded-xl shadow-lg  w-[847px] h-[160px]'>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 bg-Semantic-Active rounded-sm'></div>
                            <span className='text-Neutral-60 font-IRANSansX'>ارتباط از طریق پیام‌رسان‌ها</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span className='text-Neutral-10 text-2xl font-IRANSansX'>شماره ما در پیام‌رسان‌های <span className='text-Semantic-Active text-2xl'>ایتا</span>،<span className='text-Semantic-Active text-2xl'>روبیکا</span>، <span className='text-Semantic-Active text-2xl'>واتساپ</span> و <span className='text-Semantic-Active text-2xl'>تلگرام</span></span>
                            <span className='text-Semantic-Active text-2xl font-IRANSansX'>091119510001</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 justify-center px-5 bg-Neutral-100 border-r-2 border-Semantic-Danger rounded-xl shadow-lg  w-[847px] h-[160px]'>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 bg-Semantic-Danger rounded-sm'></div>
                            <span className='text-Neutral-60 font-IRANSansX'>ارتباط با مدیریت</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span className='text-Neutral-10 text-2xl font-IRANSansX'>برای ارتباط مستقیم با <span className='text-Semantic-Danger text-2xl'>مدیریت</span> با شماره رو به رو تماس بگیرید.</span>
                            <span className='text-Semantic-Danger text-2xl font-IRANSansX'>091119520001</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>


    )
}
