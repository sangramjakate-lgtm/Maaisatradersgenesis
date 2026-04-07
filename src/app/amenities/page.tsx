"use client";

import { motion } from "framer-motion";
import { Coffee, Dumbbell, Waves, Zap, Leaf, Heart } from "lucide-react";

export default function AmenitiesPage() {
  return (
    <main className="pt-24 bg-surface-container-lowest">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center px-6 md:px-24 overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 z-0">
          <img
            alt="High-end architectural lobby"
            className="w-full h-full object-cover brightness-95"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMEAEN9PUV_S3HEUXI27G-zwwGAkzrNq1rP-Mg944GyqROhXLz6xL27_4uIuo2-KHGnQUhpUpFnuETpayBKpNuLoFCAEaAPdZCqbc8inahT4xTQW6tUWSa8TENYJQ54A0GL-7ZYoByHsiXTUBjTWtG2DRRcCghVJDguIOU2d1q6Z5NjnJ0PfKjnu4a1LBmiXJgpYDf2SbYYaZmFRHxAc3T9VOErRMURTBdA_3rJyk5VectaCy68MC1pywA5lB00KNlRdD_cDoL1Mw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent dark:from-slate-900/70"></div>
        </div>
        <div className="relative z-10 max-w-3xl text-left">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block mb-6 text-tertiary font-bold text-xs tracking-[0.4em] uppercase"
          >
            The Elysian Lifestyle
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-heading leading-[1.1] text-primary mb-8"
          >
            Curated <br />Living.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-on-surface text-lg max-w-lg leading-relaxed font-body mb-12 bg-white/10 backdrop-blur-sm p-6 border-l-2 border-tertiary"
          >
            A masterclass in residential wellness, Maaisa Genesis redefines luxury through an editorial lens of space, light, and materiality.
          </motion.p>
        </div>
      </section>

      {/* Infinity Horizon */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="col-span-12 lg:col-span-7 relative"
          >
            <div className="aspect-[4/5] lg:aspect-[16/10] overflow-hidden bg-surface-container-high translate-x-4 md:translate-x-12 translate-y-4 md:translate-y-12">
              <img
                alt="Infinity Pool"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtHJXhUjFvpDSkuc-9q0h1BAGHhXJTlX58_9lIsrdhhYPrQyzlGbUBrao0E6W4X2Zdad2ZqO7a_N1rJgznB6YE3sFUwGmW4oR84AG4JWcWfwuqCCHqE4fwOgk476BkLwnQmFVb1G66AFqmmedFHY2oPRHpjDjZcvH5o0JPkRH5nZUqPRHaNRRlHBowPDXzrjJmr2Kptr1TIBMMIrZsRse6Ih1btwILfp1RFlrRwcrKmbRfI0mpBWeAW6c-8SNlQ1qdHzruou-OWHc"
              />
            </div>
            <div className="absolute top-0 left-0 w-2/3 aspect-[4/5] border-[0.5px] border-outline-variant/30 pointer-events-none"></div>
          </motion.div>
          <div className="col-span-12 lg:col-span-5 lg:pl-16 text-left">
            <div className="mb-6 flex items-center gap-4">
              <Waves className="text-tertiary w-10 h-10" />
              <div className="h-[0.5px] w-12 bg-tertiary/30"></div>
            </div>
            <h2 className="text-5xl font-heading text-primary mb-8">The Infinity <br />Horizon</h2>
            <p className="text-on-surface-variant leading-relaxed mb-10 font-body font-light text-lg italic">
              Suspended 40 stories above the city, the rooftop infinity pool is a sanctuary of liquid glass. Designed with Italian marble and a seamless edge that disappears into the sky.
            </p>
            <ul className="space-y-4 mb-12">
              {["25-Meter Heated Lap Lane", "Private Sun Cabanas", "Observation Deck"].map((item) => (
                <li key={item} className="flex items-center gap-4 text-xs tracking-widest uppercase font-bold text-primary">
                  <span className="w-2 h-2 bg-tertiary"></span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Kinetic Studio - Bento */}
      <section className="py-32 px-6 md:px-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 text-left">
            <div>
              <span className="text-tertiary font-bold text-[10px] tracking-[0.5em] uppercase mb-4 block">Holistic Wellness</span>
              <h2 className="text-5xl font-heading text-primary">The Kinetic Studio</h2>
            </div>
            <p className="max-w-md text-on-surface-variant font-body font-light leading-relaxed">
              Precision-engineered for the modern athlete. Technogym equipment meets a spa-inspired atmosphere of cedar wood and diffused lighting.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 aspect-video relative group overflow-hidden"
            >
              <img
                alt="Gym"
                className="w-full h-full object-cover transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnj1OXQNM8_OWIB_J-v7QHwlFo1xHLtXmTsHpidN2NfQiDvn60_5qsM4najmzQyQ-KD47uKTIczXUyESZdRFBT-9Nr9TG6R9kUsL7E7Eb2oICqK6JZ0g9q84g9F2KVqIHrJD6UbdzvPAZfbgwy36fOut2Fy-BSCdxnqrw729M6gr1uVGeHK2a_6GS2DCeNF_UP860HZ4f1_gCKt-efMBgBrQcM7gTDfFFUsqbXvP42b3mnFfrj_UCB8as0q9SidahGke4ewQRehE0"
              />
              <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-xl p-6 pr-12 border border-white/20">
                <span className="text-[10px] tracking-[0.3em] uppercase block mb-2 text-primary">The Core</span>
                <span className="text-lg font-heading text-primary uppercase">High-Performance Arena</span>
              </div>
            </motion.div>
            <div className="aspect-square relative group overflow-hidden">
               <img
                alt="Yoga"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUs9WpQHOVO-WGAPs5DGLYOsSeDwImYmnUt0wBzlzwQ5AYyxi4JwsAUhXvAV0IqBcN2qPbKzEn2p1dWNLL0gloiNpGpg_d9CE1K-6QhXtrtToXfkE8aSgstsuRymbvdzPh2RqKcUpX6AMnvcNK-sZvmPpiUqtELrvKOVD96Scs4RkOYT6yjNIpcFil8vDYd7kT6XaSpF_3Jk7jGeaZq7PA7zLE9dcp5OnwJ1Z7p6PrYEgMdRTqA-frI_WfrNJmgWSuqOifRwVrMZo"
              />
            </div>
            <div className="aspect-square relative group overflow-hidden">
              <img
                alt="Spa"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq8OaABPLbPjSaoyZeZ62RuKQQfFHMaAdwMV0H-7UP7b0EZvVCjqyJ5QivB9mlb8B8iT-_32bHw4pfsQkWQve1TUkaK--v0gfa8FZYfzQn305bW-xOzVJvCbwENwPvu2YyLWaRkfY-sJBesk3YgOYNW1vBG2Fcxikg8HVnyO_iPumWHXDXrYS6Y2Hdds-i4_zo824bep29mXBvd_K2-uOp1pRMooctrqqU0o3xMu2EymcjyYatQGf5b6uaFXOVpxqYgOpNpB1upow"
              />
            </div>
            <div className="md:col-span-2 bg-[#00306c] flex flex-col justify-center p-12 text-white text-left">
              <Heart className="text-tertiary mb-6 w-10 h-10" />
              <h3 className="text-3xl font-heading mb-4">Mind & Body Equilibrium</h3>
              <p className="text-white/70 font-body font-light max-w-lg mb-8 italic">
                Our wellness programming includes weekly Vinyasa sessions, private physical therapy suites, and a cryotherapy chamber.
              </p>
              <button className="w-fit border border-white/20 px-8 py-3 text-[10px] tracking-widest uppercase hover:bg-white hover:text-primary transition-all font-bold">
                Explore Membership
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            alt="CTA BG"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTNrNzDFZ89Y3LS3iqbQ_F1Bhlb3iYlHFHR9zuzEVbWUBZx6QmKAWM_Xc31q89aSQ6MFlMQllRUBE9MHjDhbFHMobaFWGpO__W7zFQfMhNIN8FR29YCoq9jX8f6R5W6X1D-207kdjuPnZcKLigxTx7FbEB3gw1UiuUZnhofh1cG0DWEs7fCMgYzVCPOAnVfkTNnz6syy_664PcPO_VHcQprTDZt6usYXrUHakGEGppObUAfgn424SQFn-4AiBIE6BHtn641wze2Us"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-white text-5xl md:text-7xl font-heading mb-12 tracking-tight">Experience Genesis.</h2>
          <button className="bg-tertiary text-white px-12 py-5 font-bold text-sm tracking-widest uppercase hover:brightness-110 transition-all shadow-2xl">
            Schedule a Private Tour
          </button>
          <div className="mt-12 flex justify-center gap-6 md:gap-12 text-white/50 font-body text-[10px] tracking-widest uppercase font-bold">
            <span>Curated Views</span>
            <span>VIP Concierge</span>
            <span>Architectural Walk</span>
          </div>
        </div>
      </section>
    </main>
  );
}
