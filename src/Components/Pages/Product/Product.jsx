import React from 'react'
import { Location, Star1, Message, Heart, Share, Notification, ArrowRight, ArrowLeft, ShieldTick, ArrowDown2, ShoppingCart, InfoCircle, ArrowLeft2, CallCalling } from 'iconsax-react'
import ProductBig from "/images/Pic2.png"
import ProductBig4 from "/images/image 4.png"
import ProductBig5 from "/images/image 5.png"
import ProductBig6 from "/images/image 6.png"

export default function Product() {
  return (
    <div className='ml-20 mr-20'>
      {/* jafari coding */}
      <div>
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
        {/* عنوان محصول */}
        <h1 className='text-Neutral-10 mt-8 font-IRANSansXBold text-xl font-bold'>ویپ آرمور مکس ویپرسو  VAPORESSO ARMOUR MAX</h1>
        {/* بخش امتیاز و نظرات */}
        <section className='flex items-center mt-4'>
          <div className='flex items-center gap-2 ml-2'>
            <Star1 size="18" color="#FBD54F" />
            <span className='text-Neutral-20'>4.8</span>
            <span className=' text-Neutral-60 font-IRANSansX'>(240نفر)</span>
          </div>
          <div className='flex items-center  gap-2'>
            <span className='w-1 h-1 bg-Neutral-60 rounded-full'></span>
            <Message size="18" color="#0072DA" />
            <span className='text-Semantic-Active font-IRANSansX'>40 دیدگاه</span>
          </div>

        </section>
        {/* بخش تصویر محصول و آیکون‌ها */}
        <section className='flex gap-8 border-t-2 mt-2 border-Neutral-90'>
          <div className='w-14 h-[465px]  flex flex-col gap-12 mt-4 rounded-xl bg-Neutral-93 items-center justify-center'>
            <Heart size="24" color="#333333" />
            <Notification size="24" color="#333333" />
            <Share size="24" color="#333333" />
            <Share size="24" color="#333333" />
          </div>
          <div className='border-2 border-Neutral-80 rounded-xl p-8 mt-4'>
            <img src={ProductBig} alt="" />
          </div>
          <div className='flex gap-24 border-b-2 border-Neutral-90'>
            <div className='mt-4 flex flex-col gap-8 mr-5'>
              <div className='flex items-center gap-2'>
                <ShieldTick size="18" color="#0072DA" />
                <span className='text-sm font-IRANSansX text-Semantic-Active'>گارانتی اصالت و سلامت فیزیکی کالا</span>
              </div>
              <div className='flex items-center bg-Neutral-97 w-[350px] gap-2  border-r-2 border-Primary-main p-2 font-IRANSansXFaNum'>
                <span className=''>✔</span>
                <span className='text-sm font-IRANSansX text-Primary-main '>موجود است</span>
              </div>
              <div className='mt-2'>
                <span className='text-Primary-Pressed font-bold text-lg font-IRANSansX'>ویژگی‌های محصول</span>
                <div className='flex flex-col gap-3'>
                  <div className='flex items-center gap-1 mt-8 mr-7'>
                    <span className='w-1.5 h-1.5 bg-Neutral-50 rounded-full'></span>
                    <span className='text-Neutral-50 text-base font-IRANSansX'>حداکثرقدرت:</span>
                    <span className='text-Neutral-20 text-base font-IRANSansX'>220 وات</span>
                  </div>
                  <div className='flex items-center gap-2  mr-7'>
                    <span className='w-1.5 h-1.5 bg-Neutral-50 rounded-full'></span>
                    <span className='text-Neutral-50 text-base font-IRANSansX'>پردازنده:</span>
                    <span className='text-Neutral-20 text-base font-IRANSansX'>AXON</span>
                  </div>
                  <div className='flex items-center gap-2  mr-7'>
                    <span className='w-1.5 h-1.5 bg-Neutral-50 rounded-full'></span>
                    <span className='text-Neutral-50 text-base font-IRANSansX'>نمایشگر:</span>
                    <span className='text-Neutral-20 text-base font-IRANSansX'>صفحه نمایش 0.96 اینچی TFT</span>
                  </div>
                  <div className='flex items-center gap-2  mr-7'>
                    <span className='w-1.5 h-1.5 bg-Neutral-50 rounded-full'></span>
                    <span className='text-Neutral-50 text-base font-IRANSansX'>ساختار بدنه:</span>
                    <span className='text-Neutral-20 text-base font-IRANSansX'>آلیاژ مستحکم</span>
                  </div>
                  <div className='flex items-center gap-2  mr-7'>
                    <span className='w-1.5 h-1.5 bg-Neutral-50 rounded-full'></span>
                    <span className='text-Neutral-50 text-base font-IRANSansX'>حجم مخزن:</span>
                    <span className='text-Neutral-20 text-base font-IRANSansX'>8 میلی لیتر</span>
                  </div>
                </div>
                <div className='flex items-center text-center gap-2 mt-9'>
                  <span className='text-Primary-main text-lg font-IRANSansX' >مشاهده بیشتر</span>
                  <ArrowDown2 size="20" color="#329A86" />
                </div>

              </div>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
              <div className='w-[305px] h-[305px] bg-Neutral-97 border-2 border-Neutral-95 p-3  rounded-lg'>
                <h3 className='text-Neutral-20 text-center font-IRANSansXFaNum text-xl p-2 border-b border-b-Neutral-10 font-IRANSansX'>گزینه‌های خرید</h3>
                <div className='flex justify-between items-center border-2 border-Neutral-50 rounded-xl p-3 mt-4'>
                  <div className='flex items-center gap-2  py-2'>
                    <div className='w-6 h-6 border-2 border-Neutral-50 rounded-full'></div>
                    <span className='text-Neutral-70 text-base font-IRANSansX'>رنگ‌بندی</span>
                  </div>
                  <ArrowDown2 size="24" color="#292D32" />

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
                <div className='flex items-center mt-3 text-center gap-2  bg-Primary-main py-2 px-4 rounded-md'>
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

            </div>

          </div>

        </section>
        {/* تصاویر کوچک محصول */}
        <section className='flex gap-7'>
          <div className='flex gap-5 mt-5'>
            <div className='border-2 border-Neutral-80 rounded-xl '>
              <img src={ProductBig} width={90} alt="" />
            </div>
            <div className='border-2 border-Neutral-80 rounded-xl '>
              <img src={ProductBig5} alt="" />
            </div>
            <div className='border-2 border-Neutral-80 rounded-xl '>
              <img src={ProductBig6} alt="" />
            </div>
            <div className='border-2 border-Neutral-80 rounded-xl '>
              <img src={ProductBig4} alt="" />
            </div>
            <div className='flex flex-col gap-6 items-center justify-center'>
              <ArrowLeft size="32" color="#333333" />
              <ArrowRight size="32" color="#CCCCCC" />
            </div>
          </div>
          <div className='flex  justify-between mt-6 '>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-2'>
                <span className='text-Neutral-50 font-IRANSansX text-base'>برند:</span>
                <span className='text-Semantic-Active font-IRANSansX text-base'>ویپرسو</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-Neutral-50 font-IRANSansX text-base'>دسته بندی:</span>
                <span className='text-Semantic-Active font-IRANSansX text-base'>ویپ</span>
              </div>
            </div>
            <div className='mr-[360px] '>
              <h1 className='text-Neutral-50 font-IRANSansX text-sm'>سوالی دارید؟</h1>
              <div className='flex flex-col gap-3'>
                <div className='flex justify-between gap-48 items-center mt-3'>
                  <div className='flex items-center gap-1'>
                    <CallCalling size="16" color="#4D4D4D" />
                    <span className='text-Neutral-30 text-sm font-IRANSansX'>مشاوره تلفنی</span>
                  </div>
                  <ArrowLeft2 size="12" color="#4D4D4D" />
                </div>
                <div className='flex justify-between  items-center mt-3'>
                  <div className='flex items-center gap-1'>
                    <CallCalling size="16" color="#4D4D4D" />
                    <span className='text-Neutral-30 text-sm font-IRANSansX'>مشاوره از طریق واتس‌اپ</span>
                  </div>
                  <ArrowLeft2 size="12" color="#4D4D4D" />
                </div>
              </div>
            </div>

          </div>

        </section>

      </div>


      {/* jafari coding */}
    </div>
  )
}
