"use client";

import ScrollReveal from "../motion/ScrollReveal";

export default function RepairProcess() {
  const steps = [
    { num: "01", title: "Book a Visit", desc: "Call, WhatsApp, or use our online form." },
    { num: "02", title: "Diagnosis", desc: "Technician visits your home to inspect the TV." },
    { num: "03", title: "Approval", desc: "We provide a transparent quote for parts & labor." },
    { num: "04", title: "Repair", desc: "TV is fixed on-site (or taken to workshop if required)." },
  ];

  return (
    <section className="py-32 bg-midnight-900 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">Our Simple Process</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          
          {/* Connector Line */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-white/5 z-0" />

          {steps.map((step, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.15} className="relative z-10 text-center">
              <div className="w-20 h-20 mx-auto bg-midnight-950 border-2 border-gold-500 rounded-full flex items-center justify-center text-2xl font-bold font-heading text-white mb-8 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm max-w-[220px] mx-auto leading-relaxed">{step.desc}</p>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
