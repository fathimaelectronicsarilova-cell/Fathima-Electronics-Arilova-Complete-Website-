"use client";

import { ShieldCheck, Clock, MapPin, Wrench } from "lucide-react";
import ScrollReveal from "../motion/ScrollReveal";

export default function WhyChooseUs() {
  const benefits = [
    { icon: Clock, title: "Same-Day Service", desc: "Available for most localities. We value your time." },
    { icon: Wrench, title: "Genuine Parts", desc: "We use original OEM parts or high-quality certified compatible parts." },
    { icon: ShieldCheck, title: "Up to 6 Months Warranty", desc: "Peace of mind with written warranty on all hardware repairs." },
    { icon: MapPin, title: "Doorstep Repair", desc: "No need to carry your heavy TV. We fix it at your home." },
  ];

  return (
    <section className="py-32 bg-midnight-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Fathima Electronics?</h2>
            <p className="text-slate-400 font-medium text-lg">
              Our commitment to transparency, quality, and speed makes us the top-rated local TV repair service.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.15}>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gold-500/5 flex items-center justify-center text-gold-500 mb-8 border border-gold-500/20 shadow-lg shadow-gold-500/5 group-hover:bg-gold-500/10 group-hover:scale-110 transition-all duration-500">
                  <benefit.icon size={36} />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
