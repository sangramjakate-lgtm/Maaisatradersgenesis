"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, Compass } from "lucide-react";
import { LineMaskReveal } from "@/components/TextAnimations";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";

// Floating Image Card
const FloatCard = ({
  src, alt, className, delay = 0, rotate = 0
}: { src: string; alt: string; className?: string; delay?: number; rotate?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.8, delay, ease: [0.23, 1, 0.32, 1] }}
    style={{ rotate }}
    whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.5 } }}
    className={cn("overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.22)] border border-white/10", className)}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </motion.div>
);

export default function ContactPage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(mainRef.current, { opacity: 1, duration: 1.5, ease: "power3.out" });

    // Fade-up reveals
    gsap.utils.toArray<HTMLElement>(".gsap-up").forEach((el) => {
      gsap.fromTo(el,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" }
        }
      );
    });

    // Horizontal divider lines
    gsap.utils.toArray<HTMLElement>(".line-reveal").forEach((line) => {
      gsap.fromTo(line,
        { width: "0%" },
        {
          width: "100%", duration: 1.5, ease: "power3.out",
          scrollTrigger: { trigger: line, start: "top 90%" }
        }
      );
    });
  }, []);

  const connections = [
    {
      title: "Call Us",
      val: "+91 98902 00222",
      sub: "Available on weekdays",
      icon: Phone,
      link: "tel:+919890200222",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Write to Us",
      val: "info@maaisa.com",
      sub: "We respond within 2 hours",
      icon: Mail,
      link: "mailto:info@maaisa.com",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Visit Us",
      val: "Tathawade, Pune",
      sub: "Maharashtra, India",
      icon: MapPin,
      link: "#hq",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Office Hours",
      val: "Mon–Sat",
      sub: "10:00 AM – 7:00 PM IST",
      icon: Clock,
      link: "#",
      img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <main ref={mainRef} className="opacity-0 bg-background selection:bg-primary/20 overflow-x-hidden">

      {/* ============ 1. HERO — Architectural & Grounded ============ */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-end overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 scale-110">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2800&auto=format&fit=crop"
            alt="Maaisa Reality Office"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        </motion.div>

        {/* Floating Image Accents */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
          <FloatCard
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=700&auto=format&fit=crop"
            alt="Interior"
            className="absolute top-[22%] right-[8%] w-44 h-56 rounded-sm"
            delay={1.2} rotate={3}
          />
          <FloatCard
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=700&auto=format&fit=crop"
            alt="Exterior"
            className="absolute top-[58%] left-[5%] w-40 h-48 rounded-sm"
            delay={1.8} rotate={-2}
          />
        </div>

        {/* Hero Text */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-20 w-full px-6 md:px-24 pb-20 md:pb-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="block text-[10px] tracking-[0.6em] text-primary font-medium uppercase mb-8"
          >
            Maaisa Reality — Contact
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.4, ease: [0.23, 1, 0.32, 1] }}
            className="font-heading font-medium tracking-tight leading-[1.05] text-5xl sm:text-7xl md:text-[7vw] mb-10"
          >
            <span className="text-white">Let's Build</span>
            <br />
            <span
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Something Real.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-white/60 text-sm md:text-base max-w-md leading-relaxed border-l-2 border-primary/40 pl-6 font-body mb-12"
          >
            Whether you want to explore Genesis, schedule a site visit, or learn more about Maaisa Reality's upcoming projects — our Pune team is ready for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 items-start"
          >
            <a href="#enquire" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-on-primary text-[10px] font-medium uppercase tracking-[0.2em] hover:-translate-y-1 transition-all shadow-elegant">
              Enquire Now <ArrowRight className="w-4 h-4" />
            </a>
            <WhatsAppButton
              variant="minimal"
              label="WhatsApp Us"
              message="Hello Maaisa Reality, I would like to schedule a consultation."
              className="text-white/70 hover:text-white"
            />
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 z-20 flex-col items-center gap-3 hidden md:flex">
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
            <motion.div animate={{ y: ["-100%", "200%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="w-full h-1/2 bg-primary" />
          </div>
          <span className="text-[9px] text-white/40 tracking-[0.3em] uppercase">scroll</span>
        </div>
      </section>

      {/* ============ 2. CONTACT CARDS GRID ============ */}
      <section className="py-32 bg-background px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 gsap-up">
            <span className="text-primary text-[10px] font-medium uppercase tracking-[0.4em] mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground leading-[1.1] tracking-tight">
              Reach <span className="italic font-light text-primary">Our Team.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {connections.map((node, i) => (
              <motion.a
                key={node.title}
                href={node.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="group relative overflow-hidden bg-surface-low border border-black/5 p-8 h-64 flex flex-col justify-between hover:border-primary/20 transition-all hover:shadow-elegant"
              >
                {/* BG Image reveals on hover */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <img src={node.img} alt="" className="w-full h-full object-cover brightness-[0.15]" />
                </div>

                <div className="relative z-10 w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                  <node.icon size={18} className="text-primary group-hover:text-on-primary transition-colors" />
                </div>

                <div className="relative z-10">
                  <div className="text-[9px] uppercase tracking-[0.3em] font-medium text-primary/50 group-hover:text-primary transition-colors mb-2">{node.title}</div>
                  <div className="text-lg font-heading font-medium text-foreground group-hover:text-white transition-colors tracking-tight leading-tight">{node.val}</div>
                  <div className="text-[11px] text-tertiary group-hover:text-white/50 transition-colors mt-1 font-body">{node.sub}</div>
                </div>

                <ArrowRight className="absolute bottom-8 right-8 w-4 h-4 text-primary/20 group-hover:text-primary transition-all group-hover:translate-x-1" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3. ENQUIRY FORM ============ */}
      <section id="enquire" className="py-32 bg-foreground relative overflow-hidden">
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="max-w-7xl mx-auto px-6 md:px-24 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-start">

            {/* Left: Copy */}
            <div className="lg:w-2/5 gsap-up pt-4">
              <span className="text-primary text-[10px] font-medium uppercase tracking-[0.4em] mb-6 block">Private Enquiry</span>
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-background leading-[1.1] tracking-tight mb-8">
                Schedule a <br /><span className="italic font-light text-primary">Consultation.</span>
              </h2>
              <p className="text-background/50 text-sm leading-relaxed font-body mb-12 max-w-sm border-l-2 border-primary/30 pl-5">
                Tell us about your requirements and our senior team will reach out personally to arrange a private walkthrough or detailed discussion.
              </p>

              {/* Quick contact pills */}
              <div className="flex flex-col gap-5">
                <a href="tel:+919890200222" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-background/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-colors">
                    <Phone size={14} className="text-background/40 group-hover:text-on-primary transition-colors" />
                  </div>
                  <span className="text-background/60 text-sm font-medium group-hover:text-background transition-colors">+91 98902 00222</span>
                </a>
                <a href="mailto:info@maaisa.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-background/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-colors">
                    <Mail size={14} className="text-background/40 group-hover:text-on-primary transition-colors" />
                  </div>
                  <span className="text-background/60 text-sm font-medium group-hover:text-background transition-colors">info@maaisa.com</span>
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:w-3/5 w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ============ 4. HQ SPOTLIGHT ============ */}
      <section id="hq" className="py-32 bg-background px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 gsap-up">
            <div>
              <span className="text-primary text-[10px] font-medium uppercase tracking-[0.4em] mb-4 block">Our Location</span>
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground leading-[1] tracking-tight">
                Find <span className="italic font-light text-primary">Our Office.</span>
              </h2>
            </div>
            <div className="text-right">
              <p className="text-tertiary text-sm font-body">Tathawade, Pune</p>
              <p className="text-tertiary text-sm font-body">Maharashtra, India — 411033</p>
            </div>
          </div>

          {/* Full-bleed Image */}
          <div className="relative group overflow-hidden h-[55vh] md:h-[75vh] shadow-elegant border border-black/5 gsap-up">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2800&auto=format&fit=crop"
              alt="Maaisa Reality Office Pune"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[4000ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Address badge */}
            <div className="absolute top-8 left-8 bg-background/90 backdrop-blur-sm px-6 py-4 shadow-elegant">
              <div className="text-[9px] text-primary uppercase tracking-[0.3em] font-medium mb-1">Corporate Office</div>
              <div className="text-foreground font-heading font-medium text-lg tracking-tight">Tathawade, Pune</div>
            </div>

            {/* Hover-revealed navigation */}
            <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full border border-white/20 backdrop-blur-sm bg-white/10 flex items-center justify-center">
                  <Compass className="text-white w-5 h-5" />
                </div>
                <div>
                  <div className="text-white text-xl font-heading font-medium tracking-tight">Visit Us</div>
                  <a
                    href="https://maps.google.com/?q=Tathawade+Pune"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 mt-1 font-medium hover:underline"
                  >
                    Open in Maps <ArrowRight size={10} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 5. IMAGE-MASKED CLOSING WORD ============ */}
      <section className="py-24 bg-surface-low border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-24 text-center gsap-up">
          <h2
            className="text-[clamp(3rem,13vw,13rem)] font-heading font-black leading-none tracking-tighter uppercase select-none"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Connect
          </h2>
          <p className="text-tertiary text-[11px] tracking-[0.4em] font-medium uppercase mt-6">
            Maaisa Reality · Tathawade, Pune · Est. 2014
          </p>
        </div>
      </section>

    </main>
  );
}
