"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { serviceService } from "@/services/serviceService";
import { useToast } from "@/hooks/use-toast";

export default function CreateServicePage() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  // Simple State
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");
  const [icon, setIcon] = useState<File | null>(null);
  const [gallery, setGallery] = useState<FileList | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Build FormData
      const formData = new FormData();
      formData.append("title", title);
      formData.append("short_description", desc);
      formData.append("content", content);
      
      if (icon) formData.append("icon", icon);
      
      if (gallery) {
        // Append each file with the SAME key 'gallery[]'
        for (let i = 0; i < gallery.length; i++) {
          formData.append("gallery[]", gallery[i]);
        }
      }

      // 2. Send
      await serviceService.create(formData);

      toast({ title: "Success", description: "Service Created!", className: "bg-green-600 text-white" });
      router.push("/services"); // Redirect to public list to verify
    } catch (error: any) {
      console.error(error);
      const msg = error.response?.data?.message || "Failed to create";
      toast({ title: "Error", description: msg, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white shadow rounded border">
      <h1 className="text-2xl font-bold mb-6">Create New Service</h1>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Service Title</label>
          <input 
            value={title} onChange={(e) => setTitle(e.target.value)} required
            className="w-full p-2 border rounded" placeholder="e.g. Global Logistics"
          />
        </div>

        {/* Icon Upload */}
        <div>
          <label className="block text-sm font-medium mb-1">Main Icon (Image)</label>
          <input 
            type="file" accept="image/*"
            onChange={(e) => setIcon(e.target.files?.[0] || null)}
            className="w-full border p-1 rounded"
          />
        </div>

        {/* Short Desc */}
        <div>
          <label className="block text-sm font-medium mb-1">Short Description</label>
          <textarea 
            value={desc} onChange={(e) => setDesc(e.target.value)} required rows={2}
            className="w-full p-2 border rounded" placeholder="Summary for the card..."
          />
        </div>

        {/* Full Content */}
        <div>
          <label className="block text-sm font-medium mb-1">Detailed Content (HTML)</label>
          <textarea 
            value={content} onChange={(e) => setContent(e.target.value)} rows={5}
            className="w-full p-2 border rounded" placeholder="<p>Full details...</p>"
          />
        </div>

        {/* Gallery Upload (Multiple) */}
        <div className="bg-gray-50 p-4 rounded border border-dashed">
          <label className="block text-sm font-medium mb-1">Gallery (Action Shots)</label>
          <input 
            type="file" multiple accept="image/*"
            onChange={(e) => setGallery(e.target.files)}
            className="w-full"
          />
          <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple images.</p>
        </div>

        <button disabled={loading} className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 font-bold">
          {loading ? "Uploading..." : "Create Service"}
        </button>
      </form>
    </div>
  );
}