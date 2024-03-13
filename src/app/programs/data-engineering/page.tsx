import DataEngineerHero from "@/components/data-engineering/hero";
import DataEngineerMentor from "@/components/data-engineering/mentor";
import DataEngineerSchedule from "@/components/data-engineering/schedule";

import React from "react";

const DataEngineerPage = () => {
  return (
    <>
      <DataEngineerHero />
      <DataEngineerMentor />
      <DataEngineerSchedule />
    </>
  );
};

export default DataEngineerPage;
