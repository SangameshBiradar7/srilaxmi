"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutContent } from "@/data/content";

export default function AboutPreview() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-premium">
              <Image
                src={aboutContent.image}
                alt="About Sri Lakshmi Vidyaniketan"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-gold/20 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <SectionHeading
              label="About Us"
              title={aboutContent.heading}
              align="left"
            />
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-base sm:text-lg">
                {aboutContent.subheading}
              </p>
              <p>{aboutContent.philosophy}</p>
              <p>{aboutContent.vision}</p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <Button href="/about" variant="primary">
                {aboutContent.ctaText}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
