"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/constants";

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 z-50 bg-white p-6 md:hidden animate-in slide-in-from-top-10">
      <div className="flex justify-end">
        <button onClick={onClose} className="p-2 text-slate-600">
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="flex flex-col space-y-6 mt-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-lg font-medium text-slate-900 hover:text-blue-600"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={onClose}
          className="bg-slate-900 text-white py-3 px-4 rounded text-center font-medium mt-4"
        >
          Get Started
        </Link>
      </nav>
    </div>
  );
}