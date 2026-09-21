import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import { aboutContent } from "@/data/content";

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        label="About Us"
        title="A Legacy of Learning"
        subtitle="Discover the story, philosophy, and vision behind Sri Lakshmi Vidyaniketan Educational Society."
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-premium">
                <Image
                  src={aboutContent.image}
                  alt="About Sri Lakshmi Vidyaniketan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <SectionHeading
                title="Our Story"
                subtitle={aboutContent.subheading}
                align="left"
              />
              <div className="mt-8 space-y-6 text-slate-600 leading-relaxed">
                <p>{aboutContent.philosophy}</p>
                <p>{aboutContent.vision}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
