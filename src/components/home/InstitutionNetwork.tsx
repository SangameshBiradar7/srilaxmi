"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { institutions, institutionFilters } from "@/data/institutions";

export default function InstitutionNetwork() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? institutions
      : institutions.filter((inst) => inst.category === activeFilter);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Network"
          title="Our Network of Institutions"
          subtitle="One vision. Multiple pathways. A shared commitment to education."
        />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {institutionFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-4 py-2 text-sm font-medium rounded-full transition-all duration-200
                ${
                  activeFilter === filter
                    ? "bg-midnight text-white shadow-lg"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((institution, index) => (
            <motion.div
              key={institution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-300/60 shadow-card hover:shadow-premium transition-all duration-300 h-full flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={institution.image}
                    alt={institution.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <span className="text-xs font-semibold tracking-wider uppercase text-gold mb-3">
                    {institution.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-midnight mb-3">
                    {institution.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                    {institution.description}
                  </p>
                  <Link
                    href={`/institutions/${institution.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-midnight group/link"
                  >
                    Explore Institution
                    <span className="ml-2 group-hover/link:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
