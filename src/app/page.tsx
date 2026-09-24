import { HeroSection } from "@/components/home/HeroSection";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";
import { AlwaysHereSection } from "@/components/home/AlwaysHereSection";
import { DisciplinesSection } from "@/components/home/DisciplinesSection";
import { PriceRevealSection } from "@/components/home/PriceRevealSection";
import { TestimonialMarquee } from "@/components/home/TestimonialMarquee";
import { AboutPreviewSection } from "@/components/home/AboutPreviewSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SelectedWorkSection />
      <AlwaysHereSection />
      <DisciplinesSection />
      <PriceRevealSection />
      <TestimonialMarquee />
      <AboutPreviewSection />
      <FinalCTASection />
    </>
  );
}
