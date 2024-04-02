import AnalyticsEngineeringHero from "@/components/analytics-engineering/hero";
import AnalyticsEngineeringMentor from "@/components/analytics-engineering/mentor";
import AnalyticsEngineeringSchedule from "@/components/analytics-engineering/schedule";
import { Faq } from "@/components/shared/faq";

import React from "react";

const AnalyticsEngineeringPage = () => {
  return (
    <>
      <AnalyticsEngineeringHero />
      <AnalyticsEngineeringMentor />
      <AnalyticsEngineeringSchedule />
      <Faq />
    </>
  );
};

export default AnalyticsEngineeringPage;
