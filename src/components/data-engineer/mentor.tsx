import { dataEngineerCopy } from "@/utils/i18n/data-engineer";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Adam Widi, Data Engineer - OTA Company
// LinkedIn : https://www.linkedin.com/in/adamwdb/

// Abel Gideon Silaen, Mid Data Engineer - Bank Jasa Jakarta
// LinkedIn : https://www.linkedin.com/in/abelgideonsilaen/

// Rio Dwi Putra Perkasa, Data Engineer - Tech Company
// LinkedIn : https://www.linkedin.com/in/riodpp/

const mentors = [
  {
    name: "Adam Widi",
    job: "Data Engineer - OTA Company",
    linkedin: "https://www.linkedin.com/in/adamwdb/",
    image: "/assets/images/fix-mentor-adam.png",
  },
  {
    name: " Abel Gideon Silaen",
    job: "Mid Data Engineer - Bank Jasa Jakarta",
    linkedin: "https://www.linkedin.com/in/abelgideonsilaen/",
    image: "/assets/images/fix-tutor-abelgideon.png",
  },
  {
    name: "Rio Dwi Putra Perkasa",
    job: "Data Engineer - Tech Company",
    linkedin: "https://www.linkedin.com/in/riodpp/",
    image: "/assets/images/fix-tutor-riodwiputra.png",
  },
];

const DataEngineerMentor = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <h2 className="mt-10 text-2xl font-bold tracking-tight text-white sm:text-4xl text-center">
        {dataEngineerCopy.mentorTitle}
      </h2>

      <div className="mx-auto max-w-7xl lg:px-8 px-5 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
          {mentors.map((mentor, index) => (
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
