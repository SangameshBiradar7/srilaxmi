"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <main>
      <section className="py-20 sm:py-28 bg-midnight">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Let&apos;s Connect
            </h1>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
              We would love to hear from you. Reach out to us for any queries,
              admissions, or collaborations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-display text-3xl font-semibold text-midnight mb-6">
                Get in Touch
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-sm">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-midnight mb-1">Address</h4>
                    <p className="text-sm text-slate-600">
                      Sri Lakshmi Vidyaniketan Educational Society, [Address
                      Placeholder]
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-sm">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-midnight mb-1">Email</h4>
                    <a
                      href="mailto:info@srilakshmividyaniketan.edu"
                      className="text-sm text-slate-600 hover:text-gold transition-colors"
                    >
                      info@srilakshmividyaniketan.edu
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-sm">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-midnight mb-1">Phone</h4>
                    <a
                      href="tel:+91-XXXXXXXXXX"
                      className="text-sm text-slate-600 hover:text-gold transition-colors"
                    >
                      +91-XXXXXXXXXX
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-ivory rounded-2xl p-6 sm:p-8 border border-slate-300/60 shadow-card">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-midnight mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-midnight mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-midnight mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                      placeholder="+91-XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-midnight mb-2">
                      Purpose
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors">
                      <option>General Inquiry</option>
                      <option>Admissions</option>
                      <option>Careers</option>
                      <option>Media</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-midnight mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
