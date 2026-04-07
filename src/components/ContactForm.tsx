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
    const subject = `Enquiry: Maaisa Genesis - ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="max-w-4xl mx-auto p-12 glass shadow-elegant border border-primary/5">
      <div className="flex items-center gap-6 mb-12">
        <Mail className="text-primary w-12 h-12" />
        <h2 className="text-4xl md:text-5xl font-heading italic font-thin text-secondary">Let's Connect.</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] tracking-[0.3em] font-bold uppercase text-primary">Your Name</label>
            <input
              type="text"
              required
              className="w-full bg-surface/40 border-b border-primary/20 py-4 focus:border-primary focus:outline-none transition-all placeholder:text-tertiary/30 uppercase text-xs tracking-widest text-secondary"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] tracking-[0.3em] font-bold uppercase text-primary">Your Email</label>
            <input
              type="email"
              required
              className="w-full bg-surface/40 border-b border-primary/20 py-4 focus:border-primary focus:outline-none transition-all placeholder:text-tertiary/30 uppercase text-xs tracking-widest text-secondary"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] tracking-[0.3em] font-bold uppercase text-primary">Your Message</label>
          <textarea
            required
            rows={4}
            className="w-full bg-surface/40 border-b border-primary/20 py-4 focus:border-primary focus:outline-none transition-all placeholder:text-tertiary/30 uppercase text-xs tracking-widest text-secondary resize-none"
            placeholder="Tell us what you're looking for..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="group relative w-full overflow-hidden bg-primary py-6 flex items-center justify-center gap-4 transition-all duration-500 hover:bg-secondary"
        >
          <span className="relative z-10 text-[10px] tracking-[0.4em] uppercase font-bold text-on-primary group-hover:text-on-secondary transition-colors">Send Email Enquiry</span>
          <Send className="relative z-10 w-4 h-4 text-on-primary group-hover:text-on-secondary transition-all" />
          <span className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </button>
      </form>
      
      <p className="mt-12 text-center text-[10px] tracking-[0.2em] text-tertiary/50 uppercase">
        Or email us directly at <span className="text-primary italic">{CONTACT_EMAIL}</span>
      </p>
    </div>
  );
}
