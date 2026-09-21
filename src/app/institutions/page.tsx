"use client";

import { useState } from "react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import { institutions, institutionFilters } from "@/data/institutions";

export default function InstitutionsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? institutions
      : institutions.filter((inst) => inst.category === activeFilter);

  return (
    <main>
      <PageHeader
        label="Institutions"
        title="Our Institutions"
        subtitle="Explore the diverse institutions under the Sri Lakshmi Vidyaniketan umbrella."
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((institution, index) => (
              <div
                key={institution.id}
                className="group"
              >
                <Link href={`/institutions/${institution.slug}`} className="block h-full">
                  <div className="bg-white rounded-2xl overflow-hidden border border-slate-300/60 shadow-card hover:shadow-premium transition-all duration-300 h-full flex flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={institution.image}
                        alt={institution.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
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
                      <span className="text-sm font-semibold text-midnight group-hover:text-gold transition-colors inline-flex items-center">
                        Explore Institution
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
