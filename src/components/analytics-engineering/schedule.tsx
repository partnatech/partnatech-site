import { analyticsEngineeringCopy } from "@/utils/i18n/analytics-engineering";
import React from "react";

const AnalyticsEngineeringSchedule = () => {
  return (
    <div className="relative isolate overflow-hidden pb-32">
      <h2 className="text-center text-2xl font-bold tracking-tight text-white sm:text-4xl">
        {analyticsEngineeringCopy.scheduleTitle}
      </h2>

      <div className="mx-auto mt-10 max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
          {analyticsEngineeringCopy.schedules.map((schedule, index) => (
            <div
              key={`schedule-${index}`}
              className="rounded-md bg-gray-400/10 px-8 py-12 font-medium text-gray-300 ring-1 ring-inset ring-gray-400/20"
            >
              <p className="text-center text-xl font-semibold text-white">{schedule.title}</p>
              <ul className="mt-5 list-inside list-disc">
                {schedule.items.map((item, itemIndex) => (
                  <li key={`schedule-${index}-item-${itemIndex}`}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-md bg-secondary-base/10 px-4 py-2  ring-1 ring-inset ring-gray-400/20">
          <div className="flex flex-col">
            <div className="mb-4 flex flex-row">
              <div className="w-1/2 lg:w-1/4">Registration Closing Date</div>
              <div className="w-1/2">
                <p>
                  :{" "}
                  <span className="text-secondary">
                    {analyticsEngineeringCopy.registrationDate}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2 lg:w-1/4">Kick-off:</div>
              <div className="w-1/2">
                <p>
                  : <span className="text-secondary">{analyticsEngineeringCopy.kickOffDate}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-3">
          * Sesi live class bersama mentor dan instruktur dilakukan setiap hari minggu dan rabu
          19.00 - 21.30 wib (120-150 menit). Sesi mentoring untuk practice case exercise dilakukan
          setiap hari jumat.
        </p>
      </div>
    </div>
  );
};

export default AnalyticsEngineeringSchedule;
