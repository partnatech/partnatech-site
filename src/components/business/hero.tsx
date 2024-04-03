import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeroHireTalents = () => {
  return (
    <div className="relative isolate overflow-hidden">
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

      <div className="mx-auto flex max-w-7xl flex-col items-center space-y-4 px-6"></div>
      <div className="mx-auto mt-12 max-w-7xl px-6 pb-24 sm:pb-32 lg:flex lg:px-8">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-2xl lg:pt-8">
          <p className="mt-10 text-5xl font-bold leading-relaxed text-white">
            Hire The Next Generation of Data Talents
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            By hiring from partnatech, you&apos;re not just filling a vacancy, you&apos;re investing
            in your company&apos;s future in the data-driven world.
          </p>

          <div className="mt-10">
            <Link href="" target="_blank">
              <button className="mt-4 cursor-not-allowed rounded-md bg-primary px-4 py-3 font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                Become Our Partner
              </button>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 hidden max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-16 lg:flex lg:max-w-none lg:flex-1 xl:ml-32">
          <div className="relative aspect-square w-full overflow-hidden rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10">
            <Image
              src="/assets/images/hero-talents.png"
              alt="Hero Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
