import React from "react";
import MoneyBackIcon from "./icons/MoneyBackIcon";
import MySecondIcon from "./icons/MySecondIcon";
import TruckIcon from "./icons/TruckIcon";

export default function PropertiesBox() {
  const features = [
    { text: "تضمین ارسال سریع", icon: TruckIcon },
    { text: "تضمین پایین‌ترین قیمت", icon: MoneyBackIcon },
    { text: "تضمین اصالت کالا", icon: MySecondIcon },
  ];
  return (
    <>
      <div className="absolute bottom-0 left-20  w-212.5 h-30 bg-Primary-main rounded flex justify-around items-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="z-20 mb-20 flex flex-col items-center justify-evenly  w-40 text-center"
          >
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
    </>
  );
}
