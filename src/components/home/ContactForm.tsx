"use client";

import ScrollReveal from "../motion/ScrollReveal";
import BookingForm from "./BookingForm";

export default function ContactForm() {
  return (
    <section className="py-32 bg-midnight-900 border-y border-white/5 relative overflow-hidden" id="book">
      {/* Background Glow */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="liquid-glass-card p-6 md:p-16">
            <BookingForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
