"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Waves, Heart, Dumbbell, Zap, Coffee, Wind, MapPin, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Amenities() {
  const amenityGalleries = [
    {
      title: "The Infinity Pool",
      desc: "Our pool is high above the city, where you can swim and enjoy the amazing view. it's clean, safe, and made with the best stones.",
      img: "https://images.unsplash.com/photo-1519449556851-5720b33024e7?q=80&w=2070&auto=format&fit=crop",
      icon: Waves,
      tags: ["Temperature Controlled", "Midnight Swim", "Glass Edge"]
    },
    {
      title: "The Kinetic Gym",
      desc: "the best machines for your workout. whether you want to lose weight or build muscle, our gym has everything you need.",
      img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
      icon: Dumbbell,
      tags: ["Personal Coaching", "Smart Machines", "Yoga Corner"]
    },
    {
      title: "Social Sky Lounge",
      desc: "a cozy place to meet your neighbors and have coffee. relax while looking at the city lights from the top floor.",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      icon: Coffee,
      tags: ["Premium Bar", "Outdoor Deck", "Private Bookings"]
    }
  ];

  return (
    <main className="bg-surface-lowest uppercase">
      {/* Amenities Hero: Immersive Large-Scale */}
      <section className="relative min-h-screen flex items-center px-6 md:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ScrollReveal animation="image-parallax" className="h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ae6b91839d2?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Amenities"
              className="parallax-img w-full h-[130%] object-cover grayscale brightness-50"
            />
          </ScrollReveal>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-lowest via-transparent to-black/40" />
        </div>
        
        <div className="relative z-10 max-w-5xl text-left">
          <ScrollReveal animation="blur-fade">
            <div className="flex items-center gap-6 mb-12">
               <span className="h-[1px] w-24 bg-primary/40 block" />
               <span className="text-[10px] tracking-[0.8em] text-primary font-bold font-heading italic lowercase">
                 everything you need for a healthy life.
               </span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="line-mask" delay={0.2} className="mb-12">
            <h1 className="text-7xl md:text-[8rem] font-heading leading-[0.95] text-secondary mb-16 italic font-thin lowercase">
              amenities <br />that <span className="text-primary">inspire.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="blur-fade" delay={0.6} className="max-w-2xl flex flex-col md:flex-row items-center gap-12">
            <WhatsAppButton 
              label="Enquire on Facilities"
              message="I want to know more about the available amenities at Maaisa Genesis."
              variant="primary"
              className="py-6 min-w-[280px]"
            />
            <div className="hidden md:flex flex-col items-start gap-2">
               <span className="text-[10px] tracking-[0.3em] font-bold text-secondary/40 font-heading lowercase italic">all access included</span>
               <p className="text-xs text-secondary/60">For Genesis Residents Only</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Amenity Dynamic Grid */}
      <section className="py-64 bg-surface-lowest">
         <div className="max-w-7xl mx-auto px-6 md:px-24">
            {amenityGalleries.map((item, i) => (
              <div key={i} className={cn("flex flex-col lg:flex-row gap-24 items-center mb-64", i % 2 !== 0 && "lg:flex-row-reverse")}>
                 <div className="w-full lg:w-3/5">
                    <ScrollReveal animation="clip" className="aspect-[16/10] relative group shadow-2xl border border-white/5 overflow-hidden">
                       <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]" 
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                       <div className="absolute bottom-12 left-12 flex items-center gap-8">
                          <item.icon className="w-12 h-12 text-primary/80" />
                          <div className="h-12 w-[1px] bg-primary/30" />
                       </div>
                    </ScrollReveal>
                 </div>
                 
                 <div className="w-full lg:w-2/5 text-left uppercase">
                    <ScrollReveal animation="blur-fade">
                       <span className="text-primary font-bold text-[10px] tracking-[0.4em] mb-4 block">0{i + 1} // Genesis Feature</span>
                       <h2 className="text-5xl font-heading text-secondary mb-8 italic font-thin leading-tight">{item.title}</h2>
                       <p className="text-tertiary text-lg font-light leading-relaxed mb-12 lowercase font-heading italic border-l border-primary/20 pl-8">
                          {item.desc}
                       </p>
                       
                       <div className="flex flex-wrap gap-4 mb-12">
                          {item.tags.map(tag => (
                            <span key={tag} className="text-[10px] tracking-[0.2em] font-bold text-secondary/40 border border-white/5 px-6 py-2 glass hover:border-primary/20 transition-all font-heading uppercase italic">
                               {tag}
                            </span>
                          ))}
                       </div>
                       
                       <WhatsAppButton 
                        label="Check Availability"
                        message={`Hello, I'm interested in the ${item.title} at Maaisa Genesis.`}
                        variant="minimal"
                       />
                    </ScrollReveal>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* Featured Feature: Wellness Garden */}
      <section className="py-64 bg-surface-low border-y border-white/5 relative overflow-hidden uppercase">
         <div className="max-w-7xl mx-auto px-6 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="text-left">
               <ScrollReveal animation="blur-fade">
                  <span className="text-primary font-bold text-[10px] tracking-[0.6em] mb-8 block uppercase">The Secret Space</span>
                  <h2 className="text-6xl md:text-8xl font-heading italic font-thin text-secondary leading-[0.9] lowercase">zen <br />garden.</h2>
                  <p className="text-tertiary text-lg font-light leading-relaxed mt-12 mb-16 italic lowercase font-heading border-r border-primary/20 pr-12 text-right md:text-left">
                    our secret garden is built for meditation and quiet time. walk on natural stones and listen to the sound of silence.
                  </p>
                  <WhatsAppButton variant="primary" label="Book a Visit" message="Hello, I want to come and see the zen garden at Maaisa Genesis." />
               </ScrollReveal>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <ScrollReveal animation="scale-fade" className="aspect-[3/4] rounded-sm overflow-hidden border border-white/5 relative group shadow-elegant">
                  <img src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070&auto=format&fit=crop" alt="Zen" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-[2000ms]" />
               </ScrollReveal>
               <ScrollReveal animation="scale-fade" delay={0.2} className="aspect-[3/4] rounded-sm overflow-hidden border border-white/5 mt-12 md:mt-24 relative group shadow-elegant">
                  <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2070&auto=format&fit=crop" alt="Texture" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-[2000ms]" />
               </ScrollReveal>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-64 bg-surface-lowest text-center">
         <ScrollReveal animation="blur-fade">
            <h2 className="text-5xl md:text-7xl font-heading italic text-primary font-thin mb-16 lowercase">come find your <br /> peace.</h2>
            <WhatsAppButton variant="minimal" label="Start a Chat" message="I'm interested in the wellness lifestyle at Maaisa Genesis." />
         </ScrollReveal>
      </section>
    </main>
  );
}
