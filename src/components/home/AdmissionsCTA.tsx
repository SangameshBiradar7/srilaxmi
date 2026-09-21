"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function AdmissionsCTA() {
  return (
    <section className="py-20 sm:py-28 bg-midnight relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
            Begin Your Journey
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
            Discover the opportunities available across the Sri Lakshmi
            Vidyaniketan community. Take the first step toward a transformative
            educational experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/admissions" size="lg" variant="gold">
              Explore Admissions
            </Button>
            <Button
              href="#"
              size="lg"
              variant="secondary"
              className="!border-white/20 !text-white hover:!bg-white/10"
            >
              Download Prospectus
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
