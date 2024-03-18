"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { homeCopy } from "@/utils/i18n/home";

export function StudentTestimonials() {
  return (
    <>
      <h2 className="text-3xl text-center">What our alumni says:</h2>
      <div className="mb-32 h-[25rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={homeCopy.testimonials} direction="right" speed="slow" />
      </div>
    </>
  );
}
