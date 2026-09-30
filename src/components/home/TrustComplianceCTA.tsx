"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { trustCompliance } from "@/data/content";

export default function TrustComplianceCTA() {
  return (
    <section className="py-20 sm:py-28 bg-ivory border-t border-slate-300/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-midnight leading-tight mb-6">
              Recognized. Compliant. Trusted.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Explore our institutional certifications, safety documents and official recognition records.
            </p>
            <Button href="/about/mandatory-documents" variant="primary" size="lg">
              View Institutional Documents
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
