"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { serviceService } from "@/services/serviceService";
import { ServiceItem } from "@/types";

export default function ServicesPage() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch data when page loads
//     serviceService.getAll()
//       .then((data) => setServices(data)) // Assumes data is ServiceItem[]
//       .catch((err) => console.error(err))
//       .finally(() => setLoading(false));
//   }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Our Services</h1>
        <p className="mt-4 text-lg text-slate-600">Comprehensive solutions tailored to your business needs.</p>
      </div>

      {loading ? (
        <div className="text-center py-20 text-slate-500">Loading services...</div>
      ) : services.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 rounded-lg">
          <p className="text-slate-600">No services found at the moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group relative bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                {/* Fallback Icon if none provided */}
                <span className="font-bold text-xl">{service.title[0]}</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                <Link href={`/services/${service.slug}`}>
                  <span className="absolute inset-0" />
                  {service.title}
                </Link>
              </h3>
              <p className="mt-2 text-slate-600 line-clamp-3">{service.short_description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}