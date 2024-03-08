import React from "react";
import { ProgramCard } from "@/components/home/program-card";

import { homeCopy } from "@/utils/i18n/home";

export const ProgramList = () => {
  return (
    <>
      <h1 className="text-3xl text-center mb-4" id="programs">
        Our Programs
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:max-w-2xl max-w-xs gap-16 mx-auto">
        {homeCopy.programs.map((program, index) => {
          return <ProgramCard key={index} name={program.name} duration={program.duration} link={program.link} />;
        })}
      </div>
    </>
  );
};
