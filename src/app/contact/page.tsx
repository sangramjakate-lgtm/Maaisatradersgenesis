"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LineMaskReveal } from "@/components/TextAnimations";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function ContactPage() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(mainRef.current, { opacity: 1, duration: 1.5, ease: "power3.out" });
  }, []);

  return (
    <main ref={mainRef} className="pt-32 opacity-0 bg-background selection:bg-primary/20 pb-32">
      
      {/* 1. Header */}
      <section className="px-6 md:px-24 mb-24 max-w-7xl mx-auto">
        <LineMaskReveal>
           <span className="text-primary font-medium tracking-[0.4em] text-[10px] uppercase block mb-6">Dialogue Axis</span>
           <h1 className="text-4xl md:text-[5rem] font-heading font-medium leading-[1] tracking-tight text-foreground">
             Start the <span className="italic font-light text-primary">Conversation.</span>
           </h1>
        </LineMaskReveal>
      </section>

      {/* 2. Content Matrix */}
      <section className="max-w-7xl mx-auto px-6 md:px-24">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            
            {/* Left: Contact Info */}
            <div className="flex flex-col gap-16">
               <div>
                  <LineMaskReveal delay={100}>
                     <h3 className="text-2xl font-heading font-medium text-foreground mb-6">Corporate Office</h3>
                  </LineMaskReveal>
                  <LineMaskReveal delay={200}>
                     <div className="flex items-start gap-4 mb-6">
                        <MapPin className="text-primary w-5 h-5 mt-1" />
                        <div>
                           <p className="text-tertiary font-medium text-sm">Tathawade</p>
                           <p className="text-tertiary font-body text-sm">Pune, Maharashtra</p>
                           <p className="text-tertiary font-body text-sm">India</p>
                        </div>
                     </div>
                  </LineMaskReveal>
               </div>

               <div>
                  <LineMaskReveal delay={300}>
                     <h3 className="text-2xl font-heading font-medium text-foreground mb-6">Direct Liaisons</h3>
                  </LineMaskReveal>
                  
                  <LineMaskReveal delay={400}>
                     <div className="space-y-6">
                        <div className="flex items-center gap-4">
                           <Phone className="text-primary w-5 h-5" />
                           <a href="tel:+919890200222" className="text-foreground hover:text-primary transition-colors text-lg font-medium tracking-tight">
                              +91 98902 00222
                           </a>
                        </div>
                        
                        <div className="flex items-center gap-4">
                           <Mail className="text-primary w-5 h-5" />
                           <a href="mailto:info@maaisa.com" className="text-foreground hover:text-primary transition-colors text-lg font-medium tracking-tight">
                              info@maaisa.com
                           </a>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                           <Clock className="text-primary w-5 h-5" />
                           <div>
                              <p className="text-tertiary font-medium text-sm uppercase tracking-wider text-[10px]">Business Hours</p>
                              <p className="text-tertiary font-body text-sm">Mon - Sat: 10:00 AM - 7:00 PM</p>
                           </div>
                        </div>
                     </div>
                  </LineMaskReveal>
               </div>

               <LineMaskReveal delay={500}>
                  <div className="pt-8 border-t border-black/5">
                     <WhatsAppButton 
                       variant="primary" 
                       label="Chat on WhatsApp" 
                       message="Hello Maaisa Reality, I would like to schedule a consultation." 
                     />
                  </div>
               </LineMaskReveal>
            </div>

            {/* Right: The Form Component */}
            <div className="bg-surface-low border border-black/5 p-10 md:p-14 shadow-elegant relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
               <LineMaskReveal delay={200}>
                  <p className="text-primary text-[10px] font-medium uppercase tracking-[0.25em] mb-4">Digital Inquiry</p>
                  <h2 className="text-3xl font-heading font-medium text-foreground mb-10">Send us a message</h2>
               </LineMaskReveal>
               
               <ContactForm />
            </div>

         </div>
      </section>

    </main>
  );
}
