"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatCard({ value, label, className }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "bg-white/80 backdrop-blur-sm border border-slate-300/60 rounded-xl p-6 sm:p-8 shadow-card",
        className
      )}
    >
      <div className="text-3xl sm:text-4xl font-display font-bold text-gold mb-2">
        {value}
      </div>
      <div className="text-sm text-slate-600 leading-snug">{label}</div>
    </motion.div>
  );
}
