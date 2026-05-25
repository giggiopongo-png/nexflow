"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Workflow, Zap, MessageSquare, Database, Shield } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Bot,
    name: "Chatbot AI",
    description: "Assistenti virtuali intelligenti che gestiscono clienti 24/7",
    price: "da 500",
  },
  {
    num: "02",
    icon: Workflow,
    name: "Workflow Automation",
    description: "Automatizza processi ripetitivi e risparmia ore ogni giorno",
    price: "da 300",
  },
  {
    num: "03",
    icon: Zap,
    name: "Integrazioni API",
    description: "Collega tutti i tuoi strumenti in un ecosistema unificato",
    price: "da 400",
  },
  {
    num: "04",
    icon: MessageSquare,
    name: "Bot Social",
    description: "Gestione automatica di Telegram, Discord, WhatsApp e altro",
    price: "da 350",
  },
  {
    num: "05",
    icon: Database,
    name: "Data Pipeline",
    description: "Estrai, trasforma e carica dati automaticamente",
    price: "da 600",
  },
  {
    num: "06",
    icon: Shield,
    name: "Manutenzione",
    description: "Supporto continuo e aggiornamenti per le tue automazioni",
    price: "da 100/mese",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servizi" className="py-32 px-6 lg:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-4 h-px bg-primary" />
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary">
                Servizi
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[0.95] tracking-tight"
            >
              Soluzioni
              <br />
              <em className="italic text-primary">su misura</em>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-end"
          >
            <p className="font-mono text-xs leading-relaxed text-muted-foreground max-w-md">
              Ogni business ha esigenze uniche. Analizzo i tuoi processi e creo
              automazioni personalizzate che si integrano perfettamente nel tuo
              flusso di lavoro esistente.
            </p>
          </motion.div>
        </div>

        {/* Services List */}
        <div className="border-t border-border">
          {services.map((service, index) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr_1fr_8rem] gap-4 md:gap-8 items-center py-6 border-b border-border relative overflow-hidden cursor-pointer"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-primary/[0.02] w-0 group-hover:w-full transition-all duration-500 ease-out" />

              {/* Number */}
              <span className="font-mono text-xs text-muted-foreground tracking-wider relative z-10">
                {service.num}
              </span>

              {/* Name with Icon */}
              <div className="flex items-center gap-4 relative z-10">
                <service.icon className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="font-serif text-xl md:text-2xl font-light tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {service.name}
                </span>
              </div>

              {/* Description - Hidden on mobile */}
              <p className="hidden md:block font-mono text-xs leading-relaxed text-muted-foreground relative z-10">
                {service.description}
              </p>

              {/* Price - Hidden on mobile */}
              <span className="hidden md:block font-mono text-sm text-primary text-right tracking-wider relative z-10">
                {service.price}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
