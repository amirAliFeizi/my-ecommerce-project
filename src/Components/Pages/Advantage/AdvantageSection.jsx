import React from "react";
import MoneyBackIcon from "./icons/MoneyBackIcon";
import MySecondIcon from "./icons/MySecondIcon";
import TruckIcon from "./icons/TruckIcon";

const AdvantageSection = () => {
  const features = [
    { text: "تضمین ارسال سریع", icon: TruckIcon },
    { text: "تضمین پایین‌ترین قیمت", icon: MoneyBackIcon },
    { text: "تضمین اصالت کالا", icon: MySecondIcon },
  ];
  return (
    <section className="relative bg-Primary-bgColor min-w-[1440px] h-70 mt-10 px-20">
      <div className="absolute bottom-16 flex flex-col items-center text-center">
        <span className="font-IRANSansX text-Primary-Pressed text-2xl font-semibold">
          مزیت رقابتی
          <span className="font-sfUIBold text-Primary-main text-2xl font-normal mr-2">
            Man-O-Vape
          </span>
        </span>
        <h1 className="font-IRANSansX text-Primary-hover text-lg font-medium mt-3 leading-6.5">
          با خـــــیال راحـــــــــت خرید کنیـــــــد...
        </h1>
      </div>
      <div className="absolute bottom-0 left-20  w-212.5 h-30 bg-Primary-main rounded flex justify-around items-center">
        {features.map((feature, index) => (
          <div key={index} className="z-20 mb-20 flex flex-col items-center justify-evenly  w-40 text-center">
            <div className="flex flex-nowrap items-center justify-center  w-24 h-24 border-main border-2 rounded-full">
              <div className="h-20 w-20 rounded-full bg-Neutral-100 flex items-center justify-center">
                {feature.icon && <feature.icon size="24" color="#333333" />}
              </div>
            </div>
            <p className="font-IRANSansX text-Neutral-100 text-lg font-medium mt-2 leading-6.5">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvantageSection;
