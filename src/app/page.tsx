"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Download, Play, Plus, MapPin, Shield, Sun, Home as HomeIcon, CheckCircle2, Phone } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ThreeSixtyPortal } from "@/components/ThreeSixtyPortal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactForm } from "@/components/ContactForm";
import { cn } from "@/lib/utils";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [active360, setActive360] = useState<{ url: string; title: string } | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(mainRef.current, { opacity: 1, duration: 1, ease: "power2.out" });
  }, []);

  const tourPoints = [
    { title: "Grand Living Room", url: "/360/shot-panoramic-composition-living-room.jpg", desc: "Open space for family & friends." },
    { title: "Cloud Kitchen", url: "/360/shot-panoramic-composition-kitchen.jpg", desc: "Top-tier fittings and smart design." },
    { title: "Private Sanctuary", url: "/360/shot-panoramic-composition-library.jpg", desc: "Quiet study library for your work." },
    { title: "Luxury Suite", url: "/360/shot-panoramic-composition-living-room (1).jpg", desc: "Master bedroom with high-end finish." },
    { title: "City Horizon", url: "/360/allphoto-bangkok-GfXqtWmiuDI-unsplash.jpg", desc: "Breathtaking views of the skyline." }
  ];

  return (
    <main ref={mainRef} className="opacity-0">
      {/* 360 Portal Overlay */}
      {active360 && (
        <ThreeSixtyPortal 
          imageUrl={active360.url} 
          title={active360.title} 
          onClose={() => setActive360(null)} 
        />
      )}

      {/* Hero Section: Simple, Direct & Impactful */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden uppercase">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-surface-lowest z-10" />
          <ScrollReveal animation="image-parallax" className="h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
              alt="Maaisa Genesis Exterior"
              className="parallax-img w-full h-[120%] object-cover brightness-75 scale-110"
            />
          </ScrollReveal>
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <ScrollReveal animation="blur-fade" delay={0.2}>
            <span className="text-[10px] md:text-xs tracking-[0.6em] uppercase text-primary font-bold mb-8 block font-heading italic">
              Modern Homes Created for You
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="line-mask" delay={0.4} className="mb-12">
            <h1 className="text-6xl md:text-[8rem] font-heading font-extralight leading-[1.05] text-secondary lowercase">
              simple, <br />
              <span className="italic font-thin text-primary">peaceful luxury.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="blur-fade" delay={1} className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <WhatsAppButton 
              label="Schedule Tour"
              message="Hello, I would like to schedule a tour of Maaisa Genesis."
              variant="primary"
            />
            
            <button 
              onClick={() => setActive360(tourPoints[0])}
              className="flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase font-bold text-secondary/60 hover:text-primary transition-colors group"
            >
              Start 360 Tour
              <div className="w-12 h-12 flex items-center justify-center border border-primary/20 rounded-full group-hover:bg-primary group-hover:text-on-primary transition-all">
                <span className="text-[10px] font-bold">360</span>
              </div>
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Virtual Hub: Interactive Grids with Depth */}
      <section className="py-24 bg-surface-lowest relative overflow-hidden uppercase">
        <div className="max-w-7xl mx-auto px-6 md:px-24">
          <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-8">
            <ScrollReveal animation="blur-fade">
              <span className="text-primary font-bold text-[10px] tracking-[0.6em] mb-4 block">Interactive Enclaves</span>
              <h2 className="text-5xl md:text-7xl font-heading italic font-thin text-secondary">Virtual <br />Experience.</h2>
            </ScrollReveal>
            <p className="text-tertiary max-w-sm font-body font-light text-xs tracking-widest leading-[2] border-r border-primary/20 pr-8 italic">
              Look around your future home. Every detail, from the smooth wood to the open sunlight, can be seen in our 360 virtual walk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {tourPoints.map((point, i) => (
              <ScrollReveal key={i} animation="scale-fade" delay={i * 0.1}>
                 <div 
                   onClick={() => setActive360(point)}
                   className="group relative cursor-pointer aspect-[3/4] overflow-hidden shadow-elegant border border-primary/5 hover:border-primary/20 transition-all rounded-sm"
                 >
                    <img src={point.url} alt={point.title} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute bottom-8 left-8 right-8 z-10">
                       <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center mb-6 bg-black/40 group-hover:bg-primary group-hover:text-on-primary transition-all">
                          <span className="text-[10px] font-bold">360</span>
                       </div>
                       <h3 className="text-lg font-heading italic font-thin text-secondary mb-2 whitespace-nowrap">{point.title}</h3>
                       <p className="text-[8px] tracking-[0.2em] font-bold text-primary">{point.desc}</p>
                    </div>
                 </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Integrity Grid */}
      <section className="py-40 bg-surface-low border-y border-white/5 uppercase">
         <div className="max-w-7xl mx-auto px-6 md:px-24">
            <ScrollReveal animation="blur-fade" className="mb-32">
               <span className="text-[10px] tracking-[0.4em] text-primary font-bold mb-6 block">Our Commitment</span>
               <h2 className="text-6xl font-heading italic font-thin text-secondary leading-tight">Everything is built <br /> for your comfort.</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5 border border-white/5 shadow-elegant">
               {[
                 { icon: Shield, title: "Total Safety", desc: "Your family's safety is our priority. 24/7 security and safe space for kids." },
                 { icon: MapPin, title: "Great Location", desc: "Close to schools, hospitals, and parks. Right in the heart of the city." },
                 { icon: Sun, title: "Plenty of Light", desc: "Designed to get natural sunlight throughout the day in every room." }
               ].map((item, i) => (
                 <ScrollReveal key={i} animation="scale-fade" delay={i * 0.1} className="bg-surface-lowest p-20 group hover:bg-surface-low transition-colors">
                    <item.icon className="w-12 h-12 text-primary/50 group-hover:text-primary transition-all mb-8 animate-pulse" />
                    <h3 className="text-2xl font-heading italic font-thin text-secondary mb-6">{item.title}</h3>
                    <p className="text-tertiary font-body font-light leading-relaxed text-[10px] uppercase tracking-[0.2em]">{item.desc}</p>
                    <WhatsAppButton 
                      variant="minimal" 
                      label="Enquire" 
                      message={`Hello, I have an enquiry about ${item.title}.`}
                      className="mt-8"
                    />
                 </ScrollReveal>
               ))}
            </div>
         </div>
      </section>

      {/* Philosophy: High Quality & Detail */}
      <section className="py-64 px-6 md:px-24 bg-surface-lowest relative uppercase">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 border-r border-primary/10 pr-12">
            <ScrollReveal animation="blur-fade" className="mb-12">
              <h2 className="text-5xl font-heading text-secondary mb-8 italic font-thin leading-[1.1]">
                High quality <br /> homes for your <br /> <span className="text-primary not-italic font-normal">growing legacy.</span>
              </h2>
              <p className="text-tertiary text-lg font-light leading-relaxed mb-16 italic lowercase border-b border-white/5 pb-12">
                we use only the best stones, fine wood, and clean glass. maaisa genesis is made to feel quiet, grand, and simple.
              </p>
              
              <div className="space-y-6">
                {[
                  "Built with Strong Materials",
                  "Modern Smart Features",
                  "Amazing Quiet Environment"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <CheckCircle2 className="w-5 h-5 text-primary/50 group-hover:text-primary transition-all" />
                    <span className="text-[10px] tracking-[0.3em] font-bold text-tertiary group-hover:text-secondary transition-colors uppercase">{item}</span>
                  </div>
                ))}
              </div>
              <WhatsAppButton 
                label="Book a Tour"
                message="I would like to schedule a visit to see the materials and construction."
                variant="primary"
                className="mt-16 w-full"
              />
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal animation="clip" className="aspect-[16/10] relative group shadow-elegant border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Architecture Detail"
                className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-1000"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Collections Section Expansion */}
      <section className="py-40 px-6 md:px-24 bg-surface-low uppercase">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-8">
            <ScrollReveal animation="blur-fade">
              <span className="text-primary font-bold text-[10px] tracking-[0.5em] mb-4 block">Selected Homes</span>
              <h2 className="text-6xl font-heading italic font-thin text-secondary">The Collection.</h2>
            </ScrollReveal>
            <WhatsAppButton 
              label="Talk to Sales"
              message="Hello, I want to discuss the available units in the collection."
              variant="outline"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5">
            {[
              { id: "01", name: "The Sky Suite", type: "Family Home", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" },
              { id: "02", name: "The Horizon Loft", type: "Penthouse View", img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop" },
              { id: "03", name: "The Atelier", type: "Couple Sanctuary", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop" }
            ].map((card, i) => (
              <ScrollReveal key={i} animation="scale-fade" delay={i * 0.1} className="bg-surface-lowest p-12 group">
                <div className="aspect-[4/5] overflow-hidden mb-12 relative border border-white/5 group-hover:border-primary/20 transition-all duration-[1000ms]">
                   <img src={card.img} alt={card.name} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                   <div className="absolute top-8 right-8 font-heading text-xl italic text-primary">{card.id}</div>
                </div>
                <h3 className="text-2xl font-heading italic font-thin text-secondary mb-4">{card.name}</h3>
                <p className="text-[10px] tracking-[0.2em] font-bold text-tertiary mb-12">{card.type}</p>
                <WhatsAppButton 
                  variant="primary" 
                  label="Enquiry" 
                  message={`Hello, I have an enquiry about ${card.name} (${card.id}).`}
                  className="w-full"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section: The Professional Finale */}
      <section className="py-64 bg-surface-lowest px-6 relative overflow-hidden uppercase">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)]" />
        
        <ScrollReveal animation="blur-fade">
          <ContactForm />
        </ScrollReveal>

        <div className="mt-40 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-24 gap-12">
           <div className="flex flex-col items-center md:items-start gap-4">
              <span className="text-[10px] tracking-[0.4em] text-primary font-bold">Call Us Anytime</span>
              <a href="tel:+919172833311" className="text-3xl font-heading italic font-thin text-secondary hover:text-primary transition-colors flex items-center gap-4">
                 <Phone className="w-6 h-6" />
                 +91 91728 33311
              </a>
           </div>
           
           <div className="flex gap-12">
              <WhatsAppButton variant="minimal" label="WhatsApp" message="Hello, I'm reaching out from the website footer." />
              <button 
                onClick={() => window.open('/Maaisa_Genesis_Website_Content_Brief.pdf', '_blank')}
                className="text-primary font-bold text-[10px] tracking-[0.3em] uppercase hover:text-secondary whitespace-nowrap transition-colors underline underline-offset-8"
              >
                Brochure PDF
              </button>
           </div>
        </div>
      </section>
    </main>
  );
}
