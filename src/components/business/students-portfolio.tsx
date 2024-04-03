import React from "react";
import Link from "next/link";
import Image from "next/image";

export const StudentsPortfolio = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <h2 className="mt-10 text-center text-2xl tracking-tight text-white sm:text-4xl">
        Student Portfolio
      </h2>
      <div className="mx-auto mt-10 grid  max-w-xs grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3 lg:gap-16 lg:px-8">
        <div className="rounded-md bg-gray-400/10 p-4 font-medium text-gray-300 ring-1 ring-inset ring-gray-400/20">
          <div className="flex min-h-[240px] flex-col justify-between space-y-8">
            <div className="space-y-4">
              <Image
                className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                src={"/assets/images/hero-talents.png"}
                alt=""
                width="560"
                height="240"
              />
              <div>
                <p className="font-bold">Building End-to-end Data Pipeline</p>
                <p>Created by: Rahadian Rizki</p>
              </div>
            </div>

            <div>
              <Link href="">
                <div className="flex items-center justify-center">
                  <button className="w-full rounded-md bg-primary px-4 py-3 font-semibold  text-white shadow-sm hover:bg-teal-500">
                    Show Project
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
