import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const events = [
  {
    image: "/assets/images/events/airflow-dbt-integration.png",
    title: "airflow-dbt-integration",
    mentorName: "Ahmad Shohibus Sulthoni",
    mentorCompany: "Tech Company",
    mentorJob: "Senior Data Analyst",
    time: "March 12th - 14th, 8:30pm",
    link: "https://bit.ly/ws1-partnalearn",
    type: "workshop series 1",
    breakdown: [
      {
        title: "airflow-dbt-integration",
        items: [
          "Day 1: Getting Started with Airflow",
          "Day 2: Data Build Tool (dbt) Introduction",
          "Day 3 : Orchestrate your transformation workflow with Airflow",
        ],
      },
    ],
  },
];

export default function Page() {
  return (
    <div className="relative isolate overflow-hidden min-h-screen">
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
      <div className="max-w-7xl mx-auto mt-12">
        <h1 className="text-center font-bold text-2xl md:text-4xl">Our Events and Workshops</h1>

        <div
          className={cn("flex items-center overflow-x-scroll scroll-custom py-6", {
            "justify-center": events.length === 1,
          })}
        >
          {events.map((event, index) => (
            <div
              key={`event-${index}`}
              className={cn(
                "md:w-4/5 w-[90%] shrink-0 flex flex-col md:flex-row bg-gray-400/10 p-4 md:p-8 rounded-lg font-medium text-gray-300 ring-1 ring-inset ring-gray-400/20",
                {
                  "mr-4": events.length > 1,
                }
              )}
            >
              <picture className="aspect-square flex-1 relative">
                <Image fill src={event.image} className="object-cover rounded-md" alt={event.title} />
              </picture>

              <div className="flex-[2] md:px-6 flex flex-col pt-5 md:pt-0">
                <div className="mb-4">
                  <p className="font-semibold text-base  md:text-lg text-white">{event.title}</p>
                  <span className="inline-flex items-center rounded-md bg-purple-400/10 px-2 py-1 text-sm font-medium text-purple-400 ring-1 ring-inset ring-purple-400/30">
                    {event.type}
                  </span>
                </div>
                <div className="font-semibold text-white my-4 md:my-0">
                  <p>by: {event.mentorName}</p>
                  <p>
                    {event.mentorJob} at {event.mentorCompany}
                  </p>
                </div>
                <Link href={event.link} className="my-4">
                  {event.link.replace("https://", "")}
                </Link>
                {event.breakdown.map((breakdown, iBreakdown) => (
                  <div key={`event-${index}-breakdown-${iBreakdown}`}>
                    <p className="text-white">{breakdown.title}</p>
                    <ul>
                      {breakdown.items.map((item, iItem) => (
                        <li key={`event-${index}-breakdown-${iBreakdown}-item-${iItem}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
