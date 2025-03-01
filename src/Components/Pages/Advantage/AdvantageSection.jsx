import React from "react";
import AdvantageTitle from "./AdvantageTitle";
import PropertiesBox from "./PropertiesBox";

const AdvantageSection = () => {
  return (
    <section className="relative bg-Primary-bgColor min-w-[1440px] h-70 mt-10 px-20">
      <AdvantageTitle />
      <PropertiesBox />
    </section>
  );
};

export default AdvantageSection;
