"use client";

import React from "react";
import Link from "next/link";
import { WhatsAppButton } from "./WhatsAppButton";
import { MapPin, Phone, Mail, Globe, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface-low border-t border-black/5 py-24 px-6 md:px-12 overflow-hidden uppercase font-black text-[10px] tracking-widest text-tertiary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        {/* Brand & Mission: Maaisa Reality */}
        <div className="space-y-8">
           <Link href="/" className="inline-block mb-4">
               <div className="flex items-center gap-4">
                 <img src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1772447140/maaisa/Maaisa_wxdvqt.png" alt="Maaisa Reality" className="h-8 w-auto object-contain" />
                  <div className="h-6 w-[1px] bg-primary/20" /> 
                  <span className="text-xl font-heading font-black tracking-tighter text-foreground uppercase">Reality</span> 
               </div>
           </Link>
           <p className="text-[9px] leading-relaxed lowercase font-body tracking-tight text-tertiary/60">
              crafted architectural excellence in the heart of the modern metropolis. providing a visionary lifestyle for a growing legacy.
           </p>
           <div className="flex items-center gap-6 pt-4">
              <a href="#" className="text-primary/40 hover:text-primary transition-all">
                 <Globe size={18} />
              </a>
              <a href="#" className="text-primary/40 hover:text-primary transition-all">
                 <Share2 size={18} />
              </a>
           </div>
        </div>

        {/* The Catalogue: Quick Access */}
        <div>
           <h4 className="text-primary font-black mb-10 tracking-[0.4em]">The Catalogue</h4>
           <ul className="space-y-4">
              <li><Link href="/" className="hover:text-primary transition-all">Home</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-all">Projects</Link></li>
              <li><Link href="/#about" className="hover:text-primary transition-all">About Maaisa Reality</Link></li>
              <li><Link href="/#contact" className="hover:text-primary transition-all">Contact Us</Link></li>
           </ul>
        </div>

        {/* The Location: Reach Us */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
               <h4 className="text-primary font-black mb-10 tracking-[0.4em]">The Address</h4>
               <div className="flex gap-4 items-start group">
                  <MapPin size={16} className="text-primary/40 group-hover:text-primary transition-all shrink-0" />
                  <p className="leading-relaxed lowercase font-body tracking-tight">
                     3rd Floor, Office No 301 & 302, <br />
                     41 Elite, Tathawade, Pune – 411033.
                  </p>
               </div>
            </div>
            
            <div>
               <h4 className="text-primary font-black mb-10 tracking-[0.4em]">The Direct</h4>
               <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                     <Phone size={16} className="text-primary/40 group-hover:text-primary transition-all" />
                     <a href="tel:+919890200222" className="hover:text-primary transition-all font-body">+91 98902 00222</a>
                  </div>
                  <div className="flex items-center gap-4 group">
                     <Mail size={16} className="text-primary/40 group-hover:text-primary transition-all" />
                     <a href="mailto:info@maaisa.com" className="hover:text-primary transition-all lowercase font-body">info@maaisa.com</a>
                  </div>
                  <WhatsAppButton 
                    label="WhatsApp Connect" 
                    message="Hello Maaisa Reality, I'm interested in connecting with your team." 
                    variant="minimal" 
                    className="text-[9px] font-black uppercase tracking-widest pt-4"
                  />
               </div>
            </div>
        </div>
      </div>

      {/* The Bottom: Legacy Acknowledgement */}
      <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-[8px] opacity-40 gap-8">
         <p>© {new Date().getFullYear()} MAAISA REALITY. ALL RIGHTS RESERVED.</p>
         <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 uppercase">
            <span>Exclusive Partner: The Legacy Estate Group</span>
            <span>Maaisa Reality</span>
         </div>
      </div>
    </footer>
  );
}
