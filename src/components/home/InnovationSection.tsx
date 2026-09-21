"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export default function InnovationSection() {
  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              label="Innovation"
              title="Preparing Tomorrow's Thinkers"
              subtitle="Fostering a culture of innovation, research, and interdisciplinary learning."
              align="left"
            />
            <div className="space-y-6 text-slate-600 leading-relaxed mt-8">
              <p>
                We invest in cutting-edge infrastructure and forward-thinking
                pedagogy to prepare students for the challenges of tomorrow.
              </p>
              <p>
                From advanced laboratories to collaborative research spaces, our
                innovation ecosystem empowers students to explore, experiment,
                and excel.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/academics" variant="primary">
                Explore Innovation
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-premium">
              <Image
                src="/images/innovation.jpg"
                alt="Innovation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-premium p-4 sm:p-6 max-w-xs">
              <div className="text-2xl font-display font-bold text-gold mb-1">
                50+
              </div>
              <div className="text-sm text-slate-600">Research Projects</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
