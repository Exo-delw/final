"use client";

import React from "react";
import { Star, Shield, Lock, Clock, Briefcase, BarChart2, Lightbulb, Repeat, Users, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen font-sans overflow-hidden">
      <section className="relative py-28 px-4 md:px-20 text-center">
        <div className="absolute inset-0">
          
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50" />
        </div>

        <div className="relative z-10 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold text-[#064028] mb-6">About Us</h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-6">
            Your Integrated Business Solution Partner in Ethiopia & Africa
          </p>
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
            Stenar Trading PLC is an integrated business solution hub based in Addis Ababa, Ethiopia,
            supporting organizations, NGOs, investors, and institutions with professional, compliant, and impact-driven services.
          </p>
        </div>
      </section>


     <div className="w-full flex justify-center items-center">
  <img
    alt="stenar_office"
    src="/images/stenar_offlog.png"
    className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto"
  />
</div>





      <section className="max-w-6xl mx-auto px-4 py-20">
        <AnimatedSection>
          <SectionTitle title="Who We Are" />
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Founded in 2024, Stenar Trading PLC was established to respond to a growing need for
            reliable local partners capable of delivering international-standard services within the Ethiopian and African context.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We operate at the intersection of business, technology, capacity building, consulting, and social development — delivering end-to-end solutions that enable our clients to operate efficiently, scale sustainably, and create measurable impact.
          </p>
        </AnimatedSection>
      </section>

      <section className="relative py-20">

  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#B8860B] to-transparent opacity-100" />
  
  <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
    <AnimatedCard title="Our Vision">
      To be Africa's trusted business and social affairs solution partner, transforming how organizations operate, grow, and create impact across the continent.
    </AnimatedCard>
    <AnimatedCard title="Our Mission">
      To deliver integrated, professional, and innovative business solutions that strengthen organizations, support sustainable development, and enable partners to succeed in Ethiopia and Africa.
    </AnimatedCard>
  </div>
</section>

    <section className="max-w-6xl mx-auto px-4 py-20">
  <AnimatedSection>
    <SectionTitle title="Our Values" />
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {values.map((value, index) => {
        const iconMap = [
          <Star size={24} />,
          <Shield size={24} />,
          <Lock size={24} />,
          <Clock size={24} />,
          <Briefcase size={24} />,
          <BarChart2 size={24} />,
          <Lightbulb size={24} />,
          <Repeat size={24} />,
          <Users size={24} />,
          <Leaf size={24} />,
        ];

        const getDescription = (valueName: string) => {
          const descriptions: Record<string, string> = {
            "Client-Centric Excellence": "We design and deliver solutions tailored to our clients' objectives, ensuring measurable impact and long-term value.",
            "Integrity": "We operate with the highest standards of professional ethics and transparency in all our dealings.",
            "Confidentiality": "We maintain strict data privacy and protect sensitive information with robust security measures.",
            "Timely Delivery": "We honor commitments and deliver projects on schedule with consistent punctuality.",
            "Professionalism": "We maintain expert knowledge, respectful conduct, and adherence to industry best practices.",
            "Accountability & Reliability": "We take ownership of outcomes and deliver consistent, dependable results.",
            "Innovation": "We embrace creative thinking and modern solutions to address complex challenges.",
            "Continuous Improvement": "We constantly refine our processes and services to enhance quality and efficiency.",
            "Partnership": "We build collaborative relationships based on mutual trust, respect, and shared success.",
            "Sustainability & Social Responsibility": "We consider environmental impact and community welfare in our business decisions."
          };
          return descriptions[valueName] || "A core principle guiding our operations and client relationships.";
        };

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="bg-white border border-gray-200 rounded-xl p-6 h-full transition-all duration-300 group hover:bg-[#064028] hover:border-[#064028]/50">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#064028]/10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[#064028]">
                  {React.cloneElement(iconMap[index], { className: "text-[#064028] group-hover:text-[#ae8631] transition-colors duration-300" })}
                </div>
                <h3 className="text-xl font-bold text-[#064028] transition-colors duration-300 group-hover:text-[#ae8631] pt-1">
                  {value}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm transition-colors duration-300 group-hover:text-[#ae8631]">
                {getDescription(value)}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </AnimatedSection>
</section>


      <section className="bg-white py-24">
  <div className="max-w-6xl mx-auto px-4">
    <AnimatedSection>
      <SectionTitle title="Our Approach" />
      <div className="grid gap-6 md:grid-cols-2">
        {approach.map((item, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-[#064028]/20 bg-white p-8 transition-all duration-300 hover:bg-[#064028]"
          >
            <h3 className="text-2xl font-bold text-[#064028] transition-colors duration-300 group-hover:text-[#ae8631]">
  {item.title}
</h3>

            <p className="mt-4 text-gray-700 opacity-0 translate-y-4 transition-all duration-350 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-white">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  </div>
</section>


     <section className="max-w-6xl mx-auto px-4 py-20 md:py-28">
  <AnimatedSection>
    <SectionTitle title="Why Stenar Trading PLC" />
    <div className="flex flex-col gap-6 md:gap-12">
      {reasons.map((r, i) => (
        <div
          key={i}
          className="group relative flex items-start gap-4 md:gap-6 border-l-2 border-gray-200 pl-6 md:pl-8 transition-all duration-300 hover:border-[#064028]"
        >
          <span className="absolute -left-[10px] md:-left-[11px] top-2 h-4 w-4 md:h-5 md:w-5 rounded-full bg-[#064028] transition-colors duration-300 group-hover:bg-[#ae8631]" />
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 transition-all duration-200 md:duration-300 group-hover:text-[#ae8631] md:group-hover:text-3xl lg:group-hover:text-4xl group-hover:font-semibold md:group-hover:translate-x-4">
            {r}
          </p>
        </div>
      ))}
    </div>
  </AnimatedSection>
</section>






      <section className="relative py-24 text-center mb-20">
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
    style={{ backgroundImage: "url('/getintouch.png')" }}
  />
  <div className="relative z-10">
    <h2 className="text-4xl md:text-5xl font-bold text-[#064028] mb-6">
      Looking for a trusted partner?
    </h2>
    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
      Let’s work together to build efficient operations, sustainable growth, and meaningful impact.
    </p>
    <button className="bg-[#064028] text-white font-bold rounded-xl shadow-lg hover:bg-[#9d7000] transition w-[243px] h-[49px]">
      Get in Touch
    </button>
  </div>
</section>


    </main>
  );
}

type SectionTitleProps = { title: string };

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#064028]">{title}</h2>
      <div className="mt-2 h-1 w-24 bg-[#064028] rounded-full" />
    </div>
  );
}

type AnimatedSectionProps = { children: React.ReactNode };

function AnimatedSection({ children }: AnimatedSectionProps) {
  return <div className="animate-fade-up">{children}</div>;
}

type AnimatedCardProps = { title: string; children: React.ReactNode };

function AnimatedCard({ title, children }: AnimatedCardProps) {
  return (
    <div className="bg-[#064028] p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-lg text-white leading-relaxed">{children}</p>
    </div>
  );
}

const values = [
  "Client-Centric Excellence",
  "Integrity",
  "Confidentiality",
  "Timely Delivery",
  "Professionalism",
  "Accountability & Reliability",
  "Innovation",
  "Continuous Improvement",
  "Partnership",
  "Sustainability & Social Responsibility",
];

const approach = [
  { title: "Integrated Solutions Model", desc: "Multiple services delivered under one coordinated system." },
  { title: "International Standards, Local Expertise", desc: "Global best practices combined with strong local compliance." },
  { title: "Results-Driven Delivery", desc: "SMART, measurable, and outcome-focused services." },
  { title: "Partnership Mindset", desc: "Long-term collaboration over short-term transactions." },
];

const reasons = [
  "Reliable local implementation partner in Ethiopia",
  "One hub for comprehensive organizational support",
  "Proven compliance with Ethiopian regulations",
  "Professional, accountable, and timely delivery",
  "Designed for both commercial success and social impact",
];
