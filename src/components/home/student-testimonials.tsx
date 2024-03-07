"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    image: "/assets/images/testimonials/fix-testimonials-albiyan-abdika.png",
    quote:
      "I learned a lot from PartnaLearn before i really enter the Data Engineering World. Back when i was an entry-level Data Engineer, i really need to understand how the tools can help my day-to-day job. PartnaLearn practical camp was an answer. I became not overwhelmed with the tools, grasping the strong fundamentals, meanwhile solving problems with efficiency.",
    name: "Albiyan Abdika",
    title: "Data Warehouse Engineer - GoTo Financial",
    linkedin: "https://www.linkedin.com/in/abdikaalbiyan/",
  },
  {
    image: "/assets/images/testimonials/fix-testimonials-jomen-pardede.png",
    quote:
      "Out of the box! While another bootcamp just cover the fundamentals, PartnaLearn propose more challenging practice cases and curriculum, in order to build an exceptional portfolio. And the mentoring session is so intense for me, it allows me to know more about what is my mistake on my task, and how can I fix them. Keep on fire, PartnaLearn!",
    name: "Jomen Pardede",
    title: "BI Engineer - Evermos",
    linkedin: "https://www.linkedin.com/in/jomen-pardede/",
  },
  {
    image: "/assets/images/testimonials/fix-testimonials-ricky.png",
    quote:
      "Keren banget, pushing myself to my limit, banyak belajar tentang hal-hal baru terkait Data Engineering yang sebelumnya belum dipelajari. Materinya selalu relate dan relevan dengan current data engineering requirements. Mentornya hebat dan ahli serta peserta selalu didorong untuk kolaborasi aktif dalam showcase karyanya sebagai portfolio. A good place to enter the Data Engineering World !",
    name: "Ricky Nauvaldy",
    title: "Data Engineer - Ocado Retail UK",
    linkedin: "https://www.linkedin.com/in/rickynauvaldy/",
  },
];
