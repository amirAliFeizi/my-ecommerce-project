import React from 'react'
import PicBig from "/images/BigPic.png";
import Article1 from "/images/Article 1.png";
import Article2 from "/images/Article 2.png";
import Article3 from "/images/Article 3.png";
import Article4 from "/images/Article 4.png";
import { Calendar, Clock } from 'iconsax-react';
export default function Articles() {
  return (
    <section className='px-4 md:px-10 lg:px-20 gird grid-cols-2 '>

      <div className='flex'>
        <img src={PicBig} alt="" />
        <div className='flex flex-col gap-3 mx-6'>
          <div className='w-[572px] h-[92px] flex   '>
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
      </div>

    </section>
  )
}
