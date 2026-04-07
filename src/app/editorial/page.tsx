"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

export default function Editorial() {
  return (
    <main className="pt-32 bg-surface-lowest overflow-hidden">
      {/* Editorial Hero */}
      <section className="relative px-6 md:px-24 mb-64 flex flex-col md:flex-row items-center justify-between text-left">
        <div className="max-w-2xl z-10">
          <ScrollReveal animation="blur-fade">
             <span className="text-[10px] tracking-[0.6em] uppercase text-primary mb-6 block font-bold">
               Visionary Manifesto
             </span>
          </ScrollReveal>
          
          <ScrollReveal animation="line-mask" delay={0.2} className="mb-12">
            <h1 className="text-6xl md:text-[7rem] font-heading font-extralight leading-[1.05] text-secondary drop-shadow-sm">
              The Digital <br />
              <span className="italic font-thin text-primary">Estate.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="blur-fade" delay={0.8} className="max-w-md">
             <p className="text-xl text-tertiary font-light leading-relaxed mb-12 border-l border-primary/30 pl-8 font-body italic">
                We are not building a website; we are curating a gallery. This system rejects the rigid constraints of traditional real estate portals.
             </p>
             <div className="flex items-center gap-12 group cursor-pointer">
                <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-primary">Read Philosophy</span>
                <div className="w-12 h-12 flex items-center justify-center border border-primary/20 rounded-full group-hover:bg-primary group-hover:text-on-primary transition-all duration-500">
                    <Plus className="w-4 h-4" />
                </div>
             </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="clip" delay={0.5} className="relative mt-24 md:mt-0 md:-mr-48">
          <div className="w-full md:w-[800px] aspect-[4/5] md:aspect-[3/4] bg-surface-low overflow-hidden shadow-elegant">
            <img
              alt="Editorial Architecture"
              className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-110 grayscale brightness-75"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
          {/* Overlapping Detail Glass */}
          <div className="absolute top-1/2 left-0 -translate-x-12 translate-y-24 glass p-12 w-[300px] hidden lg:block shadow-elegant">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary mb-2 block font-bold font-heading">The Material</span>
            <p className="text-sm font-bold text-secondary mb-4 uppercase tracking-widest">Carrara & Oak</p>
            <p className="text-xs text-tertiary leading-relaxed">Honest materiality defined by the texture of timeless precision. Every surface is a dialogue between light and shadow.</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Asymmetric Typography Feature */}
      <section className="py-64 bg-surface-low px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-4 order-2 lg:order-1 text-left">
            <ScrollReveal animation="blur-fade" className="mb-12">
               <h2 className="text-5xl font-heading text-secondary mb-12 italic font-thin leading-tight">Quiet <br />Luxury.</h2>
               <p className="text-tertiary font-body font-light leading-relaxed mb-8">
                  Where the interface recedes to let the properties speak. Utilizing intentional asymmetry and expansive whitespace.
               </p>
               <p className="text-tertiary/50 font-body font-light leading-relaxed text-sm italic">
                  Mimicking the physical experience of leafing through a prestige architectural monograph. Whitespace is the true luxury.
               </p>
            </ScrollReveal>
            
            <div className="space-y-1px bg-white/5 mt-16 shadow-elegant">
               {[
                 { label: "Language", value: "Editorial" },
                 { label: "Tone", value: "Maaisa Manifesto" },
                 { label: "Grid", value: "Deconstructed" }
               ].map((item) => (
                 <div key={item.label} className="bg-surface-lowest p-6 flex justify-between items-center group cursor-pointer hover:bg-surface-low transition-colors">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-tertiary group-hover:text-primary transition-colors">{item.label}</span>
                    <span className="text-xs font-heading text-secondary font-bold uppercase tracking-widest">{item.value}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:col-span-8 order-1 lg:order-2">
             <ScrollReveal animation="scale-fade" className="aspect-[16/9] relative md:translate-x-24">
                <img
                  alt="Minimalist View"
                  className="w-full h-full object-cover shadow-elegant brightness-90"
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                />
                <div className="absolute -inset-10 border border-primary/5 pointer-events-none hidden md:block" />
             </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Corporate Identity - The Group */}
      <section className="bg-surface-lowest text-secondary py-64 px-6 md:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end relative z-10 gap-16 text-left">
           <div>
              <ScrollReveal animation="blur-fade" className="mb-8">
                <h3 className="text-4xl md:text-6xl font-heading mb-8 italic font-thin text-primary">The Maaisa Legacy.</h3>
                <p className="text-tertiary max-w-sm font-body font-light text-lg italic border-l border-primary/20 pl-8">
                  Exclusive curation and management of the world's most innovative residential destinations. We do not sell; we welcome.
                </p>
              </ScrollReveal>
           </div>
           
           <ScrollReveal animation="blur-fade" delay={0.4}>
              <button className="relative group px-12 py-6 bg-primary text-on-primary font-bold text-xs tracking-[0.4em] uppercase overflow-hidden">
                 <span className="relative z-10">Private Collaboration</span>
                 <span className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
           </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
