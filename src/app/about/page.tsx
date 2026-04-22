"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { LineMaskReveal } from "@/components/TextAnimations";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// Floating Image Card (reusable)
const FloatCard = ({
  src, alt, className, delay = 0, rotate = 0
}: { src: string; alt: string; className?: string; delay?: number; rotate?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.8, delay, ease: [0.23, 1, 0.32, 1] }}
    style={{ rotate }}
    whileHover={{ scale: 1.04, rotate: 0, transition: { duration: 0.5 } }}
    className={`overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.22)] border border-white/10 ${className}`}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </motion.div>
);

export default function AboutPage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroBgOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(mainRef.current, { opacity: 1, duration: 1.5, ease: "power3.out" });

    gsap.utils.toArray<HTMLElement>(".reveal-image").forEach((el) => {
      gsap.fromTo(el,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 1.6, ease: "power2.inOut", scrollTrigger: { trigger: el, start: "top 85%" } }
      );
    });

    gsap.utils.toArray<HTMLElement>(".gsap-up").forEach((el) => {
      gsap.fromTo(el,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } }
      );
    });
  }, []);

  const team = [
    { role: "Director", name: "Sangram Jakate", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
    { role: "Director", name: "Nasir Patil", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" },
    { role: "Head of Sales & Marketing", name: "Suresh S B", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
    { role: "Administration Head", name: "Chaitali Dhale", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
  ];

  const timeline = [
    { year: "2014", title: "Foundation", desc: "Maaisa Traders India Pvt. Ltd. founded in Pune. Began as an authorized electrical distributor." },
    { year: "2017", title: "Expansion", desc: "Scaled operations across Maharashtra, becoming a trusted name in premium electrical supply." },
    { year: "2020", title: "Diversification", desc: "Extended expertise into real estate, leveraging supply chain mastery for construction-grade precision." },
    { year: "2024", title: "Maaisa Reality", desc: "Launched our first premium residential project: Genesis — setting a new benchmark in Tathawade, Pune." },
  ];

  const values = [
    { title: "Precision", desc: "Every detail engineered to perfection — from foundations to finishing.", img: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=800&auto=format&fit=crop" },
    { title: "Integrity", desc: "Committed to legal transparency, honest timelines, and zero compromise.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" },
    { title: "Legacy", desc: "Homes designed to endure generations, not just trends.", img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <main ref={mainRef} className="opacity-0 bg-background selection:bg-primary/20 overflow-x-hidden">

      {/* ============ 1. HERO — Cinematic Parallax with Floating Images ============ */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-end overflow-hidden">
        {/* Parallax BG */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 scale-110">
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2800&auto=format&fit=crop"
            alt="Maaisa Reality"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        </motion.div>

        {/* Floating Accent Images */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
          <FloatCard
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=700&auto=format&fit=crop"
            alt="Interior"
            className="absolute top-[20%] right-[7%] w-48 h-60 rounded-lg"
            delay={1.2} rotate={4}
          />
          <FloatCard
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=700&auto=format&fit=crop"
            alt="Exterior"
            className="absolute top-[55%] right-[20%] w-36 h-44 rounded-md"
            delay={1.6} rotate={-3}
          />
          <FloatCard
            src="https://images.unsplash.com/photo-1584744982491-665216d95f8b?q=80&w=700&auto=format&fit=crop"
            alt="Lobby"
            className="absolute top-[62%] left-[4%] w-44 h-52 rounded-lg"
            delay={2} rotate={2}
          />
        </div>

        {/* Hero Copy */}
        <motion.div style={{ y: textY, opacity: heroBgOpacity }} className="relative z-20 w-full px-6 md:px-24 pb-20 md:pb-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="block text-[10px] tracking-[0.6em] text-primary font-medium uppercase mb-8"
          >
            About Maaisa Reality
          </motion.span>

          {/* Image-clipped Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.4, ease: [0.23, 1, 0.32, 1] }}
            className="font-heading font-medium tracking-tight leading-[1.05] text-5xl sm:text-7xl md:text-[7vw] mb-10"
          >
            <span className="text-white">A Decade of</span>
            <br />
            <span
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Trust & Vision.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-white/60 text-sm md:text-base max-w-lg leading-relaxed border-l-2 border-primary/40 pl-6 font-body mb-12"
          >
            From authorized electrical distribution to premium residential development — Maaisa has always been synonymous with precision, trust, and excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-on-primary text-[10px] font-medium uppercase tracking-[0.2em] hover:-translate-y-1 transition-all shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.4)]"
            >
              Connect With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Line */}
        <div className="absolute bottom-8 right-8 z-20 flex-col items-center gap-3 hidden md:flex">
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
            <motion.div animate={{ y: ["-100%", "200%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="w-full h-1/2 bg-primary" />
          </div>
          <span className="text-[9px] text-white/40 tracking-[0.3em] uppercase">scroll</span>
        </div>
      </section>

      {/* ============ 2. QUICK STATS ============ */}
      <section className="py-16 bg-primary/5 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-6 md:px-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-primary/10">
          {[
            { num: "2014", label: "Year Founded" },
            { num: "12+", label: "Years in Operations" },
            { num: "500+", label: "Clients Served" },
            { num: "Pune", label: "Headquarters" },
          ].map((s, i) => (
            <div key={i} className="bg-background py-12 px-8 gsap-up text-center">
              <div className="text-3xl md:text-5xl font-heading font-medium text-foreground tracking-tight mb-2">{s.num}</div>
              <div className="text-[9px] text-primary uppercase tracking-[0.3em] font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ 3. MISSION — Split with Floating Image ============ */}
      <section className="py-32 bg-background px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* Left: Stacked images */}
          <div className="relative h-[70vh] hidden lg:block gsap-up">
            <div className="absolute inset-0 reveal-image overflow-hidden rounded-sm shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop"
                alt="Mission"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 w-52 h-64 overflow-hidden rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.3)] border-4 border-background z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=700&auto=format&fit=crop"
                alt="Interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Year badge on top-left */}
            <div className="absolute top-6 left-6 bg-primary px-6 py-4 z-10 shadow-elegant">
              <div className="text-on-primary text-2xl font-heading font-medium tracking-tight">2014</div>
              <div className="text-on-primary/70 text-[9px] uppercase tracking-[0.3em] font-medium mt-1">Est.</div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="gsap-up">
            <LineMaskReveal>
              <span className="text-primary text-[10px] font-medium uppercase tracking-[0.4em] mb-4 block">Our Mission</span>
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground leading-[1.1] tracking-tight mb-10">
                Elevating Infrastructure <br /><span className="italic font-light text-primary">Through Precision.</span>
              </h2>
            </LineMaskReveal>
            <LineMaskReveal delay={300}>
              <p className="text-tertiary text-base leading-relaxed font-body mb-8 border-l-2 border-primary/20 pl-6">
                Maaisa Reality is an extension of Maaisa Traders India Pvt. Ltd. — a company built on a decade of authorized electrical distribution and infrastructure mastery in Maharashtra.
              </p>
            </LineMaskReveal>
            <LineMaskReveal delay={500}>
              <p className="text-tertiary text-base leading-relaxed font-body mb-12 border-l-2 border-primary/20 pl-6">
                Today, we apply those same institutional standards to residential architecture — delivering homes designed for permanence, distinction, and generational pride.
              </p>
            </LineMaskReveal>
            <LineMaskReveal delay={700}>
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-black/5">
                <div>
                  <div className="text-2xl font-heading font-medium text-primary mb-1">500+</div>
                  <div className="text-[10px] text-tertiary uppercase tracking-[0.2em]">Partners Trust Us</div>
                </div>
                <div>
                  <div className="text-2xl font-heading font-medium text-primary mb-1">12+</div>
                  <div className="text-[10px] text-tertiary uppercase tracking-[0.2em]">Years of Excellence</div>
                </div>
              </div>
            </LineMaskReveal>
          </div>

        </div>
      </section>

      {/* ============ 4. IMAGE-MASKED TEXT DIVIDER ============ */}
      <section className="py-24 bg-surface-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-24 text-center gsap-up">
          <div
            className="text-[clamp(5rem,20vw,18rem)] font-heading font-black leading-none tracking-tighter uppercase select-none"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2070&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Legacy
          </div>
          <p className="text-tertiary text-sm md:text-base mt-6 max-w-lg mx-auto font-body leading-relaxed">
            A heritage built on trust, precision, and the pursuit of architectural permanence.
          </p>
        </div>
      </section>

      {/* ============ 5. TIMELINE ============ */}
      <section className="py-32 bg-background px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 gsap-up">
            <span className="text-primary text-[10px] font-medium uppercase tracking-[0.4em] mb-4 block">Our Journey</span>
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground leading-[1] tracking-tight">
              The <span className="italic font-light text-primary">Chronicle.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-[1px] bg-black/10 transform lg:-translate-x-1/2 hidden md:block" />

            <div className="space-y-20">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
                  className={`relative flex flex-col md:flex-row gap-12 items-start ${i % 2 !== 0 ? "md:flex-row-reverse text-right" : ""}`}
                >
                  {/* Content */}
                  <div className="md:w-1/2 pl-8 md:pl-0 md:pr-16">
                    <div className="text-5xl font-heading font-medium text-primary/20 mb-4 tracking-tight">{item.year}</div>
                    <h3 className="text-2xl font-heading font-medium text-foreground mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-tertiary text-sm leading-relaxed font-body">{item.desc}</p>
                  </div>

                  {/* Dot on the line */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1/2 ring-4 ring-background shadow-sm hidden md:block" />

                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 6. LEADERSHIP — Portrait Cards ============ */}
      <section className="py-32 bg-surface-low px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 gsap-up">
            <span className="text-primary text-[10px] font-medium uppercase tracking-[0.4em] mb-4 block">The Visionaries</span>
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground leading-[1] tracking-tight">
              Our <span className="italic font-light text-primary">Leadership.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="group relative reveal-image"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-card relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-[3000ms] grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="text-[8px] text-primary uppercase tracking-[0.2em] mb-1 font-medium">{member.role}</div>
                    <div className="text-white text-base font-heading font-medium tracking-tight">{member.name}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-24 relative gsap-up">
            <Quote className="w-16 h-16 text-primary/10 absolute -top-4 -left-4" />
            <blockquote className="text-2xl md:text-3xl font-heading font-light text-foreground leading-[1.4] max-w-4xl pl-8 border-l-2 border-primary/20 italic">
              "We don't just build structures. We engineer environments where legacies are forged — in silence, in light, and in stone."
            </blockquote>
            <div className="mt-6 pl-8">
              <div className="text-[10px] text-primary uppercase tracking-[0.4em] font-medium">Sangram Jakate</div>
              <div className="text-[10px] text-tertiary uppercase tracking-[0.2em] mt-1">Director, Maaisa Reality</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 7. VALUES — Image-Header Cards ============ */}
      <section className="py-32 bg-background px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center gsap-up">
            <span className="text-primary text-[10px] font-medium uppercase tracking-[0.4em] mb-4 block">What We Stand For</span>
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground leading-[1] tracking-tight">
              Core <span className="italic font-light text-primary">Values.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
                className="group overflow-hidden border border-black/5 shadow-card hover:shadow-elegant transition-shadow reveal-image"
              >
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={v.img}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/60" />
                  <div className="absolute bottom-4 left-4 text-4xl font-heading font-medium text-white/30 tracking-tighter">0{i + 1}</div>
                </div>
                <div className="p-8 bg-background">
                  <h3 className="text-xl font-heading font-medium text-foreground mb-4 tracking-tight">{v.title}</h3>
                  <p className="text-tertiary text-sm leading-relaxed font-body">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 8. IMAGERY SHOWCASE — Horizontal scroll feel ============ */}
      <section className="py-0 bg-surface-low overflow-hidden">
        <div className="flex h-[50vh]">
          {[
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=800&auto=format&fit=crop",
          ].map((src, i) => (
            <motion.div
              key={i}
              className="flex-1 relative overflow-hidden group"
              whileHover={{ flex: 2 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ 9. CTA — Full Bleed ============ */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=2070&auto=format&fit=crop"
            alt="Connect"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="text-primary text-[10px] font-medium uppercase tracking-[0.4em] mb-6 block">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl font-heading font-medium text-white leading-[1.1] tracking-tight mb-10">
              Ready to Build <br /><span className="italic font-light text-primary">Your Legacy?</span>
            </h2>
            <p className="text-white/60 text-base max-w-md mx-auto leading-relaxed font-body mb-12">
              Whether you're exploring Genesis or simply want to know more about Maaisa Reality's vision — our team is here for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-on-primary text-[10px] font-medium uppercase tracking-[0.2em] hover:-translate-y-1 hover:shadow-glow transition-all"
              >
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </Link>
              <WhatsAppButton
                variant="minimal"
                label="WhatsApp Now"
                message="Hello Maaisa Reality, I want to learn more about your story and projects."
                className="text-white hover:text-primary"
              />
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
