import React from "react";

export default function ConsultingPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="relative py-24 px-4 md:px-20 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/invest.jpeg"
            
            className="w-full h-full object-cover blur-[1px] scale-100"
          />
          <div className="absolute inset-0 bg-white/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide text-[#064028]">
            CONSULTING SERVICES
          </h1>

          <p className="text-2xl md:text-3xl text-gray-700">
            Investment, Business & Social Affairs Consulting in Ethiopia
          </p>

          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional advisory services for businesses, investors, NGOs, and
            development partners to ensure strategic, compliant, and impact-driven solutions.
          </p>

          <button className="bg-[#B8860B] text-white font-bold rounded-[12px] shadow-lg hover:bg-[#9d7000] transition-colors w-[243px] h-[49px]">
  Get in Touch
</button>
        </div>
      </section>

   
      <section className="max-w-5xl mx-auto px-4 py-14">
        <SectionTitle title="" />
        <p className="mb-4 leading-relaxed text-gray-700 text-lg md:text-xl">
          We provide professional consulting services in Ethiopia, supporting
          businesses, investors, international organizations, NGOs, and
          development partners with strategic, compliant, and impact-driven advisory solutions.
        </p>
        <p className="leading-relaxed text-gray-700 text-lg md:text-xl">
          Our consulting services help clients navigate investment, market
          entry, regulatory frameworks, project delivery, and social development
          challenges while aligning with Ethiopian regulations and international best practices.
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
        <SectionTitle title="WHY WORK WITH US" />
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
    title: "Business & Management Consulting",
    desc: "Support for organizations with business strategy, operational improvement, governance, and organizational development. (Business consultancy Ethiopia, management consulting Africa)",
  },
  {
    title: "Investment Advisory & Market Entry",
    desc: "Assistance for local and foreign investors with market entry advisory, investment facilitation, feasibility studies, and regulatory guidance. (Investment advisory Ethiopia, market entry consulting Ethiopia)",
  },
  {
    title: "Tax, Regulatory & Compliance Advisory",
    desc: "Advisory on tax, regulatory compliance, and corporate governance aligned with Ethiopian laws and international standards. (Tax and business advisory Ethiopia, compliance consulting Ethiopia)",
  },
  {
    title: "Project Management & Advisory Services",
    desc: "Support for development and private-sector projects through planning, coordination, monitoring, and delivery advisory. (Project management consultancy Ethiopia, development project advisory Africa)",
  },
  {
    title: "Human Capital & Organizational Development",
    desc: "Advisory on workforce planning, leadership development, and institutional capacity strengthening. (Human capital consulting Africa, organizational development Ethiopia)",
  },
  {
    title: "Social Affairs, Community & Crisis Consulting",
    desc: "Support for NGOs, donors, and institutions with community development, conflict-sensitive programming, and crisis response advisory. (Community development consulting, crisis management consultancy Africa)",
  },
];

const reasons = [
  "Integrated consulting across investment, business, and social sectors",
  "Strong local knowledge combined with international standards",
  "Experience advising NGOs, investors, and institutions",
  "Confidential, evidence-based, and data-driven advisory services",
  "Reliable local partner for market entry, project delivery, and social impact",
];
