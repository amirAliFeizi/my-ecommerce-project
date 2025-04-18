import React from 'react'
import PicBig from "/images/BigPic.png";
import Article1 from "/images/Article 1.png";
import Article2 from "/images/Article 2.png";
import Article3 from "/images/Article 3.png";
import Article4 from "/images/Article 4.png";
import { Calendar, Clock, Eye, Message } from 'iconsax-react';

export default function Articles() {
  return (
    <section className='px-4 md:px-10 lg:px-20 '>
      <div className='flex mt-10'>
        <img src={PicBig} alt="" className='w-[320px] h-[440px]' />
        <div className='flex flex-col gap-3 mx-6 '>
          <div className='w-[572px] h-[92px] flex '>
            <img src={Article1} alt="" className='w-[92px] h-[92px]  ' />
            <div className='flex flex-col gap-3 mx-3 '>
              <p>مهم‌ترین علت پس دادن جویس ویپ و روش‌های پیشگیری از نشت جویس از ویپ</p>
              <div className='flex items-center gap-2 '>
                <Calendar size="16" color="#999999" />
                <span className='text-Neutral-60 font-IRANSansX text-sm'>2 دقیقه قبل</span>
                <span className='text-Neutral-80'>|</span>
                <Clock size="16" color="#999999" />
                <span className='text-Neutral-60 font-IRANSansX text-sm'>2 دقیقه مطالعه</span>
              </div>

            </div>
          </div>
          <div className='w-[572px] h-[92px] flex  border-t-2 border-t-Neutral-90 py-2  '>
            <img src={Article2} alt="" className='w-[92px] h-[92px]  ' />
            <div className='flex flex-col gap-3 mx-3 '>
              <p>مهم‌ترین علت پس دادن جویس ویپ و روش‌های پیشگیری از نشت جویس از ویپ</p>
              <div className='flex items-center gap-2 '>
                <Calendar size="16" color="#999999" />
                <span className='text-Neutral-60 font-IRANSansX text-sm'>2 دقیقه قبل</span>
                <span className='text-Neutral-80'>|</span>
                <Clock size="16" color="#999999" />
                <span className='text-Neutral-60 font-IRANSansX text-sm'>2 دقیقه مطالعه</span>
              </div>

            </div>
          </div>
          <div className='w-[572px] h-[92px] flex border-t-2 border-t-Neutral-90 py-2 mt-2  '>
            <img src={Article3} alt="" className='w-[92px] h-[92px]  ' />
            <div className='flex flex-col gap-3 mx-3 '>
              <p>مهم‌ترین علت پس دادن جویس ویپ و روش‌های پیشگیری از نشت جویس از ویپ</p>
              <div className='flex items-center gap-2 '>
                <Calendar size="16" color="#999999" />
                <span className='text-Neutral-60 font-IRANSansX text-sm'>2 دقیقه قبل</span>
                <span className='text-Neutral-80'>|</span>
                <Clock size="16" color="#999999" />
                <span className='text-Neutral-60 font-IRANSansX text-sm'>2 دقیقه مطالعه</span>
              </div>

            </div>
          </div>
          <div className='w-[572px] h-[92px] flex border-t-2 border-t-Neutral-90 py-2 mt-2  '>
            <img src={Article4} alt="" className='w-[92px] h-[92px]  ' />
            <div className='flex flex-col gap-3 mx-3 '>
              <p>مهم‌ترین علت پس دادن جویس ویپ و روش‌های پیشگیری از نشت جویس از ویپ</p>
              <div className='flex items-center gap-2 '>
                <Calendar size="16" color="#999999" />
                <span className='text-Neutral-60 font-IRANSansX text-sm'>2 دقیقه قبل</span>
                <span className='text-Neutral-80'>|</span>
                <Clock size="16" color="#999999" />
                <span className='text-Neutral-60 font-IRANSansX text-sm'>2 دقیقه مطالعه</span>
              </div>

            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5 mx-10  '>
          <h1 className='font-IRANSansXBold text-Primary-Pressed text-xl border-b-2 border-b-Primary-main w-32 pb-4 mb-5 '>پربازدیدترین‌ها</h1>
          <div className='w-[320px] h-[55px] flex flex-col gap-2 pr-2 border-r-2 border-Primary-main'>
            <p className='text-Primary-main font-IRANSansXRegular text-sm'>آیا خرید ویپ خطر کمتری نسبت به سیگار و قلیان دارد؟</p>
            <div className='flex items-center gap-2 '>
              <Eye size="16" color="#999999" />
              <span className='text-Neutral-60 font-IRANSansX text-sm'>3007 بازدید</span>
              <span className='text-Neutral-80 mb-1'>|</span>
              <Message size="16" color="#999999" />
              <span className='text-Neutral-60 font-IRANSansX text-sm'>2</span>
            </div>

          </div>
          <div className='w-[320px] h-[55px] flex flex-col gap-2  pr-2  border-r-2 border-Neutral-80 '>
            <p className='text-Neutral-10 font-IRANSansXRegular text-sm'>آیا خرید ویپ خطر کمتری نسبت به سیگار و قلیان دارد؟</p>
            <div className='flex items-center gap-2 '>
              <Eye size="16" color="#999999" />
              <span className='text-Neutral-60 font-IRANSansX text-sm'>3007 بازدید</span>
              <span className='text-Neutral-80 mb-1'>|</span>
              <Message size="16" color="#999999" />
              <span className='text-Neutral-60 font-IRANSansX text-sm'>2</span>
            </div>

          </div>
          <div className='w-[320px] h-[55px] flex flex-col gap-2  pr-2  border-r-2 border-Neutral-80 '>
            <p className='text-Neutral-10 font-IRANSansXRegular text-sm'>آیا خرید ویپ خطر کمتری نسبت به سیگار و قلیان دارد؟</p>
            <div className='flex items-center gap-2 '>
              <Eye size="16" color="#999999" />
              <span className='text-Neutral-60 font-IRANSansX text-sm'>3007 بازدید</span>
              <span className='text-Neutral-80 mb-1'>|</span>
              <Message size="16" color="#999999" />
              <span className='text-Neutral-60 font-IRANSansX text-sm'>2</span>
            </div>

          </div>
          <div className='w-[320px] h-[55px] flex flex-col gap-2  pr-2  border-r-2 border-Neutral-80 '>
            <p className='text-Neutral-10 font-IRANSansXRegular text-sm'>آیا خرید ویپ خطر کمتری نسبت به سیگار و قلیان دارد؟</p>
            <div className='flex items-center gap-2 '>
              <Eye size="16" color="#999999" />
              <span className='text-Neutral-60 font-IRANSansX text-sm'>3007 بازدید</span>
              <span className='text-Neutral-80 mb-1'>|</span>
              <Message size="16" color="#999999" />
              <span className='text-Neutral-60 font-IRANSansX text-sm'>2</span>
            </div>

          </div>
          <div className='w-[320px] h-[55px] flex flex-col gap-2  pr-2  border-r-2 border-Neutral-80 '>
            <p className='text-Neutral-10 font-IRANSansXRegular text-sm'>آیا خرید ویپ خطر کمتری نسبت به سیگار و قلیان دارد؟</p>
            <div className='flex items-center gap-2 '>
              <Eye size="16" color="#999999" />
              <span className='text-Neutral-60 font-IRANSansX text-sm'>3007 بازدید</span>
              <span className='text-Neutral-80 mb-1'>|</span>
              <Message size="16" color="#999999" />
              <span className='text-Neutral-60 font-IRANSansX text-sm'>2</span>
            </div>

          </div>
          <div className='w-[320px] h-[55px] flex flex-col gap-2  pr-2  border-r-2 border-Neutral-80 '>
            <p className='text-Neutral-10 font-IRANSansXRegular text-sm'>آیا خرید ویپ خطر کمتری نسبت به سیگار و قلیان دارد؟</p>
            <div className='flex items-center gap-2 '>
              <Eye size="16" color="#999999" />
              <span className='text-Neutral-60 font-IRANSansX text-sm'>3007 بازدید</span>
              <span className='text-Neutral-80 mb-1'>|</span>
              <Message size="16" color="#999999" />
              <span className='text-Neutral-60 font-IRANSansX text-sm'>2</span>
            </div>

          </div>


        </div>
      </div>
    </section>
  
  )
}
