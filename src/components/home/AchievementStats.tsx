"use client";

import { motion } from "framer-motion";
import StatCard from "@/components/ui/StatCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievementStats, awards } from "@/data/achievements";

export default function AchievementStats() {
  return (
    <section className="py-20 sm:py-28 bg-midnight">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Achievements"
          title="Milestones That Matter"
          subtitle="A testament to our unwavering commitment to excellence in education."
        />

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {achievementStats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              className="bg-white/5 border-white/10 !p-6 sm:!p-8"
            />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="font-display text-2xl font-semibold text-white mb-8 text-center">
            Awards & Recognitions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gold/30 transition-colors"
              >
                <div className="text-2xl mb-3">🏆</div>
                <h4 className="font-display text-lg font-semibold text-white mb-1">
                  {award.title}
                </h4>
                <p className="text-sm text-white/60">{award.organization}</p>
                <p className="text-xs text-gold mt-2">{award.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
