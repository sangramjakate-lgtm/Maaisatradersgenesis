"use client";

import { useState, FormEvent } from "react";
import { Send, User, ShieldCheck, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const CONTACT_EMAIL = "info@maaisa.com";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [activeField, setActiveField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    const subject = `Enquiry: Maaisa Reality — ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSubmitting(false);
  };

  const fields = [
    { id: "name", label: "Your Name", type: "text", icon: User, placeholder: "Full Name" },
    { id: "email", label: "Email Address", type: "email", icon: ShieldCheck, placeholder: "you@example.com" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="relative w-full bg-background border border-black/8 shadow-elegant p-6 sm:p-10 overflow-hidden"
    >
      {/* Subtle accent blob */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary/3 rounded-full blur-2xl pointer-events-none" />

      <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
        {/* Name + Email row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fields.map((field) => (
            <div key={field.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor={field.id} className="text-[9px] tracking-[0.4em] font-bold text-tertiary uppercase">
                  {field.label}
                </label>
                <field.icon
                  size={11}
                  className={cn("transition-colors duration-300", activeField === field.id ? "text-primary" : "text-black/10")}
                />
              </div>
              <div className="relative">
                <input
                  id={field.id}
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  value={formData[field.id as "name" | "email"]}
                  onFocus={() => setActiveField(field.id)}
                  onBlur={() => setActiveField(null)}
                  onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                  className="w-full bg-surface-low border border-black/8 rounded-sm px-5 py-4 text-sm text-foreground placeholder:text-tertiary/40 focus:outline-none focus:border-primary transition-all"
                />
                {/* Underline indicator */}
                <div
                  className={cn(
                    "absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500",
                    activeField === field.id ? "w-full" : "w-0"
                  )}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Message */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="message" className="text-[9px] tracking-[0.4em] font-bold text-tertiary uppercase">
              Your Message
            </label>
            <MessageSquare
              size={11}
              className={cn("transition-colors duration-300", activeField === "message" ? "text-primary" : "text-black/10")}
            />
          </div>
          <div className="relative">
            <textarea
              id="message"
              required
              rows={5}
              placeholder="Tell us about your interest or requirements..."
              value={formData.message}
              onFocus={() => setActiveField("message")}
              onBlur={() => setActiveField(null)}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-surface-low border border-black/8 rounded-sm px-5 py-4 text-sm text-foreground placeholder:text-tertiary/40 focus:outline-none focus:border-primary transition-all resize-none"
            />
            <div
              className={cn(
                "absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500",
                activeField === "message" ? "w-full" : "w-0"
              )}
            />
          </div>
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="group relative w-full overflow-hidden bg-primary py-5 flex items-center justify-center gap-4 transition-all shadow-elegant hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
        >
          <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <span className="relative z-10 text-[11px] tracking-[0.4em] font-bold text-on-primary uppercase">
            {isSubmitting ? "Sending..." : "Send Enquiry"}
          </span>
          <AnimatePresence mode="wait">
            {!isSubmitting ? (
              <motion.div key="icon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Send className="relative z-10 w-4 h-4 text-on-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.div>
            ) : (
              <motion.div key="spin" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                <div className="w-4 h-4 border-2 border-on-primary/30 border-t-on-primary rounded-full" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        <p className="text-center text-[10px] text-tertiary/50 tracking-[0.3em] uppercase">
          Or call us: <a href="tel:+919890200222" className="text-primary hover:underline">+91 98902 00222</a>
        </p>
      </form>
    </motion.div>
  );
}
