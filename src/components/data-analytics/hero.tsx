import { dataAnalyticsCopy } from "@/utils/i18n/data-analytics";
import Image from "next/image";
import Link from "next/link";

export default function DataAnalyticsHero() {
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

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center space-y-4 px-6 py-10">
        <div className="inline-flex items-center rounded-full bg-secondary/10 px-6 py-2 text-center text-sm font-semibold text-secondary ring-1 ring-inset ring-secondary/30">
          {dataAnalyticsCopy.chip}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:flex lg:px-8">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <h2 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {dataAnalyticsCopy.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {dataAnalyticsCopy.description}
          </p>
          <div className="mt-4 flex w-full flex-wrap">
            {dataAnalyticsCopy.badges.map((badge, index) => (
              <span
                key={`badge-${index}`}
                className="mb-2 mr-2 items-center rounded-md bg-primary-900/10 px-2 py-2 text-center text-sm font-medium text-primary-300 ring-1 ring-inset ring-primary-700/30"
              >
                {badge.name}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <h4 className="mb-4 text-2xl font-bold tracking-tight text-secondary sm:text-3xl">
              Rp. 2.900K
            </h4>

            <Link href="https://tally.so/r/nr65Po" target="_blank">
              <button className="mt-4 rounded-md bg-primary px-4 py-3 font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                {dataAnalyticsCopy.cta}
              </button>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-16 lg:max-w-none lg:flex-1 xl:ml-32">
          <div className="relative aspect-square w-full overflow-hidden rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10">
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
