import React from "react";
import { homeCopy } from "@/utils/i18n/home";

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-0">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
          Announcing our next batch.{" "}
          <a href="#" className="font-semibold text-white">
            <span className="absolute inset-0" aria-hidden="true" />
            Read more <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{homeCopy.headline}</h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">{homeCopy.description}</p>
      </div>
    </div>
  );
}
