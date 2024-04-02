import { dataEngineerCopy } from "@/utils/i18n/data-engineering";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DataEngineerMentor = () => {
  return (
    <div className="relative isolate overflow-hidden pb-32">
      <h2 className="text-center text-2xl font-bold tracking-tight text-white sm:text-4xl">
        {dataEngineerCopy.mentorTitle}
      </h2>

      <div className="mx-auto mt-10 max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10">
          {dataEngineerCopy.mentors.map((mentor, index) => (
            <div
              key={`mentor-${index}`}
              className="flex items-center rounded-md bg-gray-400/10 p-4 font-medium text-gray-300 ring-1 ring-inset ring-gray-400/20"
            >
              <Image
                src={mentor.image}
                height={500}
                width={500}
                className="h-24 w-24 rounded-full border-neutral-300"
                alt={mentor.name}
              />

              <div className="">
                <p className="text-lg font-semibold">{mentor.name}</p>
                <p className="my-2 text-xs text-neutral-400">{mentor.job}</p>
                <Link href={mentor.linkedin} target="_blank">
                  <LinkedInLogoIcon className="text-blue-600" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataEngineerMentor;
