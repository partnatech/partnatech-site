import { ProgramList } from "@/components/home/program-list";
import HomeHero from "@/components/home/hero";
import { InfiniteMovingCardsDemo } from "@/components/home/student-testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-8 space-y-16">
      <section>
        <HomeHero />
      </section>
      <section>
        <ProgramList />
      </section>
      <section>
        <h1 className="text-3xl text-center mb-4">Student Testimonials</h1>
        <InfiniteMovingCardsDemo />
      </section>
    </main>
  );
}
