import { Programs } from "@/components/home/programs";
import { ClientAndPartner } from "@/components/home/client-and-partner";
import HomeHero from "@/components/home/hero";
import { StudentTestimonials } from "@/components/home/student-testimonials";

export default function Page() {
  return (
    <div className="space-y-8 p-4 lg:space-y-32">
      <HomeHero />
      <ClientAndPartner />
      <Programs />
      <StudentTestimonials />
    </div>
  );
}
