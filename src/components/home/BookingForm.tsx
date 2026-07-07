"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tvBrand: "",
    address: "",
    issueDescription: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit booking");

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", tvBrand: "", address: "", issueDescription: "" });
    } catch (error) {
      console.error("Error submitting booking:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      
      if (submitStatus !== "error") {
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    }
  };

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Book a Repair</h2>
        <p className="text-slate-400 text-lg">Fill out the form below and we'll get back to you within 15 minutes to schedule your visit.</p>
      </div>

      {submitStatus === "success" && (
        <div className="mb-8 p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 className="text-emerald-500 shrink-0" size={32} />
          <div>
            <h3 className="text-lg font-bold text-white">Booking Received!</h3>
            <p className="text-emerald-200/70 text-sm mt-1">Thank you. One of our expert technicians will call you shortly to confirm the appointment.</p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-8 p-6 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4">
          <AlertCircle className="text-red-500 shrink-0" size={32} />
          <div>
            <h3 className="text-lg font-bold text-white">Something went wrong</h3>
            <p className="text-red-200/70 text-sm mt-1">We couldn't submit your booking. Please try again or call us directly.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold tracking-wide text-slate-300 mb-3 uppercase">Name *</label>
            <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full bg-midnight-950 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder-slate-600" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-bold tracking-wide text-slate-300 mb-3 uppercase">Email Address *</label>
            <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-midnight-950 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder-slate-600" placeholder="john@example.com" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold tracking-wide text-slate-300 mb-3 uppercase">Phone Number *</label>
            <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full bg-midnight-950 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder-slate-600" placeholder="+91 98765 43210" />
          </div>
          <div>
            <label className="block text-sm font-bold tracking-wide text-slate-300 mb-3 uppercase">TV Brand *</label>
            <select required name="tvBrand" value={formData.tvBrand} onChange={handleChange} className="w-full bg-midnight-950 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all appearance-none cursor-pointer">
              <option value="">Select Brand...</option>
              <option value="Samsung">Samsung</option>
              <option value="LG">LG</option>
              <option value="Sony">Sony</option>
              <option value="Mi/Redmi">Mi/Redmi</option>
              <option value="OnePlus">OnePlus</option>
              <option value="TCL">TCL</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold tracking-wide text-slate-300 mb-3 uppercase">Address / Locality *</label>
            <input required name="address" value={formData.address} onChange={handleChange} type="text" className="w-full bg-midnight-950 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder-slate-600" placeholder="Your City/Area" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold tracking-wide text-slate-300 mb-3 uppercase">Describe the Problem *</label>
          <textarea required name="issueDescription" value={formData.issueDescription} onChange={handleChange} rows={4} className="w-full bg-midnight-950 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder-slate-600 resize-none" placeholder="E.g., TV has sound but no picture..."></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-gold-gradient text-midnight-950 font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed glow-gold hover:-translate-y-1 uppercase tracking-wider text-lg"
        >
          {isSubmitting ? "Sending..." : "Submit Booking Request"}
          {!isSubmitting && <Send size={22} />}
        </button>
        <p className="text-center text-sm text-slate-500 mt-6 font-medium">We respect your privacy. No spam.</p>
      </form>
    </>
  );
}
