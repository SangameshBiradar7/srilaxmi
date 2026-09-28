"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { trustCompliance } from "@/data/content";
import {
  Flame,
  Shield,
  BookOpen,
  Award,
  FileText,
  Download,
  ExternalLink,
  Phone,
  Mail,
} from "lucide-react";
import DocumentModal from "./DocumentModal";

const iconMap: Record<string, React.ElementType> = {
  flame: Flame,
  shield: Shield,
  "book-open": BookOpen,
  award: Award,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function TrustCompliancePage() {
  const [selectedDoc, setSelectedDoc] = useState<{
    title: string;
    filePath: string;
    fileType: string;
    fileName: string;
  } | null>(null);

  return (
    <main>
      <PageHeader
        label="Institutional Documents"
        title={trustCompliance.heading}
        subtitle={trustCompliance.subtitle}
      />

      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16 sm:mb-20"
          >
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {trustCompliance.intro}
            </p>
          </motion.div>

          <SectionHeading
            label="Official Documents"
            title="Certifications & Approvals"
            subtitle="Browse our official institutional documents below."
            align="center"
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {trustCompliance.documents.map((doc) => {
              const Icon = iconMap[doc.icon] || FileText;
              return (
                <motion.div
                  key={doc.id}
                  variants={item}
                  className="group bg-ivory rounded-2xl p-6 sm:p-8 border border-slate-300/60 shadow-card hover:shadow-premium hover:border-gold/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-midnight/5 border border-midnight/10 flex items-center justify-center text-midnight group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-colors duration-300">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-midnight mb-1.5 group-hover:text-midnight-deep transition-colors">
                        {doc.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-5">
                        {doc.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() =>
                            setSelectedDoc({
                              title: doc.title,
                              filePath: doc.filePath,
                              fileType: doc.fileType,
                              fileName: doc.fileName,
                            })
                          }
                          className="inline-flex items-center justify-center gap-2"
                        >
                          <ExternalLink size={16} />
                          View Certificate
                        </Button>
                        <a
                          href={doc.filePath}
                          download={doc.fileName}
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-md border border-slate-300 text-midnight bg-transparent hover:bg-midnight/5 transition-colors"
                        >
                          <Download size={16} />
                          Download PDF
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-ivory border-t border-slate-300/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                title="Need More Information?"
                subtitle="Contact Sri Lakshmi Vidyaniketan Educational Society for any queries regarding institutional documents and compliance."
                align="left"
              />
              <div className="mt-8 space-y-4">
                <a
                  href="mailto:info@srilakshmividyaniketan.edu"
                  className="flex items-center gap-3 text-slate-600 hover:text-gold transition-colors"
                >
                  <Mail size={20} className="text-gold flex-shrink-0" />
                  <span>info@srilakshmividyaniketan.edu</span>
                </a>
                <a
                  href="tel:+91-XXXXXXXXXX"
                  className="flex items-center gap-3 text-slate-600 hover:text-gold transition-colors"
                >
                  <Phone size={20} className="text-gold flex-shrink-0" />
                  <span>+91-XXXXXXXXXX</span>
                </a>
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-premium bg-midnight/5 border border-slate-300/60 flex items-center justify-center">
                <div className="text-center p-8">
                  <FileText size={48} className="text-gold mx-auto mb-4" strokeWidth={1} />
                  <p className="font-display text-xl font-semibold text-midnight mb-2">
                    Official Records
                  </p>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    All documents are maintained for public reference and transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DocumentModal
        isOpen={!!selectedDoc}
        onClose={() => setSelectedDoc(null)}
        doc={selectedDoc}
      />
    </main>
  );
}
