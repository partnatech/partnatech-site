import { HeroHireTalents } from "@/components/business/hero";
import { HiringBenefits } from "@/components/business/hiring-benefits";
import { StudentsPortfolio } from "@/components/business/students-portfolio";

export default function Page() {
  return (
    <>
      <HeroHireTalents />
      <HiringBenefits />
      <StudentsPortfolio />
    </>
  );
}
