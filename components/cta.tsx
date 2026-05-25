"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-32 px-6 lg:px-12 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-primary" />
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary">
            Pronto a iniziare?
          </span>
          <span className="w-8 h-px bg-primary" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-7xl font-light leading-[0.9] tracking-tight mb-8"
        >
          Trasforma il tuo
          <br />
          <em className="italic text-primary">business</em> oggi
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-xs leading-relaxed text-muted-foreground max-w-lg mx-auto mb-12"
        >
          Non lasciare che processi manuali rallentino la tua crescita.
          Automatizza, scala e concentrati su cio che conta davvero.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contatto"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-background font-mono text-xs tracking-[0.18em] uppercase hover:bg-transparent hover:text-primary border border-primary transition-all duration-300"
          >
            Prenota Consulenza
            <span className="w-4 h-px bg-current transition-all duration-300 group-hover:w-6" />
          </a>
          <a
            href="#servizi"
            className="group inline-flex items-center gap-3 px-10 py-5 border border-foreground/20 text-foreground font-mono text-xs tracking-[0.18em] uppercase hover:border-foreground/50 transition-all duration-300"
          >
            Scopri Servizi
          </a>
        </motion.div>
      </div>
    </section>
  );
}
