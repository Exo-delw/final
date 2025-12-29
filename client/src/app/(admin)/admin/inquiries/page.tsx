"use client";

import { useEffect, useState } from "react";
import { contactService } from "@/services/contactService";
import { Inquiry } from "@/types";

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await contactService.getAll();
      setInquiries(res.data); // Assuming Laravel pagination wrapper
    } catch (e) {
      console.error(e);
      alert("Failed to load inquiries. Are you logged in?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Inquiries (CRM)</h1>
        <button onClick={loadData} className="px-4 py-2 bg-gray-200 rounded">Refresh</button>
      </div>

      {loading ? <p>Loading...</p> : (
        <table className="w-full border-collapse border bg-white shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-3 text-left">ID</th>
              <th className="border p-3 text-left">Full Name</th>
              <th className="border p-3 text-left">Contact Info</th>
              <th className="border p-3 text-left">Subject</th>
              <th className="border p-3 text-left">Message</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border p-3">{item.id}</td>
                <td className="border p-3 font-semibold">{item.fullname}</td>
                <td className="border p-3 text-sm">
                  <div>{item.email}</div>
                  <div className="text-gray-500">{item.phone_number}</div>
                </td>
                <td className="border p-3">{item.subject}</td>
                <td className="border p-3 text-gray-600 truncate max-w-xs">{item.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}