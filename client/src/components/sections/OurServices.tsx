import { Services } from "@/constants";
import { Card } from "../layout/Card";

export function OurServices() {
  return (
    <section>
      <div className="p-18 pb-25">
        <h1 className="text-6xl text-center text-primary font-bold">
          Our Services
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-5 px-18">
        {Services.map((service, index) => (
          <Card
            key={index}
            variant="blog"
            image={service.icon}
            title={service.title}
            description={service.description}
            href={`/services/${service.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
