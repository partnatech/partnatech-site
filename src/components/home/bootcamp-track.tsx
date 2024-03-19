"use client";
import React from "react";
import Link from "next/link";

import { homeCopy } from "@/utils/i18n/home";

export function BootcampTrack() {
  return (
    <>
      <h2 className="text-center text-3xl font-bold md:text-3xl" id="programs">
        Our Programs
      </h2>

      <div className="max-w-xs lg:max-w-7xl  mx-auto grid grid-cols-1 lg:grid-cols-3 lg:gap-16 gap-8">
        {homeCopy.programs.map((program, index) => {
          return (
            <div
              key={`program-${index}`}
              className="rounded-md bg-gray-400/10 py-12 px-8 font-medium text-gray-300 ring-1 ring-inset ring-gray-400/20"
            >
              <div className="space-y-8 min-h-[240px] flex justify-between flex-col">
                <div>
                  <h2 className="lg:text-2xl text-center font-semibold text-base text-secondary mt-4 mb-2 dark:text-neutral-200">
                    {program.name}
                  </h2>
                  <ul className="text-sm text-gray-400 flex justify-center gap-3 list-disc list-inside">
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
                      <button className="w-full rounded-md px-4 py-3 font-semibold text-white  shadow-sm hover:bg-teal-500 bg-primary">
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

      <div className="flex justify-center py-2">
        <Link href="/programs/scholarship">
          <button className="rounded-md px-4 py-3 font-semibold text-white shadow-sm hover:bg-teal-500 bg-primary">
            Apply for a scholarship
          </button>
        </Link>
      </div>
    </>
  );
}
