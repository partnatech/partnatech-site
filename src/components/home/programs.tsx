"use client";
import React from "react";
import Link from "next/link";

import { homeCopy } from "@/utils/i18n/home";
import { MegaphoneIcon } from "@heroicons/react/24/solid";
import { CheckCircle2 } from "lucide-react";

export function Programs() {
  return (
    <div className="mx-auto max-w-xs md:px-10 lg:max-w-7xl">
      <h2 className="mb-12 text-center text-3xl font-bold md:text-3xl">Our Programs</h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-4">
        {homeCopy.programs.map((program, index) => {
          return (
            <div
              key={`program-${index}`}
              className="mx-auto w-[320px] rounded-md bg-gray-400/10 px-8 py-12 font-medium text-gray-300 ring-1 ring-inset ring-gray-400/20 lg:w-[400px]"
            >
              <div className="flex min-h-[240px] flex-col justify-between space-y-4">
                <div>
                  <h2 className="mb-2 mt-4 text-center text-base font-semibold text-secondary dark:text-neutral-200 lg:text-2xl">
                    {program.name}
                  </h2>
                  <ul className="flex list-inside list-disc justify-center gap-3 text-sm text-gray-400">
                    <li>Live Class</li>
                    <li>{program.duration}</li>
                  </ul>
                </div>
                <div>
                  {homeCopy.benefits.map((benefit, index) => {
                    return (
                      <div className="flex items-center gap-2" key={`benefit-program-${index}`}>
                        <CheckCircle2 size={16} color="green" />
                        <p className="font-base text-sm">{benefit.item}</p>
                      </div>
                    );
                  })}
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

      <div className="mt-12 flex justify-start rounded-md bg-gray-400/10 px-4 py-2 ring-1 ring-inset ring-gray-400/20 lg:mx-24">
        <div className="flex">
          <MegaphoneIcon className="h-7 w-7" />
          <p>
            Introducing Our <span className="text-secondary">LiteProgram</span>. See{" "}
            <span>
              <Link href="/programs/lite" className="hover:underline">
                Here
              </Link>
            </span>
          </p>
        </div>
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
