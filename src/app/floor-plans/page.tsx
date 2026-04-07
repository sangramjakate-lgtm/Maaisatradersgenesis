"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, Ruler, Sun, Layout, Maximize, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FloorPlans() {
  return (
    <main className="pt-32 bg-surface-lowest">
      {/* Floor Plans Hero */}
      <section className="px-6 md:px-24 mb-64 flex flex-col md:flex-row items-center justify-between text-left">
        <div className="max-w-4xl z-10">
          <ScrollReveal animation="blur-fade">
             <span className="text-[10px] tracking-[0.6em] uppercase text-primary mb-6 block font-bold">
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
             <p className="text-xl text-tertiary font-light leading-relaxed mb-12 border-l border-primary/30 pl-8 font-body">
                Every house in Maaisa Genesis is designed to be simple and easy to live in. We made sure each room gets plenty of sunlight and fresh air.
             </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid: The Collection */}
      <section className="px-6 md:px-24 py-32 bg-surface-low overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-32">
           <ScrollReveal animation="blur-fade">
              <h2 className="text-5xl md:text-7xl font-heading text-secondary italic font-thin mb-8">Choose Your House.</h2>
           </ScrollReveal>
           <div className="text-right">
              <span className="text-[10px] tracking-[0.2em] uppercase text-tertiary/50">Current Units Left</span>
              <p className="text-3xl font-heading text-primary italic">Only 12 Left!</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5 shadow-elegant">
          {[
            { id: "A-04", name: "2 Bedroom Suite", desc: "Perfect for small families.", sq: "1,450", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" },
            { id: "B-12", name: "Large 3 Bedroom", desc: "Big hall and open kitchen.", sq: "2,100", img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop", offset: true },
            { id: "C-02", name: "Cozy Studio", desc: "Simple and elegant living.", sq: "850", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop" }
          ].map((plan, i) => (
            <ScrollReveal 
              key={plan.id}
              animation="scale-fade"
              delay={i * 0.1}
              className={cn("bg-surface-lowest p-12 group cursor-pointer hover:bg-surface-high transition-colors", plan.offset && "lg:translate-y-12")}
            >
              <div className="aspect-[4/5] bg-surface-lowest overflow-hidden mb-12 relative border border-white/5 group-hover:border-primary/20 transition-all duration-500 shadow-elegant">
                <img
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms]"
                  alt={plan.name}
                  src={plan.img}
                />
                <div className="absolute top-8 left-8 border border-primary/30 p-2 glass">
                  <span className="text-[10px] tracking-[0.2em] font-bold text-primary uppercase">Room {plan.id}</span>
                </div>
              </div>
              <div className="flex justify-between items-start mb-12">
                <div className="text-left">
                  <h3 className="text-2xl font-heading font-thin mb-2 text-secondary italic">{plan.name}</h3>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-tertiary group-hover:text-primary transition-colors">{plan.desc}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-heading text-primary font-bold">{plan.sq} <span className="text-[10px] font-normal not-italic">SQ. FT.</span></p>
                </div>
              </div>
              <button className="w-full py-4 glass border border-primary/20 text-[10px] tracking-[0.4em] uppercase font-bold text-primary hover:bg-primary hover:text-on-primary transition-all">Show Details</button>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Spotlight: The Penthouse Suite */}
      <section className="py-64 px-6 md:px-24 bg-surface-lowest relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-32 items-center">
           <div className="lg:w-1/2">
              <ScrollReveal animation="clip" className="aspect-video relative group shadow-elegant">
                 <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                  alt="Penthouse"
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-1000"
                 />
              </ScrollReveal>
           </div>
           
           <div className="lg:w-1/2 text-left">
              <ScrollReveal animation="blur-fade">
                <span className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold mb-6 block">Special Release</span>
                <h2 className="text-5xl md:text-7xl font-heading italic text-secondary font-thin mb-12">The Penthouse View.</h2>
                <p className="text-tertiary text-lg font-light leading-relaxed mb-12 italic border-l border-primary/30 pl-8">
                  This is our biggest and most beautiful home on the top floor. It has a private garden and an amazing view of the entire city.
                </p>
                
                <div className="grid grid-cols-2 gap-16 mb-16">
                   <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-tertiary mb-2 font-bold font-heading italic">Total Size</p>
                      <p className="text-3xl font-heading text-secondary font-thin italic">5,800 SQ. FT.</p>
                   </div>
                   <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-tertiary mb-2 font-bold font-heading italic">Floor Level</p>
                      <p className="text-3xl font-heading text-secondary font-thin italic">48th Floor</p>
                   </div>
                </div>
                
                <button className="bg-primary text-on-primary px-16 py-6 font-bold tracking-[0.4em] uppercase text-xs hover:bg-secondary hover:text-on-secondary transition-all shadow-elegant">
                   Call Us Privately
                </button>
              </ScrollReveal>
           </div>
        </div>
      </section>

      {/* Simple Tech Details */}
      <section className="py-64 bg-surface-low px-6 md:px-24">
        <div className="max-w-4xl mx-auto text-left">
           <ScrollReveal animation="blur-fade">
              <h2 className="text-4xl md:text-6xl font-heading italic text-secondary font-thin mb-16 leading-tight">Every Detail is Carefully Made.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                 {[
                   { icon: Layers, title: "Modern Layouts", desc: "Rooms are connected in a simple way to make your life easier." },
                   { icon: Sun, title: "Natural Heat", desc: "The house is made to stay warm in winter and cool in summer." }
                 ].map((item) => (
                   <div key={item.title} className="flex gap-8 group">
                      <item.icon className="w-10 h-10 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                         <h4 className="text-[10px] tracking-[0.3em] font-bold uppercase text-secondary mb-4 italic">{item.title}</h4>
                         <p className="text-sm text-tertiary font-body italic leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
