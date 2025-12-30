import React from "react";

export default function TechnologySolutionsPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen font-sans">
      
      <section className="relative py-24 px-4 md:px-20 text-center overflow-hidden">
  <div className="absolute inset-0">
    <img
      src="/Robots_Should_Replace_Beasts_of_Burden,_Not_Humans,_Tepper_Faculty.svg"
      alt="Technology Background"
      className="w-full h-full object-cover blur-[1px] scale-100"
    />
   
    <div className="absolute inset-0 bg-white/70"></div>
    
    <div className="absolute inset-0 bg-linear-to-b
 from-transparent via-transparent to-white"></div>
  </div>

  <div className="relative z-10">
    <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide text-[#064028]">
      TECHNOLOGY SOLUTIONS
    </h1>

    <p className="text-2xl md:text-3xl text-gray-700">
      Custom Technology & Digital Solutions in Ethiopia & Africa
    </p>

    <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
      Secure, scalable, and custom-built digital solutions for businesses,
      NGOs, institutions, and international organizations.
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
          We deliver professional technology solutions in Ethiopia, supporting
          businesses, international organizations, NGOs, and institutions with
          reliable, secure, and scalable digital products tailored to operational
          and growth needs.
        </p>
        <p className="leading-relaxed text-gray-700 text-lg md:text-xl">
          Our technology solutions help organizations automate processes,
          improve efficiency, enhance user experience, and scale sustainably
          through custom-built systems developed to international standards.
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

      {/* CTA SECTION */}
      <section className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#064028]">
          Looking for a reliable technology solutions provider?
        </h2>
        <p className="mb-8 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Let’s build digital systems that improve performance, scale impact,
          and support your long-term growth.
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
    title: "Website Design & Development",
    desc: "Design and development of modern, fully functional, SEO-optimized, and user-friendly websites that strengthen digital presence, credibility, and conversion. (Website development company Ethiopia, custom website development Ethiopia)",
  },
  {
    title: "Custom Software & System Development",
    desc: "Tailored software solutions aligned with organizational workflows, including ERP, CRM, inventory management, and internal operation platforms. (Software development company Ethiopia, ERP system development Ethiopia)",
  },
  {
    title: "Learning Management Systems (LMS)",
    desc: "Secure and scalable LMS platforms for training institutions, NGOs, corporates, and projects to deliver, manage, and track learning programs. (Learning management system development Ethiopia, LMS solutions Africa)",
  },
  {
    title: "E-Commerce & Digital Platforms",
    desc: "Development of e-commerce platforms and digital marketplaces with secure payment integration, inventory control, and customer management features. (E-commerce website development Ethiopia, digital platform development Africa)",
  },
  {
    title: "System Integration & Business Automation",
    desc: "System integration and automation solutions that improve data flow, operational efficiency, and decision-making across departments. (System integration services Africa, business automation solutions)",
  },
  {
    title: "Technology Consulting & Digital Transformation",
    desc: "Technology advisory, system assessments, and digital transformation planning to help organizations adopt the right digital solutions efficiently. (Technology consulting Ethiopia, digital transformation services Africa)",
  },
];

const reasons = [
  "Custom-built solutions designed around your processes, goals, and users",
  "International standards with secure and scalable development practices",
  "Local expertise combined with a global delivery mindset",
  "End-to-end technology partnership from strategy to support",
  "Proven experience delivering solutions for businesses, NGOs, and institutions",
];
