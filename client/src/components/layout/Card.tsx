import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BaseProps = {
  className?: string;
};

/* =======================
   VARIANT PROP TYPES
   ======================= */

type ValueCardProps = BaseProps & {
  variant: "value";
  icon: string | React.ReactNode;
  title: string;
  description: string;
};

type BlogCardProps = BaseProps & {
  variant: "blog";
  image: string;
  title: string;
  description: string;
  href: string;
};

type TestimonialCardProps = BaseProps & {
  variant: "testimonial";
  image: string;
  title: string;
  subtitle: string;
  featured?: boolean; // main vs secondary
};

type CardProps =
  | ValueCardProps
  | BlogCardProps
  | TestimonialCardProps;

/* =======================
   CARD COMPONENT
   ======================= */

export function Card(props: CardProps) {
  const base = "rounded-2xl transition-all duration-300";

  /* ---------- VALUE CARD ---------- */
  if (props.variant === "value") {
    return (
      <div
        className={cn(
          base,
          "w-76 h-68 bg-[#F9FFAA] border border-accent-darker flex flex-col items-center justify-center text-center px-4 gap-4 cursor-pointer",
          "hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10 hover:ring-1 hover:ring-primary/20",
          props.className
        )}
      >
        <div className="relative w-18 h-18 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          {typeof props.icon === "string" ? (
            <Image
              src={props.icon}
              alt={props.title}
              fill
              className="object-contain"
            />
          ) : (
            props.icon
          )}
        </div>

        <p className="font-semibold font-Lora text-3xl transition-colors duration-300 group-hover:text-primary">
          {props.title}
        </p>

        <p className="text-foreground/90 font-Inter text-sm transition-colors duration-300 group-hover:text-foreground">
          {props.description}
        </p>
      </div>
    );
  }

  /* ---------- BLOG CARD ---------- */
  if (props.variant === "blog") {
    return (
      <div
        className={cn(
          base,
          "w-85 h-135 bg-background border border-accent-darker/40 flex p-4 pt-8 flex-col overflow-hidden cursor-pointer",
          "hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10",
          props.className
        )}
      >
        <div className="relative w-full h-55 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-105">
          <Image
            src={props.image}
            alt={props.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col flex-1 pt-5 gap-4">
          <p className="font-semibold text-3xl text-center leading-relaxed transition-colors duration-300 group-hover:text-primary">
            {props.title}
          </p>

          <p className="text-sm text-foreground/60 flex-1 transition-colors duration-300 group-hover:text-foreground">
            {props.description}
          </p>

          <Link
            href={props.href}
            className="text-accent-darker ml-auto font-sm hover:underline"
          >
            Read more &rarr;
          </Link>
        </div>
      </div>
    );
  }

  /* ---------- TESTIMONIAL CARD ---------- */
  if (props.variant === "testimonial") {
    const isMain = props.featured;

    return (
      <div
        className={cn(
          base,
          "flex flex-col items-center text-center px-6 py-8 gap-4 cursor-pointer",
          isMain
            ? "bg-primary text-white w-95 scale-105 hover:scale-105 hover:shadow-2xl hover:shadow-black/10"
            : "bg-background border border-accent-darker w-75 hover:-translate-y-1 hover:shadow-xl",
          props.className
        )}
      >
        <div
          className={cn(
            "relative w-20 h-20 rounded-full overflow-hidden transition-transform duration-300",
            isMain && "border-4 border-white group-hover:scale-105"
          )}
        >
          <Image
            src={props.image}
            alt={props.title}
            fill
            className="object-cover"
          />
        </div>

        <h3 className="font-semibold text-lg transition-colors duration-300 group-hover:text-primary">
          {props.title}
        </h3>

        <p
          className={cn(
            "text-sm transition-colors duration-300",
            isMain ? "text-white/80" : "text-foreground/80"
          )}
        >
          {props.subtitle}
        </p>
      </div>
    );
  }

  return null;
}

