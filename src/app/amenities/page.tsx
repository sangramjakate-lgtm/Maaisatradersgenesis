"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Waves, Heart, Dumbbell, Zap, Coffee, Wind } from "lucide-react";

export default function Amenities() {
  return (
    <main className="pt-32 bg-surface-lowest">
      {/* Amenities Hero */}
      <section className="relative h-[80vh] flex items-center px-6 md:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0 text-left">
          <ScrollReveal animation="image-parallax" className="h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ae6b91839d2?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Pool"
              className="parallax-img w-full h-[120%] object-cover grayscale brightness-50"
            />
          </ScrollReveal>
          <div className="absolute inset-0 bg-gradient-to-r from-surface-lowest via-surface-lowest/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-3xl">
          <ScrollReveal animation="blur-fade">
            <span className="inline-block mb-8 text-primary font-bold text-[10px] tracking-[0.5em] uppercase">
              Healthy & Happy Living
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="line-mask" delay={0.2} className="mb-12 text-left">
            <h1 className="text-6xl md:text-[8rem] font-heading leading-[1] text-secondary mb-12 italic font-thin">
              Everything <br />You Need.
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="blur-fade" delay={0.6} className="max-w-md text-left">
            <p className="text-tertiary text-lg font-light leading-relaxed mb-12 border-l border-primary/30 pl-8 font-body">
              At Maaisa Genesis, we give you the best facilities to stay fit, relax, and enjoy your time with family.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Infinity Pool */}
      <section className="py-64 px-6 md:px-24 bg-surface-lowest relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-7 relative">
            <ScrollReveal animation="clip" delay={0.2} className="aspect-video relative group overflow-hidden shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1519449556851-5720b33024e7?q=80&w=2070&auto=format&fit=crop"
                alt="Infinity Pool"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000"
              />
            </ScrollReveal>
          </div>
          
          <div className="lg:col-span-5 text-left">
            <ScrollReveal animation="blur-fade">
              <div className="mb-8 flex items-center gap-6">
                <Waves className="text-primary w-12 h-12" />
                <div className="h-[1px] w-24 bg-primary/20" />
              </div>
              <h2 className="text-5xl font-heading text-secondary mb-8 italic font-thin">Our Beautiful <br /> Swimming Pool</h2>
              <p className="text-tertiary text-lg leading-relaxed mb-12 font-body font-light">
                Our pool is high above the city, where you can swim and enjoy the amazing view. It's clean, safe, and made with the best stones.
              </p>
              
              <ul className="space-y-6">
                {["Large Swimming Area", "Comfortable Sun Beds", "Amazing City View"].map((item) => (
                  <li key={item} className="flex items-center gap-6 group">
                     <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                     <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-secondary/60 group-hover:text-primary transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Gym - Modern & Simple */}
      <section className="py-64 px-6 md:px-24 bg-surface-low">
        <div className="max-w-7xl mx-auto text-left">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
            <ScrollReveal animation="blur-fade">
               <span className="text-primary font-bold text-[10px] tracking-[0.5em] uppercase mb-4 block">Stay Fit & Active</span>
               <h2 className="text-5xl md:text-7xl font-heading text-secondary italic font-thin">Our Modern Gym.</h2>
            </ScrollReveal>
            <ScrollReveal animation="blur-fade" delay={0.2} className="max-w-md">
              <p className="text-tertiary font-body font-light leading-relaxed italic border-l border-primary/10 pl-8">
                The best machines for your workout. Whether you want to lose weight or build muscle, our gym has everything.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5 shadow-elegant">
            <ScrollReveal animation="scale-fade" className="lg:col-span-2 aspect-video relative group overflow-hidden p-1">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
                alt="Gym"
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute bottom-12 left-12 glass p-8 shadow-elegant">
                 <span className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold block mb-2">High Quality</span>
                 <h3 className="text-2xl font-heading text-secondary italic">Clean Space.</h3>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="scale-fade" delay={0.1} className="aspect-square relative overflow-hidden bg-surface-lowest flex flex-col justify-center p-12 hover:bg-surface-high transition-colors">
               <Dumbbell className="w-12 h-12 text-primary mb-8" />
               <h3 className="text-2xl font-heading font-thin text-secondary mb-4 italic">Bespoke Training.</h3>
               <p className="text-[10px] text-tertiary leading-relaxed uppercase tracking-widest font-bold">Personal Coach • Steam Room</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* More Features Grid */}
      <section className="py-64 px-6 md:px-24 bg-surface-lowest">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-left">
            {[
               { icon: Coffee, title: "Social Lounge", desc: "A cozy place to meet your neighbors and have coffee." },
               { icon: Wind, title: "Yoga Space", desc: "Quiet garden area to practice yoga and enjoy fresh air." },
               { icon: Zap, title: "Kids Play Area", desc: "Safe and fun equipment for your children to play for hours." }
            ].map((feature, i) => (
              <ScrollReveal key={i} animation="blur-fade" delay={i * 0.1} className="p-12 border border-white/5 hover:border-primary/20 transition-all">
                 <feature.icon className="w-10 h-10 text-primary mb-8" />
                 <h4 className="text-xl font-heading italic font-thin text-secondary mb-4">{feature.title}</h4>
                 <p className="text-tertiary font-body font-light text-sm italic">{feature.desc}</p>
              </ScrollReveal>
            ))}
         </div>
      </section>

      {/* Experience CTA */}
      <section className="relative py-64 py-40 overflow-hidden text-center bg-surface-lowest">
        <ScrollReveal animation="blur-fade">
           <div className="relative z-10 -mt-24">
              <h2 className="text-4xl md:text-6xl font-heading italic text-primary font-thin mb-16">Come and See.</h2>
              <button className="bg-primary text-on-primary px-16 py-6 font-bold tracking-[0.4em] uppercase text-xs hover:bg-secondary hover:text-on-secondary transition-all shadow-elegant">
                 Contact Us Today
              </button>
           </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
