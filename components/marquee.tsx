"use client";

import { motion } from "framer-motion";

const marqueeItems = [
  "Chatbot AI",
  "Workflow Automation",
  "API Integration",
  "Data Pipeline",
  "Bot Trading",
  "CRM Automation",
  "Lead Generation",
  "Social Bot",
  "E-commerce",
  "Analytics",
];

export function Marquee() {
  return (
    <div className="border-y border-border py-4 overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              {item}
            </span>
            <span className="text-primary text-sm">*</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
