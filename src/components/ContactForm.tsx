"use client";

import { useState, FormEvent } from "react";
import { Send, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "info@maaisa.com";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Enquiry: Maaisa Reality Genesis - ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-4xl mx-auto p-6 md:p-14 lg:p-20 bg-white/40 backdrop-blur-3xl shadow-elegant border border-primary/5 uppercase font-black text-[10px] tracking-widest text-foreground relative overflow-hidden"
    >
      {/* Subtle Brand Monogram Watermark */}
      <div className="absolute -bottom-10 -right-10 md:-bottom-20 md:-right-20 opacity-[0.03] pointer-events-none select-none">
         <span className="text-[12rem] md:text-[20rem] font-heading font-black leading-none">M.</span>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 mb-12 md:mb-16 relative z-10">
        <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10 shadow-elegant">
           <Mail className="text-primary w-6 h-6 md:w-10 md:h-10 animate-pulse" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-black tracking-tighter leading-none">secure your <br className="hidden sm:block" /><span className="text-primary/40 italic font-light lowercase">interaction.</span></h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-5">
            <label className="text-[9px] tracking-[0.5em] font-black text-primary">Identity Access</label>
            <input
              type="text"
              required
              className="w-full bg-transparent border-b-2 border-black/5 py-5 focus:border-primary focus:outline-none transition-all placeholder:text-tertiary/10 text-[12px] tracking-[0.2em] font-black uppercase"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-5">
            <label className="text-[9px] tracking-[0.5em] font-black text-primary">Digital Axis</label>
            <input
              type="email"
              required
              className="w-full bg-transparent border-b-2 border-black/5 py-5 focus:border-primary focus:outline-none transition-all placeholder:text-tertiary/10 text-[12px] tracking-[0.2em] font-black uppercase"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-5">
          <label className="text-[9px] tracking-[0.5em] font-black text-primary">Inquiry Vision</label>
          <textarea
            required
            rows={4}
            className="w-full bg-transparent border-b-2 border-black/5 py-5 focus:border-primary focus:outline-none transition-all placeholder:text-tertiary/10 text-[12px] tracking-[0.2em] font-black uppercase resize-none"
            placeholder="Describe your sanctuary..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="group relative w-full overflow-hidden bg-primary py-8 flex items-center justify-center gap-6 transition-all duration-500 hover:shadow-glow shadow-elegant"
        >
          <div className="absolute inset-0 bg-primary-glow translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" />
          <span className="relative z-10 text-[11px] tracking-[0.6em] font-black text-on-primary">Transmit Enquiry</span>
          <Send className="relative z-10 w-5 h-5 text-on-primary group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
        </motion.button>
      </form>
      
      <p className="mt-16 text-center text-[10px] tracking-[0.4em] text-tertiary/30">
        Primary Coordinate: <span className="text-primary italic font-light lowercase">info@maaisa.com</span>
      </p>
    </motion.div>
  );
}
