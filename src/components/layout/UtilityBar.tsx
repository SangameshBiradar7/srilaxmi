"use client";

import Link from "next/link";
import { siteConfig, utilityLinks } from "@/data/content";

export default function UtilityBar() {
  return (
    <div className="bg-midnight text-white/70 text-xs border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9">
          <span className="hidden sm:block font-body">
            Welcome to {siteConfig.shortName}
          </span>
          <div className="flex items-center gap-4 sm:gap-6 ml-auto">
            {utilityLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <span className="hidden sm:inline text-slate-500">|</span>
            <button className="hover:text-gold transition-colors flex items-center gap-1">
              English
              <span className="text-slate-500">|</span>
              <span className="text-white/40">ಕನ್ನಡ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
