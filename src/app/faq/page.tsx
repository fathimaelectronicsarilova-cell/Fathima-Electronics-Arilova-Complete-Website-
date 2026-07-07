import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

export const metadata = {
  title: "FAQ | Fathima Electronics",
  description: "Frequently asked questions about our TV repair services.",
};

const faqs = [
  { q: "Do you charge a visiting fee?", a: "Yes, we charge a nominal visiting fee of ₹299. However, if you choose to proceed with the repair, this fee is adjusted against the total repair cost." },
  { q: "How long does a repair usually take?", a: "Most common issues like power supply or T-Con board replacements are fixed on the spot within 1-2 hours. Complex motherboard repairs or screen replacements may take 1-3 days." },
  { q: "Do you provide a warranty on repairs?", a: "Absolutely! We provide a written warranty of up to 6 months on all hardware repairs and part replacements for your peace of mind." },
  { q: "Do you use genuine parts?", a: "Yes, we prioritize using 100% genuine OEM parts. If an OEM part is unavailable, we use high-quality certified compatible parts and inform you beforehand." },
  { q: "Will you fix the TV at my home or take it away?", a: "We strive to complete 90% of repairs on-site at your home. We only transport the TV to our workshop if it requires specialized micro-soldering equipment or a clean room for panel replacement." },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-24 bg-midnight-950">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/abstract-bg.png" 
            alt="Abstract Gold Glass" 
            fill
            className="object-cover object-center opacity-30 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight-950 via-midnight-950/80 to-midnight-950" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Frequently Asked <span className="text-gradient-accent">Questions</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium">
            Everything you need to know about our repair process, pricing, and warranties.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-4">
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="liquid-glass-card p-5 md:p-8">
              <details className="group">
                <summary className="flex justify-between items-center font-bold text-xl cursor-pointer list-none text-white group-open:text-gold-400 transition-colors">
                  {faq.q}
                  <span className="transition group-open:rotate-45">
                    <Plus size={24} />
                  </span>
                </summary>
                <p className="text-slate-400 mt-6 leading-relaxed border-t border-white/10 pt-6">
                  {faq.a}
                </p>
              </details>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-300 mb-6 text-lg">Still have questions?</p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-gold-gradient text-midnight-950 font-bold rounded-xl uppercase tracking-wide glow-gold hover:-translate-y-1 transition-all">
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
}
