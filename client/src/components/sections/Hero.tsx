import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-6 md:py-18">
      <div className="relative z-10 flex flex-col items-center gap-8 px-4 py-6">
        <div className="flex flex-col w-full  items-center justify-center gap-4">
          <h1 className="max-w-5xl font-semibold text-6xl text-center mb-[22px]">
  Empowering Growth.
</h1>

<h2 className="text-primary-light font-semibold text-6xl text-center whitespace-nowrap">
  Through Integrated Business Solutions
</h2>





          <p className="w-full max-w-4xl mx-auto mt-[22px] font-['Lora', Helvetica] font-medium text-foreground/80 text-2xl text-center">
  A business solution hub in Ethiopia delivering outsourcing,
  technology, consulting, marketing, events, and incubation services
  for organizations, investors, and international partners.
</p>

        </div>

        <div className="inline-flex items-center gap-5">
          <Button variant="default" className=" gap-2.5 px-14 py-7 rounded-xl ">
            <p className=" font-medium  text-lg ">Get in Touch</p>
          </Button>

          <Button variant="outline" className=" gap-2.5 px-6 py-7 rounded-xl ">
            <p className=" font-medium  text-lg ">Explore Our Services</p>
          </Button>
        </div>
      </div>
    </section>
  );
}
