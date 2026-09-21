"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function AdmissionsPage() {
  return (
    <main>
      <section className="relative py-20 sm:py-28 bg-midnight overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Begin Your Journey
            </h1>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
              Discover the opportunities available across the Sri Lakshmi
              Vidyaniketan community. Take the first step toward a transformative
              educational experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="#" size="lg" variant="gold">
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

      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Application Process",
                description:
                  "Learn about our streamlined application process and important deadlines.",
              },
              {
                title: "Scholarships & Aid",
                description:
                  "Explore financial assistance options available to deserving students.",
              },
              {
                title: "Campus Visits",
                description:
                  "Schedule a visit to experience our campus and community firsthand.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-ivory rounded-2xl p-8 border border-slate-300/60"
              >
                <h3 className="font-display text-xl font-semibold text-midnight mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
                <Button href="#" variant="primary" size="sm">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
