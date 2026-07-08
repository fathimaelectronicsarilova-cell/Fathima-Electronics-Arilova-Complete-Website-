"use client";

import Link from "next/link";
import { Star, MessageCircle, CheckCircle2 } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import ScrollReveal from "../motion/ScrollReveal";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.png" 
          alt="TV Repair Technician" 
          fill
          className="object-cover object-center opacity-30 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/80 to-navy-950" />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gold-500/20 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
        
        <div className="lg:w-3/5">
          <ScrollReveal delay={0.1}>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full liquid-glass mb-8 border-gold-500/20 shadow-lg shadow-gold-500/5">
              <span className="flex h-2.5 w-2.5 rounded-full bg-gold-400 shadow-[0_0_12px_rgba(212,175,55,0.8)] animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400">Available for Same-Day Service</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            {/* Headlines */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
              Fathima Electronics <br />
              <span className="text-gradient-accent text-3xl md:text-5xl lg:text-6xl mt-2 block">Premium TV Repair</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            {/* Features List */}
            <div className="flex flex-col gap-3 text-base md:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 mb-10 font-medium">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <CheckCircle2 className="text-gold-500 shrink-0" size={20} />
                <p>Expert technicians with years of experience</p>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <CheckCircle2 className="text-gold-500 shrink-0" size={20} />
                <p>On-spot repairs & one-day service available</p>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <CheckCircle2 className="text-gold-500 shrink-0" size={20} />
                <p>Visiting charge of just ₹299 (Adjusted in repair)</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            {/* CTA Cluster */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-10 py-4 md:py-5 bg-gold-gradient text-navy-950 rounded-xl font-bold text-lg transition-all glow-gold flex items-center justify-center gap-2 uppercase tracking-wide hover:-translate-y-1"
              >
                Book Repair Now
              </Link>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I%20need%20a%20TV%20repair`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 md:py-5 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wide"
              >
                <MessageCircle size={24} />
                WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:w-2/5 w-full mt-12 lg:mt-0">
           <ScrollReveal delay={0.5}>
            {/* Proof Stats - Vertical Layout for right side */}
            <div className="grid grid-cols-2 gap-6 liquid-glass-card p-8 border-gold-500/20">
              <div className="flex flex-col items-center text-center p-4">
                <h3 className="text-3xl font-bold text-white mb-1 flex items-center justify-center">5.0<Star className="ml-1 text-gold-400 fill-gold-400" size={20}/></h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Google Reviews</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <h3 className="text-3xl font-bold text-white mb-1">10k+</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">TVs Repaired</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <h3 className="text-3xl font-bold text-gradient-accent mb-1">100%</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Genuine Parts</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <h3 className="text-3xl font-bold text-white mb-1">₹299</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Visit Charge</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
