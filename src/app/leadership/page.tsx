import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import { leadershipContent } from "@/data/content";

export default function LeadershipPage() {
  return (
    <main>
      <PageHeader
        label="Leadership"
        title="Leadership Message"
        subtitle="Insights and vision from the leadership of Sri Lakshmi Vidyaniketan Educational Society."
      />
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-premium max-w-md mx-auto lg:mx-0">
                <Image
                  src={leadershipContent.image}
                  alt={leadershipContent.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <SectionHeading
                title="A Message From Our Chairman"
                subtitle={leadershipContent.quote}
                align="left"
              />
              <div className="mt-8">
                <p className="font-display text-xl font-semibold text-midnight">
                  {leadershipContent.name}
                </p>
                <p className="text-slate-600">{leadershipContent.designation}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
