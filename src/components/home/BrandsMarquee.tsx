"use client";

import ScrollReveal from "../motion/ScrollReveal";

export default function BrandsMarquee() {
  const brands = ["Samsung", "LG", "Sony", "Mi", "OnePlus", "Panasonic", "TCL", "Vu", "Philips", "Haier"];
  
  // Double the array to create a seamless infinite loop
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="py-10 border-y border-white/5 bg-midnight-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <ScrollReveal>
          <p className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            Trusted Repair Experts For All Major Brands
          </p>
        </ScrollReveal>
      </div>

      <div className="relative flex w-[200%] md:w-[150%]">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-midnight-950 to-transparent z-10"></div>
        
        {/* Scrolling Content */}
        <div className="flex animate-marquee opacity-60 w-full items-center">
          {marqueeBrands.map((brand, idx) => (
            <div 
              key={idx} 
              className="flex-1 text-center text-xl md:text-2xl font-bold font-heading text-slate-400 hover:text-gold-400 transition-colors duration-300 px-4"
            >
              {brand}
            </div>
          ))}
        </div>

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-midnight-950 to-transparent z-10"></div>
      </div>
    </section>
  );
}
