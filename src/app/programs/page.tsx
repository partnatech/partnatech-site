import { ProgramList } from "@/components/home/program-list";
import HomeHero from "@/components/home/hero";
import { StudentTestimonials } from "@/components/home/student-testimonials";

export default function Home() {
  return (
    <div className="lg:space-y-12 space-y-8 p-4">
      <HomeHero />
      <ProgramList />
      <StudentTestimonials />
    </div>
  );
}
