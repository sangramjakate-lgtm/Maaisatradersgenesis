"use client";

import { LineMaskReveal } from "@/components/TextAnimations";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Plus, Heart, Sun, MapPin, Mail, Globe, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

const CONTACT_EMAIL = "info@maaisa.com";

export default function Editorial() {
  return (
    <main className="pt-32 bg-background overflow-hidden uppercase font-black text-[10px] tracking-widest text-foreground">
      {/* Editorial Hero: Maaisa Reality Legacy - Light Skin */}
      <section className="relative px-6 md:px-24 mb-64 flex flex-col md:flex-row items-center justify-between text-left">
        <div className="max-w-2xl z-10">
          <LineMaskReveal>
             <div className="flex flex-wrap justify-start gap-x-8 gap-y-2 uppercase mb-6">
                <span>Exclusive Partner: The Legacy Estate Group</span>
                <span>Maaisa Reality</span>
             </div>
          </LineMaskReveal>
          
          <LineMaskReveal delay={200} className="mb-12">
            <h1 className="text-6xl md:text-[8rem] font-heading font-black leading-[0.95] text-foreground tracking-tighter uppercase mb-12">
              your new <br />
              <span className="text-primary italic font-light lowercase">heritage.</span>
            </h1>
            <div className="flex items-center gap-4 text-tertiary">
               <Mail size={14} className="text-primary" />
               <a href={`mailto:${CONTACT_EMAIL}`} className="text-[10px] font-black tracking-widest uppercase hover:text-foreground transition-colors font-body">{CONTACT_EMAIL}</a>
            </div>
          </LineMaskReveal>

          <LineMaskReveal delay={0.8} className="max-w-md">
             <p className="text-tertiary font-body font-normal lowercase tracking-tight leading-relaxed mb-12 border-l-2 border-primary/20 pl-8">
                we don't just build structures. we synthesize environments where legacy thrives, in a sanctuary of silence and light.
             </p>
             <WhatsAppButton 
                label="Explore Vision"
                message="Hello Maaisa Reality, I want to learn more about the design philosophy of Genesis."
                variant="primary"
                className="shadow-elegant"
             />
          </LineMaskReveal>
        </div>

        <LineMaskReveal delay={0.5} className="relative mt-24 md:mt-0 md:-mr-48 reveal-image">
          <div className="w-full md:w-[800px] aspect-[4/5] md:aspect-[3/4] bg-surface-low overflow-hidden shadow-elegant border border-black/5">
            <img
              alt="Beautiful Architecture"
              className="w-full h-full object-cover transition-all duration-[3000ms] hover:scale-110 brightness-105"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
          {/* Overlapping Detail: Light Skin */}
          <div className="absolute top-1/2 left-0 -translate-x-12 translate-y-24 bg-white/80 backdrop-blur-md p-14 w-[320px] hidden lg:block shadow-elegant border border-primary/20">
             <span className="text-primary font-black tracking-[0.3em] mb-2 block italic">Maaisa Materials</span>
             <LineMaskReveal delay={600}>
               <p className="text-[10px] font-black text-foreground mb-4 tracking-widest uppercase">stone & oak.</p>
             </LineMaskReveal>
             <LineMaskReveal delay={800}>
               <p className="text-tertiary font-body font-normal lowercase tracking-tight leading-relaxed italic border-l border-primary/20 pl-6">Your home is synthesized with the finest materials curated for durability and radiance.</p>
             </LineMaskReveal>
          </div>
        </LineMaskReveal>
      </section>

      {/* Feature Section: Quiet Luxury - Light Skin */}
      <section className="py-64 bg-surface-low px-6 md:px-24 border-y border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-4 order-2 lg:order-1 text-left">
            <LineMaskReveal className="mb-12">
               <LineMaskReveal delay={300}>
                <h2 className="text-5xl font-heading font-black text-foreground mb-12 tracking-tighter leading-none uppercase">quiet & <br/><span className="text-primary/40 italic font-light lowercase">radiant.</span></h2>
               </LineMaskReveal>
               <LineMaskReveal delay={300}>
                 <p className="text-tertiary font-body font-normal lowercase tracking-tight leading-relaxed mb-10 border-l-2 border-primary/20 pl-8">
                    a Maaisa residence is defined by its silence and natural illumination. our spatial architecture is optimized for your peak decompression.
                 </p>
               </LineMaskReveal>
               <WhatsAppButton 
                label="Enquire Quality"
                message="Hello Maaisa Reality, I want to know about the design standards of Genesis."
                variant="minimal"
                className="text-[10px]"
               />
            </LineMaskReveal>
            
            <div className="space-y-[1px] bg-black/5 mt-16 shadow-elegant overflow-hidden">
               {[
                 { label: "Design Axis", value: "Modern & Absolute" },
                 { label: "Atmosphere", value: "Quiet & Secure" },
                 { label: "Identity", value: "Exclusive & Elite" }
               ].map((item, i) => (
                 <LineMaskReveal key={item.label} delay={400 + i * 100}>
                   <div className="bg-background p-8 flex justify-between items-center group cursor-pointer hover:bg-white transition-colors">
                      <span className="text-[9px] tracking-[0.2em] font-black text-primary/40 group-hover:text-primary transition-colors uppercase">{item.label}</span>
                      <span className="text-[10px] font-heading text-foreground font-black uppercase tracking-widest">{item.value}</span>
                   </div>
                 </LineMaskReveal>
               ))}
            </div>
            <div className="flex items-center gap-6 pt-8">
              <a href="#" className="text-primary/40 hover:text-primary transition-all">
                 <Globe size={18} />
              </a>
              <a href="#" className="text-primary/40 hover:text-primary transition-all">
                 <Share2 size={18} />
              </a>
           </div>
          </div>

          <div className="lg:col-span-8 order-1 lg:order-2">
             <LineMaskReveal className="aspect-[16/9] relative md:translate-x-24 shadow-elegant border border-black/5 overflow-hidden reveal-image">
                <img
                  alt="Minimalist View"
                  className="w-full h-full object-cover shadow-elegant hover:scale-110 transition-all duration-[3000ms]"
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                />
             </LineMaskReveal>
          </div>
        </div>
      </section>

      {/* Legacy Section: Maaisa Reality - Light Skin */}
      <section className="bg-background py-64 px-6 md:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end relative z-10 gap-16 text-left">
           <div>
              <LineMaskReveal className="mb-8">
                <LineMaskReveal delay={200}>
                  <h3 className="text-4xl md:text-8xl font-heading font-black text-primary leading-[0.95] tracking-tighter uppercase mb-10">the maaisa <br/><span className="text-foreground/20 italic font-light">legacy.</span></h3>
                </LineMaskReveal>
                <p className="text-tertiary max-w-sm font-body font-normal lowercase tracking-tight leading-relaxed border-l-2 border-primary/20 pl-8">
                  maaisa reality has been synthesizing premium environments for visionaries for many years. we manage every coordinate of your transition.
                </p>
              </LineMaskReveal>
           </div>
           
           <LineMaskReveal delay={0.4}>
              <WhatsAppButton 
                label="Consult Now"
                message="Hello Maaisa Reality, I want to see the Genesis site to experience your quality standards."
                variant="primary"
                className="px-12 py-5 shadow-elegant"
              />
           </LineMaskReveal>
        </div>
      </section>
    </main>
  );
}
