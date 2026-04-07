"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Portfolio", href: "/" },
  { name: "Floor Plans", href: "/floor-plans" },
  { name: "Amenities", href: "/amenities" },
  { name: "The Vision", href: "/editorial" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 border-none bg-white/70 dark:bg-slate-950/70 backdrop-blur-md shadow-sm shadow-[#191c1d]/5 flex justify-between items-center px-6 md:px-12 py-6"
    >
      <div className="text-xl md:text-2xl font-light tracking-[0.2em] text-[#1f4788] dark:text-white font-heading">
        MAAISA GENESIS
      </div>
      
      <div className="hidden md:flex space-x-8 lg:space-x-12">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "font-heading text-sm tracking-widest uppercase transition-all duration-300",
              pathname === link.href 
                ? "text-[#735c00] border-b border-[#735c00] pb-1"
                : "text-[#1f4788] dark:text-slate-300 hover:text-[#735c00]"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-4 md:space-x-6">
        <button className="hidden sm:block font-body font-bold text-[10px] md:text-xs tracking-widest uppercase text-[#1f4788] hover:opacity-80 transition-all duration-500">
          Private View
        </button>
        <button className="bg-[#1f4788] text-white px-4 md:px-6 py-2 md:py-3 text-[10px] md:text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-all shadow-glow">
          Download Brochure
        </button>
      </div>
    </motion.nav>
  );
}
