import { BootcampTrack } from "@/components/home/bootcamp-track";
import HomeHero from "@/components/home/hero";
import { StudentTestimonials } from "@/components/home/student-testimonials";

export default function Home() {
  return (
    <div className="lg:space-y-12 space-y-8 p-4">
      <HomeHero />
      <BootcampTrack />
      <StudentTestimonials />
    </div>
  );
}
