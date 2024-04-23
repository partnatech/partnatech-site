import DataEngineerHero from "@/components/lite/data-engineering/hero";
import DataEngineerMentor from "@/components/lite/data-engineering/mentor";
import DataEngineerSchedule from "@/components/lite/data-engineering/schedule";
import { Faq } from "@/components/shared/faq";

import React from "react";

const DataEngineerPage = () => {
  return (
    <>
      <DataEngineerHero />
      <DataEngineerMentor />
      <DataEngineerSchedule />
      <Faq />
    </>
  );
};

export default DataEngineerPage;
