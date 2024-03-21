import { dataAnalyticsCopy } from "@/utils/i18n/data-analytics";
import React from "react";

const DataAnalyticsSchedule = () => {
  const { schedules } = dataAnalyticsCopy;
  const isOdd = schedules.length % 2 !== 0;

  return (
    <div className="relative isolate mt-32 overflow-hidden pb-32">
      <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white sm:text-4xl">
        {dataAnalyticsCopy.scheduleTitle}
      </h2>

      <div className="mx-auto mt-10 max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
          {dataAnalyticsCopy.schedules.map((schedule, index) => (
            <div
              key={`schedule-${index}`}
              className={`rounded-md bg-gray-400/10 px-8 py-12 font-medium text-gray-300 ring-1 ring-inset ring-gray-400/20 ${
                isOdd && index === schedules.length - 1
                  ? "lg:col-start-1 lg:col-end-3 lg:mx-auto lg:w-1/2"
                  : ""
              }`}
            >
              <p className="text-center text-xl font-semibold text-white">
                {schedule.title}
              </p>
              <ul className="mt-5 list-inside list-disc">
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
