"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  name: string;
  description: string;
  link: string;
}
export function ProgramCard({ name, description, link }: ProgramCardProps) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 dark:bg-zinc-900">
        <div className="space-y-8 min-h-[300px]">
          <p className="lg:text-2xl text-center font-semibold text-base text-white mt-4 mb-2 dark:text-neutral-200">{name}</p>
          <p className="text-sm text-white dark:text-neutral-400">{description}</p>
          <div>
            <Link href={`/${link}`}>
              <div className="flex items-center justify-center">
                <p className="text-center underline">Lihat Selengkapnya</p>
                <ArrowRight size={15} />
              </div>
            </Link>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}
