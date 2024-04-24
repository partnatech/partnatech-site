import AnalyticsEngineeringHero from "@/components/lite/analytics-engineering/hero";
import AnalyticsEngineeringMentor from "@/components/lite/analytics-engineering/mentor";
import AnalyticsEngineeringSchedule from "@/components/lite/analytics-engineering/schedule";
import { FaqLite } from "@/components/lite/faq";

import React from "react";

const AnalyticsEngineeringPage = () => {
  return (
    <>
      <AnalyticsEngineeringHero />
      <AnalyticsEngineeringMentor />
      <AnalyticsEngineeringSchedule />
      <FaqLite />
    </>
  );
};

export default AnalyticsEngineeringPage;
