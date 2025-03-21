import React from 'react';

import Pic1 from "/images/Pic 1.png";
import Pic2 from "/images/Pic 2.png";
import Pic3 from "/images/Pic 3.png";
import Pic4 from "/images/Pic 4.png";
import Pic5 from "/images/Pic 5.png";

export default function Blogs() {
  return (
    <section className='px-4 md:px-10 lg:px-20'>
      <div className="flex justify-center items-center gap-5">
        {/* Left Column */}
        <div className="flex flex-col gap-5">
          <img src={Pic4} className="w-[305px] h-[240px] max-w-full rounded-lg" />
          <img src={Pic2} className="w-[305px] h-[240px] max-w-full rounded-lg" />
        </div>

        {/* Center Large Image */}
        <div className="">
          <img src={Pic1} className="w-[630px] h-[500px] max-w-full rounded-lg" />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-5">
          <img src={Pic3} className="w-[305px] h-[240px] max-w-full rounded-lg" />
          <img src={Pic5} className="w-[305px] h-[240px] max-w-full rounded-lg" />
        </div>
      </div>
    </section>
 
  );
}