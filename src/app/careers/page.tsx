"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CareersPage() {
  return (
    <main>
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-midnight leading-tight mb-6">
              Build the Future With Us
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Join a community committed to meaningful education and continuous
              learning. Be part of a legacy that shapes minds and inspires
              futures.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="#" size="lg" variant="primary">
                View Opportunities
              </Button>
              <Button href="#" size="lg" variant="outline">
                Meet Our Community
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
