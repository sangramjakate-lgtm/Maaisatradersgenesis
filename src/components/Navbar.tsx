"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Search, Heart, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsAppButton } from "./WhatsAppButton";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Floor Plans", href: "/floor-plans" },
  { name: "Amenities", href: "/amenities" },
  { name: "The Vision", href: "/editorial" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
          isScrolled || isOpen
            ? "bg-surface-lowest/90 backdrop-blur-2xl py-4 border-b border-white/5"
            : "bg-transparent py-8"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo - High Fidelity */}
          <Link href="/" className="relative z-[60] group">
            <span className="text-2xl md:text-3xl font-heading tracking-tighter text-secondary group-hover:scale-105 transition-transform inline-block">
              MAAISA <span className="text-primary italic font-thin">GENESIS.</span>
            </span>
            <div className="h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-700" />
          </Link>

          {/* Desktop Navigation: "Archival" Minimalism */}
          <div className="hidden lg:flex items-center gap-12">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-500 hover:tracking-[0.6em]",
                  pathname === item.href ? "text-primary" : "text-tertiary hover:text-secondary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action Icons & Hamburger: "Jewellery" Style */}
          <div className="flex items-center gap-4 md:gap-8 relative z-[60]">
            <div className="hidden md:flex items-center gap-6 text-white/20">
               <Search size={18} className="hover:text-primary transition-colors cursor-pointer" />
               <Heart size={18} className="hover:text-primary transition-colors cursor-pointer" />
            </div>

            <Link
              href="https://wa.me/919172833311"
              target="_blank"
              className="hidden sm:block text-[10px] font-black uppercase tracking-[0.3em] text-primary hover:text-secondary transition-all px-4 py-2 border border-primary/20 hover:border-primary/50"
            >
              Enquire Now
            </Link>

            {/* Stylish "Morphic" Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-full hover:bg-white/5 transition-all group scale-110"
              aria-label="Toggle Menu"
            >
               <div className="w-6 h-5 flex flex-col justify-between items-end relative overflow-hidden">
                  <span className={cn("h-[1px] bg-secondary transition-all duration-500", isOpen ? "w-6 rotate-45 translate-y-2" : "w-6")} />
                  <span className={cn("h-[1px] bg-secondary transition-all duration-300", isOpen ? "opacity-0 translate-x-full" : "w-4")} />
                  <span className={cn("h-[1px] bg-secondary transition-all duration-500", isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6")} />
               </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Stylish "Curtain" Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-50 bg-black flex flex-col md:flex-row"
          >
            {/* Left/Top Content: Visual Ambience */}
            <div className="relative w-full md:w-1/2 h-[30vh] md:h-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
               <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
                alt="Ambience" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[4000ms]" 
               />
               <div className="absolute inset-0 bg-black/60" />
               <div className="absolute inset-12 flex flex-col justify-end text-left">
                  <p className="text-primary text-[10px] font-bold tracking-[0.5em] mb-4 uppercase">The Visionary Space</p>
                  <h3 className="text-4xl text-secondary font-heading italic font-thin lowercase">genesis <br /> of <span className="text-primary">luxury.</span></h3>
               </div>
            </div>

            {/* Right/Bottom Content: Navigation Hub */}
            <div className="flex-1 flex flex-col justify-center px-12 md:px-24 py-20 bg-surface-lowest">
               <nav className="space-y-6 md:space-y-10">
                  {navigation.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                    >
                      <Link
                        href={item.href}
                        className="group flex items-center gap-6"
                      >
                         <span className="text-white/10 text-2xl font-heading font-thin tracking-widest group-hover:text-primary/40 transition-colors">0{i+1}</span>
                         <span className="text-4xl md:text-7xl font-heading text-secondary hover:text-primary hover:italic transition-all duration-500 lowercase tracking-tighter">
                            {item.name}
                         </span>
                      </Link>
                    </motion.div>
                  ))}
               </nav>

               {/* Mobile Menu Footer: Global Access */}
               <div className="mt-auto pt-20 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                     <span className="text-[10px] tracking-[0.4em] text-primary font-bold uppercase">The Hub</span>
                     <div className="space-y-4">
                        <div className="flex items-center gap-4 text-tertiary">
                           <Phone size={14} className="text-primary/60" />
                           <a href="tel:+919890200222" className="text-xs tracking-widest hover:text-white transition-colors">+91 98902 00222</a>
                        </div>
                        <div className="flex items-center gap-4 text-tertiary">
                           <Mail size={14} className="text-primary/60" />
                           <a href="mailto:info@maaisatraders.com" className="text-xs tracking-widest hover:text-white transition-colors lowercase">info@maaisatraders.com</a>
                        </div>
                     </div>
                  </div>
                  
                  <div className="flex flex-col items-start gap-8">
                     <WhatsAppButton variant="primary" label="Direct WhatsApp" message="Hello, I'm reaching out via the mobile menu." className="w-full" />
                     <Link 
                      href="/Maaisa_Genesis_Website_Content_Brief.pdf" 
                      target="_blank"
                      className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary hover:text-primary transition-all border-b border-primary/20 pb-2"
                     >
                       Download Brochure
                     </Link>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
