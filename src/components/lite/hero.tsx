import { liteCopy } from "@/utils/i18n/lite";
import { CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const LiteProgramHero = () => {
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

      <div className="mx-auto mt-12 px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-center text-2xl font-bold md:text-4xl">
          Introducing <span className="text-secondary">LiteProgram</span>
        </h3>

        <div className="mt-12 space-y-4">
          <h3 className="text-2xl font-bold">
            What is <span className="text-secondary">LiteProgram </span>?
          </h3>
          <p>
            <span className="font-bold text-secondary">LiteProgram</span> by PartnaLearn dirancang
            untuk individu yang ingin mengembangkan keterampilan mereka secara mandiri, namun tetap
            mendapatkan dukungan dan bimbingan dari seorang mentor yang berpengalaman untuk
            mengerjakan practice case. Dalam program ini, peserta akan memiliki akses ke berbagai
            sumber daya pembelajaran, termasuk materi belajar mandiri, latihan praktik, dan studi
            kasus untuk dikerjakan.
          </p>
          <p>
            Salah satu fitur utama dari program ini adalah aktivitas mentoring yang disediakan untuk
            membantu peserta dalam memahami dan mengerjakan latihan praktik serta studi kasus.
            Mentor akan membimbing peserta melalui sesi-sesi mentoring reguler, di mana mereka akan
            memberikan arahan, umpan balik, dan dukungan untuk membantu peserta mengatasi tantangan
            yang mereka hadapi selama proses pembelajaran.
          </p>
          <p>
            Tujuan utama dari program bootcamp self learning ini adalah untuk memberikan peserta
            pengalaman pembelajaran yang mendalam dan efektif, sambil memberikan fleksibilitas dan
            kemandirian yang mereka butuhkan untuk mengembangkan keterampilan di bidang data dan
            teknologi.
          </p>
        </div>

        <div className="my-8 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-32">
          {liteCopy.benefits.map((benefit, index) => (
            <div key={`lite-benefit-${index}`} className="flex flex-col items-center">
              <div className="h-[70px] lg:h-[90px]">
                <Image
                  src={benefit.image}
                  alt={benefit.image}
                  height={70}
                  width={70}
                  className="h-30 w-30"
                />
              </div>

              <p className="text-center">{benefit.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-xl">Program yang tersedia</p>
        <div className="grid grid-cols-1 gap-8 py-6 lg:grid-cols-2 lg:gap-4">
          {liteCopy.litePrograms.map((program, index) => {
            return (
              <div
                key={`liteProgram-${index}`}
                className="mx-auto w-[320px] rounded-md bg-gray-400/10 px-8 py-8 font-medium text-gray-300 ring-1 ring-inset ring-gray-400/20 lg:w-[400px]"
              >
                <div className="flex min-h-[240px] flex-col justify-between space-y-8">
                  <div>
                    <h2 className="mb-2 mt-4 text-center text-base font-semibold text-secondary dark:text-neutral-200 lg:text-2xl">
                      {program.name}
                    </h2>
                    <ul className="flex list-inside list-disc justify-center gap-3 text-sm text-gray-400">
                      <li>Self Learning+Mentoring</li>
                      <li>{program.duration}</li>
                    </ul>
                  </div>

                  <div>
                    {liteCopy.benefitsCard.map((benefit, index) => {
                      return (
                        <div className="flex items-center gap-2" key={`benefit-program-${index}`}>
                          <CheckCircle2 size={16} color="green" />
                          <p className="font-base text-sm">{benefit.item}</p>
                        </div>
                      );
                    })}
                    <div className="flex items-center gap-2">
                      <XCircle size={16} color="red" />
                      <p className="font-base text-sm">Live Class</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex">
                      <p className="text-xl text-neutral-500 line-through sm:text-lg">
                        Rp. {program.price}
                      </p>
                      <p className="text-xl">Rp. {program.discountedPrice}</p>
                    </div>
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

        <div className="mx-4 mb-16 mt-8 rounded-md bg-secondary-base/10 px-4 py-2  ring-1 ring-inset ring-gray-400/20 lg:mx-24">
          <div className="flex flex-col">
            <div className="mb-4 flex flex-row">
              <div className="w-1/2 lg:w-1/4">Registration Closing Date</div>
              <div className="w-1/2">
                <p>
                  : <span className="text-secondary">May 17th 2024</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2 lg:w-1/4">Kick-off:</div>
              <div className="w-1/2">
                <p>
                  : <span className="text-secondary">May 18th 2024</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
