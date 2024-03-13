import { dataEngineerCopy } from "@/utils/i18n/data-engineering";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DataEngineerMentor = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <h2 className="mt-10 text-2xl font-bold tracking-tight text-white sm:text-4xl text-center">
        {dataEngineerCopy.mentorTitle}
      </h2>

      <div className="mx-auto max-w-7xl lg:px-8 px-5 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
          {dataEngineerCopy.mentors.map((mentor, index) => (
            <div
              key={`schedule-${index}`}
              className="rounded-md bg-gray-400/10 p-4 font-medium text-gray-300 ring-1 ring-inset ring-gray-400/20 flex items-center"
            >
              <Image
                src={mentor.image}
                height={500}
                width={500}
                className="h-24 w-24 rounded-full border-neutral-300"
                alt={mentor.name}
              />

              <div className="">
                <p className="font-semibold text-lg">{mentor.name}</p>
                <p className="text-xs text-neutral-400 my-2">{mentor.job}</p>
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
