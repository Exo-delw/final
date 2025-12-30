export function OurMission() {
  return (
    <section className="relative flex flex-col lg:flex-row gap-10 items-center lg:items-start py-6 px-4 lg:px-16 bg-background">
      
      <div className="w-full lg:w-1/4 mt-0 lg:mt-10">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Our{" "}
          <span className="bg-linear-to-r from-[#AE8631] to-[#28705A] bg-clip-text text-transparent">
            Mission
          </span>
        </h1>
      </div>

      <div className="w-full lg:w-3/4 max-w-6xl text-center lg:text-left font-poppins text-foreground/60">
        <p className="text-base sm:text-lg md:text-xl lg:text-4xl leading-relaxed">
          To deliver integrated, reliable, and innovative business solutions that enable organizations, investors, and international partners to operate efficiently, sustainably, and confidently in Ethiopia and across Africa.
        </p>
      </div>

    </section>
  );
}
