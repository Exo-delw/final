export function OurMission() {
    return (
      <section className="relative flex gap-10 items-start  py-4 px-16 bg-background ">

        <div className="text-6xl font-bold text-center mt-10  w-1/4">
                <h1 > Our 
                    {" "}<span className="bg-linear-to-r from-[#AE8631]  to-[#28705A] bg-clip-text text-transparent">
                        Mission
                        </span>{" "}
                </h1>
        </div>

        <div className="  text-4xl  font-poppins text-center leading-relaxed max-w-6xl text-foreground/60 flex flex-col w-3/4 ">
            <p className="text-center">To deliver integrated, reliable, and innovative business solutions that enable organizations, investors, and international partners to operate efficiently, sustainably, and confidently in Ethiopia and across Africa.</p>

        </div>

      </section>
    );
  }