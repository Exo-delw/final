import Image from "next/image";

const logos = [
  "/logos/company_logo_1.png",
  "/logos/company_logo_2.png",
  "/logos/company_logo_3.png",
  "/logos/company_logo_4.png",
  "/logos/company_logo_5.png",
  "/logos/company_logo_6.png",
  "/logos/company_logo_7.png",
  "/logos/company_logo_8.png",
  
  
];

export function TrustedBy() {
  return (
    <section className="py-12 overflow-hidden bg-muted">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-6xl font-semibold text-primary">
          Trusted By
        </h2>
      </div>

      {/* Marquee wrapper */}
      <div className="relative w-full  overflow-hidden">
        {/* Track */}
        <div className="flex w-max  animate-marquee gap-22">

          {/* First set */}
          {logos.map((logo, i) => (
            <LogoItem key={`logo-1-${i}`} src={logo} />
          ))}

          {/* Duplicate set */}
          {logos.map((logo, i) => (
            <LogoItem key={`logo-2-${i}`} src={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Logo item ---------- */
function LogoItem({ src }: { src: string }) {
  return (
    <div className="relative h-35 w-40 shrink-0 opacity-100 grayscale hover:grayscale-0 hover:opacity-90 transition">
      <Image
        src={src}
        alt="Company logo"
        fill
        className="object-contain"
      />
    </div>
  );
}
