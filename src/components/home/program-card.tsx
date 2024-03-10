"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  name: string;
  link: string;
  duration: string;
}
export function ProgramCard({ name, duration, link }: ProgramCardProps) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 dark:bg-zinc-900">
        <div className="space-y-8 min-h-[280px] flex justify-between flex-col">
          <div>
            <p className="lg:text-2xl text-center font-semibold text-base text-white mt-4 mb-2 dark:text-neutral-200">
              {name}
            </p>
            <ul className="text-sm text-gray-400 flex justify-center gap-3 list-disc list-inside">
              <li>Live Class</li>
              <li>{duration}</li>
            </ul>
          </div>
          <div className="text-center">
            <h1 className="font-semibold">Onboarding Date</h1>
            <p className="text-sm">April 17th, 2024</p>
          </div>
          <div>
            <Link href={`/${link}`}>
              <div className="flex items-center justify-center">
                <div className="rounded-md px-4 py-3 font-semibold text-white ring-2 ring-white shadow-sm flex items-center">
                  <p className="text-center hover:underline">Register Now</p>
                  <ArrowRight size={15} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}
