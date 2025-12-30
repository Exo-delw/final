"use client";

import * as React from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="top-0 z-50 w-full bg-primary backdrop-blur">
      <div className="container mx-auto flex h-16 md:h-22 items-center justify-between px-4">
        {/* Logo */}
        <img
          className="w-14 h-10 md:w-20 md:h-16 object-cover"
          alt="Logo"
          src="/whitelogo.png"
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-16 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-extralight text-white transition-colors hover:text-[#B8860B]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button className="px-8 py-7 bg-accent-darker hover:bg-[#B8860B] rounded-xl font-semibold text-white text-xl">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-primary px-6 pb-6">
          <nav className="flex flex-col gap-6 pt-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-xl font-light text-white hover:text-[#B8860B]"
              >
                {link.label}
              </Link>
            ))}

            <Button className="mt-4 bg-accent-darker hover:bg-[#B8860B] text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

