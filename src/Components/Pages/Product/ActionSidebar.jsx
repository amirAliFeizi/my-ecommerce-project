import { ArrowDown2, ArrowLeft, ArrowLeft2, ArrowRight, CallCalling, Heart, InfoCircle, Notification, Share, ShieldTick, ShoppingCart } from 'iconsax-react'
import React from 'react'
import ProductBig from "/images/Pic2.png"
import ProductBig4 from "/images/image 4.png"
import ProductBig5 from "/images/image 5.png"
import ProductBig6 from "/images/image 6.png"


export default function ActionSidebar() {
    return (

        <section className="flex gap-6  mt-1 px-4 md:px-10 lg:px-20">
            {/* Sidebar Icons */}
            <div className="w-14 h-[460px] flex flex-col gap-8 rounded-xl bg-Neutral-93 items-center justify-center">
                <Heart size="24" color="#333333" />
                <Notification size="24" color="#333333" />
                <Share size="24" color="#333333" />
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-3 gap-x-24 flex-1">
                <div className=" flex flex-col items-center ">
                    {/* تصویر اصلی محصول */}
                    <div className="border-2 border-Neutral-80 rounded-xl mr-10 h-[460px] w-[428px] p-4 sm:p-8">
                        <img
                            src={ProductBig}
                            alt="Product 1"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    {/* تصاویر کوچک و دکمه‌های ناوبری */}
                    <div className="flex items-center gap-6 mt-2 ml-8">
                        {/* تصاویر کوچک */}
                        <div className="flex gap-4 ">
                            <div className="border-2 border-Neutral-80 rounded-xl w-[100px] h-[100px] flex items-center justify-center">
                                <img src={ProductBig} alt="Thumbnail 1" className="w-full h-full object-cover p-1 rounded-xl" />
                            </div>
                            <div className="border-2 border-Neutral-80 rounded-xl  w-[100px] h-[100px] flex items-center justify-center">
                                <img src={ProductBig6} alt="Thumbnail 2" className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <div className="border-2 border-Neutral-80 rounded-xl  w-[100px] h-[100px] flex items-center justify-center">
                                <img src={ProductBig5} alt="Thumbnail 3" className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <div className="border-2 border-Neutral-80 rounded-xl w-[100px] h-[100px] flex items-center justify-center">
                                <img src={ProductBig4} alt="Thumbnail 4" className="w-full h-full object-cover rounded-xl" />
                            </div>
                        </div>
                        {/* دکمه‌های ناوبری */}
                        <div className="flex flex-col gap-4 items-center">
                            <ArrowLeft size="32" color="#333333" />
                            <ArrowRight size="32" color="#CCCCCC" />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-8 mr-5 '>
                    <div className='flex items-center gap-2'>
                        <ShieldTick size="18" color="#0072DA" />
                        <span className='text-sm font-IRANSansXFaNum text-Semantic-Active'>گارانتی اصالت و سلامت فیزیکی کالا</span>
                    </div>
                    <div className='flex items-center bg-Neutral-97 w-[350px] gap-2  border-r-2 border-Primary-main p-2 font-IRANSansXFaNum'>
                        <span className=''>✔</span>
                        <span className='text-sm font-IRANSansXFaNum text-Primary-main'>موجود است</span>
                    </div>
                    <div className='mt-2 '>
                        <span className='text-Primary-Pressed font-bold text-lg font-IRANSansXFaNum'>ویژگی‌های محصول</span>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center gap-1 mt-8 mr-7'>
                                <span className='w-1.5 h-1.5 bg-Neutral-50 rounded-full'></span>
                                <span className='text-Neutral-50 text-base font-IRANSansXFaNum'>حداکثرقدرت:</span>
                                <span className='text-Neutral-20 text-base font-IRANSansXFaNum'>220 وات</span>
                            </div>
                            <div className='flex items-center gap-2  mr-7'>
                                <span className='w-1.5 h-1.5 bg-Neutral-50 rounded-full'></span>
                                <span className='text-Neutral-50 text-base font-IRANSansXFaNum'>پردازنده:</span>
                                <span className='text-Neutral-20 text-base font-IRANSansXFaNum'>AXON</span>
                            </div>
                            <div className='flex items-center gap-2  mr-7'>
                                <span className='w-1.5 h-1.5 bg-Neutral-50 rounded-full'></span>
                                <span className='text-Neutral-50 text-base font-IRANSansXFaNum'>نمایشگر:</span>
                                <span className='text-Neutral-20 text-base font-IRANSansXFaNum'>صفحه نمایش 0.96 اینچی TFT</span>
                            </div>
                            <div className='flex items-center gap-2  mr-7'>
                                <span className='w-1.5 h-1.5 bg-Neutral-50 rounded-full'></span>
                                <span className='text-Neutral-50 text-base font-IRANSansXFaNum'>ساختار بدنه:</span>
                                <span className='text-Neutral-20 text-base font-IRANSansXFaNum'>آلیاژ مستحکم</span>
                            </div>
                            <div className='flex items-center gap-2  mr-7'>
                                <span className='w-1.5 h-1.5 bg-Neutral-50 rounded-full'></span>
                                <span className='text-Neutral-50 text-base font-IRANSansXFaNum'>حجم مخزن:</span>
                                <span className='text-Neutral-20 text-base font-IRANSansXFaNum'>8 میلی لیتر</span>
                            </div>
                        </div>
                        <div className='flex items-center text-center gap-2 mt-9'>
                            <span className='text-Primary-main text-lg font-IRANSansXFaNum' >مشاهده بیشتر</span>
                            <ArrowDown2 size="20" className='mt-1.5' color="#329A86" />
                        </div>

                    </div>
                    <div className='flex flex-col gap-3 mt-4 '>
                        <div className='flex items-center gap-2'>
                            <span className='text-Neutral-50 font-IRANSansX text-base'>برند:</span>
                            <span className='text-Semantic-Active font-IRANSansX text-base'>ویپرسو</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='text-Neutral-50 font-IRANSansX text-base'>دسته بندی:</span>
                            <span className='text-Semantic-Active font-IRANSansX text-base'>ویپ</span>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col gap-4 '>
                    <div className='w-[305px] h-[305px] p-3 bg-Neutral-97 border-2 border-Neutral-95   rounded-lg'>
                        <div>
                            <h3 className='text-Neutral-20 text-center font-IRANSansXFaNum text-xl p-2 border-b border-b-Neutral-10 font-IRANSansX'>گزینه‌های خرید</h3>

                            <select className='border-Neutral-50 rounded-xl w-[273px] h-14 mt-4'>
                                <option value="">رنگ بندی</option>
                                <option value="">ویپ2</option>
                                <option value="">ویپ3</option>
                                <option value="">ویپ4</option>
                            </select>
                            <div className='w-6 h-6 border-2 border-Neutral-50 rounded-full'>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 flex-row-reverse  mt-6  '>
                            <span className='bg-Semantic-Danger text-Neutral-100 text-sm px-2 py-0.5 rounded-full'>
                                15%
                            </span>
                            <span className='text-Neutral-70 text-sm  font-IRANSansX'>
                                2,990,000  تومان
                            </span>


                        </div>
                        <div className='flex justify-between mt-1 '>
                            <span className='text-Neutral-30 text-lg font-IRANSansX'>قیمت:</span>
                            <div className='flex items-center gap-1 font-IRANSansX'>
                                <span className='text-Primary-main text-2xl'>4,100,000</span>
                                <span className='text-Neutral-50 text-sm'>تومان</span>
                            </div>

                        </div>
                        <div className='flex items-center mt-3 text-center gap-2  bg-Primary-main py-2 px-4 rounded-md cursor-pointer'>
                            <ShoppingCart size="20" color="#FFFFFF" className='mr-8' />
                            <button className='text-Neutral-100 font-IRANSansX text-lg '>افزودن به سبد خرید </button>

                        </div>
                    </div>
                    <div className='w-[305px] h-[109px]  border-2 border-Neutral-95 p-3  rounded-lg'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <InfoCircle size="16" color="#4D4D4D" />
                                    <span className='font-IRANSansX text-Neutral-30 text-sm'>قیمت بهتری سراغ دارید؟</span>
                                </div>
                                <ArrowLeft2 size="12" color="#4D4D4D" />
                            </div>
                            <div className='flex gap-2 mt-2.5'>
                                <InfoCircle size="22" color="#4D4D4D" />
                                <span className='font-IRANSansX text-Neutral-50 text-sm '>با ثبت گزارش قیمت پایین از ما کد تخفیف 50 درصدی بگیرید.</span>
                            </div>

                        </div>
                    </div>

                    <div className='flex flex-col gap-2  mt-5'>
                        <h1 className='text-Neutral-50 font-IRANSansX text-sm'>سوالی دارید؟</h1>
                        <div className='flex  gap-48 items-center mt-3'>
                            <div className='flex items-center gap-1'>
                                <CallCalling size="16" color="#4D4D4D" />
                                <span className='text-Neutral-30 text-sm font-IRANSansX'>مشاوره تلفنی</span>
                            </div>
                            <ArrowLeft2 size="12" color="#4D4D4D" className='cursor-pointer' />
                        </div>
                        <div className='flex gap-[128px] items-center mt-3'>
                            <div className='flex items-center gap-1'>
                                <CallCalling size="16" color="#4D4D4D" />
                                <span className='text-Neutral-30 text-sm font-IRANSansX'>مشاوره از طریق واتس‌اپ</span>
                            </div>
                            <ArrowLeft2 size="12" color="#4D4D4D" className='cursor-pointer' />
                        </div>
                    </div>
                </div>




            </div>

        </section >



    )
}
