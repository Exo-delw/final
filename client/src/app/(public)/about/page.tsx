import { SITE_CONFIG } from "@/constants";
import { OurValue } from "@/components/sections/OurValue";
import { OurMission } from "@/components/sections/OurMission";
import { OurVission } from "@/components/sections/OurVision";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { OurDifference } from "@/components/sections/OurDifference";


export default function AboutPage() {
  return (
    <>
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-[#064028] mb-6">
            About {SITE_CONFIG.name}
          </h1>
          <p className="text-lg text-[#064028] leading-relaxed">
            Stenar Trading PLC is a premier international trading company
            dedicated to bridging the gap between global markets and local
            industries. Established with a vision of excellence, we facilitate
            seamless trade operations, ensuring quality, reliability, and
            efficiency.
          </p>
        </div>

       
      </div>

      <OurVission />
      <OurMission />

      <OurValue />
      <OurDifference />
      <TrustedBy />
    </>
  );
}
