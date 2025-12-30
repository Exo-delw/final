"use client";

import * as React from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="top-0 z-50 w-full bg-primary backdrop-blur supports-backdrop-filter:bg-primary">
      <div className="container mx-auto flex h-22 items-center justify-between px-4">
        <img
          className="w-20 h-16 object-cover"
          alt="Logo"
          src="/whitelogo.png"
        />

        <nav className="flex gap-16 items-center">
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

        <Button
          variant="default"
          className="px-8 py-7 bg-accent-darker hover:bg-[#B8860B] rounded-xl font-semibold text-white text-xl"
        >
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </header>
  );
}
