"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, MapPin, Shield, Sun } from "lucide-react";
import { LineMaskReveal } from "@/components/TextAnimations";
import { ThreeSixtyPortal } from "@/components/ThreeSixtyPortal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

// Magnetic Button Component
const MagneticButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        x.set((e.clientX - left - width / 2) * 0.4);
        y.set((e.clientY - top - height / 2) * 0.4);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Floating Image Card — parallax drifting card
const FloatingCard = ({
  src, alt, className, delay = 0, rotateAmt = 3
}: { src: string; alt: string; className?: string; delay?: number; rotateAmt?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 60, rotate: rotateAmt }}
    animate={{ opacity: 1, y: 0, rotate: rotateAmt }}
    transition={{ duration: 1.8, delay, ease: [0.23, 1, 0.32, 1] }}
    whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.6 } }}
    className={cn("overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.3)] border border-white/20 cursor-pointer", className)}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </motion.div>
);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [active360, setActive360] = useState<{ url: string; title: string } | null>(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(mainRef.current, { opacity: 1, duration: 1.5, ease: "power3.out" });

    // Scroll reveal for reveal-image blocks
    gsap.utils.toArray<HTMLElement>(".reveal-image").forEach((img) => {
      gsap.fromTo(
        img,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 1.6, ease: "power2.inOut", scrollTrigger: { trigger: img, start: "top 85%" } }
      );
    });

    // Fade + slide up
    gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((el) => {
      gsap.fromTo(el, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" }
      });
    });
  }, []);

  const tourPoints = [
    { title: "Grand Living Room", url: "/360/shot-panoramic-composition-living-room.jpg" },
    { title: "Cloud Kitchen", url: "/360/shot-panoramic-composition-kitchen.jpg" },
    { title: "Private Sanctuary", url: "/360/shot-panoramic-composition-library.jpg" },
    { title: "Luxury Suite", url: "/360/shot-panoramic-composition-living-room (1).jpg" },
    { title: "City Horizon", url: "/360/allphoto-bangkok-GfXqtWmiuDI-unsplash.jpg" },
  ];

  const stats = [
    { num: "2014", label: "Year Founded" },
    { num: "12+", label: "Years Experience" },
    { num: "500+", label: "Clients Served" },
    { num: "Pune", label: "Headquarters" },
  ];

  // All building images from Cloudinary
  const IMGS = {
    hero:    "https://res.cloudinary.com/dqmpgzst5/image/upload/v1777185643/daniel-brubaker-uhYYa9nlr6w-unsplash_dqzyek.jpg",
    hero2:   "https://res.cloudinary.com/dqmpgzst5/image/upload/v1777185640/aalo-lens-_wHXtrp4C0g-unsplash_tf5t6c.jpg",
    hero3:   "https://res.cloudinary.com/dqmpgzst5/image/upload/v1777185637/andrea-ferrario-N4uww5RFj_Q-unsplash_ge6cdc.jpg",
    g1:      "https://res.cloudinary.com/dqmpgzst5/image/upload/v1777185635/danist-soh-0nGjnZyKYB8-unsplash_gwlpzs.jpg",
    g2:      "https://res.cloudinary.com/dqmpgzst5/image/upload/v1777185621/damian-kravchuk-SER9iK-wtk0-unsplash_j04con.jpg",
    g3:      "https://res.cloudinary.com/dqmpgzst5/image/upload/v1777185618/allphoto-bangkok-nI4aC1kaTRc-unsplash_nifjbt.jpg",
    mask1:   "https://res.cloudinary.com/dqmpgzst5/image/upload/v1777185615/anders-holm-jensen-urYCLa2G4Lg-unsplash_yyme1m.jpg",
    mask2:   "https://res.cloudinary.com/dqmpgzst5/image/upload/v1777185614/dillon-kydd-TJfJPfVCbeA-unsplash_pg8wwf.jpg",
    strip1:  "https://res.cloudinary.com/dqmpgzst5/image/upload/v1777185606/mika-baumeister-PL7K02i4s9g-unsplash_rnxrdt.jpg",
    strip2:  "https://res.cloudinary.com/dqmpgzst5/image/upload/v1777185598/isaac-quesada-s34TlUTPIf4-unsplash_hxbzcd.jpg",
    about1:  "https://res.cloudinary.com/dqmpgzst5/image/upload/v1777185585/istrfry-marcus-zd0SmnpgT1s-unsplash_qjy1xn.jpg",
    about2:  "https://res.cloudinary.com/dqmpgzst5/image/upload/v1777185583/annie-spratt-6Q8o6Kxufkw-unsplash_fyebbb.jpg",
    strip3:  "https://res.cloudinary.com/dqmpgzst5/image/upload/v1777185579/codeshady-AHzHbWmNaU4-unsplash_hsltus.jpg",
    strip4:  "https://res.cloudinary.com/dqmpgzst5/image/upload/v1777185574/pierre-chatel-innocenti-gxyeia7Syuk-unsplash_i3yi1l.jpg",
    strip5:  "https://res.cloudinary.com/dqmpgzst5/image/upload/v1777185572/shalev-cohen-KjueSklMNyY-unsplash_gxhm3w.jpg",
    v1:      "https://res.cloudinary.com/dqmpgzst5/image/upload/v1777185570/saru-robert-9rP3mxf8qWI-unsplash_y1uyhj.jpg",
    v2:      "https://res.cloudinary.com/dqmpgzst5/image/upload/v1777185571/jinish-shah-jJ-wBmQXpVk-unsplash_wgnvzp.jpg",
    v3:      "https://res.cloudinary.com/dqmpgzst5/image/upload/v1777185570/victor-0NJ9urGXrIg-unsplash_chyjcd.jpg",
    contact: "https://res.cloudinary.com/dqmpgzst5/image/upload/v1777185565/chuttersnap-3_1f0ZGOjIY-unsplash_vb5sxy.jpg",
    proj1:   "https://res.cloudinary.com/dqmpgzst5/image/upload/v1777185565/aimar-gallardo-fTM-tpxGUCk-unsplash_pwv45k.jpg",
    proj2:   "https://res.cloudinary.com/dqmpgzst5/image/upload/v1777185563/cn-veyth-iPq4X7sfePs-unsplash_lkp97v.jpg",
  };

  const materiality = [
    { title: "Precision Engineering", img: IMGS.g1,     span: "lg:col-span-1" },
    { title: "Urban Skylines",        img: IMGS.g2,     span: "lg:col-span-2" },
    { title: "Structural Mastery",    img: IMGS.g3,     span: "lg:col-span-2" },
    { title: "Glass & Light",         img: IMGS.strip1, span: "lg:col-span-1" },
  ];

  return (
    <main ref={mainRef} className="opacity-0 bg-background selection:bg-primary selection:text-white overflow-x-hidden">
      {/* 360 Portal Overlay */}
      {active360 && (
        <ThreeSixtyPortal imageUrl={active360.url} title={active360.title} onClose={() => setActive360(null)} />
      )}

      {/* ===================== 1. HERO — Cinematic Fullscreen ===================== */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-end overflow-hidden">
        {/* Parallax BG Image */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 scale-110">
          <img
            src={IMGS.hero}
            alt="Maaisa Reality"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        </motion.div>

        {/* Floating Image Cards — decorative */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
          <FloatingCard
            src={IMGS.hero2}
            alt="Architecture"
            className="absolute top-[18%] right-[6%] w-52 h-64 rounded-lg"
            delay={1.2}
            rotateAmt={4}
          />
          <FloatingCard
            src={IMGS.mask1}
            alt="Residential Tower"
            className="absolute top-[55%] right-[18%] w-36 h-44 rounded-lg"
            delay={1.6}
            rotateAmt={-3}
          />
          <FloatingCard
            src={IMGS.about1}
            alt="Building"
            className="absolute top-[60%] left-[4%] w-44 h-56 rounded-lg"
            delay={2}
            rotateAmt={2}
          />
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ y: textY, opacity }}
          className="relative z-20 w-full px-6 md:px-24 pb-20 md:pb-32"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="block text-[10px] tracking-[0.6em] text-primary font-medium uppercase mb-8"
          >
            Maaisa Reality — Est. 2014
          </motion.span>

          {/* Image-Clipped Masked Heading */}
          <div className="mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
              className="font-heading font-medium tracking-tight leading-[1.05] text-white text-5xl sm:text-7xl md:text-[7vw]"
            >
              Building <span className="italic font-light text-primary/90">Legacies</span>
              <br />
              <span
                style={{
                  backgroundImage: `url('${IMGS.mask2}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                In Stone & Light.
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-white/60 text-sm md:text-base max-w-md leading-relaxed mb-12 border-l-2 border-primary/40 pl-6 font-body"
          >
            Pune's premier developer of exclusive residential environments — shaped by precision architecture, crafted for generational ownership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <MagneticButton>
              <WhatsAppButton
                label="Schedule Consultation"
                message="Hello Maaisa Reality, I would like to schedule a private consultation."
                variant="primary"
                className="min-w-[260px] py-5 shadow-[0_0_40px_rgba(var(--color-primary-rgb),0.4)]"
              />
            </MagneticButton>

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setActive360(tourPoints[0])}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                <span className="text-white text-[9px] font-medium tracking-widest">360°</span>
              </div>
              <span className="text-white/70 text-[10px] uppercase tracking-[0.3em] group-hover:text-white transition-colors">Virtual Tour</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-3 hidden md:flex"
        >
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="w-full h-1/2 bg-primary"
            />
          </div>
          <span className="text-[9px] text-white/40 tracking-[0.3em] uppercase rotate-90 origin-center">scroll</span>
        </motion.div>
      </section>

      {/* ===================== 2. STATS TICKER ===================== */}
      <section className="py-16 bg-primary/5 border-y border-primary/10 overflow-hidden">
        <div className="flex gap-0">
          {[...stats, ...stats].map((s, i) => (
            <div key={i} className="flex-shrink-0 flex items-center gap-12 px-12 border-r border-primary/10">
              <div>
                <div className="text-3xl md:text-4xl font-heading font-medium text-foreground tracking-tight">{s.num}</div>
                <div className="text-[9px] text-primary uppercase tracking-[0.3em] font-medium mt-1">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== 3. SPLIT PHILOSOPHY — Image + Text ===================== */}
      <section id="about" className="py-32 bg-background px-6 md:px-24 border-b border-black/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: Stacked floating images */}
          <div className="relative h-[70vh] hidden lg:block gsap-reveal">
            <div className="absolute inset-0 reveal-image overflow-hidden rounded-sm shadow-elegant">
              <img
                src={IMGS.about1}
                alt="Architecture"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 w-48 h-56 overflow-hidden rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.25)] border-2 border-background z-10"
            >
              <img
                src={IMGS.about2}
                alt="Building Detail"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Label badge */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-5 py-3 shadow-sm z-10">
              <span className="text-[9px] text-primary font-medium uppercase tracking-[0.3em]">Est. Pune, 2014</span>
            </div>
          </div>

          {/* Right: Text */}
          <div className="gsap-reveal">
            <LineMaskReveal>
              <span className="text-primary text-[10px] font-medium uppercase tracking-[0.4em] mb-4 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground leading-[1.1] tracking-tight mb-8">
                Unrivaled <span className="italic font-light text-primary">Materiality.</span>
              </h2>
            </LineMaskReveal>
            <LineMaskReveal delay={300}>
              <p className="text-tertiary text-base leading-relaxed font-body mb-10 border-l-2 border-primary/20 pl-6">
                Every Maaisa structure is synthesized with uncompromising quality — integrating imported Carrara marble, smoked timber, and high-fidelity double glazing. We believe your environment should be a statement of permanence.
              </p>
            </LineMaskReveal>
            <LineMaskReveal delay={500}>
              <p className="text-tertiary text-base leading-relaxed font-body mb-12 border-l-2 border-primary/20 pl-6">
                Rooted in over a decade of authorized distribution and project integrity, Maaisa Reality brings institutional-grade precision to residential design — ensuring every home tells a timeless story.
              </p>
            </LineMaskReveal>
            <LineMaskReveal delay={700}>
              <Link href="/about" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-medium text-foreground hover:text-primary transition-colors group">
                Discover Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </LineMaskReveal>
          </div>
        </div>
      </section>

      {/* ===================== 4. IMAGE-MASKED TEXT + MATERIAL GRID ===================== */}
      <section className="py-32 bg-surface-low px-6 md:px-24">
        <div className="max-w-7xl mx-auto">

          {/* Image-Masked Giant Text */}
          {/* Image-Masked Giant Text */}
          <div className="mb-12 text-center gsap-reveal">
            <h2
              className="text-[clamp(4rem,14vw,14rem)] font-heading font-black leading-none tracking-tighter uppercase select-none"
              style={{
                backgroundImage: `url('${IMGS.mask1}')`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Build
            </h2>
            <h2
              className="text-[clamp(2.5rem,9vw,9rem)] font-heading font-light italic leading-none tracking-tighter select-none -mt-4"
              style={{
                backgroundImage: `url('${IMGS.mask2}')`,
                backgroundSize: "cover",
                backgroundPosition: "center bottom",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Legacies
            </h2>
          </div>

          {/* Horizontal Filmstrip — all building images scrolling */}
          <div className="mb-20 overflow-x-auto pb-4 gsap-reveal" style={{ scrollbarWidth: "none" }}>
            <div className="flex gap-4 w-max">
              {[
                IMGS.hero, IMGS.hero2, IMGS.hero3, IMGS.g1, IMGS.g2, IMGS.g3,
                IMGS.strip1, IMGS.strip2, IMGS.strip3, IMGS.strip4, IMGS.strip5, IMGS.proj2,
              ].map((url, i) => (
                <div
                  key={i}
                  className="relative flex-shrink-0 w-60 h-80 overflow-hidden group cursor-pointer shadow-card border border-black/5"
                >
                  <img
                    src={url}
                    alt={`Building ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white text-[9px] uppercase tracking-[0.3em] font-medium">0{i + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Material Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {materiality.map((item, i) => (
              <div key={i} className={cn("relative group overflow-hidden shadow-card border border-black/5 reveal-image", item.span)}>
                <div className="h-[360px] md:h-[440px]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-heading font-medium text-white drop-shadow-md">{item.title}</h3>
                  <div className="h-[2px] w-8 bg-primary mt-2 group-hover:w-16 transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 5. GENESIS PROJECT — Full-bleed Card ===================== */}
      <section id="projects" className="py-32 bg-background px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 gsap-reveal">
            <span className="text-primary text-[10px] font-medium uppercase tracking-[0.4em] mb-4 block">Upcoming Designation</span>
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground leading-[1] tracking-tight">
              The <span className="text-primary/60 italic font-light">Genesis.</span>
            </h2>
          </div>

          <a href="/projects/genesis" className="group block relative w-full h-[55vh] md:h-[75vh] overflow-hidden shadow-elegant reveal-image">
            <img
              src={IMGS.proj1}
              alt="Genesis"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4000ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5" />

            {/* Center Enter Badge */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full border border-white/30 flex flex-col items-center justify-center scale-90 group-hover:scale-110 group-hover:border-primary transition-all duration-700 backdrop-blur-sm bg-white/5">
                <span className="text-[8px] tracking-widest text-white font-medium mb-1 uppercase">Enter</span>
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row justify-between items-end gap-4">
              <div>
                <span className="text-white text-4xl md:text-6xl font-heading font-medium tracking-tight">Genesis</span>
                <p className="text-white/60 text-[10px] tracking-[0.4em] font-medium uppercase mt-2">Tathawade, Pune</p>
              </div>
              <div className="flex gap-6 text-right">
                <div>
                  <div className="text-white text-sm font-medium">2025</div>
                  <div className="text-white/40 text-[9px] tracking-widest uppercase">Delivery</div>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">3 BHK+</div>
                  <div className="text-white/40 text-[9px] tracking-widest uppercase">Config</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ===================== 6. 360° EXPERIENCE STRIP ===================== */}
      <section className="py-32 bg-foreground text-background px-6 md:px-24 relative overflow-hidden">
        {/* BG pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="gsap-reveal">
              <span className="text-primary text-[10px] font-medium uppercase tracking-[0.4em] mb-4 block">Virtual Experience</span>
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-background leading-[1.1] tracking-tight mb-8">
                Step Inside <br /><span className="italic font-light text-primary">Before You Arrive.</span>
              </h2>
              <p className="text-background/50 text-base leading-relaxed font-body mb-12 max-w-md">
                Tour every room of the Genesis project in immersive 360° — from the grand living room to the sky terrace. Experience your future home today.
              </p>
              <div className="flex flex-wrap gap-4">
                {tourPoints.slice(0, 3).map((tp, i) => (
                  <button
                    key={i}
                    onClick={() => setActive360(tp)}
                    className="px-5 py-2.5 border border-background/20 text-background/70 text-[9px] uppercase tracking-[0.2em] hover:border-primary hover:text-primary transition-all hover:bg-primary/5"
                  >
                    {tp.title}
                  </button>
                ))}
              </div>
            </div>

            {/* 360 tiles */}
            <div className="grid grid-cols-2 gap-4 gsap-reveal">
              {tourPoints.slice(0, 4).map((tp, i) => (
                <button
                  key={i}
                  onClick={() => setActive360(tp)}
                  className="relative group overflow-hidden aspect-square rounded-sm shadow-lg"
                >
                  <div className="w-full h-full bg-background/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-heading font-medium text-background/30 mb-2">0{i + 1}</div>
                      <div className="text-[9px] uppercase tracking-widest text-primary">{tp.title}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 border border-background/10 group-hover:border-primary transition-colors" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 7. CORPORATE VALUES — Image-backed cards ===================== */}
      <section className="py-32 bg-background px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 gsap-reveal">
            <span className="text-primary text-[10px] font-medium uppercase tracking-[0.4em] mb-4 block">Why Maaisa</span>
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground leading-[1] tracking-tight">
              The <span className="italic font-light text-primary">Foundation.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Absolute Trust",
                desc: "Uncompromising commitment to delivery and legal transparency — on time, every time.",
                img: IMGS.v1,
              },
              {
                title: "Prime Location",
                desc: "Strategically positioned in Pune's thriving residential and tech corridors.",
                img: IMGS.v2,
              },
              {
                title: "Luminous Design",
                desc: "Architectural orientation calibrated for maximum natural light and spatial harmony.",
                img: IMGS.v3,
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="group relative overflow-hidden shadow-card border border-black/5 hover:shadow-elegant transition-shadow reveal-image"
              >
                {/* Image Header */}
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/60" />
                </div>
                {/* Text */}
                <div className="p-8 bg-background">
                  <h3 className="text-xl font-heading font-medium text-foreground mb-3 tracking-tight">{card.title}</h3>
                  <p className="text-tertiary text-sm leading-relaxed font-body mb-6">{card.desc}</p>
                  <WhatsAppButton
                    variant="minimal"
                    label="Enquire"
                    message={`Hello Maaisa Reality, I have an enquiry about ${card.title}.`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 8. CONTACT CTA ===================== */}
      <section id="contact" className="relative py-40 overflow-hidden">
        {/* Full bleed BG image */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMGS.contact}
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="text-primary text-[10px] font-medium uppercase tracking-[0.4em] mb-6 block">Start the Dialogue</span>
            <h2 className="text-4xl md:text-6xl font-heading font-medium text-white leading-[1.1] tracking-tight mb-10">
              Your Legacy <br /><span className="italic font-light text-primary">Awaits.</span>
            </h2>
            <p className="text-white/60 text-base max-w-md mx-auto leading-relaxed font-body mb-12">
              Connect with the Maaisa Reality team to schedule a private consultation, explore Genesis, or learn about upcoming developments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-on-primary text-[10px] font-medium uppercase tracking-[0.2em] hover:-translate-y-1 hover:shadow-glow transition-all"
              >
                Open Dialogue Hub <ArrowRight className="w-4 h-4" />
              </Link>
              <WhatsAppButton
                variant="minimal"
                label="WhatsApp Now"
                message="Hello Maaisa Reality, I am interested in learning more about your projects."
                className="text-white border-white/30 hover:border-primary"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
