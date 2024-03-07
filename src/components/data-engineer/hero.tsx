import { dataEngineerCopy } from "@/utils/i18n/data-engineer";
import Image from "next/image";
import Link from "next/link";

export default function DataEngineerHero() {
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
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">{dataEngineerCopy.title}</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">{dataEngineerCopy.description}</p>
          <div className="flex flex-wrap w-full mt-4">
            {dataEngineerCopy.badges.map((badge, index) => (
              <span
                key={`badge-${index}`}
                className="items-center text-center rounded-md bg-purple-400/10 px-2 py-2 text-sm font-medium text-purple-400 ring-1 ring-inset ring-purple-400/30 mr-2 mb-2"
              >
                {badge.name}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <h4 className="mt-10 text-2xl font-bold tracking-tight text-white sm:text-3xl">Rp. 4.900K</h4>
            <Link href="https://forms.gle/EhAy9X4kps3fEh598" target="_blank">
              <button className="rounded-md mt-4 bg-indigo-500 px-4 py-3 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                {dataEngineerCopy.cta}
              </button>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none ">
            <Image
              src="/assets/images/hero-image.jpg"
              alt="Hero Image"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
