"use client";

import Link from "next/link";
import { Monitor, Tv, Wrench, Zap, Maximize, Cpu } from "lucide-react";
import ScrollReveal from "../motion/ScrollReveal";

const services = [
  { icon: Monitor, title: "LED TV Repair", desc: "Expert diagnosis and component-level repair for all LED panels." },
  { icon: Tv, title: "OLED/QLED Repair", desc: "Specialized service for premium OLED and QLED smart displays." },
  { icon: Maximize, title: "Screen Replacement", desc: "Genuine panel replacements for cracked or damaged screens." },
  { icon: Cpu, title: "Motherboard Repair", desc: "Micro-soldering and IC replacements for dead mainboards." },
  { icon: Zap, title: "Power Supply Fix", desc: "Resolving no-power issues caused by surges or blown capacitors." },
  { icon: Wrench, title: "Wall Mounting", desc: "Professional and secure TV wall mounting and installation." },
];

export default function ServicesGrid() {
  return (
    <section className="py-32 bg-navy-950" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Premium Repair Services</h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
              We provide comprehensive, component-level repair solutions using specialized equipment and genuine spare parts.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="liquid-glass-card p-6 md:p-10 flex flex-col h-full group">
                <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 mb-8 border border-gold-500/20 group-hover:scale-110 transition-transform duration-500">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 mb-10 flex-grow leading-relaxed">{service.desc}</p>
                
                <Link 
                  href="/contact"
                  className="text-gold-500 font-bold hover:text-gold-400 flex items-center gap-2 transition-colors mt-auto w-fit tracking-wide uppercase text-sm group-hover:translate-x-2 duration-300"
                >
                  Book Service <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
