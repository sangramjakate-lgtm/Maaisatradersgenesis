"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Download, Play, Plus } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Smooth fade in for the whole page shell
    gsap.to(mainRef.current, { opacity: 1, duration: 1, ease: "power2.out" });
  }, []);

  return (
    <main ref={mainRef} className="opacity-0">
      {/* Hero Section: The Portal */}
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
            <span className="text-[10px] md:text-xs tracking-[0.6em] uppercase text-primary font-bold mb-8 block">
              Architectural Transcendence
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="line-mask" delay={0.4} className="mb-12">
            <h1 className="text-6xl md:text-[8rem] font-heading font-extralight leading-[1.05] text-secondary">
              The Geometry <br />
              <span className="italic font-thin text-primary">of Silence.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="blur-fade" delay={1} className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="group relative px-12 py-5 overflow-hidden transition-all duration-500">
              <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 text-[10px] tracking-[0.3em] uppercase font-bold text-primary group-hover:text-on-primary transition-colors">
                Explore The Collection
              </span>
              <span className="absolute inset-0 border border-primary/30" />
            </button>
            
            <button className="flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase font-bold text-secondary/60 hover:text-primary transition-colors group">
              View Vision Film
              <div className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full group-hover:bg-primary/10 transition-all">
                <Play className="w-3 h-3 fill-current" />
              </div>
            </button>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:block">
           <div className="w-[1px] h-24 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </section>

      {/* Philosophy: The Void */}
      <section className="py-64 px-6 md:px-24 bg-surface-lowest relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ScrollReveal animation="blur-fade" className="mb-12">
              <h2 className="text-4xl md:text-6xl font-heading text-secondary leading-tight italic font-thin mb-8">
                Spaces that breathe, <br />
                <span className="text-primary not-italic font-normal">Interfaces that recede.</span>
              </h2>
              <p className="text-tertiary text-lg font-light leading-relaxed mb-12 border-l border-primary/20 pl-8 font-body">
                Maaisa Genesis is not a structure; it is a philosophy expressed through Carrara marble and smoked oak. We reject the noise of traditional living for the clarity of pure intention.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: "Monolithic Form", value: "01" },
                  { label: "Material Sincerity", value: "02" },
                  { label: "Eternal Light", value: "03" }
                ].map((item) => (
                  <div key={item.value} className="flex justify-between items-center py-4 border-b border-white/5 group cursor-pointer hover:border-primary/50 transition-colors">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-tertiary group-hover:text-primary transition-colors">{item.label}</span>
                    <Plus className="w-4 h-4 text-primary/30 group-hover:rotate-90 group-hover:text-primary transition-all" />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <ScrollReveal animation="clip" className="aspect-[4/5] md:aspect-video relative group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                alt="Architectural Detail"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute -inset-10 border border-primary/10 pointer-events-none hidden md:block" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Collection: Curated Living */}
      <section className="py-32 px-6 md:px-24 bg-surface-low overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
            <ScrollReveal animation="line-mask" className="max-w-2xl text-left">
              <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold mb-4 block">Selected Works</span>
              <h2 className="text-5xl md:text-7xl font-heading text-secondary italic font-thin">The High-Tier Collection.</h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5">
            {[
              { name: "The Sky Suite", type: "01", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" },
              { name: "The Horizon Loft", type: "02", img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop" },
              { name: "The Duplex", type: "03", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop" }
            ].map((card, i) => (
              <ScrollReveal 
                key={card.name} 
                animation="scale-fade" 
                delay={i * 0.1}
                className="bg-surface-lowest group cursor-pointer overflow-hidden p-12"
              >
                <div className="aspect-[3/4] mb-12 overflow-hidden relative">
                   <img
                    src={card.img}
                    alt={card.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                   />
                   <div className="absolute top-6 right-6 text-primary font-heading text-xl italic">{card.type}</div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-heading text-secondary flex items-center justify-between">
                    {card.name}
                    <ArrowRight className="w-5 h-5 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 text-primary" />
                  </h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-tertiary">Limited Release • Available</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto: Legacy callout */}
      <section className="py-64 px-6 text-center bg-surface-lowest relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal animation="blur-fade">
             <div className="w-[1px] h-32 bg-primary/30 mx-auto mb-16" />
             <h2 className="text-4xl md:text-6xl font-heading font-light text-secondary mb-16 leading-tight">
                "A sanctuary defined by light, space, and the geometry of pure intention."
             </h2>
             <button className="bg-primary text-on-primary px-16 py-6 font-bold tracking-[0.3em] uppercase text-xs hover:bg-secondary hover:text-on-secondary transition-all shadow-elegant">
                Request Private Access
             </button>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
