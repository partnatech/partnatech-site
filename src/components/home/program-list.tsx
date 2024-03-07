import React from "react";
import { ProgramCard } from "@/components/home/program-card";

export const ProgramList = () => {
  const programs = [
    {
      name: "Data Engineer",
      description:
        "Our Data Engineering Program is meticulously designed to transform beginners into skilled professionals ready to tackle the challenges of the modern data landscape. Mixed learning style with some to mention : Tutor-led Session, Industry-level Practical Case and Exercise, Mentoring Session, and Self-Learning.",
      link: "programs/data-engineer",
    },
    {
      name: "Analytics Engineer",
      description:
        "Unlock the full potential of your knowledge to be an Analytics Engineer. An awesome intersection between a Data Analyst and Data Engineer. This comprehensive program equips you with the latest tools and techniques. Dive deep into data integration plus preparation, analysis, and visualization to understand customer behavior and help business drive strategic decisions",
      link: "programs/analyst-engineer",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl text-center mb-8">Bootcamp Track</h1>
      <div className="grid lg:grid-cols-2 gap-16 grid-cols-1">
        {programs.map((program, index) => {
          return <ProgramCard key={index} name={program.name} description={program.description} link={program.link} />;
        })}
      </div>
    </div>
  );
};
