import React from "react";
import { homeCopy } from "@/utils/i18n/home";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl w-full py-8 sm:py-0 lg:py-0">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
          Announcing our next batch.{" "}
          <a href="#programs" className="font-semibold text-white">
            <span className="absolute inset-0" aria-hidden="true" />
            See Programs <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="text-start lg:text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">{homeCopy.headline}</h1>
        <p className="mt-6 text-sm lg:leading-8 text-gray-300">{homeCopy.description}</p>
      </div>
    </div>
  );
}
