"use client";

import { useState } from "react";
import { contactService } from "@/services/contactService";
import { useToast } from "@/hooks/use-toast";

export default function TestContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  // State matches new backend requirements
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone_number: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await contactService.sendMessage(formData);
      toast({ title: "Success", description: "Message saved to DB!", className: "bg-green-600 text-white" });
      setFormData({ fullname: "", email: "", phone_number: "", subject: "", message: "" });
    } catch (error: any) {
      console.error(error);
      // Show Laravel Validation Errors
      const msg = error.response?.data?.message || "Error sending message";
      toast({ title: "Error", description: msg, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-10 max-w-lg mx-auto border mt-10 rounded shadow bg-white">
      <h1 className="text-2xl font-bold mb-5">Test Contact Form</h1>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          name="fullname" placeholder="Full Name" value={formData.fullname} onChange={handleChange} required 
          className="p-2 border rounded"
        />
        <input 
          name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required 
          className="p-2 border rounded"
        />
        <input 
          name="phone_number" placeholder="Phone (+251...)" value={formData.phone_number} onChange={handleChange} required 
          className="p-2 border rounded"
        />
        <input 
          name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required 
          className="p-2 border rounded"
        />
        <textarea 
          name="message" placeholder="Message..." value={formData.message} onChange={handleChange} required rows={4}
          className="p-2 border rounded"
        />

        <button disabled={loading} className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
          {loading ? "Sending..." : "Submit Inquiry"}
        </button>
      </form>
    </div>
  );
}