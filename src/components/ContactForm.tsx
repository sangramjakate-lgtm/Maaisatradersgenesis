"use client";

import { useState, FormEvent } from "react";
import { Send, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div className="max-w-4xl mx-auto p-12 glass shadow-elegant border border-primary/5 uppercase font-black text-[10px] tracking-widest text-foreground">
      <div className="flex items-center gap-6 mb-12">
        <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10">
           <Mail className="text-primary w-8 h-8" />
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter leading-none">secure your <br/><span className="text-primary/40 italic font-light lowercase">connect.</span></h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <label className="text-[9px] tracking-[0.4em] font-black text-primary">Full Name</label>
            <input
              type="text"
              required
              className="w-full bg-transparent border-b border-black/10 py-4 focus:border-primary focus:outline-none transition-all placeholder:text-tertiary/20 text-[11px] tracking-widest font-black uppercase"
              placeholder="Your Identity"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-4">
            <label className="text-[9px] tracking-[0.4em] font-black text-primary">Email Axis</label>
            <input
              type="email"
              required
              className="w-full bg-transparent border-b border-black/10 py-4 focus:border-primary focus:outline-none transition-all placeholder:text-tertiary/20 text-[11px] tracking-widest font-black uppercase"
              placeholder="Your Connect"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-[9px] tracking-[0.4em] font-black text-primary">Your Vision</label>
          <textarea
            required
            rows={4}
            className="w-full bg-transparent border-b border-black/10 py-4 focus:border-primary focus:outline-none transition-all placeholder:text-tertiary/20 text-[11px] tracking-widest font-black uppercase resize-none"
            placeholder="Tell us what you seek in Genesis..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="group relative w-full overflow-hidden bg-primary py-7 flex items-center justify-center gap-4 transition-all duration-500 hover:shadow-glow shadow-elegant"
        >
          <div className="absolute inset-0 bg-primary-glow translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
          <span className="relative z-10 text-[10px] tracking-[0.5em] font-black text-on-primary">Initiate Contact</span>
          <Send className="relative z-10 w-4 h-4 text-on-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </button>
      </form>
      
      <p className="mt-12 text-center text-[9px] tracking-[0.3em] text-tertiary/40">
        Direct Line: <span className="text-primary italic font-light lowercase">info@maaisa.com</span>
      </p>
    </div>
  );
}
