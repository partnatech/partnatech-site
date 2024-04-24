import { dataEngineerLiteCopy } from "@/utils/i18n/data-engineering-lite";
import React from "react";

const DataEngineerSchedule = () => {
  return (
    <div className="relative isolate overflow-hidden pb-32">
      <div className="px-5 text-center leading-loose">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
          {dataEngineerLiteCopy.scheduleTitle}
        </h2>
        <p>
          This program will be conducted for 12 weeks with the following materials to be covered:
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
          {dataEngineerLiteCopy.schedules.map((schedule, index) => (
            <div
              key={`schedule-${index}`}
              className="rounded-md bg-gray-400/10 px-8 py-12 font-medium text-gray-300 ring-1 ring-inset ring-gray-400/20"
            >
              <p className="text-center text-xl font-semibold text-white">{schedule.title}</p>

              <ul className="mt-5 list-inside list-disc">
                <p
                  className={schedule.category === "Live Session" ? "mt-5 text-secondary" : "mt-5"}
                >
                  {schedule.category}
                </p>
                {schedule.items.map((item, itemIndex) => (
                  <li key={`schedule-${index}-item-${itemIndex}`}>{item}</li>
                ))}

                <p className="mt-5 text-secondary">{schedule.mentoringTitle}</p>
                <ul className="list list-inside list-disc">
                  {schedule.mentoring?.map((item, index) => (
                    <li key={`schedule-${index}-mentoring-${index}`}>{item}</li>
                  ))}
                </ul>
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-5">
          * Sesi mentoring untuk Practice Case Exercise dilakukan setiap hari jumat.
        </p>
      </div>
    </div>
  );
};

export default DataEngineerSchedule;
