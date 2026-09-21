"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { academicAreas } from "@/data/academics";
import { BookOpen, Cpu, Library, Microscope, Lightbulb, Wrench, Users, Palette } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Cpu,
  Library,
  Microscope,
  Lightbulb,
  Wrench,
  Users,
  Palette,
};

export default function AcademicSection() {
  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Academics"
          title="Learning Beyond Boundaries"
          subtitle="A comprehensive educational framework designed to nurture intellectual curiosity, creativity, and excellence across diverse disciplines."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {academicAreas.map((area, index) => {
            const Icon = iconMap[area.icon] || BookOpen;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-300/60 shadow-card hover:shadow-premium transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-midnight/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                    <Icon size={24} className="text-midnight group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-midnight mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
