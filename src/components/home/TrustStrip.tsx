"use client";

import { motion } from "framer-motion";
import { trustValues } from "@/data/content";

export default function TrustStrip() {
  return (
    <section className="bg-white border-b border-slate-300/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 sm:gap-8 py-6 sm:py-8 overflow-x-auto">
          {trustValues.map((value, index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4 sm:gap-8 whitespace-nowrap"
            >
              <span className="text-sm sm:text-base font-medium text-slate-600 tracking-wide uppercase">
                {value}
              </span>
              {index < trustValues.length - 1 && (
                <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
