"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHeader({
  label,
  title,
  subtitle,
  backgroundImage = "/images/page-header.jpg",
}: PageHeaderProps) {
  return (
    <section className="relative py-20 sm:py-28 bg-midnight overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/90 to-midnight/70" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {label && (
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-gold border border-gold/30 rounded-full mb-6 bg-gold/5">
              {label}
            </span>
          )}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
