import React from "react";

export default function IncubationPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen font-sans">
    
      <section className="relative py-24 px-4 md:px-20 text-center overflow-hidden">
  <div className="absolute inset-0">
    <img
      src="/startup.jpeg"
      
      className="w-full h-full object-cover blur-[1px] scale-100"
    />
   
    <div className="absolute inset-0 bg-white/70"></div>
 
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
  </div>

  <div className="relative z-10">
    <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide text-[#064028]">
      STARTUP & PROJECT INCUBATION
    </h1>

    <p className="text-2xl md:text-3xl text-gray-700">
      End-to-End Startup & Project Incubation Services in Ethiopia
    </p>

    <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
      Structured support for entrepreneurs, organizations, development
      partners, and investors from idea stage to fully operational entities.
    </p>

    <button className="bg-[#B8860B] text-white font-bold rounded-[12px] shadow-lg hover:bg-[#9d7000] transition-colors w-[243px] h-[49px]">
  Get in Touch
</button>
  </div>
</section>


      <section className="max-w-5xl mx-auto px-4 py-14">
        <SectionTitle title="" />
        <p className="mb-4 leading-relaxed text-gray-700 text-lg md:text-xl">
          Our incubation services transform concepts into functioning businesses
          and projects by managing legal setup, systems, operations, staffing,
          and compliance—delivered with professionalism, confidentiality, and
          international standards.
        </p>
      </section>

    
      <section className="max-w-6xl mx-auto px-4 py-14">
        <SectionTitle title="WHAT WE OFFER" />
        <div className="space-y-20">
          {services.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`md:w-1/3 flex items-center justify-center mb-4 md:mb-0 ${
                  i % 2 === 0
                    ? "md:justify-end md:pr-8"
                    : "md:justify-start md:pl-8"
                }`}
              >
                <div className="flex items-center space-x-4">
                  {i % 2 === 0 && (
                    <span className="font-bold text-2xl md:text-3xl text-[#B8860B]">
                      {i + 1}
                    </span>
                  )}
                  <h3 className="text-2xl md:text-3xl font-bold text-[#064028]">
                    {item.title}
                  </h3>
                  {i % 2 !== 0 && (
                    <span className="font-bold text-2xl md:text-3xl text-[#B8860B]">
                      {i + 1}
                    </span>
                  )}
                </div>
              </div>

              <div className="md:w-2/3 text-left md:pl-8">
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="max-w-5xl mx-auto px-4 py-14">
        <SectionTitle title="THIS IS WHY YOU SHOULD CHOOSE US" />
        <ul className="list-inside space-y-4 text-lg md:text-xl">
          {reasons.map((item, i) => (
            <li
              key={i}
              className="pl-4 border-l-4 border-[#064028] text-gray-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

     \
      <section className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#064028]">
          Have an idea, startup, or project to launch in Ethiopia?
        </h2>
        <p className="mb-8 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Let’s build a fully operational organization, ready to grow and create
          impact.
        </p>
        <button className="bg-[#064028] text-white font-bold rounded-[12px] shadow-lg hover:bg-[#9d7000] transition-colors w-[243px] h-[49px]">
  Get in Touch
</button>
      </section>
    </main>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-[#064028]">
        {title}
      </h2>
      <div className="mt-2 h-1 w-24 bg-[#064028] rounded-full" />
    </div>
  );
}

const services = [
  {
    title: "Startup Incubation & Venture Development",
    desc: "Support for entrepreneurs from idea validation to business launch, including business modeling, registration, and operational setup. (startup incubation Ethiopia, entrepreneurship support Ethiopia)",
  },
  {
    title: "End-to-End Company Setup & Launch",
    desc: "Full company setup including legal registration, office setup, staffing, systems, and documentation. (company setup services Ethiopia, business registration Ethiopia)",
  },
  {
    title: "Systems, Technology & Digital Enablement",
    desc: "Development of websites, business systems, and digital tools for operational readiness and scalability. (business system development Ethiopia, startup technology solutions Africa)",
  },
  {
    title: "Project Incubation for NGOs & Development Partners",
    desc: "Incubation of donor-funded and development projects including staffing, coordination, reporting, and operational systems. (project incubation Ethiopia, development project support Africa)",
  },
  {
    title: "Business Scaling & Growth Readiness",
    desc: "Support for scaling through process optimization, team structuring, compliance, and investor readiness. (startup scaling Ethiopia, business growth advisory Africa)",
  },
  {
    title: "Investment Readiness & Partnership Support",
    desc: "Preparation for funding, partnerships, and long-term sustainability. (startup investment Ethiopia, investor readiness support)",
  },
];

const reasons = [
  "True end-to-end incubation model from idea to fully functioning organization",
  "Integrated business, technology, and operational setup under one roof",
  "Designed for entrepreneurs, NGOs, and institutions",
  "Local execution with international standards",
  "Fair, transparent, and potential-based engagement",
];
