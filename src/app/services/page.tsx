import Image from "next/image";
import ServicesGrid from "@/components/home/ServicesGrid";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export const metadata = {
  title: "Premium TV Repair Services | Fathima Electronics",
  description: "Expert component-level repair for LED, OLED, and Smart TVs.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/tech-bg.png" 
            alt="High-Tech TV Circuit Board" 
            fill
            className="object-cover object-center opacity-40 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/80 to-navy-950" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Our <span className="text-gradient-accent">Repair Services</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium">
            From cracked panels to complex motherboard micro-soldering, our expert technicians handle it all with precision and genuine parts.
          </p>
        </div>
      </section>

      {/* Services Grid (Reused from Home but works perfectly here) */}
      <ServicesGrid />

      {/* Persistent Bottom CTA for this page */}
      <section className="py-20 bg-navy-900 border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-white">Not sure what the issue is?</h2>
          <p className="text-slate-400 mb-8">Send us a quick message with your TV model and the symptoms. We'll give you a free estimate.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-gold-gradient text-navy-950 font-bold rounded-xl uppercase tracking-wide glow-gold hover:-translate-y-1 transition-all">
              Book a Visit (₹299)
            </Link>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need a free estimate for my TV`} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20 rounded-xl flex items-center gap-2 uppercase tracking-wide hover:bg-emerald-500/20 transition-all">
              <MessageCircle size={20} /> Free WhatsApp Estimate
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
