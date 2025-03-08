import React from "react";
import MoneyBackIcon from "./icons/MoneyBackIcon";
import MySecondIcon from "./icons/MySecondIcon";
import TruckIcon from "./icons/TruckIcon";

export default function PropertiesBox() {
  return (
    <>
      <div className="absolute bottom-0 left-20 w-216.5 h-30 bg-Primary-main rounded px-[138px] pb-16 gap-x-16 flex items-center">
        <div className="z-10 flex flex-col items-center w-35.5 h-35.5">
          <div className="flex items-center justify-center w-24 h-24 border-main border-2 rounded-full">
            <div className="h-20 w-20 rounded-full bg-Neutral-100 flex items-center justify-center">
              <TruckIcon />
            </div>
          </div>
          <p className="font-IRANSansX text-Neutral-100 text-lg font-medium mt-2 leading-6.5">
            تضمین ارسال سریع
          </p>
        </div>
        <div className="z-10 flex flex-col items-center w-44.5 h-35.5 text-center">
          <div className="flex items-center justify-center w-24 h-24 border-main border-2 rounded-full">
            <div className="h-20 w-20 rounded-full bg-Neutral-100 flex items-center justify-center">
              <MoneyBackIcon />
            </div>
          </div>
          <p className="font-IRANSansX text-Neutral-100 text-lg font-medium mt-2 leading-6.5">
            تضمین پایین‌ترین قیمت
          </p>
        </div>
        <div className="z-10 flex flex-col items-center w-35.5 h-35.5 text-center">
          <div className="flex items-center justify-center w-24 h-24 border-main border-2 rounded-full">
            <div className="h-20 w-20 rounded-full bg-Neutral-100 flex items-center justify-center">
              <MySecondIcon />
            </div>
          </div>
          <p className="font-IRANSansX text-Neutral-100 text-lg font-medium mt-2 leading-6.5">
            تضمین اصالت کالا
          </p>
        </div>
      </div>
    </>
  );
}
