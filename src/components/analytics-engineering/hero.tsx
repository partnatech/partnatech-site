import { analyticsEngineeringCopy } from "@/utils/i18n/analytics-engineering";
import Image from "next/image";
import Link from "next/link";

export default function AnalyticsEngineeringHero() {
  return (
    <div className="relative isolate overflow-hidden">
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

      <div className="mx-auto max-w-7xl px-6 py-10 mt-12 flex flex-col items-center space-y-4">
        <div className="inline-flex items-center text-center rounded-full bg-indigo-400/10 px-6 py-2 text-sm font-semibold text-indigo-300 ring-1 ring-inset ring-indigo-400/30">
          {analyticsEngineeringCopy.chip}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:flex lg:px-8">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <h1 className="mt-10 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {analyticsEngineeringCopy.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {analyticsEngineeringCopy.description}
          </p>
          <div className="flex flex-wrap w-full mt-4">
            {analyticsEngineeringCopy.badges.map((badge, index) => (
              <span
                key={`badge-${index}`}
                className="items-center text-center rounded-md bg-purple-400/10 px-2 py-2 text-sm font-medium text-purple-400 ring-1 ring-inset ring-purple-400/30 mr-2 mb-2"
              >
                {badge.name}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <h4 className="mt-10 text-sm font- tracking-tight text-neutral-500 sm:text-lg line-through">
              Rp. 5.100K
            </h4>
            <h4 className="text-2xl mb-4 font-bold tracking-tight text-white sm:text-3xl">
              Rp. 4.490K
            </h4>
            <span className="flex items-center">
              <svg
                className="h-2 w-2 fill-red-500 animate-pulse mr-4"
                viewBox="0 0 6 6"
                aria-hidden="true"
              >
                <circle cx={3} cy={3} r={3} />
              </svg>{" "}
              Early Bird promo until 20 March 2024
            </span>
            <Link href="https://tally.so/r/3y6MY8" target="_blank">
              <button className="rounded-md mt-4 bg-indigo-500 px-4 py-3 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                {analyticsEngineeringCopy.cta}
              </button>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex lg:flex-1 max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-16 lg:max-w-none xl:ml-32">
          <div className="aspect-square w-full rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 relative overflow-hidden">
            <Image
              src="/assets/images/hero-image.jpg"
              alt="Hero Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
