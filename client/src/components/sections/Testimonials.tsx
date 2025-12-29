import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Tinsae Bizuneh",
    title: "Founder, Tina Wright Loss",
    image: "/frame-141-1.png",
  },
  {
    name: "Selamawit Demissie",
    title: "Founder, Fidel Tutorial",
    image: "/frame-141-2.png",
  },
  {
    name: "Elshaday Aklilu",
    title: "CEO, Afriquick Delivery PLC",
    image: "/frame-141-3.png",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="w-full bg-white py-12 px-4">
      <h2 className="pt-16 mb-16 pl-24 text-4xl font-bold text-[#064028]">
        What our clients say
      </h2>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Highlight Card */}
          <Card className="bg-[#064028] rounded-2xl border-0 overflow-hidden">
            <CardContent className="flex flex-col items-center p-6">
              <div className="w-full max-w-[338px] h-[351px] rounded-lg overflow-hidden flex items-center justify-center p-2">
                <div
                  className="h-[334px] w-[323px] rounded bg-[url('../../public/frame-141.png')] bg-center bg-cover bg-no-repeat"
                />
              </div>

              <h3
                style={{ fontFamily: "'Poppins', Helvetica" }}
                className="mt-5 font-medium text-white text-2xl md:text-3xl text-center"
              >
                Kiya Sibhat
              </h3>

              <p
                style={{ fontFamily: "'Inter', Helvetica" }}
                className="mt-4 text-white text-base text-center max-w-[207px]"
              >
                President, Born Again Charity Association
              </p>
            </CardContent>
          </Card>

          
          <div className="flex flex-col gap-8">
            {/* Testimonial Text Card */}
            <Card className="bg-white rounded-lg border border-[#28705a] shadow-md">
              <CardContent className="p-6">
                <p
                  style={{ fontFamily: "'Inter', Helvetica" }}
                  className="text-black text-base leading-6"
                >
                  &quot;Lorem ipsum dolor sit amet consectetur. Nascetur ipsum sit a ultrices
                  tincidunt sed nulla nunc. In in at ut donec non viverra in maecenas semper.
                  Ipsum curabitur tincidunt ridiculus vulputate aliquam arcu ullamcorper. Tortor
                  feugiat elementum bibendum semper tincidunt id. Lacus at turpis scelerisque
                  nec cras sit eget sed nunc.&quot;
                </p>
              </CardContent>
            </Card>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="rounded-lg overflow-hidden border border-[#ae8631]"
                >
                  <CardContent className="flex flex-col items-center p-2">
                    <div className="w-full h-[175px] rounded overflow-hidden flex items-center justify-center p-1">
                      <div
                        className="h-[167px] w-full rounded-sm bg-center bg-cover bg-no-repeat"
                        style={{ backgroundImage: `url('${member.image}')` }}
                      />
                    </div>

                    <h4
                      style={{ fontFamily: "'Poppins', Helvetica" }}
                      className="mt-2 font-medium text-black text-base text-center"
                    >
                      {member.name}
                    </h4>

                    <p
                      style={{ fontFamily: "'Inter', Helvetica" }}
                      className="mt-1 text-black text-xs text-center"
                    >
                      {member.title}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
