"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { newsItems } from "@/data/news";

export default function NewsPreview() {
  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="News & Updates"
          title="Latest From Our Community"
          subtitle="Stay informed about the latest happenings, achievements, and announcements."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {newsItems.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/news/${news.slug}`} className="block h-full">
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-300/60 shadow-card hover:shadow-premium transition-all duration-300 h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.headline}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-gold text-white rounded-full">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col">
                    <time className="text-xs text-slate-500 mb-3">
                      {news.date}
                    </time>
                    <h3 className="font-display text-lg font-semibold text-midnight mb-3 leading-snug group-hover:text-gold transition-colors">
                      {news.headline}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1 line-clamp-2">
                      {news.description}
                    </p>
                    <span className="text-sm font-semibold text-midnight group-hover:text-gold transition-colors inline-flex items-center">
                      Read More
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/news" variant="outline">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
}
