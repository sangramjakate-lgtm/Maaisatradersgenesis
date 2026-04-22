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
    <main ref={mainRef} className="opacity-0 bg-background selection:bg-primary selection:text-white pt-32">
      <section className="px-6 md:px-24 mb-32">
        <LineMaskReveal>
           <span className="text-primary font-black tracking-[0.8em] text-[10px] uppercase block mb-4">Maaisa Reality</span>
           <h1 className="text-5xl md:text-[8rem] font-heading font-black leading-none tracking-tighter uppercase mb-8">
             our <span className="text-primary/40 italic font-light lowercase">portfolio.</span>
           </h1>
        </LineMaskReveal>
      </section>

      <section className="px-6 md:px-24 pb-40 border-b border-black/5">
        <div className="grid grid-cols-1 gap-32 max-w-7xl mx-auto">
           {/* Genesis Project Link */}
           <LineMaskReveal delay={200}>
             <Link href="/projects/genesis" className="group block relative w-full h-[55vh] md:h-[75vh] overflow-hidden shadow-elegant reveal-image">
                <img 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Genesis Project" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4000ms]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-28 h-28 rounded-full border border-white/30 flex flex-col items-center justify-center scale-90 group-hover:scale-110 group-hover:border-primary transition-all duration-700 backdrop-blur-sm bg-white/5">
                      <span className="text-[8px] tracking-widest text-white font-medium mb-1 uppercase">Enter</span>
                      <ArrowRight className="w-4 h-4 text-primary" />
                   </div>
                </div>
                <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row justify-between items-end gap-4">
                   <div>
                      <span className="text-white text-4xl md:text-6xl font-heading font-medium tracking-tight">Genesis</span>
                      <p className="text-white/60 text-[10px] tracking-[0.4em] font-medium uppercase mt-2">Tathawade, Pune</p>
                   </div>
                   <div className="flex gap-6 text-right">
                      <div>
                        <div className="text-white text-sm font-medium">2025</div>
                        <div className="text-white/40 text-[9px] tracking-widest uppercase font-medium">Delivery</div>
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">3 BHK+</div>
                        <div className="text-white/40 text-[9px] tracking-widest uppercase font-medium">Config</div>
                      </div>
                   </div>
                </div>
             </Link>
          </LineMaskReveal>
          
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
