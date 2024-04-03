import { cn } from "@/utils/cn";
import { hireCopy } from "@/utils/i18n/hire-our-talents";
import React from "react";

export const HiringBenefits = () => {
  return (
    <div className="relative isolate overflow-hidden pb-24">
      <h2 className="mt-10 text-center text-2xl tracking-tight text-white sm:text-4xl">
        Discover why top companies choose our Graduates
      </h2>

      <div className="mx-auto mt-10 max-w-7xl px-5 lg:px-8">
        <div
          className={cn("grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10", {
            "justify-items-center": hireCopy.benefits.length % 2 !== 0,
          })}
        >
          {hireCopy.benefits.map((benefit, index) => (
            <div
              key={`benefit-${index}`}
              className="font- flex items-center rounded-md bg-gray-400/10 p-4 text-gray-300 ring-1 ring-inset ring-gray-400/20"
            >
              <div className="">
                <p className="text-lg font-semibold text-secondary">{benefit.item}</p>
                <p className="my-2 text-xs text-gray-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
