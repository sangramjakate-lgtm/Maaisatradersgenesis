"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Download, Play, Plus, MapPin, Shield, Sun, Home as HomeIcon, CheckCircle2, Phone, MousePointer2, Globe, Heart, Search } from "lucide-react";
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
    gsap.to(mainRef.current, { opacity: 1, duration: 1.5, ease: "power3.out" });
    
    // Smooth reveal for all sections
    const sections = gsap.utils.toArray('section');
    sections.forEach((section: any) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  const tourPoints = [
    { title: "Grand Living Room", url: "/360/shot-panoramic-composition-living-room.jpg", desc: "Open space for family & friends." },
    { title: "Cloud Kitchen", url: "/360/shot-panoramic-composition-kitchen.jpg", desc: "Top-tier fittings and smart design." },
    { title: "Private Sanctuary", url: "/360/shot-panoramic-composition-library.jpg", desc: "Quiet study library for your work." },
    { title: "Luxury Suite", url: "/360/shot-panoramic-composition-living-room (1).jpg", desc: "Master bedroom with high-end finish." },
    { title: "City Horizon", url: "/360/allphoto-bangkok-GfXqtWmiuDI-unsplash.jpg", desc: "Breathtaking views of the skyline." }
  ];

  const details = [
    { title: "Carrara Marble", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2070&auto=format&fit=crop", span: "lg:col-span-1" },
    { title: "Smoked Oak", img: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070&auto=format&fit=crop", span: "lg:col-span-2" },
    { title: "Smart Living", img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop", span: "lg:col-span-2" },
    { title: "Glass Horizon", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop", span: "lg:col-span-1" }
  ];

  return (
    <main ref={mainRef} className="opacity-0 bg-background selection:bg-primary selection:text-white">
      {/* 360 Portal Overlay */}
      {active360 && (
        <ThreeSixtyPortal 
          imageUrl={active360.url} 
          title={active360.title} 
          onClose={() => setActive360(null)} 
        />
      )}

      {/* Hero Section: Maaisa Reality Genesis - Light Skin */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-background z-10" />
          <ScrollReveal animation="image-parallax" className="h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
              alt="Maaisa Reality Exterior"
              className="parallax-img w-full h-[120%] object-cover brightness-100 scale-100"
            />
          </ScrollReveal>
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl uppercase">
          <ScrollReveal animation="blur-fade" delay={0.2}>
            <div className="flex flex-col items-center gap-4 mb-8">
               <span className="h-[1px] w-16 bg-primary/40 block" />
               <span className="text-[10px] tracking-[0.6em] text-primary font-black font-heading">
                 Maaisa Reality
               </span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="line-mask" delay={0.4} className="mb-12">
            <h1 className="text-5xl md:text-8xl font-heading font-black leading-[0.95] text-foreground tracking-tighter">
              architectural <br />
              <span className="italic font-light text-primary">excellence.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="blur-fade" delay={1.2} className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <WhatsAppButton 
              label="Secure Unit"
              message="Hello Maaisa Reality, I would like to schedule a tour of the Genesis project."
              variant="primary"
              className="min-w-[200px] py-4 shadow-elegant"
            />
            
            <button 
              onClick={() => setActive360(tourPoints[0])}
              className="flex items-center gap-4 group transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-black/10 rounded-full group-hover:border-primary/40 group-hover:bg-primary/5 transition-all relative overflow-hidden">
                <span className="text-foreground group-hover:text-primary transition-colors text-[10px] font-black z-10">360</span>
                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </div>
              <div className="text-left">
                <p className="text-[8px] tracking-[0.2em] font-black text-primary/60 group-hover:text-primary transition-colors">VR Vault</p>
                <p className="text-[10px] text-foreground/40 font-black tracking-widest italic font-heading">Look Inside</p>
              </div>
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Material Grid: Moss Green Heritage - Light Skin */}
      <section className="py-32 bg-background px-6 md:px-24 border-b border-black/5 uppercase font-black text-[10px] tracking-widest">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-24">
               <div className="lg:col-span-8">
                  <ScrollReveal animation="blur-fade">
                    <span className="text-primary font-black tracking-[0.5em] mb-4 block">The Genesis Build</span>
                    <h2 className="text-5xl md:text-6xl font-heading font-black text-foreground leading-[1] tracking-tighter">premium <br/><span className="text-primary/40">materiality.</span></h2>
                  </ScrollReveal>
               </div>
               <div className="lg:col-span-4 border-l border-primary/20 pl-8 pb-2">
                  <p className="text-tertiary font-body font-normal lowercase tracking-tight leading-relaxed max-w-xs">
                    every genesis unit is crafted with imported carrara stones, smoked oak panels, and reinforced tempered glass.
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               {details.map((item, i) => (
                 <ScrollReveal key={i} animation="scale-fade" delay={i * 0.1} className={cn("relative group h-[400px] overflow-hidden shadow-elegant border border-black/5", item.span)}>
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[2000ms]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                       <h3 className="text-2xl font-heading font-black text-foreground mb-2">{item.title}</h3>
                       <div className="h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700" />
                    </div>
                 </ScrollReveal>
               ))}
            </div>
         </div>
      </section>

      {/* Interactive Hub: Maaisa Virtual Access - Light Skin */}
      <section className="py-32 bg-surface-low relative overflow-hidden uppercase font-black text-[10px] tracking-widest">
        <div className="max-w-7xl mx-auto px-6 md:px-24">
          <ScrollReveal animation="blur-fade" className="text-center mb-24">
            <span className="text-primary font-black tracking-[0.6em] mb-6 block">Virtual Access</span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-foreground leading-none tracking-tighter">interactive <br/><span className="text-primary/40">heritage.</span></h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-12">
               {tourPoints.slice(0, 2).map((point, i) => (
                 <ScrollReveal key={i} animation="scale-fade" delay={i * 0.2}>
                    <div 
                      onClick={() => setActive360(point)}
                      className="group cursor-pointer bg-background p-8 border border-black/5 hover:border-primary/20 transition-all shadow-card"
                    >
                       <div className="aspect-video relative overflow-hidden mb-8 shadow-elegant">
                          <img src={point.url} alt={point.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[2000ms]" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                             <div className="w-16 h-16 rounded-full glass flex items-center justify-center border border-primary/20 scale-50 group-hover:scale-100 transition-transform duration-500 shadow-glow">
                                <span className="text-primary font-black text-[8px] tracking-[0.1em]">VIEW</span>
                             </div>
                          </div>
                       </div>
                       <div className="flex justify-between items-end">
                          <div>
                             <h3 className="text-2xl font-heading font-black text-foreground mb-1">{point.title}</h3>
                             <p className="text-[8px] tracking-[0.2em] font-black text-primary/60">{point.desc}</p>
                          </div>
                       </div>
                    </div>
                 </ScrollReveal>
               ))}
            </div>
            
            <div className="space-y-12 mt-0 md:mt-24">
               {tourPoints.slice(2, 4).map((point, i) => (
                 <ScrollReveal key={i} animation="scale-fade" delay={i * 0.2 + 0.3}>
                    <div 
                      onClick={() => setActive360(point)}
                      className="group cursor-pointer bg-background p-8 border border-black/5 hover:border-primary/20 transition-all shadow-card"
                    >
                       <div className="aspect-[4/5] relative overflow-hidden mb-8 shadow-elegant">
                          <img src={point.url} alt={point.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[2000ms]" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                             <div className="w-16 h-16 rounded-full glass flex items-center justify-center border border-primary/20 scale-50 group-hover:scale-100 transition-transform duration-500 shadow-glow">
                                <span className="text-primary font-black text-[8px] tracking-[0.1em]">VIEW</span>
                             </div>
                          </div>
                       </div>
                       <div className="flex justify-between items-end">
                          <div>
                             <h3 className="text-2xl font-heading font-black text-foreground mb-1">{point.title}</h3>
                             <p className="text-[8px] tracking-[0.2em] font-black text-primary/60">{point.desc}</p>
                          </div>
                       </div>
                    </div>
                 </ScrollReveal>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section: Moss Green Accents - Light Skin */}
      <section className="py-24 bg-background px-6 md:px-24 uppercase font-black text-[10px] tracking-widest">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { icon: Shield, title: "Maaisa Secure", desc: "Genesis provides 24/7 high-fidelity biometric security layers." },
                 { icon: MapPin, title: "Heritage Spot", desc: "Strategically located within Pune's high-velocity tech corridor." },
                 { icon: Sun, title: "Solar Integrity", desc: "Oriented for optimal natural light and zero carbon footprint." }
               ].map((item, i) => (
                 <ScrollReveal key={i} animation="scale-fade" delay={i * 0.1} className="bg-surface-low p-12 group hover:bg-white transition-all shadow-card border border-black/5 hover:border-primary/10">
                    <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center mb-8 group-hover:border-primary group-hover:bg-primary/5 transition-all">
                       <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-2xl font-heading font-black text-foreground mb-4 uppercase tracking-tighter">{item.title}</h3>
                    <p className="text-tertiary font-body font-normal lowercase tracking-tight leading-relaxed mb-8">{item.desc}</p>
                    <WhatsAppButton 
                      variant="minimal" 
                      label="Enquire" 
                      message={`Hello Maaisa Reality, I have an enquiry about ${item.title}.`}
                    />
                 </ScrollReveal>
               ))}
            </div>
         </div>
      </section>

      {/* Featured Collection: Genesis Private Reserve - Light Skin */}
      <section className="py-32 bg-background relative uppercase font-black text-[10px] tracking-widest">
        <div className="max-w-7xl mx-auto px-6 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
           <div className="lg:col-span-7">
              <ScrollReveal animation="clip" className="aspect-[16/10] relative group shadow-elegant border border-black/5 overflow-hidden">
                 <img 
                    src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop" 
                    alt="The Genesis Suite" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[3000ms]" 
                 />
              </ScrollReveal>
           </div>
           
           <div className="lg:col-span-5 text-left">
              <ScrollReveal animation="blur-fade">
                 <span className="text-primary font-black tracking-[0.4em] mb-4 block">Private Reserve</span>
                 <h2 className="text-5xl md:text-7xl font-heading font-black text-foreground leading-[1] mb-8 tracking-tighter">the sky <br/><span className="text-primary/40">vault.</span></h2>
                 <p className="text-tertiary font-body font-normal lowercase tracking-tight leading-relaxed mb-12 border-l border-primary/20 pl-6">
                    an exclusive collection of genesis suites designed for high-net-worth investors and visionaries.
                 </p>
                 <WhatsAppButton 
                   label="Schedule Tour" 
                   message="I want to see the sky collection apartments at Maaisa Reality Genesis."
                   variant="primary"
                   className="w-full py-5"
                 />
              </ScrollReveal>
           </div>
        </div>
      </section>

      {/* Contact Section: Maaisa Reality - Light Skin */}
      <section id="contact" className="py-32 bg-secondary/20 px-6 relative overflow-hidden uppercase font-black text-[10px] tracking-widest">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)]" />
        
        <ScrollReveal animation="blur-fade">
          <div className="text-center mb-24">
             <span className="text-primary font-black tracking-[0.8em] mb-8 block">Connect</span>
             <h2 className="text-5xl md:text-7xl font-heading font-black text-foreground tracking-tighter leading-none mb-10">secure your <br/><span className="text-primary/40">heritage.</span></h2>
          </div>
          <ContactForm />
        </ScrollReveal>

        <div className="mt-32 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-black/5 pt-16 gap-12">
           <div className="flex flex-col items-center md:items-start gap-4">
              <span className="text-[9px] tracking-[0.4em] text-primary/40">Maaisa Reality Direct</span>
              <a href="tel:+919890200222" className="text-3xl md:text-4xl font-heading font-black text-foreground hover:text-primary transition-all flex items-center gap-6 tracking-tighter">
                 <Phone className="w-8 h-8 stroke-[2px] text-primary" />
                 +91 98902 00222
              </a>
           </div>
           
           <div className="flex flex-wrap justify-center gap-12">
              <WhatsAppButton variant="minimal" label="WhatsApp" message="Hello Maaisa Reality, I'm reaching out from the Genesis project portal." />
              <button 
                onClick={() => window.open('/Maaisa_Genesis_Website_Content_Brief.pdf', '_blank')}
                className="text-primary font-black tracking-[0.3em] hover:text-foreground transition-all border-b border-primary/20 pb-1"
              >
                Brochure
              </button>
           </div>
        </div>
      </section>
    </main>
  );
}
