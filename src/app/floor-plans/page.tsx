"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ArrowRight, Ruler, Sun, Layout, Maximize, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FloorPlans() {
  return (
    <main className="pt-32 bg-surface-lowest">
      {/* Floor Plans Hero */}
      <section className="px-6 md:px-24 mb-64 flex flex-col md:flex-row items-center justify-between text-left uppercase">
        <div className="max-w-4xl z-10">
          <ScrollReveal animation="blur-fade">
             <span className="text-[10px] tracking-[0.6em] text-primary mb-6 block font-bold">
               Your New Room Plans
             </span>
          </ScrollReveal>
          
          <ScrollReveal animation="line-mask" delay={0.2} className="mb-12">
            <h1 className="text-6xl md:text-[8rem] font-heading font-extralight leading-[1.05] text-secondary">
              Well Designed <br />
              <span className="italic font-thin text-primary">Living.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="blur-fade" delay={0.8} className="max-w-2xl">
             <p className="text-xl text-tertiary font-light leading-relaxed mb-12 border-l border-primary/30 pl-8 font-body lowercase italic">
                every house in maaisa genesis is designed to be simple and easy to live in. we made sure each room gets plenty of sunlight and fresh air.
             </p>
             <WhatsAppButton 
              label="Schedule Visit"
              message="I am looking at the room layouts for Maaisa Genesis and would like to visit the site."
              variant="primary"
             />
          </ScrollReveal>
        </div>
      </section>

      {/* Grid: The Collection */}
      <section className="px-6 md:px-24 py-32 bg-surface-low border-y border-white/5 overflow-hidden uppercase">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-32">
           <ScrollReveal animation="blur-fade">
              <span className="text-[10px] tracking-[0.4em] text-primary font-bold mb-4 block">Selected Units</span>
              <h2 className="text-5xl md:text-7xl font-heading text-secondary italic font-thin mb-8">Home Layouts.</h2>
           </ScrollReveal>
           <div className="text-right hidden md:block">
              <span className="text-[10px] tracking-[0.2em] text-tertiary/50 uppercase">Current Availability</span>
              <p className="text-3xl font-heading text-primary italic">Only 12 Left!</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5 shadow-elegant">
          {[
            { id: "A-04", name: "2 BR Suite", desc: "Perfect for family living.", sq: "1,450", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" },
            { id: "B-12", name: "Sky Loft", desc: "Grand hall and kitchen.", sq: "2,100", img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop", offset: true },
            { id: "C-02", name: "The Atelier", desc: "Simple studio suite.", sq: "850", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop" }
          ].map((plan, i) => (
            <ScrollReveal 
              key={plan.id}
              animation="scale-fade"
              delay={i * 0.1}
              className={cn("bg-surface-lowest p-12 group cursor-pointer hover:bg-surface-high transition-colors", plan.offset && "lg:translate-y-12")}
            >
              <div className="aspect-[4/5] bg-surface-lowest overflow-hidden mb-12 relative border border-white/5 group-hover:border-primary/20 transition-all duration-1000 shadow-elegant">
                <img
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]"
                  alt={plan.name}
                  src={plan.img}
                />
              </div>
              <div className="flex justify-between items-start mb-12">
                <div className="text-left">
                  <h3 className="text-2xl font-heading font-thin mb-2 text-secondary italic whitespace-nowrap">{plan.name}</h3>
                  <p className="text-[10px] tracking-[0.2em] font-bold text-tertiary group-hover:text-primary transition-colors">{plan.desc}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-heading text-primary font-bold">{plan.sq} <span className="text-[10px] font-normal not-italic">SQ. FT.</span></p>
                </div>
              </div>
              <WhatsAppButton 
                label="Enquiry"
                message={`Hello, I'm interested in the ${plan.name} (${plan.id}). Please share more details.`}
                variant="primary"
                className="w-full"
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Spotlight: The Penthouse */}
      <section className="py-64 px-6 md:px-24 bg-surface-lowest relative overflow-hidden uppercase">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-32 items-center">
           <div className="lg:w-1/2">
              <ScrollReveal animation="clip" className="aspect-video relative group shadow-elegant border border-white/5">
                 <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                  alt="Penthouse"
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-1000"
                 />
              </ScrollReveal>
           </div>
           
           <div className="lg:w-1/2 text-left">
              <ScrollReveal animation="blur-fade">
                <span className="text-[10px] tracking-[0.5em] text-primary font-bold mb-6 block">Elite Release</span>
                <h2 className="text-5xl md:text-7xl font-heading italic text-secondary font-thin mb-12">The Sky Home.</h2>
                <p className="text-tertiary text-lg font-light leading-relaxed mb-12 italic border-l border-primary/30 pl-8 lowercase font-heading">
                  this is our biggest house on the top floor. it has a private garden and an amazing view of the entire city skyline.
                </p>
                
                <div className="grid grid-cols-2 gap-16 mb-16">
                   <div>
                      <p className="text-[10px] tracking-[0.3em] font-bold text-tertiary mb-2 text-primary">Area Size</p>
                      <p className="text-3xl font-heading text-secondary font-thin italic">5,800 SQ. FT.</p>
                   </div>
                   <div>
                      <p className="text-[10px] tracking-[0.3em] font-bold text-tertiary mb-2 text-primary">Floor Level</p>
                      <p className="text-3xl font-heading text-secondary font-thin italic">48th Floor</p>
                   </div>
                </div>
                
                <WhatsAppButton 
                    label="WhatsApp Chat"
                    message="Hello, I want to inquire about the top floor Sky Home."
                    variant="outline"
                    className="w-full md:w-auto"
                />
              </ScrollReveal>
           </div>
        </div>
      </section>

      {/* Tech CTA Section */}
      <section className="py-64 bg-surface-low px-6 md:px-24 border-y border-white/5 uppercase">
        <div className="max-w-4xl mx-auto text-left">
           <ScrollReveal animation="blur-fade">
              <h2 className="text-4xl md:text-6xl font-heading italic text-secondary font-thin mb-16 leading-tight">Expert Design <br /> <span className="text-primary not-italic font-normal">in Every Room.</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                 {[
                   { icon: Layers, title: "Modern Layouts", desc: "Designed for family flow." },
                   { icon: Sun, title: "Natural Heat", desc: "Keeps your home warm and cool." }
                 ].map((item) => (
                   <div key={item.title} className="flex gap-8 group">
                      <item.icon className="w-10 h-10 text-primary/50 group-hover:text-primary transition-all shrink-0" />
                      <div>
                         <h4 className="text-[10px] tracking-[0.3em] font-bold text-secondary mb-4 italic">{item.title}</h4>
                         <p className="text-xs text-tertiary font-body italic leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
              <WhatsAppButton 
                label="Enquiry"
                message="I have a question about the design layouts and technical details."
                variant="minimal"
                className="mt-16"
              />
           </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
