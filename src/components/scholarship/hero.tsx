import React from "react";
import { scholarshipCopy } from "@/utils/i18n/scholarship";

export const ScholarshipHero = () => {
  return (
    <div className="mx-auto mt-12 max-w-7xl">
      <h1 className="text-center text-2xl font-bold md:text-4xl">Programs - Scholarship</h1>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-8 text-lg text-white">
          <div className="mt-10">
            <p>
              Ingin enroll bootcamp namun terkendala biaya? Worry not. We have the scholarship
              track.
            </p>
          </div>

          <div>
            <p>Tahapan:</p>
            <ul className="list-inside">
              {scholarshipCopy.steps.map((step, index) => (
                <li key={`step-${index}`}>
                  {step.number}. {step.text}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p>
              Siapkan portfolio mu belajar data selama ini dan silahkan tuliskan{" "}
              <span className="italic">letter of motivation</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
