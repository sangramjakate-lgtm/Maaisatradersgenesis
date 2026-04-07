import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-[#f3f4f5] dark:bg-slate-900 w-full py-16 px-6 md:px-12 border-t border-[#e1e3e4]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-end w-full">
        <div>
          <div className="text-lg md:text-xl font-bold tracking-widest text-[#1f4788] dark:text-white mb-8">
            MAAISA GENESIS
          </div>
          <p className="font-body text-[10px] md:text-xs tracking-tighter uppercase text-slate-500 max-w-sm mb-6 leading-relaxed">
            © 2024 Maaisa Genesis. All rights reserved. <br/>
            Curated Architectural Excellence in the heart of the modern metropolis.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {["Privacy Policy", "Terms of Service", "Press Inquiries", "Contact Gallery"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-body text-[10px] md:text-xs tracking-tighter uppercase text-slate-500 hover:text-[#1f4788] dark:hover:text-[#735c00] transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        
        <div className="text-left md:text-right">
          <p className="font-body text-[10px] md:text-xs tracking-tighter uppercase text-slate-500 mb-2">
            Exclusive Partner
          </p>
          <p className="text-lg md:text-xl font-heading text-[#1f4788] dark:text-white">
            The Legacy Estate Group
          </p>
        </div>
      </div>
    </footer>
  );
}
