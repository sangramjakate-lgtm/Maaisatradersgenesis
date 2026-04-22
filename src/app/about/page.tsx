"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LineMaskReveal } from "@/components/TextAnimations";
import { CheckCircle2, Shield, Target, Building2, Quote } from "lucide-react";

export default function AboutPage() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(mainRef.current, { opacity: 1, duration: 1.5, ease: "power3.out" });
  }, []);

  return (
    <main ref={mainRef} className="pt-32 opacity-0 bg-background selection:bg-primary/20">
      
      {/* 1. Hero */}
      <section className="px-6 md:px-24 mb-32 max-w-7xl mx-auto">
        <LineMaskReveal>
           <span className="text-primary font-medium tracking-[0.4em] text-[10px] uppercase block mb-6">About Maaisa Reality</span>
           <h1 className="text-4xl md:text-[5rem] font-heading font-medium leading-[1] tracking-tight text-foreground">
             Building a Legacy of <span className="italic font-light text-primary">Authorized Distribution & Real Estate.</span>
           </h1>
        </LineMaskReveal>
      </section>

      {/* 2. Mission & Philosophy */}
      <section className="py-24 bg-surface-low border-y border-black/5">
         <div className="container-custom max-w-7xl mx-auto px-6 md:px-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
               
               {/* Content Block */}
               <div className="md:col-span-8 bg-background border border-black/5 p-10 md:p-16 shadow-sm overflow-hidden z-20">
                  <LineMaskReveal delay={100}>
                     <p className="text-primary text-[10px] font-medium uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
                         <span className="w-8 h-[1px] bg-primary" /> Our Mission
                     </p>
                     <h2 className="text-foreground tracking-tight leading-[1.1] font-heading font-medium text-3xl md:text-5xl mb-8">
                         Elevating infrastructure through <span className="text-primary italic">premium execution</span>.
                     </h2>
                     <p className="text-tertiary leading-relaxed text-sm md:text-base max-w-2xl font-body">
                         Maaisa Reality, borne from Maaisa Traders India Pvt. Ltd. (established in 2014), represents the apex of real estate development in Pune. For years, we have mastered authorized distribution, engineering supply chains, and large-scale infrastructure. Today, we bring those uncompromising standards into building environments where legacies thrive.
                     </p>
                  </LineMaskReveal>
               </div>

               {/* Stats Block */}
               <div className="md:col-span-4 bg-primary text-on-primary p-10 flex flex-col justify-center relative overflow-hidden z-10 shadow-elegant">
                  <div className="relative z-10">
                     <LineMaskReveal delay={300}>
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] mb-3 opacity-80">Established</p>
                        <div className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-8">2014</div>
                        <div className="w-full h-[1px] bg-white/20 mb-8" />
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] mb-3 opacity-80">Headquarters</p>
                        <div className="text-xl md:text-2xl font-medium tracking-tight">Pune, India</div>
                     </LineMaskReveal>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 3. Leadership */}
      <section className="py-32 bg-background relative">
         <div className="max-w-7xl mx-auto px-6 md:px-24">
            <div className="flex flex-col lg:flex-row gap-16 relative z-10">
               
               {/* Left Headers */}
               <div className="lg:w-1/3 flex flex-col items-start pt-4">
                  <LineMaskReveal>
                     <Building2 className="w-10 h-10 text-primary mb-6" strokeWidth={1} />
                     <h2 className="text-foreground tracking-tight font-heading font-medium text-4xl mb-4">Leadership.</h2>
                     <div className="w-10 h-[2px] bg-primary mb-6" />
                     <p className="text-tertiary text-[10px] font-medium uppercase tracking-[0.2em]">The Visionaries</p>
                  </LineMaskReveal>
               </div>

               {/* Right Profiles */}
               <div className="lg:w-2/3 flex flex-col justify-center relative">
                  <Quote className="w-16 h-16 text-black/5 absolute -top-8 -left-8" />
                  <LineMaskReveal delay={200}>
                     <h3 className="text-2xl md:text-3xl font-light text-foreground leading-[1.4] mb-12 relative z-10">
                         Guided by the strategic foresight of our Directors, <br />
                         <span className="font-heading font-medium italic text-primary">Sangram Jakate</span> & <span className="font-heading font-medium italic text-primary">Nasir Patil</span>.
                     </h3>
                  </LineMaskReveal>
                  
                  <div className="grid sm:grid-cols-2 gap-10 border-t border-black/5 pt-10">
                     <LineMaskReveal delay={400}>
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary mb-2">Head of Sales & Mktg</p>
                        <p className="text-lg md:text-xl font-medium tracking-tight text-foreground">Suresh S B</p>
                     </LineMaskReveal>
                     
                     <LineMaskReveal delay={500}>
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary mb-2">Administration Head</p>
                        <p className="text-lg md:text-xl font-medium tracking-tight text-foreground">Chaitali Dhale</p>
                     </LineMaskReveal>
                  </div>
               </div>
               
            </div>
         </div>
      </section>

      {/* 4. Core Strengths */}
      <section className="py-32 bg-surface-low border-t border-black/5">
         <div className="max-w-7xl mx-auto px-6 md:px-24">
            <LineMaskReveal className="mb-16">
               <p className="text-primary text-[10px] font-medium uppercase tracking-[0.25em] mb-4 flex items-center gap-3">
                   Why Choose Us <span className="w-8 h-[1px] bg-primary" />
               </p>
               <h2 className="text-foreground tracking-tight text-4xl md:text-5xl font-heading font-medium">Core Strengths.</h2>
            </LineMaskReveal>

            <div className="grid md:grid-cols-3 gap-6">
               {[
                  {
                     title: "Legacy Network",
                     desc: "An extensive network across Maharashtra ensuring maximum market capability and trust.",
                     icon: Shield
                  },
                  {
                     title: "Agile Development",
                     desc: "State-of-the-art construction facilities that ensure precise, uncompromising delivery schedules.",
                     icon: Target
                  },
                  {
                     title: "Client Centric",
                     desc: "Dedicated support teams providing prompt resolutions and fostering long-term relationships.",
                     icon: CheckCircle2
                  }
               ].map((feature, i) => (
                  <LineMaskReveal key={i} delay={i * 200} className="relative group flex flex-col items-start p-10 bg-background border border-black/5 hover:border-primary/20 hover:shadow-card transition-all">
                     <div className="w-12 h-12 border border-primary/20 rounded-md flex items-center justify-center bg-primary/5 mb-8 group-hover:bg-primary transition-colors">
                        <feature.icon className="text-primary group-hover:text-on-primary w-5 h-5 transition-colors" />
                     </div>
                     <h3 className="text-xl font-heading font-medium text-foreground mb-4 uppercase tracking-tight">{feature.title}</h3>
                     <p className="text-tertiary text-sm leading-relaxed">{feature.desc}</p>
                  </LineMaskReveal>
               ))}
            </div>
         </div>
      </section>
      
    </main>
  );
}
