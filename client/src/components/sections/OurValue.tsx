import { Card } from "../layout/Card";
import { Values } from "@/constants";

export function OurValue() {
  return (
    <section className="bg-muted py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-12">
        

        <h1 className="text-center text-3xl sm:text-5xl lg:text-7xl font-medium">
          What We <span className="text-primary/80">Value</span>
        </h1>

        
        <div
          className="
            grid grid-cols-2 gap-6 w-full
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {Values.map((value, index) => (
            <div
              key={index}
              className="
                flex justify-center
                last:col-span-2 last:justify-self-center
                sm:last:col-span-1
              "
            >
              <Card
                variant="value"
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
