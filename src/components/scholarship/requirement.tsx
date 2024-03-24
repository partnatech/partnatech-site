import { cn } from "@/utils/cn";
import { scholarshipCopy } from "@/utils/i18n/scholarship";

import React from "react";

export const ScholarshipRequirements = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <h2 className="mt-4 text-center text-3xl tracking-tight">Persyaratan</h2>

      <div className="mx-auto mt-10 max-w-7xl px-5 lg:px-8">
        <div
          className={cn(
            "flex shrink-0 flex-col rounded-lg bg-gray-400/10 p-4 font-medium text-gray-300 ring-1 ring-inset ring-gray-400/20 md:w-full md:flex-row md:p-8",
          )}
        >
          <div className="flex flex-[2] flex-col pt-5 md:px-6 md:pt-0">
            <div className="mb-4">
              <ul className="mt-5 list-inside list-disc">
                {scholarshipCopy.requirements.map((requirement, index) => (
                  <li key={`requirement-${index}`}>{requirement.item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
