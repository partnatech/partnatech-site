import { cn } from "@/utils/cn";
import React from "react";

import { scholarshipCopy } from "@/utils/i18n/scholarship";
import Link from "next/link";

import { CheckIcon } from "@heroicons/react/20/solid";

const steps = [
  { id: "Step 1", name: "Isi form", href: "#", status: "current" },
  { id: "Step 2", name: "Seleksi Portfolio dan Profile", href: "#", status: "current" },
  { id: "Step 4", name: "Tandatangan Kontrak", href: "#", status: "current" },
  { id: "Step 5", name: "Pembayaran Deposit Fee", href: "#", status: "current" },
  { id: "Step 6", name: "Onboarding", href: "#", status: "current" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Page() {
  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-12">
        <h1 className="text-center font-bold text-2xl md:text-4xl">Programs - Scholarship</h1>

        <div className="py-6 gap-8 grid grid-cols-1 lg:grid-cols-2 px-4">
          <div
            className={cn(
              "md:w-full w-[90%] shrink-0 flex flex-col md:flex-row bg-gray-400/10 p-4 md:p-8 rounded-lg font-medium text-gray-300 ring-1 ring-inset ring-gray-400/20"
            )}
          >
            <div className="flex-[2] md:px-6 flex flex-col pt-5 md:pt-0">
              <div className="mb-4">
                <p className="font-semibold text-lg md:text-lg lg:text-2xl text-white">
                  Persyaratan
                </p>
                <ul className="list-disc list-inside mt-5">
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
            <ul className="list-inside mt-5">
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

            <nav aria-label="Progress">
              <ol role="list" className="overflow-hidden">
                {steps.map((step, stepIdx) => (
                  <li
                    key={step.name}
                    className={classNames(stepIdx !== steps.length - 1 ? "pb-10" : "", "relative")}
                  >
                    {step.status === "complete" ? (
                      <>
                        {stepIdx !== steps.length - 1 ? (
                          <div
                            className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600"
                            aria-hidden="true"
                          />
                        ) : null}
                        <a href={step.href} className="group relative flex items-start">
                          <span className="flex h-9 items-center">
                            <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                              <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
                            </span>
                          </span>
                          <span className="ml-4 flex min-w-0 flex-col">
                            <span className="text-sm font-medium">{step.name}</span>
                            <span className="text-sm text-gray-500">{step.description}</span>
                          </span>
                        </a>
                      </>
                    ) : step.status === "current" ? (
                      <>
                        {stepIdx !== steps.length - 1 ? (
                          <div
                            className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                            aria-hidden="true"
                          />
                        ) : null}
                        <a
                          href={step.href}
                          className="group relative flex items-start"
                          aria-current="step"
                        >
                          <span className="flex h-9 items-center" aria-hidden="true">
                            <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                              <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                            </span>
                          </span>
                          <span className="ml-4 flex min-w-0 flex-col">
                            <span className="text-sm font-medium text-indigo-600">{step.name}</span>
                            <span className="text-sm text-gray-500">{step.description}</span>
                          </span>
                        </a>
                      </>
                    ) : (
                      <>
                        {stepIdx !== steps.length - 1 ? (
                          <div
                            className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                            aria-hidden="true"
                          />
                        ) : null}
                        <a href={step.href} className="group relative flex items-start">
                          <span className="flex h-9 items-center" aria-hidden="true">
                            <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                              <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                            </span>
                          </span>
                          <span className="ml-4 flex min-w-0 flex-col">
                            <span className="text-sm font-medium text-gray-500">{step.name}</span>
                            <span className="text-sm text-gray-500">{step.description}</span>
                          </span>
                        </a>
                      </>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <div className="flex items-center gap-4">
              <p className="text-lg items-center">Siap mendaftar? </p>
              <Link href="https://tally.so/r/woybae" target="_blank">
                <button className="rounded-md bg-indigo-500 px-4 py-3 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
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
