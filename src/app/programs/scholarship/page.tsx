import { cn } from "@/utils/cn";
import React from "react";

import { scholarshipCopy } from "@/utils/i18n/scholarship";
import Link from "next/link";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Page() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <div className="mx-auto mt-12 max-w-7xl">
        <h1 className="text-center text-2xl font-bold md:text-4xl">
          Programs - Scholarship
        </h1>

        <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:grid-cols-2">
          <div
            className={cn(
              "flex w-[90%] shrink-0 flex-col rounded-lg bg-gray-400/10 p-4 font-medium text-gray-300 ring-1 ring-inset ring-gray-400/20 md:w-full md:flex-row md:p-8",
            )}
          >
            <div className="flex flex-[2] flex-col pt-5 md:px-6 md:pt-0">
              <div className="mb-4">
                <p className="text-lg font-semibold text-white md:text-lg lg:text-2xl">
                  Persyaratan
                </p>
                <ul className="mt-5 list-inside list-disc">
                  {scholarshipCopy.requirements.map((requirement, index) => (
                    <li key={`requirement-${index}`}>{requirement.item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <p className=" text-lg leading-8 text-gray-300">
              Ingin enroll bootcamp namun terkendala biaya?
            </p>
            <p className=" text-lg leading-8 text-gray-300">
              Worry not. We have the scholarship track.
            </p>
            <p className=" text-lg leading-8 text-gray-300">Tahapan</p>
            <ul className="mt-5 list-inside">
              {scholarshipCopy.steps.map((step, index) => (
                <li key={`step-${index}`}>
                  {step.number}. {step.text}
                </li>
              ))}
            </ul>
            <p>
              Siapkan portfolio mu belajar data selama ini dan silahkan tuliskan{" "}
              <span className="italic">letter of motivation</span>.
            </p>
            <div className="flex items-center gap-4">
              <p className="items-center text-lg">Siap mendaftar? </p>
              <Link href="https://tally.so/r/woybae" target="_blank">
                <button className="rounded-md bg-primary px-4 py-3 font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                  Isi Form
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
