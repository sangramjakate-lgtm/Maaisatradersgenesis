"use client";

import { LineMaskReveal } from "@/components/TextAnimations";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Waves, Heart, Dumbbell, Zap, Coffee, Wind, MapPin, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Amenities() {
  const amenityGalleries = [
    {
      title: "Infinity Pool",
      desc: "an expansive horizon of temperature-controlled water, designed for the ultimate aquatic sanctuary.",
      img: "https://images.unsplash.com/photo-1519449556851-5720b33024e7?q=80&w=2070&auto=format&fit=crop",
      icon: Waves,
      tags: ["Climatized", "Glass Edge", "Sky Deck"]
    },
    {
      title: "Kinetic Gym",
      desc: "top-tier athletic equipment housed in a high-velocity studio for peak physical performance.",
      img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
      icon: Dumbbell,
      tags: ["Personalized Tracking", "Pro Guidance", "Recovery Zone"]
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
    <main className="bg-background uppercase font-black text-[10px] tracking-widest text-foreground">
      {/* Amenities Hero: Maaisa Reality Genesis - Light Skin */}
      <section className="relative min-h-[85vh] flex items-center px-6 md:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <LineMaskReveal className="h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ae6b91839d2?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Amenities"
              className="parallax-img w-full h-[120%] object-cover brightness-100"
            />
          </LineMaskReveal>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/10" />
        </div>
        
        <div className="relative z-10 max-w-4xl text-left">
          <LineMaskReveal delay={100}>
            <div className="flex items-center gap-4 mb-10">
               <span className="h-[1px] w-16 bg-primary/40 block" />
               <span className="text-primary font-black tracking-[0.6em] lowercase italic font-body">
                 genesis project: residential suite.
               </span>
            </div>
          </LineMaskReveal>
          
          <LineMaskReveal delay={200} className="mb-12">
            <h1 className="text-5xl md:text-8xl font-heading font-black leading-[0.95] text-foreground tracking-tighter uppercase">
              curated <br />amity & <span className="text-primary italic font-light">luxury.</span>
            </h1>
          </LineMaskReveal>

          <LineMaskReveal delay={800} className="max-w-xl flex flex-col md:flex-row items-center gap-10">
            <WhatsAppButton 
              label="Tour Facilities"
              message="Hello Maaisa Reality, I'm interested in viewing the amenities at the Genesis project."
              variant="primary"
              className="py-4 min-w-[240px] shadow-elegant"
            />
            <div className="hidden md:flex flex-col items-start gap-1">
               <span className="text-[8px] tracking-[0.2em] font-black text-primary/40 lowercase italic font-body">access level</span>
               <p className="text-foreground/40 font-black tracking-widest">Genesis Resident Only</p>
            </div>
          </LineMaskReveal>
        </div>
      </section>

      {/* Amenity Dynamic Grid: Moss Green Heritage - Light Skin */}
      <section className="py-32 bg-background">
         <div className="max-w-7xl mx-auto px-6 md:px-24">
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
                       <p className="text-tertiary font-body font-normal lowercase tracking-tight leading-relaxed mb-10 border-l-2 border-primary/20 pl-8">
                          {item.desc}
                       </p>
                       
                       <div className="flex flex-wrap gap-3 mb-10">
                          {item.tags.map(tag => (
                            <span key={tag} className="text-[8px] tracking-[0.1em] font-black text-primary/60 border border-primary/20 px-4 py-2 hover:bg-primary/5 transition-all">
                               {tag}
                            </span>
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

      {/* Featured Feature: Zen Sanctuary - Light Skin */}
      <section className="py-32 bg-surface-low border-y border-black/5 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="text-left">
               <LineMaskReveal delay={100}>
                  <span className="text-primary font-black tracking-[0.6em] mb-6 block">The Private Park</span>
                <LineMaskReveal delay={200}>
                  <h2 className="text-5xl md:text-8xl font-heading font-black text-foreground leading-[0.95] tracking-tighter uppercase mb-10">zen garden.</h2>
                </LineMaskReveal>
                  <p className="text-tertiary font-body font-normal lowercase tracking-tight leading-relaxed mb-12 border-primary/20 pr-8 md:pr-12">
                    our secret garden is designed for intense meditation and absolute silence. a sanctuary for the mind within the city's velocity.
                  </p>
                  <WhatsAppButton variant="primary" label="Visit Sanctuary" message="Hello Maaisa Reality, I want to see the zen garden at the Genesis project." className="px-12" />
               </LineMaskReveal>
            </div>
            
            <div className="grid grid-cols-2 gap-8 scale-110 md:scale-105">
               <LineMaskReveal className="aspect-[3/4] overflow-hidden border border-black/5 relative group shadow-elegant reveal-image">
                  <img src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070&auto=format&fit=crop" alt="Zen" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[3000ms]" />
               </LineMaskReveal>
               <LineMaskReveal delay={0.2} className="aspect-[3/4] overflow-hidden border border-black/5 mt-16 relative group shadow-elegant reveal-image">
                  <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2070&auto=format&fit=crop" alt="Texture" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[3000ms]" />
               </LineMaskReveal>
            </div>
         </div>
      </section>

      {/* Wellness CTA - Maaisa Reality */}
      <section className="py-40 bg-background text-center px-6">
         <LineMaskReveal delay={100}>
            <h2 className="text-5xl md:text-8xl font-heading font-black text-primary tracking-tighter leading-none mb-16 uppercase">find your <br/><span className="text-foreground/20 italic font-light">tranquility.</span></h2>
            <WhatsAppButton variant="minimal" label="Start a Chat" message="Hello Maaisa Reality, I'm interested in the wellness and fitness lifestyle at the Genesis project." className="text-xs" />
         </LineMaskReveal>
      </section>
    </main>
  );
}
