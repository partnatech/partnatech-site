import React from "react";
import { homeCopy } from "@/utils/i18n/home";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

export function StudentTestimonials() {
  return (
    <section className="block">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <h2 className="mx-auto mb-8 max-w-3xl text-center text-3xl font-bold md:mb-12 lg:mb-16">
          What our alumni says:
        </h2>

        <div className="mb-5 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:mb-8">
          {homeCopy.testimonials.map((testimonial, index) => {
            return (
              <div
                key={`testimonial-${index}`}
                className="grid grid-cols-1 gap-6 rounded-md bg-gray-400/10 p-8 text-zinc-400 ring-1 ring-inset ring-gray-400/20 md:p-10"
              >
                <div className="flex">
                  <StarIcon className="h-7 w-7 text-secondary" />
                  <StarIcon className="h-7 w-7 text-secondary" />
                  <StarIcon className="h-7 w-7 text-secondary" />
                  <StarIcon className="h-7 w-7 text-secondary" />
                  <StarIcon className="h-7 w-7 text-secondary" />
                </div>
                <div className="text-gray-400">{testimonial.quote}</div>
                <div className="flex flex-row items-start">
                  <Image
                    src={testimonial.image}
                    alt=""
                    className="mr-4 inline-block h-16 w-16 object-cover"
                    height={50}
                    width={50}
                  />
                  <div className="flex flex-col items-start">
                    <h6 className="text-base font-bold text-white">{testimonial.name}</h6>
                    <p className="text-xs text-white sm:text-xs">{testimonial.title}</p>
                    <Link href={testimonial.linkedin} target="_blank">
                      <LinkedInLogoIcon className="text-blue-600" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
