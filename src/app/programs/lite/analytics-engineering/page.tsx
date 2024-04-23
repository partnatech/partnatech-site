import AnalyticsEngineeringHero from "@/components/lite/analytics-engineering/hero";
import AnalyticsEngineeringMentor from "@/components/lite/analytics-engineering/mentor";
import AnalyticsEngineeringSchedule from "@/components/lite/analytics-engineering/schedule";
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
