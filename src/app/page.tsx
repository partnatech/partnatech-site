import { BootcampTrack } from "@/components/home/bootcamp-track";
import { ClientAndPartner } from "@/components/home/client-and-partner";
import HomeHero from "@/components/home/hero";
import { StudentTestimonials } from "@/components/home/student-testimonials";

export default function Page() {
  return (
    <div className="lg:space-y-32 space-y-16 p-4">
      <HomeHero />
      <ClientAndPartner />
      <BootcampTrack />
      <StudentTestimonials />
    </div>
  );
}
