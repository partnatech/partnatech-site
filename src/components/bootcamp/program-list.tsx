import React from "react";
import { ProgramCard } from "@/components/bootcamp/program-card";

export const ProgramList = () => {
  const programs = [
    {
      name: "Data Engineer",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, ullam. Inventore dolorem consectetur dolorum neque recusandae repudiandae similique, dolor non.",
    },
    {
      name: "Frontend Engineer",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, ullam. Inventore dolorem consectetur dolorum neque recusandae repudiandae similique, dolor non.",
    },
  ];
  return (
    <section className="mb-24">
      <h1 className="text-3xl text-center mb-8">Bootcamp Track</h1>
      <div className="grid lg:grid-cols-2 gap-16 grid-cols-1">
        {programs.map((program, index) => {
          return <ProgramCard key={index} name={program.name} description={program.description} />;
        })}
      </div>
    </section>
  );
};
