"use client";

import { motion } from "framer-motion";
import { ChevronRight, Maximize2, Minimize2, Plus } from "lucide-react";

export default function EditorialPage() {
  return (
    <main className="pt-32 overflow-hidden bg-surface-container-lowest font-body">
      {/* Editorial Hero */}
      <section className="relative px-6 md:px-24 mb-64 flex flex-col md:flex-row items-center justify-between text-left">
        <div className="max-w-2xl z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] tracking-[0.6em] uppercase text-tertiary mb-6 block font-bold"
          >
            Maaisa Genesis Vision 2024
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-[6rem] font-heading font-light leading-[1.1] text-primary mb-12 drop-shadow-sm"
          >
            The Digital <br />
            <span className="italic font-thin">Estate.</span>
          </motion.h1>
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.5 }}
             className="max-w-md"
          >
             <p className="text-xl text-on-surface-variant font-light leading-relaxed mb-8 border-l-[0.5px] border-outline-variant/30 pl-8 font-body italic">
                We are not building a website; we are curating a gallery. This system rejects the rigid constraints of traditional real estate portals.
             </p>
             <div className="flex items-center gap-12 group cursor-pointer">
                <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-primary">Read Philosophy</span>
                <div className="w-12 h-12 flex items-center justify-center border border-outline-variant/30 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Plus className="w-4 h-4" />
                </div>
             </div>
          </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative mt-24 md:mt-0 md:-mr-48"
        >
          <div className="w-full md:w-[800px] aspect-[4/5] md:aspect-[3/4] bg-surface-container-high overflow-hidden shadow-2xl">
            <img
              alt="Editorial Architecture"
              className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
          {/* Overlapping Detail Glass */}
          <div className="absolute top-1/2 left-0 -translate-x-12 translate-y-24 bg-white/70 backdrop-blur-3xl p-12 w-[300px] border border-white/20 hidden lg:block shadow-elegant">
            <span className="text-[10px] tracking-[0.3em] uppercase text-tertiary mb-2 block font-bold">Materials</span>
            <p className="text-sm font-bold text-primary mb-4 uppercase">Carrara Marble & Aged Brass</p>
            <p className="text-xs text-on-surface-variant leading-relaxed">Honest materiality defined by the texture of timeless precision.</p>
          </div>
        </motion.div>
      </section>

      {/* Quiet Luxury - Asymmetric Feature */}
      <section className="py-32 bg-surface-container-low px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-4 order-2 lg:order-1 text-left">
            <div className="mb-12">
               <h2 className="text-5xl font-heading text-primary mb-8 italic">Quiet Luxury</h2>
               <p className="text-on-surface-variant font-body font-light leading-relaxed mb-6">
                  Where the interface recedes to let the properties speak. Utilizing intentional asymmetry and expansive whitespace.
               </p>
               <p className="text-on-surface-variant font-body font-light leading-relaxed opacity-60">
                  Mimicking the physical experience of leafing through a prestige architectural monograph. Whitespace is a luxury.
               </p>
            </div>
            <div className="space-y-1px bg-outline-variant/20">
               {[
                 { label: "Design Language", value: "Editorial" },
                 { label: "Typographic Voice", value: "Noto / Jakarta" },
                 { label: "Visual Grid", value: "Broken Minimalist" }
               ].map((item) => (
                 <div key={item.label} className="bg-surface-container-low py-6 flex justify-between items-center">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-500">{item.label}</span>
                    <span className="text-sm font-heading text-primary font-bold uppercase">{item.value}</span>
                 </div>
               ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 order-1 lg:order-2"
          >
             <div className="aspect-[16/9] relative md:translate-x-24">
                <img
                  alt="Minimalist View"
                  className="w-full h-full object-cover shadow-2xl"
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                />
                <div className="absolute -inset-10 border border-primary/5 pointer-events-none hidden md:block"></div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* The Vision Quote */}
      <section className="py-64 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-12"
          >
             <div className="w-1px h-24 bg-tertiary mx-auto mb-12"></div>
             <h2 className="text-4xl md:text-6xl font-heading font-light leading-tight text-primary">
                "A sanctuary defined by light, space, and the geometry of pure intention."
             </h2>
          </motion.div>
          <span className="text-[10px] tracking-[0.4em] uppercase text-tertiary font-bold">Maaisa Genesis Manifesto</span>
        </div>
      </section>

      {/* Corporate Callout */}
      <section className="bg-primary text-white py-32 px-6 md:px-24 relative overflow-hidden">
        {/* Architectural Lines Decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 bottom-0 left-1/4 w-[0.5px] bg-white"></div>
           <div className="absolute top-0 bottom-0 left-2/4 w-[0.5px] bg-white"></div>
           <div className="absolute top-0 bottom-0 left-3/4 w-[0.5px] bg-white"></div>
           <div className="absolute left-0 right-0 top-1/2 h-[0.5px] bg-white"></div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10 gap-12 text-left">
           <div>
              <h3 className="text-4xl font-heading mb-6 italic">The Legacy Estate Group</h3>
              <p className="text-on-primary-container max-w-sm font-body font-light italic">
                Exclusive curation and management of the world's most innovative residential destinations.
              </p>
           </div>
           <button className="bg-tertiary text-white px-12 py-5 font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-primary transition-all">
              Private Collaboration
           </button>
        </div>
      </section>
    </main>
  );
}
