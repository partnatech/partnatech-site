import React from "react";
import { homeCopy } from "@/utils/i18n/home";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl w-full pt-16">
      <div className="text-start lg:text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
          PartnaLearn - the real{" "}
          <span className="bg-gradient-to-r from-lime-400/70 to-lime-400/40 border-l-4 border-solid border-secondary px-1 text-seco">
            upskilling
          </span>{" "}
          platform
        </h1>
        <p className="mt-6 text-lg lg:leading-8 text-gray-300">{homeCopy.description}</p>
      </div>
    </div>
  );
}
