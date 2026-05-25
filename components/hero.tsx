"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowDown } from "lucide-react";

const HeroScene = dynamic(
  () => import("./hero-scene").then((mod) => mod.HeroScene),
  { ssr: false }
);

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* 3D Background */}
      <HeroScene />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Top Section */}
        <div className="flex-1 flex items-end px-6 lg:px-12 pt-32 pb-12">
          <div className="max-w-7xl mx-auto w-full">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-8"
            >
              Automazione · AI · Bot su Misura
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.9] tracking-tight">
              <span className="overflow-hidden block">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block"
                >
                  Automatizza.
                </motion.span>
              </span>
              <span className="overflow-hidden block">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 1.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block"
                >
                  <em className="italic text-primary">Scala.</em>
                </motion.span>
              </span>
              <span className="overflow-hidden block">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block"
                >
                  Domina.
                </motion.span>
              </span>
            </h1>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/30">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.4 }}
                className="font-mono text-xs leading-relaxed text-muted-foreground max-w-xs"
              >
                Creo bot e automazioni personalizzate che trasformano il modo in
                cui gestisci il tuo business. Ogni soluzione e progettata per le
                tue esigenze specifiche.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.5 }}
                className="flex justify-start md:justify-center"
              >
                <a
                  href="#contatto"
                  className="group inline-flex items-center gap-3 px-8 py-4 border border-foreground/20 font-mono text-xs tracking-[0.18em] uppercase text-foreground hover:bg-primary hover:border-primary hover:text-background transition-all duration-300"
                >
                  Richiedi Preventivo
                  <span className="w-4 h-px bg-current transition-all duration-300 group-hover:w-6" />
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.6 }}
                className="flex flex-row md:flex-col items-start md:items-end gap-6"
              >
                <div className="text-right">
                  <span className="block font-serif text-2xl font-light">
                    50<em className="not-italic text-primary">+</em>
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
                    Automazioni
                  </span>
                </div>
                <div className="text-right">
                  <span className="block font-serif text-2xl font-light">
                    98<em className="not-italic text-primary">%</em>
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
                    Clienti Soddisfatti
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
