import { ScholarshipHero } from "@/components/scholarship/hero";
import { ScholarshipRequirements } from "@/components/scholarship/requirement";
import { ScholarshipStep } from "@/components/scholarship/step";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative isolate  overflow-hidden">
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
      <div className="mx-auto max-w-7xl space-y-12">
        <ScholarshipHero />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <ScholarshipRequirements />
          <ScholarshipStep />
        </div>
        <div className="flex items-center justify-center">
          <Link href="https://tally.so/r/woybae" target="_blank">
            <button className="rounded-md bg-primary px-4 py-3 font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
