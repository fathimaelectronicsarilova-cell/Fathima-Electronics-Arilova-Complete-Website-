import Image from "next/image";
import BookingForm from "@/components/home/BookingForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT_NUMBER, OWNER_EMAIL } from "@/lib/constants";

export const metadata = {
  title: "Contact Us | Fathima Electronics",
  description: "Book a TV repair visit or contact our support team.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 bg-navy-950">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/abstract-bg.png" 
            alt="Abstract Gold Glass" 
            fill
            className="object-cover object-center opacity-30 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/80 to-navy-950" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Book Your <span className="text-gradient-accent">Repair</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium">
            Fill out the form below or reach us directly. Our technicians are ready to help.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl liquid-glass flex items-center justify-center text-gold-500 shrink-0 border border-gold-500/20">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                  <p className="text-slate-400">Immediate assistance for bookings.</p>
                  <p className="text-xl font-bold text-gold-400 mt-2">+91 {CONTACT_NUMBER}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl liquid-glass flex items-center justify-center text-gold-500 shrink-0 border border-gold-500/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                  <p className="text-slate-400">For business inquiries and feedback.</p>
                  <p className="text-lg font-bold text-gold-400 mt-2">{OWNER_EMAIL}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl liquid-glass flex items-center justify-center text-gold-500 shrink-0 border border-gold-500/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Service Center</h3>
                  <p className="text-slate-400">Walk-ins welcome for drop-offs.</p>
                  <p className="text-lg font-medium text-slate-300 mt-2">123 Tech Park Avenue,<br />Industrial Phase 1, City 400001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl liquid-glass flex items-center justify-center text-gold-500 shrink-0 border border-gold-500/20">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Operating Hours</h3>
                  <p className="text-slate-400">We work every day.</p>
                  <p className="text-lg font-medium text-slate-300 mt-2">Mon - Sun: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form Component */}
          <div>
            <div className="liquid-glass-card p-6 md:p-8 border border-gold-500/20">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
