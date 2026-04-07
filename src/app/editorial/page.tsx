"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Plus, Heart, Sun, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Editorial() {
  return (
    <main className="pt-32 bg-surface-lowest overflow-hidden">
      {/* Editorial Hero */}
      <section className="relative px-6 md:px-24 mb-64 flex flex-col md:flex-row items-center justify-between text-left uppercase">
        <div className="max-w-2xl z-10">
          <ScrollReveal animation="blur-fade">
             <span className="text-[10px] tracking-[0.6em] text-primary mb-6 block font-bold">
               Our Vision for You
             </span>
          </ScrollReveal>
          
          <ScrollReveal animation="line-mask" delay={0.2} className="mb-12">
            <h1 className="text-6xl md:text-[7rem] font-heading font-extralight leading-[1.05] text-secondary drop-shadow-sm">
              Your New <br />
              <span className="italic font-thin text-primary">Beautiful Home.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="blur-fade" delay={0.8} className="max-w-md">
             <p className="text-xl text-tertiary font-light leading-relaxed mb-12 border-l border-primary/30 pl-8 font-body italic lowercase">
                we don't just build houses. we create places where you can live happily, in a safe and quiet environment.
             </p>
             <WhatsAppButton 
                label="WhatsApp Enquiry"
                message="Hello, I want to learn more about the vision and design philosophy of Maaisa Genesis."
                variant="primary"
             />
          </ScrollReveal>
        </div>

        <ScrollReveal animation="clip" delay={0.5} className="relative mt-24 md:mt-0 md:-mr-48">
          <div className="w-full md:w-[800px] aspect-[4/5] md:aspect-[3/4] bg-surface-low overflow-hidden shadow-elegant border border-white/5">
            <img
              alt="Beautiful Architecture"
              className="w-full h-full object-cover transition-all duration-[2000ms] hover:scale-105 brightness-100"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
          {/* Overlapping Detail Glass */}
          <div className="absolute top-1/2 left-0 -translate-x-12 translate-y-24 glass p-12 w-[300px] hidden lg:block shadow-elegant">
             <span className="text-[10px] tracking-[0.3em] font-bold text-primary mb-2 block italic">Natural Materials</span>
             <p className="text-sm font-bold text-secondary mb-4 tracking-widest italic lowercase">wood and stone</p>
             <p className="text-xs text-tertiary leading-relaxed italic border-l border-primary/10 pl-6">Your home is made with the best materials from nature. Built to last for many years.</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Feature Section: Simple Luxury */}
      <section className="py-64 bg-surface-low px-6 md:px-24 border-y border-white/5 uppercase">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-4 order-2 lg:order-1 text-left">
            <ScrollReveal animation="blur-fade" className="mb-12">
               <h2 className="text-5xl font-heading text-secondary mb-12 italic font-thin leading-tight">Simple and <br />peaceful living.</h2>
               <p className="text-tertiary font-body font-light leading-relaxed mb-8 lowercase font-heading">
                  we believe that a good home should be quiet and full of natural light. our design is made to be simple so you can relax easily.
               </p>
               <WhatsAppButton 
                label="Enquiry"
                message="Hello, I want to know about the design standards and quality of Maaisa Genesis."
                variant="outline"
               />
            </ScrollReveal>
            
            <div className="space-y-1px bg-white/5 mt-16 shadow-elegant">
               {[
                 { label: "Design Style", value: "Modern & Simple" },
                 { label: "Atmosphere", value: "Quiet & Safe" },
                 { label: "Community", value: "Friendly & Caring" }
               ].map((item) => (
                 <div key={item.label} className="bg-surface-lowest p-6 flex justify-between items-center group cursor-pointer hover:bg-surface-high transition-colors">
                    <span className="text-[10px] tracking-[0.2em] font-bold text-tertiary group-hover:text-primary transition-colors italic uppercase">{item.label}</span>
                    <span className="text-[10px] font-heading text-secondary font-bold uppercase tracking-widest italic">{item.value}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:col-span-8 order-1 lg:order-2">
             <ScrollReveal animation="scale-fade" className="aspect-[16/9] relative md:translate-x-24 shadow-elegant border border-white/5">
                <img
                  alt="Minimalist View"
                  className="w-full h-full object-cover brightness-90 shadow-elegant"
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                />
             </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Legacy/History pass */}
      <section className="bg-surface-lowest text-secondary py-64 px-6 md:px-24 relative overflow-hidden uppercase">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end relative z-10 gap-16 text-left">
           <div>
              <ScrollReveal animation="blur-fade" className="mb-8">
                <h3 className="text-4xl md:text-6xl font-heading mb-8 italic font-thin text-primary">The Maaisa Legacy.</h3>
                <p className="text-tertiary max-w-sm font-body font-light text-lg italic border-l border-primary/20 pl-8 lowercase font-heading">
                  we have been building beautiful homes for families for many years. we take care of everything so you don't have to worry.
                </p>
              </ScrollReveal>
           </div>
           
           <ScrollReveal animation="blur-fade" delay={0.4}>
              <WhatsAppButton 
                label="Visit Site"
                message="Hello, I want to come and see the project site to see the Maaisa quality myself."
                variant="primary"
              />
           </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
