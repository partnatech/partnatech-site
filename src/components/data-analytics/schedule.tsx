import { dataAnalyticsCopy } from "@/utils/i18n/data-analytics";
import React from "react";

const DataAnalyticsSchedule = () => {
  return (
    <div className="relative isolate overflow-hidden mt-32 pb-32">
      <h2 className="mt-10 text-2xl font-bold tracking-tight text-white sm:text-4xl text-center">
        {dataAnalyticsCopy.scheduleTitle}
      </h2>

      <div className="mx-auto max-w-7xl lg:px-8 px-5 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          {dataAnalyticsCopy.schedules.map((schedule, index) => (
            <div
              key={`schedule-${index}`}
              className="rounded-md bg-gray-400/10 py-12 px-8 font-medium text-gray-300 ring-1 ring-inset ring-gray-400/20"
            >
              <p className="text-xl text-center font-semibold text-white">{schedule.title}</p>
              <ul className="list-disc list-inside mt-5">
                {schedule.items.map((item, itemIndex) => (
                  <li key={`schedule-${index}-item-${itemIndex}`}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataAnalyticsSchedule;
