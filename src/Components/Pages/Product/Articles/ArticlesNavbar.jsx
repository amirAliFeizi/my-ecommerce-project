import React from 'react'
import card1 from "/images/Rectangle 39875.png";
import card2 from "/images/Rectangle 2.png";
import card3 from "/images/Rectangle 3.png";
import card4 from "/images/Rectangle 4.png";
import card5 from "/images/Rectangle 5.png";
import card6 from "/images/Rectangle 6.png";
import card7 from "/images/Rectangle 7.png";
import card8 from "/images/Rectangle 8.png";
import card9 from "/images/Rectangle 9.png";
import { ArrowDown2, ArrowLeft2, Calendar } from 'iconsax-react';
export default function ArticlesNavbar() {
    return (
        <div className='px-4 md:px-10 lg:px-20 flex gap-x-10  '>
            <div className='right'>
                <div className='w-[916px] flex items-center justify-between py-7'>
                    <h1 className='font-IRANSansXBold text-Primary-Pressed text-2xl border-b-2 border-Primary-main pb-2 mb-5 '>جدیدترین مطالب</h1>
                    <div className=''>
                        <ul className='flex items-center gap-7 '>
                            <li className='font-IRANSansX text-Neutral-10 text-base'>همه</li>
                            <li className='font-IRANSansX text-Neutral-60 text-base'>ویپ</li>
                            <li className='font-IRANSansX text-Neutral-60 text-base'>جویس</li>
                            <li className='font-IRANSansX text-Neutral-60 text-base'>پاد</li>
                            <li className='font-IRANSansX text-Neutral-60 text-base'>سالت</li>
                        </ul>
                    </div>

                </div>
                <div className='w-[916px]  grid grid-cols-3 gap-6'>
                    <div className='w-[290px] h-[346px]'>
                        <img src={card1} alt="" />
                        <p className='font-IRANSansX text-base text-Neutral-10 mt-4 px-2'>خرید ویپ و پاد چه مزایایی دارد ؟معرفی یک مدل عالی</p>
                        <div className='flex items-center gap-2 mt-9 px-2 pb-2 border-b-2 border-Neutral-80 ' >
                            <Calendar size="16" color="#999999" />
                            <span className='font-IRANSansX text-Neutral-60 text-sm'>2 ساعت قبل</span>
                        </div>
                    </div>
                    <div className='w-[290px] h-[346px]'>
                        <img src={card2} alt="" />
                        <p className='font-IRANSansX text-base text-Neutral-10 mt-4 px-2'>خرید ویپ و پاد چه مزایایی دارد ؟معرفی یک مدل عالی</p>
                        <div className='flex items-center gap-2 mt-9 px-2 pb-2 border-b-2 border-Neutral-80 ' >
                            <Calendar size="16" color="#999999" />
                            <span className='font-IRANSansX text-Neutral-60 text-sm'>2 ساعت قبل</span>
                        </div>
                    </div>
                    <div className='w-[290px] h-[346px]'>
                        <img src={card3} alt="" />
                        <p className='font-IRANSansX text-base text-Neutral-10 mt-4 px-2'>خرید ویپ و پاد چه مزایایی دارد ؟معرفی یک مدل عالی</p>
                        <div className='flex items-center gap-2 mt-9 px-2 pb-2 border-b-2 border-Neutral-80 ' >
                            <Calendar size="16" color="#999999" />
                            <span className='font-IRANSansX text-Neutral-60 text-sm'>2 ساعت قبل</span>
                        </div>
                    </div>
                    <div className='w-[290px] h-[346px]'>
                        <img src={card4} alt="" />
                        <p className='font-IRANSansX text-base text-Neutral-10 mt-4 px-2'>خرید ویپ و پاد چه مزایایی دارد ؟معرفی یک مدل عالی</p>
                        <div className='flex items-center gap-2 mt-9 px-2 pb-2 border-b-2 border-Neutral-80 ' >
                            <Calendar size="16" color="#999999" />
                            <span className='font-IRANSansX text-Neutral-60 text-sm'>2 ساعت قبل</span>
                        </div>
                    </div>
                    <div className='w-[290px] h-[346px]'>
                        <img src={card5} alt="" />
                        <p className='font-IRANSansX text-base text-Neutral-10 mt-4 px-2'>خرید ویپ و پاد چه مزایایی دارد ؟معرفی یک مدل عالی</p>
                        <div className='flex items-center gap-2 mt-9 px-2 pb-2 border-b-2 border-Neutral-80 ' >
                            <Calendar size="16" color="#999999" />
                            <span className='font-IRANSansX text-Neutral-60 text-sm'>2 ساعت قبل</span>
                        </div>
                    </div>
                    <div className='w-[290px] h-[346px]'>
                        <img src={card6} alt="" />
                        <p className='font-IRANSansX text-base text-Neutral-10 mt-4 px-2'>خرید ویپ و پاد چه مزایایی دارد ؟معرفی یک مدل عالی</p>
                        <div className='flex items-center gap-2 mt-9 px-2 pb-2 border-b-2 border-Neutral-80 ' >
                            <Calendar size="16" color="#999999" />
                            <span className='font-IRANSansX text-Neutral-60 text-sm'>2 ساعت قبل</span>
                        </div>
                    </div>
                    <div className='w-[290px] h-[346px]'>
                        <img src={card7} alt="" />
                        <p className='font-IRANSansX text-base text-Neutral-10 mt-4 px-2'>خرید ویپ و پاد چه مزایایی دارد ؟معرفی یک مدل عالی</p>
                        <div className='flex items-center gap-2 mt-9 px-2 pb-2 border-b-2 border-Neutral-80 ' >
                            <Calendar size="16" color="#999999" />
                            <span className='font-IRANSansX text-Neutral-60 text-sm'>2 ساعت قبل</span>
                        </div>
                    </div>
                    <div className='w-[290px] h-[346px]'>
                        <img src={card8} alt="" />
                        <p className='font-IRANSansX text-base text-Neutral-10 mt-4 px-2'>خرید ویپ و پاد چه مزایایی دارد ؟معرفی یک مدل عالی</p>
                        <div className='flex items-center gap-2 mt-9 px-2 pb-2 border-b-2 border-Neutral-80 ' >
                            <Calendar size="16" color="#999999" />
                            <span className='font-IRANSansX text-Neutral-60 text-sm'>2 ساعت قبل</span>
                        </div>
                    </div>
                    <div className='w-[290px] h-[346px]'>
                        <img src={card9} alt="" />
                        <p className='font-IRANSansX text-base text-Neutral-10 mt-4 px-2'>خرید ویپ و پاد چه مزایایی دارد ؟معرفی یک مدل عالی</p>
                        <div className='flex items-center gap-2 mt-9 px-2 pb-2 border-b-2 border-Neutral-80 ' >
                            <Calendar size="16" color="#999999" />
                            <span className='font-IRANSansX text-Neutral-60 text-sm'>2 ساعت قبل</span>
                        </div>
                    </div>


                </div>
                <div className='flex items-center justify-center gap-2 mt-16 cursor-pointer'>
                    <button className='font-IRANSansXBold text-Primary-main text-lg'>مشاهده بیشتر</button>
                    <ArrowDown2 size="20" color="#329A86" />
                </div>
            </div>
            <div className='w-[320px] mt-11 flex flex-col gap-4'>
                <h1 className='font-IRANSansXBold text-Primary-Pressed text-xl border-b-2 border-b-Primary-main pb-2 mb-5 w-20 '>دسته‌ها</h1>
                <div className='flex items-center justify-between border-b-2 border-Neutral-90 pb-2'>
                    <div className='flex items-center'>
                        <ArrowLeft2 size="16" color="#329A86" />
                        <span className='font-IRANSansX text-sm text-Primary-main '>اخبار</span>
                    </div>
                    <span className='font-IRANSansX text-sm text-Neutral-60'>(125)</span>
                </div>
                <div className='flex items-center justify-between border-b-2 border-Neutral-90 pb-2'>
                    <div className='flex items-center gap-2'>
                        <ArrowLeft2 size="16" color="#1A1A1A" />
                        <span className='font-IRANSansX text-sm text-Primary- '>سلامت</span>
                    </div>
                    <span className='font-IRANSansX text-sm text-Neutral-60'>(86)</span>
                </div>
                <div className='flex items-center justify-between border-b-2 border-Neutral-90 pb-2'>
                    <div className='flex items-center gap-2'>
                        <ArrowLeft2 size="16" color="#1A1A1A" />
                        <span className='font-IRANSansX text-sm text-Primary- '>ویپ</span>
                    </div>
                    <span className='font-IRANSansX text-sm text-Neutral-60'>(38)</span>
                </div>
                <div className='flex items-center justify-between border-b-2 border-Neutral-90 pb-2'>
                    <div className='flex items-center gap-2'>
                        <ArrowLeft2 size="16" color="#1A1A1A" />
                        <span className='font-IRANSansX text-sm text-Primary- '>جویس</span>
                    </div>
                    <span className='font-IRANSansX text-sm text-Neutral-60'>(19)</span>
                </div>
                <div className='flex items-center justify-between border-b-2 border-Neutral-90 pb-2'>
                    <div className='flex items-center gap-2'>
                        <ArrowLeft2 size="16" color="#1A1A1A" />
                        <span className='font-IRANSansX text-sm text-Primary- '>پاد</span>
                    </div>
                    <span className='font-IRANSansX text-sm text-Neutral-60'>(88)</span>
                </div>
                <div className='flex items-center justify-between border-b-2 border-Neutral-90 pb-2'>
                    <div className='flex items-center gap-2'>
                        <ArrowLeft2 size="16" color="#1A1A1A" />
                        <span className='font-IRANSansX text-sm text-Primary- '>سالت</span>
                    </div>
                    <span className='font-IRANSansX text-sm text-Neutral-60'>(20)</span>
                </div>
                <div className='flex items-center justify-between border-b-2 border-Neutral-90 pb-2'>
                    <div className='flex items-center gap-2'>
                        <ArrowLeft2 size="16" color="#1A1A1A" />
                        <span className='font-IRANSansX text-sm text-Primary- '>راهنمای خرید و محصولات</span>
                    </div>
                    <span className='font-IRANSansX text-sm text-Neutral-60'>(92)</span>
                </div>
                <div className='flex items-center justify-between border-b-2 border-Neutral-90 pb-2'>
                    <div className='flex items-center gap-2'>
                        <ArrowLeft2 size="16" color="#1A1A1A" />
                        <span className='font-IRANSansX text-sm text-Primary- '>نکات مراقبتی</span>
                    </div>
                    <span className='font-IRANSansX text-sm text-Neutral-60'>(29)</span>
                </div>
                <div className='flex items-center justify-between border-b-2 border-Neutral-90 pb-2'>
                    <div className='flex items-center gap-2'>
                        <ArrowLeft2 size="16" color="#1A1A1A" />
                        <span className='font-IRANSansX text-sm text-Primary- '>ورزش</span>
                    </div>
                    <span className='font-IRANSansX text-sm text-Neutral-60'>(2)</span>
                </div>

            </div>
        </div>
    )
}
