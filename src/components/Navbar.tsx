"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Portfolio", href: "/" },
  { name: "Floor Plans", href: "/floor-plans" },
  { name: "Amenities", href: "/amenities" },
  { name: "The Vision", href: "/editorial" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      if (scrolled) {
        gsap.to(navRef.current, {
          paddingTop: "1rem",
          paddingBottom: "1rem",
          backgroundColor: "rgba(10, 10, 10, 0.8)",
          backdropFilter: "blur(20px)",
          duration: 0.4,
          ease: "power2.out"
        });
        gsap.to(logoRef.current, { scale: 0.8, duration: 0.4 });
      } else {
        gsap.to(navRef.current, {
          paddingTop: "2rem",
          paddingBottom: "2rem",
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          duration: 0.4,
          ease: "power2.out"
        });
        gsap.to(logoRef.current, { scale: 1, duration: 0.4 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-8 flex justify-between items-center bg-transparent",
        isScrolled && "border-b border-white/5 shadow-2xl"
      )}
    >
      <Link href="/" className="relative z-50">
        <img
          ref={logoRef}
          src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1772447140/maaisa/Maaisa_wxdvqt.png"
          alt="MAAISA GENESIS"
          className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
        />
      </Link>
      
      <div className="hidden md:flex items-center space-x-12">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "font-heading text-[10px] tracking-[0.3em] uppercase transition-all duration-500 hover:text-primary relative group",
              pathname === link.href ? "text-primary" : "text-secondary/60"
            )}
          >
            {link.name}
            <span className={cn(
              "absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full",
              pathname === link.href && "w-full"
            )} />
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-6">
        <button className="hidden sm:block font-body text-[10px] tracking-[0.2em] uppercase text-primary font-bold hover:opacity-70 transition-all">
          Private View
        </button>
        <button className="bg-primary text-on-primary px-6 py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-secondary hover:text-on-secondary transition-all flex items-center gap-2 group">
          Brochure
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
        
        <button 
          className="md:hidden text-secondary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-surface-lowest z-[100] flex flex-col items-center justify-center space-y-8 md:hidden">
          <button 
            className="absolute top-8 right-8 text-secondary"
            onClick={() => setMobileOpen(false)}
          >
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-3xl font-heading tracking-widest uppercase text-secondary hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
