"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Play, Star } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="pt-24 overflow-x-hidden bg-surface-container-lowest">
      {/* Hero Section */}
      <section className="relative h-[921px] min-h-[700px] flex items-center px-6 md:px-24 mb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Luxury Living"
            className="w-full h-full object-cover brightness-95"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdUVSa4CvIbhpAKimfYxZ7YtT-IlcikZOiJK8R3Cc0IrX0HdbOmFhTz9elKkknqlilSHL-Lw8PVptWVdwULtPJTOK31fUKvMck2VK2VH2DumBvdNOyJ1zaemUC9mRdvAVabXavntlZdDNbKxkPWN4NDAVTswdxa_Ic96j-AhT38E4qVBqq4AjQWnlICb1iF-85-rqca7CBpCoFb5zKv9UmwT1YvPzHlFQY576ed21jHG9yTxNXJoV_wBQiAqWx2hNtF42BjxOaVQE"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-transparent dark:from-slate-950/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl text-left">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] md:text-sm text-tertiary font-bold tracking-[0.3em] uppercase mb-6 block"
          >
            The Digital Estate
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl font-heading leading-tight text-primary mb-12"
          >
            Experience <br />
            <span className="italic font-light">Luxury Living</span> <br />
            at Maaisa Genesis
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button className="bg-[#00306c] px-10 py-5 text-white font-bold tracking-widest uppercase hover:scale-95 transition-transform duration-300">
              Explore Residences
            </button>
            <button className="border border-outline-variant/30 backdrop-blur-md bg-white/20 px-10 py-5 text-[#00306c] font-bold tracking-widest uppercase hover:bg-white/40 transition-all">
              Download Brochure
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-0 right-12 lg:right-24 translate-y-1/2 hidden md:block w-72 h-96 border-[0.5pt] border-outline-variant/20 bg-surface-container-low p-8 shadow-2xl"
        >
          <div className="h-full flex flex-col justify-between">
            <p className="text-[10px] tracking-widest uppercase text-slate-500">Project Location</p>
            <p className="text-xl font-heading text-primary">Prestige Heights, <br />Global District 01</p>
            <div className="w-full h-[0.5pt] bg-outline-variant/30 my-4"></div>
            <p className="text-xs text-on-surface-variant leading-relaxed font-body">A sanctuary defined by light, space, and the geometry of pure intention.</p>
          </div>
        </motion.div>
      </section>

      {/* The Genesis of Precision */}
      <section className="py-32 px-6 md:px-24 bg-surface-container-low relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#00306c_1px,transparent_1px)] [background-size:40px_40px]"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-5">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-6xl font-heading text-primary mb-8"
            >
              The Genesis of Precision
            </motion.h2>
            <div className="space-y-12">
              {[
                { title: "Monolithic Architecture", desc: "Designed as a single coherent statement, Maaisa Genesis challenges the traditional vertical stack." },
                { title: "Sustainable Core", desc: "Integrated solar harvesting and greywater recycling systems are woven into the structural steel." },
                { title: "Bespoke Interiors", desc: "Hand-selected Carrara marble and smoked oak floors curated by internationally acclaimed artisans." }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={index === 0 ? "border-l-2 border-tertiary pl-6" : "pl-6"}
                >
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-body">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 relative">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               className="aspect-[4/5] bg-surface-container-highest overflow-hidden"
            >
              <img
                alt="Architectural Precision"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa371Aqq07-7yq8rPy5GXDv0KyaTqvURx08euvLfIWZTQTosNCeh4NctxZBova54vVomciLz-p3qskf2Pddx2FWAKmMUWI9XxRFcK6G1BGqe4FfE5ukofGCBMhL92GFvaRbT62BZc8kW9z4qjYOrEc_T9PxffuQw2bfn5TZyCRbHJuftY4n67dFQ8bU3JHRAoONzxXQHtiHOvLHvey91xIpDUMa-SFFvXGnbwhcmGQ-jo_CiAc5dR6ojs0b7SsIDG3EhWgHTsXH1Q"
              />
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="absolute -bottom-12 -left-12 w-48 md:w-64 h-48 md:h-64 bg-[#00306c] p-8 hidden md:flex flex-col justify-center"
            >
              <span className="text-6xl font-heading text-white mb-2 italic">01</span>
              <p className="text-white/80 text-[10px] tracking-widest uppercase">Global Design Recognition 2024</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curated Living Spaces */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl text-left">
              <h2 className="text-4xl lg:text-6xl font-heading text-primary mb-6">Curated Living Spaces</h2>
              <p className="text-on-surface-variant font-light leading-relaxed text-lg font-body italic">
                Choose from a limited collection of 42 bespoke residences, each offering a unique floor plan optimized for panoramic views.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20">
            {[
              { name: "The Sky Suite", sq: "3,400 SQ FT", desc: "Triple-height ceilings and a private wrap-around terrace.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo5_A7-89UpII7Zhb_DDpfWlnt7ynTteinsqIXCZG8QBOpBqsTs2iFZ9uSdKCm2_Yfq7cF2rT4XZ3EY_LrqmTzHanC_hUnjdPdzPubHcnLa1_VNt4Qlq08_QRgN6sYpL5C9ic3HcouHNv3Yp6RQEG_uO5GJh4R-QSS6lLZjCX-PV4teLQYOulYmzxL0bc2cBUhqoCgevdtU5k3b5zsbevwFNC2OGij2RstcLwzUeWnq8M7xcCp1q2nINp8Wk-igPp5P9W0g8xKc9s" },
              { name: "The Horizon Loft", sq: "2,100 SQ FT", desc: "Integrated smart automation and panoramic glass walls.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgNKOdkI4TollIK8NArHDcFhdwPEuWyhnYcaqc0vbbJGTf-3GgzTOcWQTxiGVJZiCmJBhBzZSY-D5p4oKb_aYFGcYcnjAvxSTEP7sI6WL6ToFHwuwhA8u0jdWieGkAqGjnfaM1sdLVEsX520HRTL2GP3i809GJskupS9oHkkIOV4EzIQB11Lv9rITr47u95egKfVB2zQlLRDnEfi66xtDWP4DPEbPbzpK-oCyKRQm7CIwIdJNWj6C_yJ9V2bVBORYNM8_j6mR_AGU" },
              { name: "The Duplex Mansion", sq: "5,800 SQ FT", desc: "Two levels of ultimate luxury featuring a private lift.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_U7Ci1dY9eivTL8npiBjGRvWXUIN0ZiQpvFhmHcyFmo3r-SuTUaM7ykQZAhHelHffRkJX2zm0VU4MeT_xSdHrqiYLb5che9XbfGatU4UDBo8pQ0eiv6QJp2H06C47_D66pWA0GuWxGWdl7vdnNAUswWV6X9KIvMeO6rpl4Y6Ytg42McJSzWTCZbSsMBsCjvFCEw6-WgDFyDiVDoXX017VocDyMh31jz9UhXyLvViAVKwx_UISzpKeeS8L9mNaJS51pAaYOO09tsE" }
            ].map((card, i) => (
              <motion.div 
                key={card.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-surface-container-lowest p-10 hover:bg-surface-container-low transition-colors cursor-pointer group text-left"
              >
                <div className="aspect-square bg-surface-container-highest mb-12 overflow-hidden">
                  <img
                    alt={card.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
                    src={card.img}
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-heading text-primary">{card.name}</h3>
                    <span className="text-tertiary font-bold text-xs uppercase">{card.sq}</span>
                  </div>
                  <p className="text-on-surface-variant text-sm font-body">{card.desc}</p>
                  <div className="pt-6">
                    <button className="text-xs font-bold tracking-widest uppercase text-primary border-b border-primary pb-2 group-hover:text-tertiary group-hover:border-tertiary transition-colors">
                      View Detailed Plan
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Identity Section */}
      <section className="py-24 px-6 md:px-24 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto border-[0.5pt] border-outline-variant/30 p-16 lg:p-32 bg-surface-container-low relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[#00306c] translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-heading text-primary group-hover:text-white transition-colors mb-12">
              Begin Your Journey Into Excellence
            </h2>
            <button className="bg-tertiary text-white px-12 py-6 font-bold tracking-widest uppercase hover:scale-95 transition-transform inline-flex items-center gap-4 shadow-xl">
              Download Complete Brochure
              <Download className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
