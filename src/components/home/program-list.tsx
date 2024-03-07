import React from "react";
import { ProgramCard } from "@/components/home/program-card";

export const ProgramList = () => {
  const programs = [
    {
      name: "Data Engineer",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, ullam. Inventore dolorem consectetur dolorum neque recusandae repudiandae similique, dolor non.",
      link: "programs/data-engineer",
    },
    {
      name: "Data Analyst",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, ullam. Inventore dolorem consectetur dolorum neque recusandae repudiandae similique, dolor non.",
      link: "programs/data-analyst",
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
