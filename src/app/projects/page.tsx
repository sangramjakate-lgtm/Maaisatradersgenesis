"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LineMaskReveal } from "@/components/TextAnimations";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Projects() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(mainRef.current, { opacity: 1, duration: 1.5, ease: "power3.out" });
    
    // Custom Clip Reveals for Images
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

  return (
    <main ref={mainRef} className="opacity-0 bg-background selection:bg-primary selection:text-white pt-24 pb-40">
      
      {/* 1. PORTFOLIO HERO — Minimalist & Grand */}
      <section className="relative px-6 md:px-24 mb-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-heading font-black text-black/[0.03] uppercase tracking-tighter pointer-events-none select-none">
          Portfolio
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <LineMaskReveal>
             <span className="text-primary font-medium tracking-[0.6em] text-[10px] uppercase block mb-6">Maaisa Reality Portfolio</span>
             <h1 className="text-6xl md:text-[8rem] font-heading font-medium leading-[1] tracking-tighter text-foreground uppercase">
               The <br /><span className="italic font-light text-primary/60 lowercase">Collection.</span>
             </h1>
          </LineMaskReveal>
        </div>
      </section>

      {/* 2. PROJECT NODES — Cinematic Cards */}
      <section className="px-6 md:px-24">
        <div className="grid grid-cols-1 gap-48 max-w-7xl mx-auto">
           
           {/* Project 01: Genesis */}
           <div className="gsap-reveal bg-surface-low/30 p-4 md:p-8 border border-black/5 rounded-sm">
             <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-black/5 pb-10 gap-6">
                <div>
                  <LineMaskReveal>
                    <span className="text-primary text-[10px] font-medium uppercase tracking-[0.4em] mb-4 block">Upcoming Designation</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground leading-[1] tracking-tight">
                      The <span className="text-primary/60 italic font-light">Genesis.</span>
                    </h2>
                  </LineMaskReveal>
                </div>
                <div className="md:text-right max-w-sm">
                  <LineMaskReveal delay={300}>
                    <p className="text-tertiary text-sm leading-relaxed font-body">
                      A pioneering architectural statement in Tathawade, redefining urban luxury through minimalist design and natural integration.
                    </p>
                  </LineMaskReveal>
                </div>
             </div>

             <Link href="/projects/genesis" className="group block relative w-full h-[60vh] md:h-[80vh] overflow-hidden shadow-elegant reveal-image">
                <img 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Genesis Project" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4000ms]" 
                />
                {/* Enhanced Contrast Gradient to fix white-on-white visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/5 opacity-90 group-hover:opacity-100 transition-opacity" />
                
                {/* Center Badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-28 h-28 rounded-full border border-white/20 flex flex-col items-center justify-center scale-90 group-hover:scale-110 group-hover:border-primary transition-all duration-700 backdrop-blur-sm bg-white/5">
                      <span className="text-[8px] tracking-widest text-white font-medium mb-1 uppercase">Enter</span>
                      <ArrowRight className="w-4 h-4 text-primary" />
                   </div>
                </div>

                {/* Bottom Info Strip */}
                <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row justify-between items-end gap-6">
                   <div className="gsap-reveal">
                      <span className="text-white text-4xl md:text-6xl font-heading font-medium tracking-tight">Genesis</span>
                      <p className="text-white/60 text-[10px] tracking-[0.4em] font-medium uppercase mt-2">Tathawade, Pune</p>
                   </div>
                   <div className="flex gap-8 text-right gsap-reveal">
                      <div>
                        <div className="text-white text-lg font-heading font-medium">2025</div>
                        <div className="text-white/40 text-[9px] tracking-widest uppercase font-medium">Delivery</div>
                      </div>
                      <div className="border-l border-white/10 pl-8">
                        <div className="text-white text-lg font-heading font-medium">3 BHK+</div>
                        <div className="text-white/40 text-[9px] tracking-widest uppercase font-medium">Config</div>
                      </div>
                   </div>
                </div>
             </Link>
           </div>

          
          <LineMaskReveal delay={300} className="flex justify-center border-t border-black/5 pt-32">
             <div className="text-center">
                <span className="text-primary/40 border border-primary/20 px-6 py-2 text-[8px] uppercase tracking-widest font-black inline-block mb-8">Future Developments</span>
                <p className="text-xl font-heading text-tertiary">We are conceptualizing our next masterpiece.</p>
                <div className="mt-8 flex justify-center">
                   <WhatsAppButton variant="minimal" label="Join Waitlist" message="Hello Maaisa Reality, I would like to join the waitlist for future projects." />
                </div>
             </div>
          </LineMaskReveal>
        </div>
      </section>
    </main>
  );
}
