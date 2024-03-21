import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const events = [
  {
    image: "/assets/images/events/podfast2.png",
    title: "Data Engineering 101 - Fundamentals of Data Pipeline",
    guestName: "Adam Widi Bagaskarta",
    guestCompany: "Tech Company",
    guestJob: "Data Engineer",
    hostName: "Rahadian Rizki",
    time: "March 28th, 8:30pm",
    youtube: "https://youtube.com/@partnatech",
    x: "https://x.com/rahadianrizkiii",
    type: "partnatalks series 2",
  },
  // {
  //   image: "/assets/images/events/airflow-dbt-integration.png",
  //   title: "airflow-dbt-integration",
  //   mentorName: "Ahmad Shohibus Sulthoni",
  //   mentorCompany: "Tech Company",
  //   mentorJob: "Senior Data Analyst",
  //   time: "March 12th - 14th, 8:30pm",
  //   link: "https://bit.ly/ws1-partnalearn",
  //   type: "workshop series 1",
  //   breakdown: [
  //     {
  //       title: "airflow-dbt-integration",
  //       items: [
  //         "Day 1: Getting Started with Airflow",
  //         "Day 2: Data Build Tool (dbt) Introduction",
  //         "Day 3 : Orchestrate your transformation workflow with Airflow",
  //       ],
  //     },
  //   ],
  // },
];

const pastEvents = [
  {
    image: "/assets/images/events/podfast1.png",
  },
  {
    image: "/assets/images/events/airflow-dbt-integration.png",
  },
];

export default function Page() {
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
      <div className="mx-auto mt-12 max-w-7xl">
        <h3 className="text-center text-2xl font-bold md:text-4xl">
          Our Events and Workshops
        </h3>

        <div
          className={cn(
            "scroll-custom flex items-center overflow-x-scroll py-6",
            {
              "justify-center": events.length === 1,
            },
          )}
        >
          {events.map((event, index) => (
            <div
              key={`event-${index}`}
              className={cn(
                "flex w-[90%] shrink-0 flex-col rounded-lg bg-gray-400/10 p-4 font-medium text-gray-300 ring-1 ring-inset ring-gray-400/20 md:w-4/5 md:flex-row md:p-8",
                {
                  "mr-4": events.length > 1,
                },
              )}
            >
              <picture className="relative aspect-square flex-1">
                <Image
                  fill
                  src={event.image}
                  className="rounded-md object-cover"
                  alt={event.title}
                />
              </picture>

              <div className="flex flex-[2] flex-col justify-between pt-5 md:px-6 md:pt-0">
                <div className="mb-4">
                  <p className="text-base font-semibold  text-white md:text-xl">
                    {event.title}
                  </p>
                  <span className="mt-2 inline-flex items-center rounded-md bg-primary-900/10 px-2 py-1 text-sm font-medium text-primary-300 ring-1 ring-inset ring-primary-700/30">
                    {event.type}
                  </span>
                </div>
                <div className="my-4 font-semibold text-white md:my-0">
                  <p>Guest Speaker: </p>
                  <p>{event.guestName}</p>
                  <p>
                    {event.guestJob} at {event.guestCompany}
                  </p>
                  <p className="mt-3">{event.time}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-white">Live on:</p>
                  <Link
                    href={event.youtube}
                    className="text-primary-300"
                    target="_blank"
                  >
                    {event.youtube.replace("https://", "")}
                  </Link>
                  <Link
                    href={event.x}
                    className="text-primary-300"
                    target="_blank"
                  >
                    {event.x.replace("https://", "")}
                  </Link>
                </div>

                {/* {event.breakdown?.map((breakdown, iBreakdown) => (
                  <div key={`event-${index}-breakdown-${iBreakdown}`}>
                    <p className="text-white">{breakdown.title}</p>
                    <ul>
                      {breakdown.items.map((item, iItem) => (
                        <li key={`event-${index}-breakdown-${iBreakdown}-item-${iItem}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))} */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl">
        <h3 className="text-center text-2xl font-bold md:text-4xl">
          Past Events and Workshops
        </h3>
        <div
          className={cn(
            "mx-auto mt-6 grid w-4/5 grid-cols-1 gap-8 lg:grid-cols-3",
            {
              "flex items-center justify-center": pastEvents.length === 1,
            },
          )}
        >
          {pastEvents.map((pastEvent, index) => (
            <Image
              key={`past-event-${index}`}
              width={300}
              height={300}
              src={pastEvent.image}
              className="h-[300px] w-[300px] rounded-md object-cover"
              alt={pastEvent.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
