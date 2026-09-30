"use client";

import Link from "next/link";
import { siteConfig } from "@/data/content";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const footerSections = [
  {
    title: "Society",
    links: [
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Institutions", href: "/institutions" },
      { label: "Achievements", href: "/achievements" },
    ],
  },
  {
    title: "Academics",
    links: [
      { label: "Academics", href: "/academics" },
      { label: "Research", href: "#" },
      { label: "Campus Life", href: "/campus-life" },
      { label: "Activities", href: "/campus-life" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Admissions", href: "/admissions" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "News", href: "/news" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Gallery", href: "/gallery" },
      { label: "Downloads", href: "#" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Mandatory Documents", href: "/about/mandatory-documents" },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", href: siteConfig.socials.instagram },
  { label: "Facebook", href: siteConfig.socials.facebook },
  { label: "YouTube", href: siteConfig.socials.youtube },
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-midnight text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold font-display text-xl font-bold border border-gold/30">
                SLV
              </div>
              <div>
                <span className="font-display text-lg font-semibold text-white block">
                  {siteConfig.shortName}
                </span>
                <span className="text-xs text-white/50">
                  Educational Society
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-8">
              Building a culture of knowledge, character and opportunity through meaningful education. A legacy of excellence spanning generations.
            </p>
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-gold transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href || "#"}
                aria-label={social.label}
                className="p-2 text-white/40 hover:text-gold transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
