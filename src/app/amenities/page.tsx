"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Waves, Heart, Dumbbell, Zap, Coffee, Wind } from "lucide-react";

export default function Amenities() {
  return (
    <main className="pt-32 bg-surface-lowest">
      {/* Amenities Hero */}
      <section className="relative h-[80vh] flex items-center px-6 md:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ScrollReveal animation="image-parallax" className="h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ae6b91839d2?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Pool"
              className="parallax-img w-full h-[120%] object-cover grayscale brightness-50"
            />
          </ScrollReveal>
          <div className="absolute inset-0 bg-gradient-to-r from-surface-lowest via-surface-lowest/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-3xl text-left uppercase">
          <ScrollReveal animation="blur-fade">
            <span className="inline-block mb-8 text-primary font-bold text-[10px] tracking-[0.5em]">
              Healthy & Happy Living
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="line-mask" delay={0.2} className="mb-12">
            <h1 className="text-6xl md:text-[8rem] font-heading leading-[1] text-secondary mb-12 italic font-thin">
              Everything <br />You Need.
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="blur-fade" delay={0.6} className="max-w-md">
            <p className="text-tertiary text-lg font-light leading-relaxed mb-12 border-l border-primary/30 pl-8 font-body lowercase italic">
              at maaisa genesis, we give you the best facilities to stay fit, relax, and enjoy your time with family.
            </p>
            <WhatsAppButton 
              label="Schedule Visit"
              message="I am interested in seeing the amenities at Maaisa Genesis."
              variant="primary"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* The Infinity Pool */}
      <section className="py-64 px-6 md:px-24 bg-surface-lowest relative uppercase">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-7 relative">
            <ScrollReveal animation="clip" delay={0.2} className="aspect-video relative group overflow-hidden shadow-elegant border border-white/5">
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
              <p className="text-tertiary text-lg leading-relaxed mb-12 font-body font-light lowercase font-heading">
                our pool is high above the city, where you can swim and enjoy the amazing view. it's clean, safe, and made with the best stones.
              </p>
              
              <WhatsAppButton 
                label="Enquiry"
                message="Hello, I have an enquiry about the infinity pool and its timings."
                variant="outline"
                className="mb-12"
              />
              
              <ul className="space-y-6">
                {["Large Swimming Area", "Comfortable Sun Beds", "Amazing City View"].map((item) => (
                  <li key={item} className="flex items-center gap-6 group">
                     <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                     <span className="text-[10px] tracking-[0.3em] font-bold text-secondary/60 group-hover:text-primary transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Gym */}
      <section className="py-64 px-6 md:px-24 bg-surface-low border-y border-white/5 uppercase">
        <div className="max-w-7xl mx-auto text-left">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
            <ScrollReveal animation="blur-fade">
               <span className="text-primary font-bold text-[10px] tracking-[0.5em] mb-4 block">Stay Fit & Active</span>
               <h2 className="text-5xl md:text-7xl font-heading text-secondary italic font-thin">Our Modern Gym.</h2>
            </ScrollReveal>
            <div className="max-w-md text-right">
              <p className="text-tertiary font-body font-light leading-relaxed italic border-l border-primary/10 pl-8 lowercase font-heading block mb-8">
                the best machines for your workout. whether you want to lose weight or build muscle, our gym has everything.
              </p>
              <WhatsAppButton 
                label="Join Now"
                message="Hello, I want to know about the gym membership and trainer availability."
                variant="minimal"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5 shadow-elegant">
            <ScrollReveal animation="scale-fade" className="lg:col-span-2 aspect-video relative group overflow-hidden p-1">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
                alt="Gym"
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-101 transition-all duration-1000"
              />
            </ScrollReveal>
            
            <ScrollReveal animation="scale-fade" delay={0.1} className="aspect-square relative overflow-hidden bg-surface-lowest flex flex-col justify-center p-12 hover:bg-surface-high transition-colors">
               <Dumbbell className="w-12 h-12 text-primary/30 mb-8" />
               <h3 className="text-2xl font-heading font-thin text-secondary mb-4 italic">Bespoke Training.</h3>
               <p className="text-[10px] text-tertiary leading-relaxed uppercase tracking-widest font-bold">Personal Coach • Steam Room</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-64 py-40 overflow-hidden text-center bg-surface-lowest uppercase">
        <ScrollReveal animation="blur-fade">
           <div className="relative z-10 -mt-24">
              <h2 className="text-4xl md:text-6xl font-heading italic text-primary font-thin mb-16 underline decoration-white/5 underline-offset-8">Come and See.</h2>
              <WhatsAppButton 
                label="WhatsApp Enquire"
                message="Hello, I am interested in visiting the Maaisa Genesis site today."
                variant="primary"
                className="mx-auto"
              />
           </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
