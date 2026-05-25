"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "E-commerce Automation",
    category: "Workflow",
    description:
      "Sistema completo di gestione ordini, inventario e spedizioni automatizzate per un e-commerce con 10k+ ordini mensili.",
    tags: ["Shopify", "Zapier", "Slack", "Notion"],
    result: "+40% efficienza",
  },
  {
    num: "02",
    title: "AI Customer Support",
    category: "Chatbot",
    description:
      "Chatbot intelligente che gestisce l'80% delle richieste clienti autonomamente, integrato con CRM e ticketing.",
    tags: ["GPT-4", "Intercom", "HubSpot"],
    result: "-60% ticket",
  },
  {
    num: "03",
    title: "Trading Bot",
    category: "Bot",
    description:
      "Bot di trading algoritmico con analisi tecnica avanzata e gestione del rischio automatizzata.",
    tags: ["Python", "Binance API", "TradingView"],
    result: "+25% ROI",
  },
  {
    num: "04",
    title: "Lead Generation Engine",
    category: "Data Pipeline",
    description:
      "Sistema di scraping e arricchimento lead con qualificazione automatica e integrazione CRM.",
    tags: ["Puppeteer", "Apollo", "Salesforce"],
    result: "3x lead qualificati",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="progetti" className="py-32 px-6 lg:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-4 h-px bg-primary" />
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary">
                Portfolio
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[0.95] tracking-tight"
            >
              Progetti <em className="italic text-primary">recenti</em>
            </motion.h2>
          </div>

          {/* Progress indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-2"
          >
            {projects.map((_, i) => (
              <div
                key={i}
                className={`h-px transition-all duration-500 ${
                  i === 0 ? "w-12 bg-primary" : "w-8 bg-border"
                }`}
              />
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative border border-border p-8 md:p-10 hover:border-primary/30 transition-colors duration-500 overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top Row */}
              <div className="flex items-start justify-between mb-8 relative z-10">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.num}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-primary px-2 py-1 border border-primary/30">
                    {project.category}
                  </span>
                </div>
                <ExternalLink
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="font-mono text-xs leading-relaxed text-muted-foreground mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wider text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Result */}
                <div className="pt-4 border-t border-border">
                  <span className="font-mono text-sm text-primary tracking-wider">
                    {project.result}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
