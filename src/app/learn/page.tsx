import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden p-4">
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
        <div className="space-y-8 text-start text-2xl font-bold md:text-4xl">
          <h1>
            We are developing a learning portal that can help you succeed in the
            technology field.
          </h1>
          <h1>Stay tuned.</h1>
        </div>
        <p className="mt-6 text-lg text-gray-300 lg:leading-8">
          Join waiting list and access our free resources below :
        </p>
        <div className="mt-3 flex gap-8">
          <Link href="https://tally.so/r/3xpX0k" target="_blank">
            <button className="rounded-md bg-primary px-4 py-3 font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
              Join Waiting List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
