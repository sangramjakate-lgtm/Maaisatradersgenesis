"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Ruler, Sun, Layout, Maximize, Layers, Map as MapIcon, Compass, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FloorPlans() {
  const units = [
    { 
      id: "A-01", 
      name: "The Sky Suite", 
      desc: "A masterful layout for modern families.", 
      sq: "2,450", 
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
      specs: ["3 Bedrooms + Maid", "12ft Ceiling Height", "Dual Balconies", "Italian Marble Floors"]
    },
    { 
      id: "B-05", 
      name: "Horizon Loft", 
      desc: "Panoramic views from every corner.", 
      sq: "1,800", 
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      specs: ["2 Bedrooms + Study", "Floor-to-Glass Walls", "Smart Automation", "Sunrise Orientation"]
    },
    { 
      id: "C-09", 
      name: "The Atelier", 
      desc: "Precision studio for high-tier living.", 
      sq: "950", 
      img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      specs: ["1 Large Suite", "Modular Kitchen", "Walk-in Wardrobe", "Private Terrace"]
    }
  ];

  return (
    <main className="bg-surface-lowest uppercase">
      {/* Floor Plans Hero: The Masterplan - Compacted */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 px-6 md:px-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-30 grayscale pointer-events-none">
          <ScrollReveal animation="image-parallax" className="h-full w-full">
            <img
              src="/images/floor-plan-overview.png"
              alt="Floor Plan Masterplan"
              className="parallax-img w-full h-[120%] object-cover brightness-50"
            />
          </ScrollReveal>
          <div className="absolute inset-0 bg-gradient-to-r from-surface-lowest via-surface-lowest/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-5xl text-left">
          <ScrollReveal animation="blur-fade">
             <div className="flex items-center gap-4 mb-10">
                <span className="h-[1px] w-16 bg-primary/40 block" />
                <span className="text-[10px] tracking-[0.6em] text-primary font-bold font-heading italic lowercase">
                  architectural logic.
                </span>
             </div>
          </ScrollReveal>
          
          <div className="space-y-12">
            <ScrollReveal animation="line-mask" delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-heading font-extralight leading-[1.05] text-secondary italic font-thin lowercase tracking-tight">
                room <br />for <span className="text-primary">vision.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="blur-fade" delay={0.8} className="max-w-lg">
               <p className="text-lg text-tertiary font-light leading-relaxed mb-12 border-l border-primary/30 pl-6 font-body lowercase italic">
                  every home is designed with care to give you the best space and light.
               </p>
               <WhatsAppButton 
                label="High-Res Plans"
                message="Hello, I would like to receive the high-resolution floor plans for Maaisa Genesis."
                variant="primary"
                className="py-4 shadow-2xl min-w-[240px] text-xs"
               />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Unit Portfolio: The Detailed Collection - Compacted */}
      <section className="py-32 bg-surface-lowest px-6 md:px-24 uppercase">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="blur-fade" className="text-center mb-24">
            <span className="text-primary font-bold text-[10px] tracking-[0.6em] mb-4 block uppercase">The Portfolio</span>
            <h2 className="text-5xl md:text-7xl font-heading italic font-thin text-secondary lowercase italic">exclusive suites.</h2>
          </ScrollReveal>

          <div className="space-y-32">
            {units.map((unit, i) => (
              <div key={i} className={cn("flex flex-col lg:flex-row gap-16 items-center", i % 2 !== 0 && "lg:flex-row-reverse")}>
                 <div className="w-full lg:w-3/5">
                    <ScrollReveal animation="clip" className="aspect-video relative group border border-white/5 shadow-2xl overflow-hidden">
                       <img 
                        src={unit.img} 
                        alt={unit.name} 
                        className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-[2000ms]" 
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                       <div className="absolute top-8 left-8 border border-primary/20 p-2 glass">
                          <span className="text-2xl font-heading text-primary italic font-thin">{unit.id}</span>
                       </div>
                    </ScrollReveal>
                 </div>
                 
                 <div className="w-full lg:w-2/5 text-left">
                    <ScrollReveal animation="blur-fade">
                       <h3 className="text-4xl md:text-5xl font-heading text-secondary mb-4 italic font-thin lowercase">{unit.name}</h3>
                       <p className="text-primary font-bold text-lg mb-8 italic">{unit.sq} <span className="text-[9px] font-normal not-italic tracking-widest uppercase opacity-40">SQ. FT.</span></p>
                       <p className="text-tertiary text-base font-light leading-relaxed mb-8 italic lowercase font-heading border-l border-primary/20 pl-6">
                          {unit.desc}
                       </p>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                          {unit.specs.map(spec => (
                            <div key={spec} className="flex items-center gap-3 group">
                               <div className="w-1 h-1 bg-primary/40 rounded-full group-hover:bg-primary transition-all" />
                               <span className="text-[9px] tracking-[0.1em] font-bold text-secondary/60 uppercase">{spec}</span>
                            </div>
                          ))}
                       </div>
                       
                       <WhatsAppButton 
                        label="Enquire on WP"
                        message={`Hello, I'm interested in the ${unit.name} (${unit.id}) floor plan.`}
                        variant="primary"
                        className="w-full py-4 text-xs"
                       />
                    </ScrollReveal>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finishing Details Section: The Interior Palette - Compacted */}
      <section className="py-32 bg-surface-low border-y border-white/5 px-6 md:px-24 uppercase">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <ScrollReveal animation="blur-fade">
               <span className="text-primary font-bold text-[10px] tracking-[0.5em] mb-4 block">Materiality</span>
               <h2 className="text-5xl md:text-7xl font-heading italic font-thin text-secondary lowercase">interior palette.</h2>
            </ScrollReveal>
            <div className="max-w-xs text-right">
               <p className="text-tertiary text-[10px] tracking-widest leading-[1.8] lowercase italic font-heading border-r border-primary/20 pr-6">
                  every floor and wall is made with stones and wood designed to last for a lifetime.
               </p>
            </div>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Carrara Marble", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2070&auto=format&fit=crop" },
              { name: "Smoked Oak", img: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070&auto=format&fit=crop" },
              { name: "Brushed Brass", img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop" },
              { name: "Reinforced Glass", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" }
            ].map((material, i) => (
              <ScrollReveal key={i} animation="scale-fade" delay={i * 0.1} className="p-0.5 glass shadow-elegant relative group overflow-hidden">
                 <div className="aspect-square relative overflow-hidden">
                    <img src={material.img} alt={material.name} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-[2000ms]" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute bottom-4 left-4">
                       <p className="text-[9px] tracking-[0.2em] font-bold text-secondary italic opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-700">{material.name}</p>
                    </div>
                 </div>
              </ScrollReveal>
            ))}
         </div>
      </section>

      {/* Final CTA - Compacted */}
      <section className="py-32 bg-surface-lowest text-center px-6">
         <ScrollReveal animation="blur-fade">
            <h2 className="text-5xl md:text-8xl font-heading italic text-primary font-thin mb-16 lowercase italic">find your home.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
               <WhatsAppButton label="Talk via WP" message="Hello, I want to discuss the unit layouts at Maaisa Genesis." variant="primary" className="min-w-[240px] py-4 text-xs" />
               <a 
                href="/Maaisa_Genesis_Website_Content_Brief.pdf" 
                target="_blank"
                className="text-primary font-bold text-[9px] tracking-[0.3em] uppercase hover:text-secondary transition-all border-b border-primary/20 pb-1 italic font-heading"
               >
                 View Brochure
               </a>
            </div>
         </ScrollReveal>
      </section>
    </main>
  );
}
