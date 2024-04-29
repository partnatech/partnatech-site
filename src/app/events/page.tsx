import React from "react";
import Image from "next/image";
import Link from "next/link";

import qs from "qs";

import { cn } from "@/utils/cn";
import { StrapiResponse } from "@/types/strapi";
import { EventResponse } from "@/types/strapi/event";
import { API_URL } from "@/config/api-url";

async function getPastEvents() {
  const query = qs.stringify({
    populate: "*",
  });

  const res = await fetch(`${API_URL}/api/events?${query}`, {
    cache: "no-store",
  });
  const strapiResponse: StrapiResponse<EventResponse[]> = await res.json();
  return strapiResponse;
}

export default async function Page() {
  const strapiResponse = await getPastEvents();
  const listEvents = strapiResponse.data;

  const upcomingEvents = listEvents.filter((item) => item.attributes.isPast === false);

  const pastEvents = listEvents.filter((item) => item.attributes.isPast === true);

  console.log(listEvents);

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
        <h3 className="text-center text-2xl font-bold md:text-4xl">Our Events and Workshops</h3>

        <div
          className={cn("scroll-custom flex items-center overflow-x-scroll py-6", {
            "justify-center": upcomingEvents.length === 1,
          })}
        >
          {upcomingEvents.map((item, index) => (
            <div
              key={`event-${index}`}
              className={cn(
                "flex w-[90%] shrink-0 flex-col rounded-lg bg-gray-400/10 p-4 font-medium text-gray-300 ring-1 ring-inset ring-gray-400/20 md:w-4/5 md:flex-row md:p-8",
                {
                  "mr-4": upcomingEvents.length > 1,
                },
              )}
            >
              <picture className="relative aspect-square flex-1">
                <Image
                  fill
                  src={`${API_URL}${item.attributes.flyer.data.attributes.url}`}
                  className="rounded-md object-cover"
                  alt=""
                />
              </picture>

              <div className="flex flex-[2] flex-col justify-between pt-5 md:px-6 md:pt-0">
                <div className="mb-4">
                  <p className="text-base font-semibold  text-white md:text-xl">
                    {item.attributes.title}
                  </p>
                  <span className="mt-2 inline-flex items-center rounded-md bg-primary-900/20 px-2 py-1 text-sm font-medium text-primary-300 ring-1 ring-inset ring-primary-700/30">
                    {item.attributes.type}
                  </span>
                </div>
                <div className="my-4 font-semibold text-white md:my-0">
                  <p>Facilitator: </p>
                  <p>{item.attributes.facilitatorName}</p>
                  <p>
                    {item.attributes.facilitatorJob} at {item.attributes.facilitatorCompany} &
                    Mentor at PartnaLearn DE Bootcamp
                  </p>
                  <p className="mt-3">{item.attributes.time}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-white">Link:</p>
                  <Link href={item.attributes.link1} className="text-primary-300" target="_blank">
                    {item.attributes.link1.replace("https://", "")}
                  </Link>
                  <Link
                    href={item.attributes.link2 || "#"}
                    className="text-primary-300"
                    target="_blank"
                  >
                    {item.attributes.link2?.replace("https://", "")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl">
        <h3 className="text-center text-2xl font-bold md:text-4xl">Past Events and Workshops</h3>
        <div
          className={cn("mx-auto mt-6 grid w-4/5  grid-cols-1 gap-8 lg:grid-cols-3", {
            "flex items-center justify-center": pastEvents.length === 1,
          })}
        >
          {pastEvents.map((pastEvent, index) => (
            <Image
              key={`past-event-${index}`}
              width={300}
              height={300}
              src={`${API_URL}${pastEvent.attributes.flyer.data.attributes.url}`}
              className="mx-auto h-[300px] w-[300px] rounded-md object-cover"
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}
