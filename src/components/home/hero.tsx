import React from "react";
import { homeCopy } from "@/utils/i18n/home";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl w-full py-16">
      <div className="text-start lg:text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
          {homeCopy.headline}
        </h1>
        <p className="mt-6 text-lg lg:leading-8 text-gray-300">{homeCopy.description}</p>
      </div>
    </div>
  );
}
