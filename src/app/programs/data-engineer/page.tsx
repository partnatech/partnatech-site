import DataEngineerHero from "@/components/data-engineer/hero";
import DataEngineerMentor from "@/components/data-engineer/mentor";
import DataEngineerSchedule from "@/components/data-engineer/schedule";

import React from "react";

const DataEngineerPage = () => {
  return (
    <>
      <DataEngineerHero />
      <DataEngineerSchedule />
      <DataEngineerMentor />
    </>
  );
};

export default DataEngineerPage;
