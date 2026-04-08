"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { LineMaskReveal } from "@/components/TextAnimations";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Ruler, Sun, Layout, Maximize, Layers, Map as MapIcon, Compass, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FloorPlans() {
  const units = [
    { 
      id: "A-01", 
      name: "The Sky Suite", 
      desc: "an expansive and masterful orientation designed for high-velocity modern families.", 
      sq: "2,450", 
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
      specs: ["3 Bedrooms + Utilities", "12ft Ceiling Clearance", "Dual Sky Patios", "Carrara Marble Surface"]
    },
    { 
      id: "B-05", 
      name: "Horizon Loft", 
      desc: "uninterrupted panoramic sightlines from every cardinal coordinate.", 
      sq: "1,800", 
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      specs: ["2 Bedrooms + Intelligence Den", "Floor-to-Ceiling Glazing", "Smart Logic Nodes", "Sunrise Cardinality"]
    },
    { 
      id: "C-09", 
      name: "The Atelier", 
      desc: "a precision studio suite crafted for high-tier urban visionaries.", 
      sq: "950", 
      img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      specs: ["1 Primary Sanctuary", "Modular Culinary Hub", "Walk-in Archive", "Private Terrace Deck"]
    }
  ];

  return (
    <main className="bg-background uppercase font-black text-[10px] tracking-widest text-foreground">
      {/* Floor Plans Hero: Maaisa Reality Genesis - Light Skin */}
      <section className="relative min-h-[85vh] flex items-center pt-32 pb-16 px-6 md:px-24 overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <ScrollReveal animation="image-parallax" className="h-full w-full">
            <img
              src="/images/floor-plan-overview.png"
              alt="Floor Plan Masterplan"
              className="parallax-img w-full h-[120%] object-cover brightness-100"
            />
          </ScrollReveal>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-5xl text-left">
          <ScrollReveal animation="blur-fade">
             <div className="flex items-center gap-4 mb-10">
                <span className="h-[1px] w-16 bg-primary/40 block" />
                <span className="text-primary font-black tracking-[0.6em] lowercase italic font-body">
                  architectural logic system.
                </span>
             </div>
          </ScrollReveal>
          
          <div className="space-y-12">
            <LineMaskReveal delay={300}>
              <h1 className="text-5xl md:text-8xl font-heading font-black leading-[0.95] text-foreground tracking-tighter uppercase mb-12">
                room <br />for <span className="text-primary italic font-light">vision.</span>
              </h1>
            </LineMaskReveal>

            <ScrollReveal animation="blur-fade" delay={0.8} className="max-w-lg">
               <p className="text-tertiary font-body font-normal lowercase tracking-tight leading-relaxed mb-12 border-l-2 border-primary/20 pl-8">
                  every floor plate is synthesized with precision to maximize spatial velocity and natural illumination.
               </p>
               <WhatsAppButton 
                label="Get High-Res Plans"
                message="Hello Maaisa Reality, I would like to receive the high-resolution floor plans for Genesis."
                variant="primary"
                className="shadow-elegant min-w-[240px]"
               />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Unit Portfolio: The Genesis Collection - Light Skin */}
      <section className="py-32 bg-background px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="blur-fade" className="text-center mb-24">
            <span className="text-primary font-black tracking-[0.6em] mb-4 block">The Private Portfolio</span>
            <LineMaskReveal delay={200}>
              <h2 className="text-5xl md:text-8xl font-heading font-black text-foreground leading-none tracking-tighter uppercase mb-10">exclusive <br/><span className="text-primary/40 italic font-light">suites.</span></h2>
            </LineMaskReveal>
          </ScrollReveal>

          <div className="space-y-40">
            {units.map((unit, i) => (
              <div key={i} className={cn("flex flex-col lg:flex-row gap-20 items-center", i % 2 !== 0 && "lg:flex-row-reverse")}>
                 <div className="w-full lg:w-3/5">
                    <ScrollReveal animation="clip" className="aspect-video relative group border border-black/5 shadow-elegant overflow-hidden reveal-image">
                       <img 
                        src={unit.img} 
                        alt={unit.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[3000ms]" 
                       />
                       <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-all duration-700" />
                       <div className="absolute top-10 left-10 border border-primary/30 p-4 bg-white/80 backdrop-blur-md shadow-elegant">
                          <span className="text-3xl font-heading font-black text-primary tracking-tighter leading-none">{unit.id}</span>
                       </div>
                    </ScrollReveal>
                 </div>
                 
                 <div className="w-full lg:w-2/5 text-left">
                    <ScrollReveal animation="blur-fade">
                       <h3 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6 tracking-tighter leading-none">{unit.name}</h3>
                       <p className="text-primary font-black text-xl mb-10 italic">{unit.sq} <span className="text-[10px] not-italic tracking-[0.3em] font-normal text-foreground/40 font-body">SQ. FT.</span></p>
                       <p className="text-tertiary font-body font-normal lowercase tracking-tight leading-relaxed mb-10 border-l-2 border-primary/20 pl-8">
                          {unit.desc}
                       </p>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                          {unit.specs.map(spec => (
                            <div key={spec} className="flex items-center gap-4 group">
                               <div className="w-1.5 h-1.5 bg-primary/20 group-hover:bg-primary transition-all" />
                               <span className="text-[9px] tracking-[0.2em] font-black text-foreground/60 uppercase">{spec}</span>
                            </div>
                          ))}
                       </div>
                       
                       <WhatsAppButton 
                        label="Enquire Layout"
                        message={`Hello Maaisa Reality, I'm interested in the layout for ${unit.name} (${unit.id}).`}
                        variant="minimal"
                        className="w-full text-[10px]"
                       />
                    </ScrollReveal>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Palette: High-Fidelity Materials - Light Skin */}
      <section className="py-32 bg-surface-low border-y border-black/5 px-6 md:px-24">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <ScrollReveal animation="blur-fade">
               <span className="text-primary font-black tracking-[0.6em] mb-4 block">Material Synthesis</span>
               <LineMaskReveal delay={200}>
                  <h2 className="text-4xl md:text-8xl font-heading font-black text-foreground leading-[0.95] tracking-tighter uppercase">interior <br/><span className="text-primary/40 italic font-light">palette.</span></h2>
               </LineMaskReveal>
            </ScrollReveal>
            <div className="max-w-xs text-right border-r-2 border-primary/20 pr-8">
               <p className="text-tertiary font-body font-normal lowercase tracking-tight leading-relaxed">
                  every sequence of materials is curated to balance urban velocity with natural durability.
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
              <ScrollReveal key={i} animation="scale-fade" delay={i * 0.1} className="relative group overflow-hidden shadow-card border border-black/5 reveal-image">
                 <div className="aspect-square relative overflow-hidden">
                    <img src={material.img} alt={material.name} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[3000ms]" />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-700" />
                    <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-700">
                       <p className="text-[11px] tracking-[0.4em] font-black text-white drop-shadow-md">{material.name}</p>
                    </div>
                 </div>
              </ScrollReveal>
            ))}
         </div>
      </section>

      {/* Final Genesis CTA - Light Skin */}
      <section className="py-40 bg-background text-center px-6">
         <ScrollReveal animation="blur-fade">
            <h2 className="text-5xl md:text-8xl font-heading font-black text-primary tracking-tighter leading-none mb-16 uppercase italic">find your <br/><span className="text-foreground/20 font-black not-italic">sanctuary.</span></h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
               <WhatsAppButton label="Talk to Advisor" message="Hello Maaisa Reality, I want to discuss the unit layout specifications at Genesis." variant="primary" className="min-w-[240px] shadow-elegant" />
               <button 
                onClick={() => window.open('/Maaisa_Genesis_Website_Content_Brief.pdf', '_blank')}
                className="text-foreground font-black tracking-[0.5em] uppercase hover:text-primary transition-all border-b border-primary/20 pb-2"
               >
                 View Ledger
               </button>
            </div>
         </ScrollReveal>
      </section>
    </main>
  );
}
