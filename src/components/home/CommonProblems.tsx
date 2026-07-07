"use client";

import { MessageCircle, MonitorX, VolumeX, Zap, WifiOff } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import ScrollReveal from "../motion/ScrollReveal";

const problems = [
  { icon: MonitorX, title: "Black Screen, Has Sound", desc: "Usually a backlight or T-Con board failure. Common in LED TVs." },
  { icon: VolumeX, title: "No Sound, Has Picture", desc: "Often a mainboard issue or blown speakers." },
  { icon: Zap, title: "Won't Turn On", desc: "Power supply board issues after power surges or outages." },
  { icon: WifiOff, title: "Smart Features Failing", desc: "Wi-Fi dropping, apps crashing, or boot loops." },
];

export default function CommonProblems() {
  return (
    <section className="py-32 bg-midnight-900 border-y border-white/5 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/3">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Common TV Issues</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                Recognize any of these? We fix them daily. Get an instant quote on WhatsApp based on your specific issue.
              </p>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20my%20TV%20is%20having%20an%20issue`} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-emerald-500/10 text-emerald-400 px-8 py-4 rounded-xl font-bold border border-emerald-500/20 hover:bg-emerald-500/20 transition-all uppercase tracking-wide shadow-lg shadow-emerald-500/5 hover:-translate-y-1"
              >
                <MessageCircle size={22} />
                WhatsApp Us
              </a>
            </ScrollReveal>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {problems.map((prob, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.15}>
                <div className="bg-midnight-950/80 border border-white/5 rounded-2xl p-8 hover:border-gold-500/30 transition-colors group h-full flex flex-col backdrop-blur-md shadow-xl">
                  <prob.icon size={32} className="text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-xl font-bold mb-3">{prob.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{prob.desc}</p>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, my TV has this issue: ${prob.title}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-emerald-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-emerald-300 transition-colors w-fit"
                  >
                    Ask about this <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
