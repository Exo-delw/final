import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-6 md:py-18">
      <div className="relative z-10 flex flex-col items-center gap-8 px-4 py-6">
        <div className="flex flex-col w-full items-center justify-center gap-4">
          
          <h1 className="max-w-5xl font-semibold text-center mb-[22px] leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Empowering Growth.
          </h1>

          <h2 className="font-semibold text-center text-primary-light leading-tight text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            Through Integrated Business Solutions
          </h2>

          <p className="w-full max-w-4xl mx-auto mt-[22px] font-['Lora', Helvetica] font-medium text-foreground/80 text-base sm:text-lg md:text-xl lg:text-2xl text-center">
            A business solution hub in Ethiopia delivering outsourcing,
            technology, consulting, marketing, events, and incubation services
            for organizations, investors, and international partners.
          </p>

        </div>

        <div className="inline-flex flex-wrap items-center justify-center gap-5">
          <Button variant="default" className="gap-2.5 px-10 py-6 rounded-xl">
            <p className="font-medium text-base sm:text-lg">Get in Touch</p>
          </Button>

          <Button variant="outline" className="gap-2.5 px-8 py-6 rounded-xl">
            <p className="font-medium text-base sm:text-lg">
              Explore Our Services
            </p>
          </Button>
        </div>
      </div>
    </section>
  );
}
