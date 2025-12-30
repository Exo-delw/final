export function WhoWeAre() {
  return (
    <section className="relative flex flex-col items-center lg:items-start justify-center py-6 px-4 lg:px-20 bg-background">

      <div className="mb-4 max-w-3xl text-center lg:text-left font-semibold leading-snug">
        <h1 className="text-3xl sm:text-4xl md:text-5xl">
          A{" "}
          <span className="bg-linear-to-r from-[#AE8631] to-[#28705A] bg-clip-text text-transparent">
            Dynamic
          </span>{" "}
          and Forward Thinking Company
        </h1>
      </div>

      <div className="max-w-5xl text-center lg:text-left text-foreground/80">
        <p className="text-base sm:text-lg md:text-xl lg:text-4xl leading-relaxed">
          We support organizations operating in Ethiopia and across Africa with end-to-end business support services designed to drive efficiency, scalability, and sustainable growth.
        </p>
      </div>

    </section>
  );
}
