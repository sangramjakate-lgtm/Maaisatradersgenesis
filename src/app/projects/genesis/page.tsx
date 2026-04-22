"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LineMaskReveal } from "@/components/TextAnimations";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Waves, Heart, Dumbbell, Zap, Coffee, Wind, MapPin, Eye, Phone, Mail, ArrowRight, Shield, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GenesisProject() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(mainRef.current, { opacity: 1, duration: 1.5, ease: "power3.out" });
    
    const images = gsap.utils.toArray('.reveal-image');
    images.forEach((img: any) => {
      gsap.fromTo(img, 
        { clipPath: 'inset(0 100% 0 0)' },
        { 
          clipPath: 'inset(0 0% 0 0)', 
          duration: 1.5, 
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

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
    }
  ];

  const amenityGalleries = [
    {
      title: "Infinity Pool",
      desc: "an expansive horizon of temperature-controlled water, designed for the ultimate aquatic sanctuary.",
      img: "https://images.unsplash.com/photo-1519449556851-5720b33024e7?q=80&w=2070&auto=format&fit=crop",
      icon: Waves,
      tags: ["Climatized", "Glass Edge", "Sky Deck"]
    },
    {
      title: "Sky Lounge",
      desc: "a curated social hub above the cityscape, perfect for high-velocity networking and decompression.",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      icon: Coffee,
      tags: ["Mixology Bar", "Panoramic View", "Private Nooks"]
    }
  ];

  return (
    <main ref={mainRef} className="bg-background uppercase font-black text-[10px] tracking-widest text-foreground opacity-0">
      
      {/* 1. Project Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-24 px-6 md:px-24 overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 z-0 opacity-80">
          <LineMaskReveal className="h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
              alt="Genesis"
              className="parallax-img w-full h-[120%] object-cover brightness-105"
            />
          </LineMaskReveal>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/10" />
        </div>
        
        <div className="relative z-10 max-w-5xl text-left mt-20">
          <LineMaskReveal>
             <div className="flex items-center gap-4 mb-8">
                <span className="h-[1px] w-16 bg-primary/40 block" />
                <span className="text-primary font-black tracking-[0.6em] lowercase italic font-body">
                  upcoming mastery: genesis
                </span>
             </div>
          </LineMaskReveal>
          
          <div className="space-y-12">
            <LineMaskReveal delay={300}>
              <h1 className="text-5xl md:text-8xl font-heading font-black leading-[0.95] text-foreground tracking-tighter uppercase mb-12">
                absolute <br />
                <span className="text-primary italic font-light">heritage.</span>
              </h1>
            </LineMaskReveal>

            <LineMaskReveal delay={0.8} className="max-w-xl">
               <p className="text-tertiary font-body font-normal lowercase tracking-tight leading-relaxed mb-12 border-l-2 border-primary/20 pl-8">
                  every coordinate of the genesis build is synthesized with imported stone, smoked timber, and high-fidelity glazing. designed for the modern elite.
               </p>
               <WhatsAppButton 
                label="Secure Ownership"
                message="Hello Maaisa Reality, I would like to schedule a private tour of the Genesis project."
                variant="primary"
                className="shadow-elegant min-w-[240px]"
               />
            </LineMaskReveal>
          </div>
        </div>
      </section>

      {/* 2. Philosophy & Vision (From Editorial) */}
      <section className="py-40 bg-surface-low px-6 md:px-24 border-b border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-4 order-2 lg:order-1 text-left">
            <LineMaskReveal className="mb-12">
               <span className="text-primary font-black tracking-[0.6em] mb-4 block">Design Axis</span>
               <LineMaskReveal delay={200}>
                <h2 className="text-5xl font-heading font-black text-foreground mb-12 tracking-tighter leading-none uppercase">quiet & <br/><span className="text-primary/40 italic font-light lowercase">radiant.</span></h2>
               </LineMaskReveal>
               <LineMaskReveal delay={300}>
                 <p className="text-tertiary font-body font-normal lowercase tracking-tight leading-relaxed mb-10 border-l-2 border-primary/20 pl-8">
                    a genesis residence is defined by its silence and natural illumination. our spatial architecture is optimized for your peak decompression.
                 </p>
               </LineMaskReveal>
               <WhatsAppButton 
                label="Enquire Quality"
                message="Hello Maaisa Reality, I want to know about the design standards of Genesis."
                variant="minimal"
                className="text-[10px]"
               />
            </LineMaskReveal>
          </div>

          <div className="lg:col-span-8 order-1 lg:order-2">
             <LineMaskReveal className="aspect-[16/9] relative md:translate-x-24 shadow-elegant border border-black/5 overflow-hidden reveal-image">
                <img
                  alt="Minimalist View"
                  className="w-full h-full object-cover shadow-elegant hover:scale-110 transition-all duration-[3000ms]"
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                />
             </LineMaskReveal>
          </div>
        </div>
      </section>

      {/* 3. The Portfolios / Floor Plans */}
      <section className="py-40 bg-background px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <LineMaskReveal className="text-center mb-24">
            <span className="text-primary font-black tracking-[0.6em] mb-4 block">The Private Portfolio</span>
            <LineMaskReveal delay={200}>
              <h2 className="text-5xl md:text-8xl font-heading font-black text-foreground leading-none tracking-tighter uppercase mb-10">exclusive <br/><span className="text-primary/40 italic font-light">suites.</span></h2>
            </LineMaskReveal>
          </LineMaskReveal>

          <div className="space-y-40">
            {units.map((unit, i) => (
              <div key={i} className={cn("flex flex-col lg:flex-row gap-20 items-center", i % 2 !== 0 && "lg:flex-row-reverse")}>
                 <div className="w-full lg:w-3/5">
                    <LineMaskReveal className="aspect-video relative group border border-black/5 shadow-elegant overflow-hidden reveal-image">
                       <img 
                        src={unit.img} 
                        alt={unit.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[3000ms]" 
                       />
                       <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-all duration-700" />
                       <div className="absolute top-10 left-10 border border-primary/30 p-4 bg-white/80 backdrop-blur-md shadow-elegant">
                          <span className="text-3xl font-heading font-black text-primary tracking-tighter leading-none">{unit.id}</span>
                       </div>
                    </LineMaskReveal>
                 </div>
                 
                 <div className="w-full lg:w-2/5 text-left">
                    <LineMaskReveal>
                       <h3 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6 tracking-tighter leading-none">{unit.name}</h3>
                       <p className="text-primary font-black text-xl mb-10 italic">{unit.sq} <span className="text-[10px] not-italic tracking-[0.3em] font-normal text-foreground/40 font-body">SQ. FT.</span></p>
                       <LineMaskReveal delay={300}>
                         <p className="text-tertiary font-body font-normal lowercase tracking-tight leading-relaxed mb-10 border-l-2 border-primary/20 pl-8">
                            {unit.desc}
                         </p>
                       </LineMaskReveal>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                          {unit.specs.map((spec, idx) => (
                            <LineMaskReveal key={spec} delay={400 + idx * 50}>
                               <div className="flex items-center gap-4 group">
                                  <div className="w-1.5 h-1.5 bg-primary/20 group-hover:bg-primary transition-all" />
                                  <span className="text-[9px] tracking-[0.2em] font-black text-foreground/60 uppercase">{spec}</span>
                               </div>
                            </LineMaskReveal>
                          ))}
                       </div>
                       
                       <WhatsAppButton 
                        label="Enquire Layout"
                        message={`Hello Maaisa Reality, I'm interested in the layout for ${unit.name} (${unit.id}) at Genesis.`}
                        variant="minimal"
                        className="w-full text-[10px]"
                       />
                    </LineMaskReveal>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Amenities */}
      <section className="py-40 bg-surface-low border-y border-black/5">
         <div className="max-w-7xl mx-auto px-6 md:px-24">
            <div className="text-center mb-32">
              <LineMaskReveal delay={100}>
                <span className="text-primary font-black tracking-[0.6em] mb-4 block">Genesis Venue</span>
                <h2 className="text-5xl md:text-8xl font-heading font-black text-foreground leading-[0.95] tracking-tighter uppercase">curated <br />amity.</h2>
              </LineMaskReveal>
            </div>

            {amenityGalleries.map((item, i) => (
              <div key={i} className={cn("flex flex-col lg:flex-row gap-20 items-center mb-40", i % 2 !== 0 && "lg:flex-row-reverse")}>
                 <div className="w-full lg:w-3/5">
                    <LineMaskReveal className="aspect-video relative group shadow-elegant border border-black/5 overflow-hidden reveal-image">
                       <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[3000ms]" 
                       />
                       <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-all duration-700" />
                       <div className="absolute top-10 left-10 flex items-center gap-6">
                          <item.icon className="w-10 h-10 text-white drop-shadow-xl" />
                       </div>
                    </LineMaskReveal>
                 </div>
                 
                 <div className="w-full lg:w-2/5 text-left">
                    <LineMaskReveal delay={100}>
                       <span className="text-primary font-black mb-4 block tracking-[0.5em]">Genesis Venue 0{i + 1}</span>
                       <LineMaskReveal delay={100}>
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-8 tracking-tighter leading-none">{item.title}</h2>
                       </LineMaskReveal>
                       <LineMaskReveal delay={300}>
                         <p className="text-tertiary font-body font-normal lowercase tracking-tight leading-relaxed mb-10 border-l-2 border-primary/20 pl-8">
                            {item.desc}
                         </p>
                       </LineMaskReveal>
                       
                       <div className="flex flex-wrap gap-3 mb-10">
                          {item.tags.map((tag, idx) => (
                            <LineMaskReveal key={tag} delay={400 + idx * 50}>
                              <span className="text-[8px] tracking-[0.1em] font-black text-primary/60 border border-primary/20 px-4 py-2 hover:bg-primary/5 transition-all">
                                 {tag}
                              </span>
                            </LineMaskReveal>
                          ))}
                       </div>
                       
                       <WhatsAppButton 
                        label="Check Availability"
                        message={`Hello Maaisa Reality, I would like to check availability for ${item.title} at Genesis.`}
                        variant="minimal"
                        className="text-[10px]"
                       />
                    </LineMaskReveal>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-40 bg-background text-center px-6">
         <LineMaskReveal>
            <h2 className="text-5xl md:text-8xl font-heading font-black text-primary tracking-tighter leading-none mb-16 uppercase italic">find your <br/><span className="text-foreground/20 font-black not-italic">sanctuary.</span></h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
               <WhatsAppButton label="Talk to Advisor" message="Hello Maaisa Reality, I want to discuss the Genesis project in detail." variant="primary" className="min-w-[240px] shadow-elegant" />
               <button 
                onClick={() => window.open('/Maaisa_Genesis_Website_Content_Brief.pdf', '_blank')}
                className="text-foreground font-black tracking-[0.5em] uppercase hover:text-primary transition-all border-b border-primary/20 pb-2"
               >
                 View Ledger
               </button>
            </div>
         </LineMaskReveal>
      </section>
    </main>
  );
}
