import { Card } from "../layout/Card";
import { Values } from "@/constants";

export function OurValue() {
  return (
    <section className="flex flex-col items-center justify-center gap-12 bg-muted pt-30 pb-30">
      <div className="text-7xl font-medium mb-10">
        <h1>
          What We <span className="text-primary/80">Value</span>
        </h1>
      </div>

      <div className="flex flex-wrap items-center mx-auto gap-18 justify-between">
        {Values.map((value, index) => (
          <Card
            key={index}
            variant="value"
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </section>
  );
}

