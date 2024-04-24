import DataEngineerHero from "@/components/lite/data-engineering/hero";
import DataEngineerMentor from "@/components/lite/data-engineering/mentor";
import DataEngineerSchedule from "@/components/lite/data-engineering/schedule";
import { FaqLite } from "@/components/lite/faq";

import React from "react";

const DataEngineerPage = () => {
  return (
    <>
      <DataEngineerHero />
      <DataEngineerMentor />
      <DataEngineerSchedule />
      <FaqLite />
    </>
  );
};

export default DataEngineerPage;
