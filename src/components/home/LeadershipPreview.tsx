"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { leadershipContent } from "@/data/content";
import { Play } from "lucide-react";

export default function LeadershipPreview() {
  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-premium max-w-md mx-auto lg:mx-0">
              <Image
                src={leadershipContent.image}
                alt={leadershipContent.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/30 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <SectionHeading
              label="Leadership"
              title="Leadership Message"
              align="left"
            />
            <blockquote className="relative">
              <div className="absolute -left-4 top-0 text-6xl text-gold/20 font-display leading-none">
                &ldquo;
              </div>
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed pl-6 italic">
                {leadershipContent.quote}
              </p>
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div>
                <p className="font-display font-semibold text-midnight">
                  {leadershipContent.name}
                </p>
                <p className="text-sm text-slate-600">
                  {leadershipContent.designation}
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/leadership" variant="primary" size="sm">
                {leadershipContent.readMore}
              </Button>
              <Button variant="ghost" size="sm" className="!text-gold hover:!text-gold-premium">
                <Play size={16} className="mr-2" />
                {leadershipContent.watchAddress}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
