import { HeroSection } from '@/components/home/HeroSection';
import { TrustedBrandsSection } from '@/components/home/TrustedBrandsSection';
import { SelectedWorkSection } from '@/components/home/SelectedWorkSection';
import { DisciplinesSection } from '@/components/home/DisciplinesSection';
import { AlwaysHereSection } from '@/components/home/AlwaysHereSection';
import { InteractivePricingSection } from '@/components/home/InteractivePricingSection';
import { DoubleSliderTestimonials } from '@/components/home/DoubleSliderTestimonials';
import { ShortAboutSection } from '@/components/home/ShortAboutSection';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBrandsSection />
      <SelectedWorkSection />
      <DisciplinesSection />
      <AlwaysHereSection />
      <InteractivePricingSection />
      <DoubleSliderTestimonials />
      <ShortAboutSection />
      <FinalCtaSection />
    </>
  );
}
