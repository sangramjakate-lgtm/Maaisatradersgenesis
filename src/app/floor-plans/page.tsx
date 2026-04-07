"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, Ruler, Sun, Layout } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FloorPlans() {
  return (
    <main className="pt-32 bg-surface-lowest">
      {/* Floor Plans Hero */}
      <section className="px-6 md:px-24 mb-64 flex flex-col md:flex-row items-center justify-between text-left">
        <div className="max-w-4xl z-10">
          <ScrollReveal animation="blur-fade">
             <span className="text-[10px] tracking-[0.6em] uppercase text-primary mb-6 block font-bold">
               Precision Blueprints
             </span>
          </ScrollReveal>
          
          <ScrollReveal animation="line-mask" delay={0.2} className="mb-12">
            <h1 className="text-6xl md:text-[8rem] font-heading font-extralight leading-[1.05] text-secondary">
              Architectural <br />
              <span className="italic font-thin text-primary">Integrity.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="blur-fade" delay={0.8} className="max-w-2xl">
             <p className="text-xl text-tertiary font-light leading-relaxed mb-12 border-l border-primary/30 pl-8 font-body">
                Every residence in Maaisa Genesis is a dialogue between precision engineering and organic luxury. Discover layouts designed to capture natural light and framed horizons.
             </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid: The Collection */}
      <section className="px-6 md:px-24 py-32 bg-surface-low overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-32">
           <ScrollReveal animation="blur-fade">
              <h2 className="text-5xl md:text-7xl font-heading text-secondary italic font-thin mb-8">Selected Suites.</h2>
           </ScrollReveal>
           <div className="text-right">
              <span className="text-[10px] tracking-[0.2em] uppercase text-tertiary/50">Current Availability</span>
              <p className="text-3xl font-heading text-primary italic">12/48 Units</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5 shadow-elegant">
          {[
            { id: "A-04", name: "The Meridian Suite", type: "2 Bedroom", sq: "1,450", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" },
            { id: "B-12", name: "Sky Garden Loft", type: "3 Bedroom", sq: "2,100", img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop", offset: true },
            { id: "C-02", name: "The Atelier", type: "1 Bedroom", sq: "850", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop" }
          ].map((plan, i) => (
            <ScrollReveal 
              key={plan.id}
              animation="scale-fade"
              delay={i * 0.1}
              className={cn("bg-surface-lowest p-12 group cursor-pointer", plan.offset && "lg:translate-y-12")}
            >
              <div className="aspect-[4/5] bg-surface-lowest overflow-hidden mb-12 relative border border-white/5 group-hover:border-primary/20 transition-all duration-500 shadow-elegant">
                <img
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms]"
                  alt={plan.name}
                  src={plan.img}
                />
                <div className="absolute top-8 left-8 border border-primary/30 p-2 glass">
                  <span className="text-[10px] tracking-[0.2em] font-bold text-primary uppercase">Residence {plan.id}</span>
                </div>
              </div>
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-2xl font-heading font-thin mb-2 text-secondary italic">{plan.name}</h3>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-tertiary group-hover:text-primary transition-colors">{plan.type} Residence</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-heading text-primary font-bold">{plan.sq} <span className="text-[10px] font-normal not-italic">SQ. FT.</span></p>
                </div>
              </div>
              <button className="w-full py-4 glass border border-primary/20 text-[10px] tracking-[0.4em] uppercase font-bold text-primary hover:bg-primary hover:text-on-primary transition-all">Details</button>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Spotlight: The Penthouse Suite */}
      <section className="py-64 px-6 md:px-24 bg-surface-lowest relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-32 items-center">
           <div className="lg:w-1/2">
              <ScrollReveal animation="clip" className="aspect-video relative group shadow-elegant">
                 <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                  alt="Penthouse"
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-1000"
                 />
                 <div className="absolute -inset-10 border border-primary/5 pointer-events-none hidden md:block" />
              </ScrollReveal>
           </div>
           
           <div className="lg:w-1/2 text-left">
              <ScrollReveal animation="blur-fade">
                <span className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold mb-6 block">Limited Release</span>
                <h2 className="text-5xl md:text-7xl font-heading italic text-secondary font-thin mb-12">The Penthouse Suite.</h2>
                <p className="text-tertiary text-lg font-light leading-relaxed mb-12 italic border-l border-primary/30 pl-8">
                  Occupying the entire 48th floor, the Genesis Penthouse features a private rooftop garden, a 360-degree infinity pool, and dedicated elevator access.
                </p>
                
                <div className="grid grid-cols-2 gap-16 mb-16">
                   <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-tertiary mb-2 font-bold font-heading">Area</p>
                      <p className="text-3xl font-heading text-secondary font-thin italic">5,800 SQ. FT.</p>
                   </div>
                   <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-tertiary mb-2 font-bold font-heading">Elevation</p>
                      <p className="text-3xl font-heading text-secondary font-thin italic">48th Floor</p>
                   </div>
                </div>
                
                <button className="bg-primary text-on-primary px-16 py-6 font-bold tracking-[0.4em] uppercase text-xs hover:bg-secondary hover:text-on-secondary transition-all shadow-elegant">
                   Inquire Privately
                </button>
              </ScrollReveal>
           </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-64 bg-surface-low px-6 md:px-24">
        <div className="max-w-4xl mx-auto text-left">
           <ScrollReveal animation="blur-fade">
              <h2 className="text-4xl md:text-6xl font-heading italic text-secondary font-thin mb-16 leading-tight">Architecture is the <br /><span className="text-primary not-italic">will of an epoch</span> translated into space.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                 {[
                   { icon: Ruler, title: "Optimized Flow", desc: "Zero-wastage corridors and smart storage solutions built into every wall." },
                   { icon: Sun, title: "Heliotropic", desc: "Window placements calculated by seasonal solar path for maximum natural warmth." }
                 ].map((item) => (
                   <div key={item.title} className="flex gap-8 group">
                      <item.icon className="w-10 h-10 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                         <h4 className="text-[10px] tracking-[0.3em] font-bold uppercase text-secondary mb-4">{item.title}</h4>
                         <p className="text-sm text-tertiary font-body italic leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
