import React from "react";

export default function TabMenu() {
  const features1 = [
    { text: "توضیحات کالا" },
    { text: "روش‌های ارسال کالا" },
    { text: "نظرات" },
  ];
  return (
    <>
      <section className="px-20 mt-25">
        <div className="flex items-center text-Neutral-50 font-IRANSansX font-medium text-lg gap-x-20 border-b-1.5 border-Neutral-85 pb-7">
          {features1.map((feature, index) => (
            <a key={index} className="flex items-center pb-6  cursor-pointer duration-100 ">
              {feature.text}
            </a>
          ))}
       
        </div>
      </section>
    </>
  );
}
