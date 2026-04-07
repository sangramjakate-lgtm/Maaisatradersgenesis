"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Waves, Heart, Dumbbell, Zap } from "lucide-react";

export default function Amenities() {
  return (
    <main className="pt-32 bg-surface-lowest">
      {/* Amenities Hero */}
      <section className="relative h-[80vh] flex items-center px-6 md:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ScrollReveal animation="image-parallax" className="h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ae6b91839d2?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Pool"
              className="parallax-img w-full h-[120%] object-cover grayscale brightness-50"
            />
          </ScrollReveal>
          <div className="absolute inset-0 bg-gradient-to-r from-surface-lowest via-surface-lowest/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-3xl text-left">
          <ScrollReveal animation="blur-fade">
            <span className="inline-block mb-8 text-primary font-bold text-[10px] tracking-[0.5em] uppercase">
              The Elysian Lifestyle
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="line-mask" delay={0.2} className="mb-12">
            <h1 className="text-6xl md:text-[8rem] font-heading leading-[1] text-secondary mb-12 italic font-thin">
              Curated <br />Living.
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="blur-fade" delay={0.6} className="max-w-md">
            <p className="text-tertiary text-lg font-light leading-relaxed mb-12 border-l border-primary/30 pl-8 font-body">
              A masterclass in residential wellness, Maaisa Genesis redefines luxury through an editorial lens of space, light, and materiality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Infinity Horizon */}
      <section className="py-64 px-6 md:px-24 bg-surface-lowest relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-7 relative">
            <ScrollReveal animation="clip" delay={0.2} className="aspect-video relative group overflow-hidden shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1519449556851-5720b33024e7?q=80&w=2070&auto=format&fit=crop"
                alt="Infinity Pool"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute -inset-10 border border-primary/10 pointer-events-none hidden md:block" />
            </ScrollReveal>
          </div>
          
          <div className="lg:col-span-5 text-left">
            <ScrollReveal animation="blur-fade">
              <div className="mb-8 flex items-center gap-6">
                <Waves className="text-primary w-12 h-12" />
                <div className="h-[1px] w-24 bg-primary/20" />
              </div>
              <h2 className="text-5xl font-heading text-secondary mb-8 italic font-thin">The Infinity <br />Horizon</h2>
              <p className="text-tertiary text-lg leading-relaxed mb-12 font-body font-light">
                Suspended 40 stories above the city, the rooftop infinity pool is a sanctuary of liquid glass. Designed with Italian marble and a seamless edge that disappears into the sky.
              </p>
              
              <ul className="space-y-6">
                {["25-Meter Heated Lap Lane", "Private Sun Cabanas", "Observation Deck"].map((item) => (
                  <li key={item} className="flex items-center gap-6 group">
                     <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                     <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-secondary/60 group-hover:text-primary transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Kinetic Studio - Bento Visual */}
      <section className="py-64 px-6 md:px-24 bg-surface-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8 text-left">
            <ScrollReveal animation="blur-fade">
              <span className="text-primary font-bold text-[10px] tracking-[0.5em] uppercase mb-4 block">Holistic Wellness</span>
              <h2 className="text-5xl md:text-7xl font-heading text-secondary italic font-thin">The Kinetic Studio.</h2>
            </ScrollReveal>
            <ScrollReveal animation="blur-fade" delay={0.2} className="max-w-md">
              <p className="text-tertiary font-body font-light leading-relaxed italic border-l border-primary/10 pl-8">
                Precision-engineered for the modern athlete. Technogym equipment meets a spa-inspired atmosphere of cedar wood and diffused lighting.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5 shadow-elegant">
            <ScrollReveal animation="scale-fade" className="lg:col-span-2 aspect-video relative group overflow-hidden p-1">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
                alt="Gym"
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute bottom-12 left-12 glass p-8 shadow-elegant">
                 <span className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold block mb-2">High Performance</span>
                 <h3 className="text-2xl font-heading text-secondary italic">Core Arena.</h3>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="scale-fade" delay={0.1} className="aspect-square relative overflow-hidden bg-surface-lowest flex flex-col justify-center p-12 hover:bg-surface-high transition-colors">
               <Heart className="w-12 h-12 text-primary mb-8" />
               <h3 className="text-2xl font-heading font-thin text-secondary mb-4 italic">Bespoke Recovery.</h3>
               <p className="text-xs text-tertiary leading-relaxed uppercase tracking-widest font-bold">Cryotherapy • Sauna • Steam</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience CTA */}
      <section className="relative py-64 py-40 overflow-hidden text-center bg-surface-lowest">
        <ScrollReveal animation="blur-fade">
           <h2 className="text-5xl md:text-[10rem] font-heading font-thin leading-none text-secondary opacity-5 pointer-events-none mb-12 select-none">EXPERIENCE</h2>
           <div className="relative z-10 -mt-24">
              <h2 className="text-4xl md:text-6xl font-heading italic text-primary font-thin mb-16">Genesis.</h2>
              <button className="bg-primary text-on-primary px-16 py-6 font-bold tracking-[0.4em] uppercase text-xs hover:bg-secondary hover:text-on-secondary transition-all shadow-elegant">
                 Schedule a Private Tour
              </button>
           </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
