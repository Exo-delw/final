export function OurVission() {
  return (
    <section className="relative flex flex-col lg:flex-row gap-10 items-center justify-center py-6 px-4 lg:px-16 bg-background">
      
      <div className="w-full lg:w-1/2">
        <img
          alt="stenar_office"
          src="/images/stenar_offlog.png"
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 text-foreground font-poppins max-w-5xl">
        <h2 className="text-center lg:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Our{" "}
          <span className="bg-linear-to-r from-[#AE8631] to-[#28705A] bg-clip-text text-transparent">
            Vission
          </span>
        </h2>

        <p className="mt-6 text-center lg:text-left text-base sm:text-lg md:text-xl lg:text-4xl font-medium text-foreground/60 leading-relaxed px-2 lg:px-0">
          To be a leading integrated business solutions partner in Ethiopia and Africa, enabling organizations, investors, and international partners to achieve sustainable growth through innovative, reliable, and internationally aligned services by 2035.
        </p>
      </div>

    </section>
  );
}
