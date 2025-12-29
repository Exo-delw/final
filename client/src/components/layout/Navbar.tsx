"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/constants";
import { Button } from "@/components/ui/button"; // Assumes you have shadcn button
import { MobileMenu } from "./Mobilemenu";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (


    <header className=" top-0 z-50 w-full bg-primary backdrop-blur supports-backdrop-filter:bg-primary ">
      <div className="container mx-auto flex h-22 items-center justify-between px-4">
        {/* Logo */}
        <img
        className="relative w-20 h-16 object-cover"
        alt="Image"
        src="/whitelogo.png"
      />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-16">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-extralight text-white transition-colors hover:text-white/60 "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button variant={"default"} className="hidden px-8 py-7 md:inline-flex bg-accent-darker hover:bg-[#AE8631]/80 rounded-xl font-semibold text-white text-xl " >
            <Link href="/contact">Contact Us</Link>
          </Button>
          
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Component */}
      {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
    </header>
  );
}