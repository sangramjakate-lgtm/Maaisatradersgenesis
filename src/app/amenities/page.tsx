"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Waves, Heart, Dumbbell, Zap, Coffee, Wind, MapPin, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Amenities() {
  const amenityGalleries = [
    {
      title: "The Infinity Pool",
      desc: "Our pool is high above the city, where you can swim and enjoy the amazing view. it's clean and safe.",
      img: "https://images.unsplash.com/photo-1519449556851-5720b33024e7?q=80&w=2070&auto=format&fit=crop",
      icon: Waves,
      tags: ["Temperature Controlled", "Glass Edge"]
    },
    {
      title: "The Kinetic Gym",
      desc: "the best machines for your workout. whether you want to lose weight or build muscle, our gym has everything.",
      img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
      icon: Dumbbell,
      tags: ["Personal Coaching", "Smart Machines"]
    },
    {
      title: "Social Sky Lounge",
      desc: "a cozy place to meet your neighbors and have coffee while looking at the city lights.",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      icon: Coffee,
      tags: ["Premium Bar", "Outdoor Deck"]
    }
  ];

  return (
    <main className="bg-surface-lowest uppercase">
      {/* Amenities Hero: Immersive Large-Scale - Compacted */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ScrollReveal animation="image-parallax" className="h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ae6b91839d2?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Amenities"
              className="parallax-img w-full h-[120%] object-cover grayscale brightness-50"
            />
          </ScrollReveal>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-lowest via-transparent to-black/40" />
        </div>
        
        <div className="relative z-10 max-w-4xl text-left">
          <ScrollReveal animation="blur-fade">
            <div className="flex items-center gap-4 mb-10">
               <span className="h-[1px] w-16 bg-primary/40 block" />
               <span className="text-[10px] tracking-[0.6em] text-primary font-bold font-heading italic lowercase">
                 everything for a healthy life.
               </span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="line-mask" delay={0.2} className="mb-12">
            <h1 className="text-5xl md:text-7xl font-heading leading-[1.05] text-secondary mb-12 italic font-thin lowercase">
              amenities <br />that <span className="text-primary">inspire.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="blur-fade" delay={0.6} className="max-w-xl flex flex-col md:flex-row items-center gap-10">
            <WhatsAppButton 
              label="Enquire on Facilities"
              message="I want to know more about the available amenities at Maaisa Genesis."
              variant="primary"
              className="py-4 min-w-[240px] text-xs shadow-2xl"
            />
            <div className="hidden md:flex flex-col items-start gap-1">
               <span className="text-[9px] tracking-[0.2em] font-bold text-secondary/40 font-heading lowercase italic">resident access</span>
               <p className="text-[10px] text-secondary/60">Maaisa Genesis Exclusive</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Amenity Dynamic Grid - Compacted */}
      <section className="py-24 bg-surface-lowest">
         <div className="max-w-7xl mx-auto px-6 md:px-24">
            {amenityGalleries.map((item, i) => (
              <div key={i} className={cn("flex flex-col lg:flex-row gap-16 items-center mb-32", i % 2 !== 0 && "lg:flex-row-reverse")}>
                 <div className="w-full lg:w-3/5">
                    <ScrollReveal animation="clip" className="aspect-video relative group shadow-2xl border border-white/5 overflow-hidden">
                       <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-[2000ms]" 
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                       <div className="absolute bottom-8 left-8 flex items-center gap-4">
                          <item.icon className="w-8 h-8 text-primary/80" />
                          <div className="h-8 w-[1px] bg-primary/30" />
                       </div>
                    </ScrollReveal>
                 </div>
                 
                 <div className="w-full lg:w-2/5 text-left uppercase">
                    <ScrollReveal animation="blur-fade">
                       <span className="text-primary font-bold text-[9px] tracking-[0.3em] mb-4 block">0{i + 1} // Genesis Feature</span>
                       <h2 className="text-4xl font-heading text-secondary mb-6 italic font-thin leading-tight lowercase">{item.title}</h2>
                       <p className="text-base text-tertiary font-light leading-relaxed mb-8 lowercase font-heading italic border-l border-primary/20 pl-6">
                          {item.desc}
                       </p>
                       
                       <div className="flex flex-wrap gap-3 mb-10">
                          {item.tags.map(tag => (
                            <span key={tag} className="text-[9px] tracking-[0.1em] font-bold text-secondary/40 border border-white/5 px-4 py-1.5 glass hover:border-primary/20 transition-all font-heading uppercase italic">
                               {tag}
                            </span>
                          ))}
                       </div>
                       
                       <WhatsAppButton 
                        label="Check Availability"
                        message={`Hello, I'm interested in the ${item.title} at Maaisa Genesis.`}
                        variant="minimal"
                        className="text-[10px]"
                       />
                    </ScrollReveal>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* Featured Feature: Zen Garden - Compacted */}
      <section className="py-24 bg-surface-low border-y border-white/5 relative overflow-hidden uppercase">
         <div className="max-w-7xl mx-auto px-6 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="text-left">
               <ScrollReveal animation="blur-fade">
                  <span className="text-primary font-bold text-[10px] tracking-[0.6em] mb-6 block uppercase">The Secret Space</span>
                  <h2 className="text-5xl md:text-7xl font-heading italic font-thin text-secondary leading-[0.9] lowercase italic">zen garden.</h2>
                  <p className="text-base text-tertiary font-light leading-relaxed mt-8 mb-12 italic lowercase font-heading border-r border-primary/20 pr-8 text-right md:text-left">
                    our secret garden is built for meditation. listen to the sound of silence.
                  </p>
                  <WhatsAppButton variant="primary" label="Visit Garden" message="Hello, I want to see the zen garden at Maaisa Genesis." className="py-4 px-12 text-xs" />
               </ScrollReveal>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <ScrollReveal animation="scale-fade" className="aspect-[3/4] rounded-sm overflow-hidden border border-white/5 relative group shadow-elegant">
                  <img src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070&auto=format&fit=crop" alt="Zen" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-[2000ms]" />
               </ScrollReveal>
               <ScrollReveal animation="scale-fade" delay={0.2} className="aspect-[3/4] rounded-sm overflow-hidden border border-white/5 mt-12 relative group shadow-elegant">
                  <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2070&auto=format&fit=crop" alt="Texture" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-[2000ms]" />
               </ScrollReveal>
            </div>
         </div>
      </section>

      {/* Final CTA - Compacted */}
      <section className="py-32 bg-surface-lowest text-center px-6">
         <ScrollReveal animation="blur-fade">
            <h2 className="text-5xl md:text-7xl font-heading italic text-primary font-thin mb-16 lowercase italic">find your peace.</h2>
            <WhatsAppButton variant="minimal" label="Start a Chat" message="I'm interested in the wellness lifestyle at Maaisa Genesis." className="text-xs" />
         </ScrollReveal>
      </section>
    </main>
  );
}
