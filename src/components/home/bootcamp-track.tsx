"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";

import { ArrowRight } from "lucide-react";
import { homeCopy } from "@/utils/i18n/home";

export function BootcampTrack() {
  const { programs } = homeCopy;
  const isOdd = programs.length % 2 !== 0;
  return (
    <>
      <h2 className="text-3xl text-center mb-4" id="programs">
        Our Programs
      </h2>

      <div className="">
        <div className="max-w-xs lg:max-w-3xl  mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-8">
          {homeCopy.programs.map((program, index) => {
            return (
              <div
                key={index}
                className={`${
                  isOdd && index === programs.length - 1
                    ? "lg:col-start-1 lg:col-end-3 lg:mx-auto lg:w-1/2"
                    : ""
                }`}
              >
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 dark:bg-zinc-900">
                  <div className="space-y-8 min-h-[240px] flex justify-between flex-col">
                    <div>
                      <h2 className="lg:text-2xl text-center font-semibold text-base text-white mt-4 mb-2 dark:text-neutral-200">
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
                          <div className="rounded-md px-4 py-3 font-semibold text-white ring-2 ring-white shadow-sm flex items-center">
                            <p className="text-center hover:underline">Register Now</p>
                            <ArrowRight size={15} />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </BackgroundGradient>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center py-2">
        <Link href="/programs/scholarship">
          <button className="rounded-md px-4 py-3 font-semibold text-white ring-2 ring-primary-700 shadow-sm hover:bg-teal-500 bg-primary">
            Apply for a scholarship
          </button>
        </Link>
      </div>
    </>
  );
}
