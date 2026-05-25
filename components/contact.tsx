"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  return (
    <section
      id="contatto"
      className="py-32 px-6 lg:px-12 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top line accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-4 h-px bg-primary" />
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary">
                Contatto
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[0.95] tracking-tight mb-8"
            >
              Iniziamo a<br />
              <em className="italic text-primary">costruire</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-xs leading-relaxed text-muted-foreground max-w-md mb-12"
            >
              Raccontami del tuo progetto. Ti rispondero entro 24 ore con una
              valutazione preliminare e una proposta personalizzata.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <div>
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground block mb-1">
                  Email
                </span>
                <a
                  href="mailto:ciao@nexflow.it"
                  className="font-mono text-sm text-foreground hover:text-primary transition-colors"
                >
                  ciao@nexflow.it
                </a>
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground block mb-1">
                  Risposta
                </span>
                <span className="font-mono text-sm text-foreground">
                  Entro 24 ore
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                >
                  <CheckCircle size={48} className="text-primary mb-6" />
                </motion.div>
                <h3 className="font-serif text-3xl font-light mb-4">
                  Messaggio inviato!
                </h3>
                <p className="font-mono text-xs text-muted-foreground">
                  Ti rispondero il prima possibile.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-3">
                    Nome
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Il tuo nome"
                    className="w-full bg-transparent border-0 border-b border-border py-3 font-sans text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="la@tua.email"
                    className="w-full bg-transparent border-0 border-b border-border py-3 font-sans text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-3">
                    Servizio
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full bg-transparent border-0 border-b border-border py-3 font-sans text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-background">
                      Seleziona un servizio
                    </option>
                    <option value="chatbot" className="bg-background">
                      Chatbot AI
                    </option>
                    <option value="workflow" className="bg-background">
                      Workflow Automation
                    </option>
                    <option value="api" className="bg-background">
                      Integrazioni API
                    </option>
                    <option value="social" className="bg-background">
                      Bot Social
                    </option>
                    <option value="data" className="bg-background">
                      Data Pipeline
                    </option>
                    <option value="other" className="bg-background">
                      Altro
                    </option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-3">
                    Budget indicativo
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full bg-transparent border-0 border-b border-border py-3 font-sans text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-background">
                      Seleziona range
                    </option>
                    <option value="500-1000" className="bg-background">
                      500 - 1.000
                    </option>
                    <option value="1000-2500" className="bg-background">
                      1.000 - 2.500
                    </option>
                    <option value="2500-5000" className="bg-background">
                      2.500 - 5.000
                    </option>
                    <option value="5000+" className="bg-background">
                      5.000+
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-3">
                    Messaggio
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Raccontami del tuo progetto..."
                    rows={4}
                    className="w-full bg-transparent border-0 border-b border-border py-3 font-sans text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex items-center gap-4 px-8 py-4 bg-primary text-background font-mono text-xs tracking-[0.18em] uppercase hover:bg-transparent hover:text-primary border border-primary transition-all duration-300"
                >
                  Invia Richiesta
                  <Send
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
