import { dataEngineerCopy } from "@/utils/i18n/data-engineer";
import React from "react";

const DataEngineerSchedule = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <h2 className="mt-10 text-2xl font-bold tracking-tight text-white sm:text-4xl text-center">
        {dataEngineerCopy.scheduleTitle}
      </h2>

      <div className="mx-auto max-w-4xl lg:px-8 px-5 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          {dataEngineerCopy.schedules.map((schedule, index) => (
            <div
              key={`schedule-${index}`}
              className="rounded-md bg-gray-400/10 py-12 px-8 font-medium text-gray-300 ring-1 ring-inset ring-gray-400/20"
            >
              <p className="text-xl text-center font-semibold">{schedule.title}</p>
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

export default DataEngineerSchedule;
