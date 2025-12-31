import React from "react";

export default function OutsourcingPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen font-sans">
     <section className="relative py-24 px-4 md:px-20 text-center overflow-hidden">
  <div className="absolute inset-0">
    <img
      src="/outsourcing.jpeg"
      alt="Outsourcing"
      className="w-full h-full object-cover blur-[1px] scale-100"
    />
    <div className="absolute inset-0 bg-white/70"></div> 
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
  </div>

  <div className="relative z-10">
    <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide text-[#064028]">
      OUTSOURCING SERVICES
    </h1>

    <p className="text-2xl md:text-3xl text-gray-700">
      Integrated Outsourcing Solutions in Ethiopia & Africa
    </p>

    <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
      Outsourcing Services in Ethiopia for Organizations and International Partners
    </p>

    <button className="bg-[#B8860B] text-white font-bold rounded-[12px] shadow-lg hover:bg-[#9d7000] transition-colors w-[243px] h-[49px]">
  Get in Touch
</button>
  </div>
</section>


      <section className="max-w-5xl mx-auto px-4 py-14">
        <SectionTitle title="" />
        <p className="mb-4 leading-relaxed text-gray-700 text-lg md:text-xl">
          We provide professional outsourcing services in Ethiopia, supporting
          organizations, international institutions, NGOs, and private sector
          companies with reliable, compliant, and performance-driven business
          process outsourcing solutions.
        </p>
        <p className="leading-relaxed text-gray-700 text-lg md:text-xl">
          Our outsourcing services enable clients to focus on their core mission
          while we manage essential operational functions with confidentiality,
          accountability, and international standards. We deliver tailored
          outsourcing solutions across human resources, payroll, sales and
          marketing workforce, IT support, and project-based outsourcing in
          Ethiopia and across Africa.
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
                  i % 2 === 0 ? "md:justify-end md:pr-8 md:pl-0" : "md:justify-start md:pl-8 md:pr-0"
                }`}
              >
                {i % 2 === 0 ? (
                  <div className="flex items-center space-x-4">
                    <span className="font-bold text-2xl md:text-3xl text-[#B8860B]">
                      {i + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#064028]">
                      {item.title}
                    </h3>
                  </div>
                ) : (
                  <div className="flex items-center space-x-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#064028]">
                      {item.title}
                    </h3>
                    <span className="font-bold text-2xl md:text-3xl text-[#B8860B]">
                      {i + 1}
                    </span>
                  </div>
                )}
              </div>
              <div className="md:w-2/3 text-left md:pl-8 md:pr-0">
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-14">
        <SectionTitle title="WHY WORK WITH US" />
        <ul className="list-inside space-y-4 text-lg md:text-xl">
          {reasons.map((item, i) => (
            <li key={i} className="pl-4 border-l-4 border-[#064028] text-gray-700">
              {item}
            </li>
          ))}
        </ul>
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
    title: "Human Resource & Talent Management Outsourcing",
    desc: "End-to-end HR functions including recruitment, onboarding, personnel administration, performance support, and labor compliance.",
  },
  {
    title: "Payroll & Administrative Outsourcing",
    desc: "Accurate payroll processing, statutory compliance, and confidential payroll administration aligned with Ethiopian regulations.",
  },
  {
    title: "Sales & Marketing Workforce Outsourcing",
    desc: "Provision of trained sales and marketing professionals to support outreach, campaigns, customer engagement, and field operations.",
  },
  {
    title: "IT Support & Technology Maintenance Outsourcing",
    desc: "System maintenance, user support, infrastructure monitoring, and operational continuity for reliable technology performance.",
  },
  {
    title: "Project & Community Based Outsourcing",
    desc: "Staffing, coordination, reporting, and implementation support for development and donor-funded projects.",
  },
];

const reasons = [
  "Integrated outsourcing model across HR, payroll, IT, marketing, and projects",
  "International standards with strong Ethiopian regulatory compliance",
  "Strict confidentiality, data protection, and accountability",
  "Scalable and flexible engagement models",
  "Reliable local implementation partner for Ethiopia & Africa",
];
