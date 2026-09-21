import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievementStats, awards } from "@/data/achievements";
import StatCard from "@/components/ui/StatCard";

export default function AchievementsPage() {
  return (
    <main>
      <PageHeader
        label="Achievements"
        title="Milestones That Matter"
        subtitle="A testament to our unwavering commitment to excellence in education."
      />
      <section className="py-20 sm:py-28 bg-midnight">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="By The Numbers"
            subtitle="Key milestones and achievements that define our journey."
          />
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievementStats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                className="bg-white/5 border-white/10 !p-6 sm:!p-8"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 sm:py-28 bg-midnight-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Awards & Recognitions"
            subtitle="Honored for excellence in education and institutional leadership."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gold/30 transition-colors"
              >
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {award.title}
                </h3>
                <p className="text-sm text-white/60">{award.organization}</p>
                <p className="text-xs text-gold mt-3">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
