import React from "react";
import { cn } from "@/utils/cn";
import { scholarshipCopy } from "@/utils/i18n/scholarship";
import Link from "next/link";

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
      <div className="max-w-4xl mx-auto mt-12">
        <div className="text-start font-bold text-2xl md:text-4xl space-y-8 w-10/12">
          <h1 className="">
            We are developing a learning portal that can help you succeed in the technology field.
          </h1>
          <h1>Stay tuned.</h1>
        </div>
        <p className="mt-6 text-lg lg:leading-8 text-gray-300">
          Join waiting list and access our free resources below :
        </p>
        <div className="flex mt-3 gap-8">
          <Link href="https://tally.so/r/3xpX0k" target="_blank">
            <button className="rounded-md bg-indigo-500 px-4 py-3 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
              Join Waiting List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
