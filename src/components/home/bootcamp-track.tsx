"use client";
import React from "react";
import Link from "next/link";

import { homeCopy } from "@/utils/i18n/home";

export function BootcampTrack() {
  return (
    <div>
      <h2
        className="mb-12 text-center text-3xl font-bold md:text-3xl"
        id="programs"
      >
        Our Programs
      </h2>
      <div className="mx-auto grid  max-w-xs grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3 lg:gap-16">
        {homeCopy.programs.map((program, index) => {
          return (
            <div
              key={`program-${index}`}
              className="rounded-md bg-gray-400/10 px-8 py-12 font-medium text-gray-300 ring-1 ring-inset ring-gray-400/20"
            >
              <div className="flex min-h-[240px] flex-col justify-between space-y-8">
                <div>
                  <h2 className="mb-2 mt-4 text-center text-base font-semibold text-secondary dark:text-neutral-200 lg:text-2xl">
                    {program.name}
                  </h2>
                  <ul className="flex list-inside list-disc justify-center gap-3 text-sm text-gray-400">
                    <li>Live Class</li>
                    <li>{program.duration}</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold">Onboarding Date</h3>
                  <p className="text-sm">April 17th, 2024</p>
                </div>
                <div>
                  <Link href={`/${program.link}`}>
                    <div className="flex items-center justify-center">
                      <button className="w-full rounded-md bg-primary px-4 py-3 font-semibold  text-white shadow-sm hover:bg-teal-500">
                        See Details
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center pt-12">
        <Link href="/programs/scholarship">
          <button className="rounded-md bg-primary px-4 py-3 font-semibold text-white shadow-sm hover:bg-teal-500">
            Apply for a scholarship
          </button>
        </Link>
      </div>
    </div>
  );
}
