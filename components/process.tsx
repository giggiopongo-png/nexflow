"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const processSteps = [
  {
    num: "01",
    title: "Discovery",
    description:
      "Analizziamo insieme i tuoi processi attuali, identificando colli di bottiglia e opportunita di automazione.",
    time: "1-2 giorni",
  },
  {
    num: "02",
    title: "Strategia",
    description:
      "Progettiamo una soluzione su misura con architettura scalabile e integrazioni ottimizzate.",
    time: "2-3 giorni",
  },
  {
    num: "03",
    title: "Sviluppo",
    description:
      "Costruisco la tua automazione con codice pulito, testato e documentato per massima affidabilita.",
    time: "1-3 settimane",
  },
  {
    num: "04",
    title: "Deploy & Supporto",
    description:
      "Rilascio in produzione con monitoring attivo e supporto continuo per garantire prestazioni ottimali.",
    time: "Continuo",
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="processo"
      className="py-32 px-6 lg:px-12 bg-card/30"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-4 h-px bg-primary" />
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary">
            Processo
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[0.95] tracking-tight mb-16"
        >
          Come <em className="italic text-primary">lavoro</em>
        </motion.h2>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="bg-background p-8 md:p-12 group hover:bg-card/50 transition-colors duration-500"
            >
              {/* Large Number */}
              <span className="block font-serif text-7xl md:text-8xl font-light text-foreground/[0.03] leading-none mb-4 tracking-tight group-hover:text-primary/10 transition-colors duration-500">
                {step.num}
              </span>

              {/* Title */}
              <h3 className="font-serif text-xl md:text-2xl font-light mb-3 tracking-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-mono text-xs leading-relaxed text-muted-foreground mb-6">
                {step.description}
              </p>

              {/* Time */}
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-primary">
                {step.time}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
