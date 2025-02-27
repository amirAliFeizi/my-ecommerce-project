import React from "react";

export default function AdvantageSection() {
  return (
    <>
      <section className="relative bg-Primary-bgColor min-w-[1440px] h-[277px] mt-10 px-20 ">
        <div className="absolute bottom-16 flex justify-center items-center">
          <span className="font-IRANSansX text-Primary-Pressed text-2xl  font-semibold ">
            مزیت رقابتی
            <span className="font-sfUIBold text-Primary-main text-2xl font-normal  mr-2">
              Man-O-Vape
            </span>
            <h1 className=" font-IRANSansX text-Primary-hover text-lg font-medium mt-3 leading-6.5">
              با خـــــیال راحـــــــــت خرید کنیـــــــد...
            </h1>
          </span>
        </div>
        <div className="px-[138px] z-10 absolute bottom-0 left-20 w-[867px] h-[120px] bg-Primary-main rounded">
          <div className="flex flex-wrap justify-center z-20 absolute  bottom-[30px] h-[143px] w-[143px]">
            <div className="flex items-center justify-center w-[100px] h-[100px] border-[rgba(153,192,183,1)]  border-2 rounded-full">
              <div className="h-[80px] w-[80px] rounded-full bg-Neutral-100">
                {/* <icons></icons> */}
              </div>
            </div>
            <p className=" font-IRANSansX text-Neutral-100 text-lg font-medium mt-3 leading-6.5">
              تضمین ارسال سریع
            </p>
          </div>
          <div className="flex flex-wrap justify-center z-20 absolute right-[345px] bottom-[30px] h-[143px] w-[177px]">
            <div className="flex items-center justify-center w-[100px] h-[100px] border-[rgba(153,192,183,1)]  border-2 rounded-full">
              <div className="h-[80px] w-[80px] rounded-full bg-Neutral-100">
                {/* <icons></icons> */}
              </div>
            </div>
            <p className=" font-IRANSansX text-Neutral-100 text-lg font-medium mt-3 leading-6.5">
              تضمین پایین‌ترین قیمت
            </p>
          </div>
          <div className="flex flex-wrap justify-center z-20 absolute left-[138px] bottom-[30px] h-[143px] w-[143px]">
            <div className="flex items-center justify-center w-[100px] h-[100px] border-[rgba(153,192,183,1)]  border-2 rounded-full">
              <div className="h-[80px] w-[80px] rounded-full bg-Neutral-100">
                {/* <icons></icons> */}
              </div>
            </div>
            <p className=" font-IRANSansX text-Neutral-100 text-lg font-medium mt-3 leading-6.5">
              تضمین اصالت کالا
            </p>
          </div>
        </div>
      </section>
      {/* استاد کد هامون بهینه نیست ولی فعلا ظاهر کارو در اووردم و تلاشمو میکنم */}
    </>
  );
}
