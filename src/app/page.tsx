import { ProgramList } from "@/components/home/program-list";
import HomeHero from "@/components/home/hero";
import { StudentTestimonials } from "@/components/home/student-testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:py-8  space-y-8 lg:space-y-24 p-4 lg: py-0">
      <section>
        <HomeHero />
      </section>
      <section>
        <ProgramList />
      </section>
      <section>
        <StudentTestimonials />
      </section>
    </main>
  );
}
