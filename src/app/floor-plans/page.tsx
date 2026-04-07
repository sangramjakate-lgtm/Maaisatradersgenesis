"use client";

import { motion } from "framer-motion";
import { Ruler, Sun, Layout, Box, ArrowRight } from "lucide-react";

export default function FloorPlansPage() {
  return (
    <main className="pt-32 bg-surface-container-lowest">
      {/* Header Section */}
      <header className="px-6 md:px-24 mb-24">
        <div className="max-w-7xl mx-auto text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] tracking-[0.3em] uppercase text-tertiary mb-4 block font-bold"
          >
            The Masterplan
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-heading font-light leading-tight mb-8 text-primary"
          >
            Architectural <br />Integrity.
          </motion.h1>
          <div className="w-1/3 h-[0.5pt] bg-outline-variant mb-12 opacity-50"></div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl text-on-surface-variant font-body font-light leading-relaxed text-lg"
          >
            Every residence in Maaisa Genesis is a dialogue between precision engineering and organic luxury. Discover layouts designed to capture natural light and framed horizons.
          </motion.p>
        </div>
      </header>

      {/* Filter System (Visual Only) */}
      <section className="bg-surface-container-low py-12 px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="flex flex-wrap gap-8 md:gap-12">
            {["All Units", "1BHK", "2BHK", "3BHK", "4BHK Penthouse"].map((filter, i) => (
              <button key={filter} className="group relative pb-2 overflow-hidden">
                <span className={i === 0 ? "text-sm font-bold tracking-widest uppercase text-primary" : "text-sm font-light tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors"}>
                  {filter}
                </span>
                {i === 0 && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"></div>}
              </button>
            ))}
          </div>
          <div className="text-right">
            <span className="text-[10px] tracking-[0.2em] uppercase text-slate-400">Current Availability</span>
            <p className="text-2xl font-light text-primary">12/48 Units</p>
          </div>
        </div>
      </section>

      {/* Floor Plan Grid */}
      <section className="px-6 md:px-24 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-start">
          {[
            { id: "A-04", name: "The Meridian Suite", type: "2 Bedroom", sq: "1,450", lv: "02-14", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFBB_QWWdBa6zrDmiQgl14zLWVP9Z0qKfxBtJRkDAz5DLkijrbPOntLx8u1iHd0GGF6LgSWghA0C_SX5T02IPF61svqUZEuSlFGHoLRvP5sAKsE2As6i8lmNqvBrHd0l8Nz714Dkr-58gdPaSdnYD7CwyEYmIul7GlYDruQzyqobYnyd3r_UbaWhTODRcM_J0QqrrJNNbhQO9XsIsvS_KktOARD4EPYFqbPHvSSACh_XsAkFecthMu9OqWUoiJlXxTgCpfUd7LVQo" },
            { id: "B-12", name: "Sky Garden Loft", type: "3 Bedroom", sq: "2,100", lv: "15-22", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4dNwWr3Wo_-cWyYIMonQlqjYcfAUlXNcMmbf7GshPaFMM5Epq2mxGw3jnOBaGD-H75zv5T3DGAfAxlfofujZq63C9rn70REX7qh67KrqVMSbreYxQ1TIFYzBJ2ReiawYlnG4fZflFapLEjxMJiV-IciqBiXPlaReRYnZM-IBIypF6O7k8gJsaPVHpQ-QAaB0vd51Yw2nq7xSdeXv_cFOxY0c1ImFuGkS2Ba9-6-H_HbgdN4tYU8RUtV9GTmC_QfBNY9IKfZIpkas", offset: true },
            { id: "C-02", name: "The Atelier", type: "1 Bedroom", sq: "850", lv: "01-10", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCvXwQpTwh69OA7dpvwkptyPW5wmdKNde8Z8p7JFtb1mJQpAODSA4A-OEoN933vZlAjwqtK8yyxdH7rtPWWcdp8QTNNfIMja6HG-veqS6JlAYb2ni-wv1EKQAnEVWRUgFxCD8UXensgEygY1wwP5HsBTtxgtSXwYRbbD0ni4cPICkqou5OqcT8lDc6-GcbCQ42orZZsXEVYk3bkMFo2SKKXMQKv99u06YBRk1-FNku_FXZoLTNobSyOL_tkwFzz9WUnXdxc_eBi_k" }
          ].map((plan, i) => (
            <motion.div 
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group text-left ${plan.offset ? 'lg:translate-y-12' : ''}`}
            >
              <div className="relative aspect-[4/5] bg-white overflow-hidden mb-6 border border-outline-variant/10 shadow-sm group-hover:shadow-xl transition-all duration-700">
                <img
                  className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                  alt={plan.name}
                  src={plan.img}
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/80 backdrop-blur px-3 py-1 text-[10px] tracking-widest uppercase font-bold border border-outline-variant/20">
                    Residence {plan.id}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-heading font-light mb-1 text-primary">{plan.name}</h3>
                  <p className="text-xs tracking-widest uppercase text-on-surface-variant font-bold">{plan.type} Residence</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary">{plan.sq} <span className="text-[10px] font-normal">SQ. FT.</span></p>
                  <p className="text-[10px] tracking-widest uppercase text-slate-400">Level {plan.lv}</p>
                </div>
              </div>
              <div className="mt-6 flex gap-4">
                <button className="flex-1 border border-outline-variant py-3 text-[10px] tracking-widest uppercase hover:bg-primary hover:text-white transition-all font-bold">Inquire</button>
                <button className="flex-1 border border-outline-variant py-3 text-[10px] tracking-widest uppercase hover:bg-primary hover:text-white transition-all font-bold">Details</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Spotlight: The Penthouse */}
      <section className="bg-primary text-white py-32 px-6 md:px-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative z-10 text-left">
            <span className="text-[10px] tracking-[0.4em] uppercase text-tertiary-container mb-6 block font-bold">Limited Edition</span>
            <h2 className="text-5xl md:text-7xl font-light font-heading leading-tight mb-8">The Penthouse Suite.</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-12 font-body font-light italic">
              Occupying the entire 24th floor, the Genesis Penthouse features a private rooftop garden, a 360-degree infinity pool, and dedicated elevator access. 
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-[10px] tracking-widest uppercase text-tertiary-container mb-2 font-bold">Area</p>
                <p className="text-3xl font-light font-heading">5,800 SQ. FT.</p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-tertiary-container mb-2 font-bold">Orientation</p>
                <p className="text-3xl font-light font-heading">Panoramic</p>
              </div>
            </div>
            <button className="bg-tertiary text-white px-10 py-4 text-sm tracking-[0.2em] uppercase font-bold hover:bg-white hover:text-primary transition-all shadow-glow">
              Inquire about this layout
            </button>
          </div>
          <motion.div 
             initial={{ x: 100, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             transition={{ duration: 1 }}
             className="lg:col-span-7 relative"
          >
            <div className="aspect-video relative z-10 md:translate-x-12 shadow-2xl overflow-hidden rounded-sm">
              <img
                className="w-full h-full object-cover"
                alt="Luxury Penthouse"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYpmlwfrLtAZDZQ_FP_wDBG1IB823-HzsmkfEv9wbtscBt3ywu3H--OLs9HOJR2sENO3nIGoblQhas3J6jB8gYOkWArVvWuT3evtpBEqpr4CuZmgzOu1D3D4Qg7YKTjjLIBM44FgYxQIRTrFwYLp2NnL-zwU59DYhhwPu38-b-DS2DGQ6Tll9ojyrLiSohf1BwJ4Oo7TGxh_jHLFxz3nOQkyoGpPDljnsXN-u8AkpwB2VA_8ezRoghqPNCQvXnBoHAPp9yeSaR-5Q"
              />
            </div>
            <div className="absolute -right-12 -bottom-12 w-full h-full border border-white/10 pointer-events-none hidden md:block"></div>
          </motion.div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="text-left">
              <div className="mb-12">
                <span className="text-[10px] tracking-[0.3em] uppercase text-slate-400 mb-4 block font-bold">Precision Details</span>
                <h2 className="text-4xl font-heading font-light mb-6 text-primary">Designed for Living.</h2>
                <p className="text-on-surface-variant font-body font-light italic">Our layouts prioritize 'Flow-Through' design, ensuring cross-ventilation and logical transitions.</p>
              </div>
              <div className="space-y-8">
                {[
                  { icon: Ruler, title: "Optimized Square Footage", desc: "Zero-wastage corridors and smart storage solutions built into every wall." },
                  { icon: Sun, title: "Heliotropic Alignment", desc: "Window placements calculated by seasonal solar path for maximum natural warmth." }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-6">
                    <item.icon className="text-tertiary w-8 h-8 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold tracking-widest uppercase mb-1 text-primary">{item.title}</h4>
                      <p className="text-sm text-on-surface-variant font-body">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img className="w-full aspect-square object-cover grayscale opacity-40 hover:opacity-100 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmONuflzkiV_Lljjp64BJxLzLgG09Xf9gNbinATLWhi8lg7Nra2PzwQIQKHEyj_G8u9S63edpdXAlXeMszsd7YScTgUFXecx-kx8UQO0cktzRRJmkNHXIjbhoqhvl16GzHltM164vHhunAr6GAbhgfN-9idTXEodevZAEDuJxApXg3eYTk7wcYlSjCUkax2DMAG577wyrhMKnkoj40AUGXXCMKs4uNFSaTFMPfYzoPULXMuz36Md400yNywsTdS-Vy2HdrzR7HB58" />
                <img className="w-full aspect-[3/4] object-cover rounded-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGpZJFW7aG-ZYHnN-u1RKvYCvTiNxrGp6UjHQQFwCWR2N3xStJrmxul1e06TNHZksqYxQ3BRwTo35SDqJXud0MklXkG9l8iiMGXudbHJ4qV4zCbZy_ACU608v1ETh1NuiB8O7hwo20u65IOF5SlMY8XKOWzDtA019woHY8kl3jJQzlLQuyfesDVhMmZsVcNPHQe9QaeZtTEGQ05DhBEhqfLJ7ddEgfHAngLX8ostB4h2Dhm3J9AZte0NIZOOnRDiI-G5MEihDHaxI" />
              </div>
              <div className="pt-12 space-y-4">
                <img className="w-full aspect-[3/4] object-cover rounded-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUVDhYPYrMZ_3s6iCJ008xj2NVhfWm7PKI53mBgdF-eZE-2bqUgtz6iOtpJrwLekf-qHuWqUBwU6t2XcUXEOjUq6d9xD8MpVeiXOQ6xXw1Bu72qIfFaJMNNRzvgjgzNjf3kL_JMMrT-su-df-LZeiT3Ncw94GEJWyatVGIzMywbZsbto2WHseoZpbQbuutAsg0yw9wi2myiknxBf6QOXl4OyLGJ1s0qSio3jyyf8_U-JeteV5oj62yFN0RNMnmVwhJ6KxYWfqks94" />
                <img className="w-full aspect-square object-cover grayscale opacity-40 hover:opacity-100 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgVnYXwHoytE41Yr1-5gxh2iRYPLawKNoCelcvfuDstgdVw1IDgMjAnAd_AkChthkW_TFVCtwTdkRX1LqVAMIqJHidR6WedQDUjzUK5_q7UoO7V-Dltedy8rJ6uR9c9nDCmG8B6yvmYt-pOqfZl1oyC7Oq075shPb46g8l7uO4Q5nYCs53xPlwrzJrmkEUceumEo8hlCPFe857sQLItlsp9M97PTB41gyc6SSNDmBxAU8NFukmGJh8f8SwJQw3uyb0TZKyVioE0Tg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
