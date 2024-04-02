import DataEngineerHero from "@/components/data-engineering/hero";
import DataEngineerMentor from "@/components/data-engineering/mentor";
import DataEngineerSchedule from "@/components/data-engineering/schedule";
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
