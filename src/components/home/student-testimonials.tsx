"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { homeCopy } from "@/utils/i18n/home";

export function StudentTestimonials() {
  return (
    <div>
      <h2 className="text-center text-3xl">What our alumni says:</h2>
      <div className="dark:bg-grid-white/[0.05] relative mb-32 flex h-[25rem] flex-col items-center justify-center overflow-hidden rounded-md bg-black antialiased dark:bg-black">
        <InfiniteMovingCards
          items={homeCopy.testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}
