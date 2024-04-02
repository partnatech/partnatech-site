import DataAnalyticsHero from "@/components/data-analytics/hero";
import DataAnalyticsMentor from "@/components/data-analytics/mentor";
import DataAnalyticsSchedule from "@/components/data-analytics/schedule";
import { Faq } from "@/components/shared/faq";

import React from "react";

const DataEngineerPage = () => {
  return (
    <>
      <DataAnalyticsHero />
      <DataAnalyticsMentor />
      <DataAnalyticsSchedule />
      <Faq />
    </>
  );
};

export default DataEngineerPage;
