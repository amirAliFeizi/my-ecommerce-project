import React from 'react'
import { Location, Star1, Message, Heart, Share, Notification, ArrowRight, ArrowLeft, ShieldTick, ArrowDown2 } from 'iconsax-react'
import ProductBig from "/images/Pic2.png"
import ProductBig4 from "/images/image 4.png"
import ProductBig5 from "/images/image 5.png"
import ProductBig6 from "/images/image 6.png"

export default function Product() {
  return (
    <div>
      {/* jafari coding */}
      <div>
        <ul className='flex items-center gap-3  text-Neutral-20'>
          <Location size="24" color="#333333" variant="TwoTone" />
          <li className='font-IRANSansXFaNum'>خانه </li>
          <li >/</li>
          <li className='font-IRANSansXFaNum'>ویپ | Vape</li>
          <li>/</li>
          <li className='font-IRANSansXFaNum'>Vaporesso</li>
          <li>/</li>
          <li className='text-Neutral-60 font-IRANSansXFaNum'>ویپ آرمور مکس ویپرسو VAPORESSO ARMOUR MAX</li>
        </ul>
        {/* عنوان محصول */}
        <h1 className='text-Neutral-10 mt-8 font-IRANSansXFaNum text-xl font-bold'>ویپ آرمور مکس ویپرسو  VAPORESSO ARMOUR MAX</h1>
        {/* بخش امتیاز و نظرات */}
        <div className='flex items-center mt-4'>
          <div className='flex items-center gap-2 ml-2'>
            <Star1 size="18" color="#FBD54F" />
            <span className='text-Neutral-20'>4.8</span>
            <span className=' text-Neutral-60 font-IRANSansX-Medium.woff2'>(240نفر)</span>
          </div>
          <div className='flex items-center  gap-2'>
            <span className='w-1 h-1 bg-Neutral-60 rounded-full'></span>
            <Message size="18" color="#0072DA" />
            <span className='text-Semantic-Active'>40 دیدگاه</span>
          </div>

        </div>
        {/* بخش تصویر محصول و آیکون‌ها */}
        <div className='flex gap-5 border-t-2 mt-2 border-Neutral-90'>
          <div className='w-14 h-[465px] flex flex-col gap-12 mt-4 rounded-xl bg-Neutral-93 items-center justify-center'>
            <Heart size="24" color="#333333" />
            <Notification size="24" color="#333333" />
            <Share size="24" color="#333333" />
            <Share size="24" color="#333333" />
          </div>
          <div className='border-2 border-Neutral-80 rounded-xl p-8 mt-4'>
            <img src={ProductBig} alt="" />
          </div>
          <div className='flex gap-10 border-b-2 border-Neutral-90'>
            <div className='mt-4 flex flex-col gap-8 mr-5'>
              <div className='flex items-center gap-2'>
                <ShieldTick size="18" color="#0072DA" />
                <span className='text-sm font-IRANSansXFaNum text-Semantic-Active'>گارانتی اصالت و سلامت فیزیکی کالا</span>
              </div>
              <div className='flex items-center bg-Neutral-97 w-[350px] gap-2  border-r-2 border-Primary-main p-2 font-IRANSansXFaNum'>
                <span className=''>✔</span>
                <span className='text-sm font-IRANSansXFaNum text-Primary-main'>موجود است</span>
              </div>
              <div className='mt-2'>
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
            </div>
            <div className='mt-4'>
              <div className='w-[305px] h-[305px] bg-Neutral-97 border-2 border-Neutral-95 p-3 rounded-lg'>
                <h3 className='text-Neutral-20 text-center font-IRANSansXFaNum text-xl p-2 border-b border-b-Neutral-10'>گزینه‌های خرید</h3>
                <div className='flex justify-between border-2 border-Neutral-50 rounded-lg p-3 mt-4'>
                  <div className='flex items-center gap-2 '>
                    <div className='w-6 h-6 border-2 border-Neutral-50 rounded-full'></div>
                    <span className='text-Neutral-70 text-base font-IRANSansXFaNum'>رنگ‌بندی</span>
                  </div>
                  <ArrowDown2 size="24" color="#292D32" />

                </div>
              </div>

            </div>


          </div>

        </div>
        {/* تصاویر کوچک محصول */}
        <div className='flex gap-4 mt-5'>
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

      </div>


      {/* jafari coding */}
    </div>
  )
}
