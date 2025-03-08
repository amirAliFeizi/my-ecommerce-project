import React from "react";
import AdvantageTitle from "./AdvantageTitle";
import PropertiesBox from "./PropertiesBox";

const AdvantageSection = () => {
  return (
    <section className="relative bg-Primary-bgColor w-full min-w-[1040px]  h-70 mt-10 px-20">
      <AdvantageTitle />
      <PropertiesBox />
    </section>
  );
};

export default AdvantageSection;
