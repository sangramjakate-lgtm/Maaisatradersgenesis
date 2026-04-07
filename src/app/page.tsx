"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Download, Play, Plus, MapPin, Shield, Sun, Home as HomeIcon, View } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ThreeSixtyPortal } from "@/components/ThreeSixtyPortal";
import { cn } from "@/lib/utils";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [active360, setActive360] = useState<{ url: string; title: string } | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(mainRef.current, { opacity: 1, duration: 1, ease: "power2.out" });
  }, []);

  const tourPoints = [
    { title: "Main Living Room", url: "/360/shot-panoramic-composition-living-room.jpg", desc: "Large open space for your family to relax." },
    { title: "Modern Kitchen", url: "/360/shot-panoramic-composition-kitchen.jpg", desc: "Fully equipped with modular fittings." },
    { title: "Private Library", url: "/360/shot-panoramic-composition-library.jpg", desc: "A quiet corner for work and study." }
  ];

  return (
    <main ref={mainRef} className="opacity-0">
      {/* 360 Portal Overlay */}
      {active360 && (
        <ThreeSixtyPortal 
          imageUrl={active360.url} 
          title={active360.title} 
          onClose={() => setActive360(null)} 
        />
      )}

      {/* Hero Section: Simple & Direct */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-surface-lowest z-10" />
          <ScrollReveal animation="image-parallax" className="h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
              alt="Maaisa Genesis Exterior"
              className="parallax-img w-full h-[120%] object-cover brightness-75 scale-110"
            />
          </ScrollReveal>
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <ScrollReveal animation="blur-fade" delay={0.2}>
            <span className="text-[10px] md:text-xs tracking-[0.6em] uppercase text-primary font-bold mb-8 block font-heading">
              Modern Homes Made Simple
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="line-mask" delay={0.4} className="mb-12">
            <h1 className="text-6xl md:text-[8rem] font-heading font-extralight leading-[1.05] text-secondary">
              Simple, <br />
              <span className="italic font-thin text-primary">Peaceful Beauty.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="blur-fade" delay={1} className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="group relative px-12 py-5 overflow-hidden transition-all duration-500">
              <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 text-[10px] tracking-[0.3em] uppercase font-bold text-primary group-hover:text-on-primary transition-colors">
                View All Houses
              </span>
              <span className="absolute inset-0 border border-primary/30" />
            </button>
            
            <button 
              onClick={() => setActive360(tourPoints[0])}
              className="flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase font-bold text-primary hover:text-secondary transition-colors group"
            >
              Virtual 360 Tour
              <div className="w-12 h-12 flex items-center justify-center border border-primary/20 rounded-full group-hover:bg-primary/20 transition-all">
                <span className="text-[10px]">360</span>
              </div>
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* New Section: Why Choose Maaisa? (Simple Grid) */}
      <section className="py-40 bg-surface-lowest px-6 md:px-24">
         <div className="max-w-7xl mx-auto">
            <ScrollReveal animation="blur-fade" className="text-center mb-32">
               <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold mb-6 block">Our Core Values</span>
               <h2 className="text-4xl md:text-6xl font-heading italic font-thin mb-16">Everything you need for a <br /> happy life.</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5 border border-white/5 shadow-elegant">
               {[
                 { icon: Shield, title: "Total Safety", desc: "Your family's safety is our priority. 24/7 security and safe space for kids." },
                 { icon: MapPin, title: "Great Location", desc: "Close to schools, hospitals, and parks. Right in the heart of the city." },
                 { icon: Sun, title: "Plenty of Light", desc: "Designed to get natural sunlight throughout the day in every room." }
               ].map((item, i) => (
                 <ScrollReveal key={i} animation="scale-fade" delay={i * 0.1} className="bg-surface-lowest p-16 group hover:bg-surface-low transition-colors">
                    <item.icon className="w-12 h-12 text-primary mb-8" />
                    <h3 className="text-2xl font-heading italic font-thin text-secondary mb-4">{item.title}</h3>
                    <p className="text-tertiary font-body font-light leading-relaxed text-sm uppercase tracking-widest">{item.desc}</p>
                 </ScrollReveal>
               ))}
            </div>
         </div>
      </section>

      {/* Simple Philosophy Section */}
      <section className="py-64 px-6 md:px-24 bg-surface-low relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5 border-l border-primary/20 pl-12 order-2 lg:order-1">
            <ScrollReveal animation="blur-fade" className="mb-12">
              <h2 className="text-4xl md:text-6xl font-heading text-secondary leading-tight italic font-thin mb-8">
                Build with care, <br />
                <span className="text-primary not-italic font-normal">Made for your family.</span>
              </h2>
              <p className="text-tertiary text-lg font-light leading-relaxed mb-12 font-body font-heading italic">
                Maaisa Genesis is built for people who love simple and beautiful things. We used the best materials like high-quality wood and smooth stone to make your home feel special.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: "Strong & Solid Build", value: "01" },
                  { label: "High Quality Materials", value: "02" },
                  { label: "Clean & Fresh Air", value: "03" }
                ].map((item) => (
                  <div key={item.value} className="flex justify-between items-center py-4 border-b border-white/5 group cursor-pointer hover:border-primary/50 transition-colors">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-tertiary group-hover:text-primary transition-colors">{item.label}</span>
                    <Plus className="w-4 h-4 text-primary/30 group-hover:rotate-90 group-hover:text-primary transition-all" />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal animation="clip" className="aspect-video relative group shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                alt="Building Detail"
                className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-all duration-1000"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* New Section: Virtual 360 Tour (Interactive Grid) */}
      <section className="py-64 bg-surface-lowest px-6 md:px-24">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-32">
            <ScrollReveal animation="blur-fade">
               <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold mb-4 block">Interactive Experience</span>
               <h2 className="text-5xl md:text-7xl font-heading italic font-thin text-secondary leading-none">Look Around <br /> in 360.</h2>
            </ScrollReveal>
            <div className="text-right hidden md:block max-w-sm">
               <p className="text-tertiary italic font-body font-light text-sm uppercase tracking-widest leading-relaxed">
                  Click on any room below to enter the 360 view. You can drag your mouse to see every corner of your future home.
               </p>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {tourPoints.map((point, i) => (
              <ScrollReveal key={i} animation="scale-fade" delay={i * 0.1}>
                 <div 
                   onClick={() => setActive360(point)}
                   className="group relative cursor-pointer aspect-[3/4] overflow-hidden shadow-elegant"
                 >
                    <img src={point.url} alt={point.title} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors" />
                    <div className="absolute bottom-12 left-12 right-12 z-10">
                       <div className="w-16 h-16 rounded-full border border-primary/50 flex items-center justify-center mb-8 bg-black/40 group-hover:bg-primary group-hover:text-on-primary transition-all">
                          <span className="text-[10px] font-bold">360</span>
                       </div>
                       <h3 className="text-2xl font-heading italic font-thin text-secondary mb-2">{point.title}</h3>
                       <p className="text-[10px] tracking-[0.2em] font-bold text-primary uppercase">{point.desc}</p>
                    </div>
                 </div>
              </ScrollReveal>
            ))}
         </div>
      </section>

      {/* Simplified Collection Section */}
      <section className="py-32 px-6 md:px-24 bg-surface-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8 text-left">
            <ScrollReveal animation="line-mask" className="max-w-2xl">
              <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold mb-4 block">Pick Your House</span>
              <h2 className="text-5xl md:text-7xl font-heading text-secondary italic font-thin">Our Beautiful <br /> Home Collection.</h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5 shadow-elegant">
            {[
              { name: "The Sky Suite", type: "Big Family Home", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" },
              { name: "The Horizon Loft", type: "Penthouse View", img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop" },
              { name: "The Atelier", type: "Cozy Couple Home", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop" }
            ].map((card, i) => (
              <ScrollReveal 
                key={card.name} 
                animation="scale-fade" 
                delay={i * 0.1}
                className="bg-surface-lowest group cursor-pointer overflow-hidden p-12 hover:bg-surface-high transition-colors"
              >
                <div className="aspect-[3/4] mb-12 overflow-hidden relative">
                   <img
                    src={card.img}
                    alt={card.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                   />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-heading text-secondary flex items-center justify-between italic font-thin">
                    {card.name}
                    <ArrowRight className="w-5 h-5 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 text-primary" />
                  </h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-primary font-bold">{card.type}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified Call to Action */}
      <section className="py-64 px-6 text-center bg-surface-lowest relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal animation="blur-fade">
             <h2 className="text-4xl md:text-6xl font-heading font-thin text-secondary mb-16 leading-tight">
                "A beautiful place where every detail is made to make you feel happy and safe."
             </h2>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <button className="bg-primary text-on-primary px-16 py-6 font-bold tracking-[0.4em] uppercase text-xs hover:bg-secondary hover:text-on-secondary transition-all shadow-elegant">
                    Come Visit Us
                </button>
                <button className="text-primary font-bold text-[10px] tracking-[0.3em] uppercase hover:text-secondary transition-colors underline decoration-primary/30 underline-offset-8">
                   Download Full Plan
                </button>
             </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
