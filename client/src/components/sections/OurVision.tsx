export function OurVission() {
    return (
      <section className="relative flex gap-10 items-start justify-center py-4 px-16 bg-background">

        <div className=" w-1/2">
           <img alt="stenar_office" src="/images/stenar_offlog.png" />
        </div>

        <div 
       
        className="text-6xl font-bold font-poppins  max-w-5xl text-foreground flex flex-col items-start w-1/2 ">
            <h2 >
                Our {" "}<span className="bg-linear-to-r from-[#AE8631]  to-[#28705A] bg-clip-text text-transparent">
                Vission
                </span>{" "}
            </h2>

            <p className="text-4xl font-medium p-4 pt-8 text-foreground/60 leading-relaxed">
                To be a leading integrated business solutions partner in Ethiopia and Africa, enabling organizations, investors, and international partners to achieve sustainable growth through innovative, reliable, and internationally aligned services by 2035.
            </p>

        </div>

      </section>
    );
  }