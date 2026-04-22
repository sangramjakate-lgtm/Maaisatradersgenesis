"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Download, Play, Plus, MapPin, Shield, Sun, Home as HomeIcon, CheckCircle2, Phone, MousePointer2, Globe, Heart, Search } from "lucide-react";
import { LineMaskReveal } from "@/components/TextAnimations";
import { ThreeSixtyPortal } from "@/components/ThreeSixtyPortal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

// Premium Magnetic Button Component
const MagneticButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.4);
    y.set((clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

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
          duration: 1.2, 
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 92%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Custom Clip Reveals for Images
    const images = gsap.utils.toArray('.reveal-image');
    images.forEach((img: any) => {
      gsap.fromTo(img, 
        { clipPath: 'inset(0 100% 0 0)' },
        { 
          clipPath: 'inset(0 0% 0 0)', 
          duration: 1.5, 
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
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

      {/* Hero Section: Maaisa Reality Genesis - Enhanced with Magnetic Interaction */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-background z-10" />
          <LineMaskReveal className="h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
              alt="Maaisa Reality Exterior"
              className="parallax-img w-full h-[120%] object-cover brightness-105 scale-100"
            />
          </LineMaskReveal>
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl uppercase">
          <LineMaskReveal delay={200}>
            <div className="flex flex-col items-center gap-4 mb-8">
               <span className="h-[1px] w-16 bg-primary/40 block animate-width-reveal" />
               <LineMaskReveal delay={300}>
                 <span className="text-[10px] tracking-[0.8em] text-primary font-black font-heading animate-fade-in">
                   Maaisa Reality
                 </span>
               </LineMaskReveal>
            </div>
          </LineMaskReveal>
          
          <LineMaskReveal delay={400} className="mb-16">
            <h1 className="text-4xl md:text-7xl lg:text-[6rem] font-heading font-medium leading-[1.1] text-foreground tracking-tight">
              A Legacy Of <br />
              <span className="italic font-light text-primary">Absolute Trust.</span>
            </h1>
          </LineMaskReveal>

          <LineMaskReveal delay={1200} className="flex flex-col sm:flex-row items-center justify-center gap-12">
            <MagneticButton>
               <WhatsAppButton 
                label="Explore Vision"
                message="Hello Maaisa Reality, I would like to schedule an introductory consultation."
                variant="primary"
                className="min-w-[260px] py-6 shadow-glow"
               />
            </MagneticButton>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              onClick={() => setActive360(tourPoints[0])}
              className="flex items-center gap-4 group transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-primary/20 rounded-full group-hover:border-primary group-hover:bg-primary/5 transition-all relative overflow-hidden shadow-sm">
                <span className="text-foreground group-hover:text-primary transition-colors text-[9px] font-medium z-10 uppercase">360</span>
                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </div>
              <div className="text-left font-body uppercase">
                <p className="text-[9px] tracking-[0.3em] font-medium text-primary/60 group-hover:text-primary transition-colors">VR Sanctuary</p>
                <p className="text-[10px] text-foreground/40 font-medium tracking-widest italic lowercase">explore the atmosphere</p>
              </div>
            </motion.button>
          </LineMaskReveal>
        </div>
      </section>

      {/* About Material Grid */}
      <section id="about" className="py-40 bg-background px-6 md:px-24 border-b border-black/5 uppercase font-black text-[10px] tracking-widest">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-24">
               <div className="lg:col-span-8">
                  <LineMaskReveal delay={200}>
                    <span className="text-primary font-medium tracking-[0.3em] mb-4 block underline underline-offset-8 decoration-primary/20 text-[10px] uppercase">Our Philosophy</span>
                    <h2 className="text-4xl md:text-[5rem] font-heading font-medium text-foreground leading-[1] tracking-tight">unrivaled <br/><span className="text-primary/60 font-light italic">materiality.</span></h2>
                  </LineMaskReveal>
               </div>
               <div className="lg:col-span-4 border-l-2 border-primary/20 pl-10 pb-4">
                   <LineMaskReveal delay={400}>
                      <p className="text-tertiary font-body font-normal lowercase tracking-tight leading-relaxed max-w-sm">
                    every maaisa structure is synthesized with uncompromising quality, integrating imported stone, smoked timber, and high-fidelity glazing.
                      </p>
                   </LineMaskReveal>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {details.map((item, i) => (
                 <div key={i} className={cn("relative group h-[400px] md:h-[500px] overflow-hidden shadow-elegant border border-black/5 reveal-image", item.span)}>
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[3000ms]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 transition-opacity duration-1000" />
                    <div className="absolute bottom-8 left-8 opacity-100 translate-y-0 transition-all duration-700">
                       <LineMaskReveal delay={100}>
                          <h3 className="text-2xl font-heading font-medium text-white mb-3 drop-shadow-md">{item.title}</h3>
                       </LineMaskReveal>
                       <div className="h-[2px] w-8 bg-primary group-hover:w-full transition-all duration-1000" />
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Upcoming Projects Hub: Genesis */}
      <section id="projects" className="py-32 bg-surface-low relative overflow-hidden uppercase">
        <div className="max-w-7xl mx-auto px-6 md:px-24">
          <LineMaskReveal delay={100} className="text-center mb-24">
            <span className="text-primary text-[10px] font-medium tracking-[0.4em] mb-6 block">Upcoming Designation</span>
            <h2 className="text-4xl md:text-[5rem] font-heading font-medium text-foreground leading-[1] tracking-tight">the <br/><span className="text-primary/60 italic font-light lowercase">genesis.</span></h2>
          </LineMaskReveal>

          <LineMaskReveal delay={200}>
             <a href="/projects/genesis" className="group block relative w-full h-[60vh] md:h-[80vh] overflow-hidden shadow-elegant border border-black/5 reveal-image">
                <img 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Genesis Project" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4000ms]" 
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-32 h-32 rounded-full glass border border-white/20 flex flex-col items-center justify-center scale-90 group-hover:scale-100 transition-all duration-700 shadow-glow">
                      <span className="text-[9px] tracking-widest text-white font-black mb-1">ENTER</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                   </div>
                </div>
                <div className="absolute bottom-12 left-12">
                   <span className="text-white text-3xl md:text-5xl font-heading font-black tracking-tighter">GENESIS</span>
                   <p className="text-white/60 text-[9px] tracking-[0.4em] font-black lowercase italic font-body mt-2">tathawade, pune</p>
                </div>
             </a>
          </LineMaskReveal>
        </div>
      </section>

      {/* Corporate Values: Maaisa Reality Foundation */}
      <section className="py-32 bg-background px-6 md:px-24 uppercase font-black text-[10px] tracking-widest">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               { [
                 { icon: Shield, title: "Absolute Trust", desc: "Maaisa Reality provides uncompromising commitment to delivery and legal transparency." },
                 { icon: MapPin, title: "Prime Coordinate", desc: "Strategically synthesized within Pune's high-velocity tech districts." },
                 { icon: Sun, title: "Luminous Design", desc: "Architectural orientation optimized for natural luminous efficiency." }
               ].map((item, i) => (
                 <LineMaskReveal key={i} delay={i * 200} className="bg-surface-low p-14 group hover:bg-white transition-all shadow-card hover:shadow-glow border border-black/5 hover:border-primary/20">
                    <div className="w-12 h-12 rounded-xl border border-primary/20 flex items-center justify-center mb-8 group-hover:border-primary group-hover:bg-primary/5 transition-all shadow-sm">
                       <item.icon className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
                    </div>
                    <LineMaskReveal delay={300}>
                       <h3 className="text-2xl font-heading font-medium text-foreground mb-4 tracking-tight leading-none capitalize">{item.title}</h3>
                    </LineMaskReveal>
                    <LineMaskReveal delay={400}>
                       <p className="text-tertiary font-body font-normal lowercase tracking-wide leading-relaxed mb-8 border-l border-primary/20 pl-4">{item.desc}</p>
                    </LineMaskReveal>
                    <WhatsAppButton 
                      variant="minimal" 
                      label="Enquire" 
                      message={`Hello Maaisa Reality, I have an enquiry about ${item.title}.`}
                    />
                 </LineMaskReveal>
               ))}
            </div>
         </div>
      </section>

      {/* Clean Contact Redirect */}
      <section id="contact" className="py-32 bg-surface-low px-6 relative overflow-hidden">
        <LineMaskReveal delay={100}>
          <div className="text-center mb-16">
             <span className="text-primary font-medium text-[10px] uppercase tracking-[0.4em] mb-6 block">Connectivity</span>
             <LineMaskReveal delay={300}>
              <h2 className="text-4xl md:text-[5rem] font-heading font-medium text-foreground tracking-tight leading-[1] mb-8">secure your <br/><span className="text-primary italic font-light lowercase">transition.</span></h2>
             </LineMaskReveal>
             
             <div className="mt-12">
               <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-primary text-on-primary text-[10px] font-medium uppercase tracking-[0.2em] shadow-sm hover:shadow-elegant transition-all hover:-translate-y-1">
                 Open Dialogue Hub
               </Link>
             </div>
          </div>
        </LineMaskReveal>
        
        <div className="mt-24 max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center border-t border-black/5 pt-16 gap-10">
           <WhatsAppButton variant="minimal" label="WhatsApp Chat" message="Hello Maaisa Reality, I am interested in connecting with you." />
           <span className="text-tertiary/20 hidden md:block">|</span>
           <button 
             onClick={() => window.open('/Maaisa_Genesis_Website_Content_Brief.pdf', '_blank')}
             className="text-[10px] text-primary font-medium tracking-[0.2em] uppercase hover:text-foreground transition-all border-b border-primary/20 pb-1 hover:border-primary"
           >
             Brochure Ledger
           </button>
        </div>
      </section>
    </main>
  );
}
