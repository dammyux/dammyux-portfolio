import { HeroSection } from "@/components/home/HeroSection";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";
import { AlwaysHereSection } from "@/components/home/AlwaysHereSection";
import { DisciplinesSection } from "@/components/home/DisciplinesSection";
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
      <TestimonialMarquee />
      <AboutPreviewSection />
      <FinalCTASection />
    </>
  );
}
