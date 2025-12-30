import { Services } from "@/constants";
import { Card } from "../layout/Card";

export function OurServices() {
  return (
    <section>
    
      <div className="p-18 pb-25">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center text-primary font-bold">
          Our Services
        </h1>
      </div>

    
      <div
        className="
          grid grid-cols-2 gap-4 px-4
          sm:grid-cols-2 sm:gap-5
          md:grid-cols-2 md:px-8
          lg:flex lg:flex-wrap lg:justify-center lg:items-center
          lg:gap-x-14 lg:gap-y-5 lg:px-18
        "
      >
        {Services.map((service, index) => (
          <div
            key={index}
            className="
              w-full flex justify-center
              lg:w-auto
            "
          >
            <Card
              variant="blog"
              image={service.icon}
              title={service.title}
              description={service.description}
              href={`/services/${service.slug}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
