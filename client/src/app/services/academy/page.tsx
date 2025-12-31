import React from "react";

export default function AcademyPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="relative py-24 px-4 md:px-20 text-center overflow-hidden">
  <div className="absolute inset-0">
    <img
      src="/academy.jpeg"
      
      className="w-full h-full object-cover blur-[1px] scale-100"
    />
    
    <div className="absolute inset-0 bg-white/70"></div>
    
    <div className="absolute inset-0 bg-linear-to-b
from-transparent via-transparent to-white"></div>
  </div>

  <div className="relative z-10">
    <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide text-[#064028]">
      ACADEMY
    </h1>

    <p className="text-2xl md:text-3xl text-gray-700">
      Practical Training & Capacity Building Solutions in Ethiopia & Africa
    </p>

    <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
      Results-oriented training programs for individuals, organizations,
      NGOs, and institutions aligned with real market and operational needs.
    </p>

    <button className="bg-[#B8860B] text-white font-bold rounded-[12px] shadow-lg hover:bg-[#9d7000] transition-colors w-[243px] h-[49px]">
  Get in Touch
</button>


  </div>
</section>


      {/* INTRO SECTION */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <SectionTitle title="" />
        <p className="mb-4 leading-relaxed text-gray-700 text-lg md:text-xl">
          We deliver professional capacity building and training programs in
          Ethiopia, supporting individuals, organizations, NGOs, and
          institutions with practical, results-oriented learning solutions
          aligned with market and operational needs.
        </p>
        <p className="leading-relaxed text-gray-700 text-lg md:text-xl">
          Our Academy focuses on building real-world skills that improve
          performance, productivity, and leadership through customized training
          programs designed to international standards and local context.
        </p>
      </section>

      {/* SERVICES SECTION */}
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

      {/* WHY CHOOSE US */}
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
    title: "Corporate & Institutional Training",
    desc: "Customized training programs for organizations, NGOs, and institutions focused on workforce capability, operational efficiency, and leadership development. (Corporate training Ethiopia, professional skills training Ethiopia)",
  },
  {
    title: "Sales, Marketing & Digital Skills Training",
    desc: "Practical training in sales, marketing, digital marketing, and customer engagement to improve outreach, conversion, and revenue performance. (Sales and marketing training Ethiopia, digital marketing training Ethiopia)",
  },
  {
    title: "Entrepreneurship & Business Development Training",
    desc: "Entrepreneurship and business training programs equipping startups and entrepreneurs with financial, operational, and growth-focused skills. (Entrepreneurship training Ethiopia, business training programs Ethiopia)",
  },
  {
    title: "Project Management & Leadership Development",
    desc: "Training in project management, leadership, and organizational effectiveness to support strong teams and successful project delivery. (Project management training Ethiopia, leadership training Africa)",
  },
  {
    title: "Finance, Tax & Compliance Training",
    desc: "Professional training in IFRS, Ethiopian tax regulations, E-Tax systems, Peachtree, and financial compliance for individuals and organizations. (IFRS training Ethiopia, Ethiopian tax regulations training, E-Tax training Ethiopia)",
  },
  {
    title: "Capacity Building for Development & Social Projects",
    desc: "Tailored capacity building programs for NGOs, donors, and development partners to strengthen institutional systems and community-level impact. (Capacity building for organizations Africa, NGO training services Ethiopia)",
  },
];

const reasons = [
  "Practical, market-driven learning aligned with real workplace needs",
  "Customized programs for corporates, NGOs, institutions, and individuals",
  "Experienced trainers and industry professionals",
  "Flexible delivery models including on-site, virtual, and blended formats",
  "Sustainable skills development with long-term impact",
];
