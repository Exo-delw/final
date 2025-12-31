import React from "react";

export default function EventManagementPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen font-sans">
   
      <section className="relative py-24 px-4 md:px-20 text-center overflow-hidden">
        <div className="absolute inset-0">
    <img
      src="/eventmanagement.png"
      
      className="w-full h-full object-cover blur-[1px] scale-100"
    />
   
    <div className="absolute inset-0 bg-white/70"></div>
 
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
  </div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide text-[#064028]">
            EVENT MANAGEMENT
          </h1>

          <p className="text-2xl md:text-3xl text-gray-700 mb-6">
            Elegant Corporate & Public Event Management in Ethiopia
          </p>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            We deliver end-to-end event management services in Ethiopia, supporting organizations, international institutions, NGOs, and development partners in planning and executing impactful, well-coordinated, and professionally delivered events.
          </p>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our event management solutions ensure seamless coordination, strong visibility, and measurable outcomes for corporate, institutional, and public events aligned with international standards.
          </p>

          <button className="bg-[#B8860B] text-white font-bold rounded-[12px] shadow-lg hover:bg-[#9d7000] transition-colors w-[243px] h-[49px]">
            Get in Touch
          </button>
        </div>
      </section>

 
      <section className="max-w-6xl mx-auto px-4 py-14">
        <SectionTitle title="WHAT WE OFFER" />
        <div className="space-y-20">
          {[
            {
              title: "Conferences, Summits & Forums",
              desc: "We plan and manage high-level conferences, summits, forums, and panel discussions, ensuring professional coordination, logistics, and stakeholder experience. Keywords: conference management Ethiopia, summit management services Ethiopia",
            },
            {
              title: "Corporate & Institutional Events",
              desc: "We manage annual meetings, launches, corporate retreats, and stakeholder engagements with structured planning and execution excellence. Keywords: corporate event management Ethiopia, institutional event services Africa",
            },
            {
              title: "Exhibitions & Public Events",
              desc: "We deliver exhibition management, trade shows, and public-facing events with branding, logistics, and audience engagement strategies. Keywords: exhibition management Ethiopia, public event management services",
            },
            {
              title: "Event Communication & Visibility",
              desc: "We provide event branding, communication, promotion, media coordination, and digital visibility to maximize reach and impact. Keywords: event communication Ethiopia, event marketing services Ethiopia",
            },
            {
              title: "End-to-End Event Coordination",
              desc: "We manage venue sourcing, logistics, vendor coordination, participant management, and on-site execution from concept to completion. Keywords: professional event management services Africa",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`md:w-1/3 flex items-center justify-center mb-4 md:mb-0 ${
                  i % 2 === 0 ? "md:justify-end md:pr-8" : "md:justify-start md:pl-8"
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
          {[
            "Structured & Professional Event Delivery: Clear planning, timelines, and coordination from start to finish.",
            "Experience with Corporate & Development Events: Proven capability across business, NGO, and institutional settings.",
            "Integrated Communication & Visibility: Events supported by branding, media, and digital promotion.",
            "Reliable Local Implementation Partner: Strong on-ground execution capacity across Ethiopia.",
            "Scalable & Context-Responsive Solutions: Adapted to event size, audience, and sector requirements.",
          ].map((item, i) => (
            <li
              key={i}
              className="pl-4 border-l-4 border-[#064028] text-gray-700 transition-all duration-300 "
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
            Planning a conference, summit, or corporate event in Ethiopia?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let’s deliver a well-managed event that reflects your objectives and standards.
          </p>
          <button className="bg-[#064028] text-white font-bold rounded-xl shadow-lg hover:bg-[#9d7000] transition w-[243px] h-[49px]">
            Contact Us Now
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
