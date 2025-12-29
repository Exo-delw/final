import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { OurVission } from "@/components/sections/OurVision";
import { OurMission } from "@/components/sections/OurMission";
import { OurValue } from "@/components/sections/OurValue";
import { OurServices } from "@/components/sections/OurServices";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { OurDifference } from "@/components/sections/OurDifference";
import {TestimonialsSection} from "@/components/sections/Testimonials";
export default function HomePage() {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <OurVission /> 
      <OurMission />
      <OurValue />
      <OurServices />
      <TrustedBy />
      <TestimonialsSection />
      <OurDifference />
    </div>
  );
}