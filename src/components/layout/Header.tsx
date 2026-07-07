"use client";

import Link from "next/link";
import { CONTACT_NUMBER } from "@/lib/constants";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 liquid-glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center text-midnight-950 font-bold text-2xl glow-gold transition-all duration-300 group-hover:scale-105">
              TV
            </div>
            <span className="font-heading font-bold text-lg sm:text-2xl tracking-tight text-white group-hover:text-gold-400 transition-colors">
              Fathima Electronics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {["Services", "Brands", "Reviews", "FAQ"].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase()}`} 
                className="text-sm font-semibold tracking-wide text-slate-300 hover:text-gold-400 transition-colors uppercase"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-6">
            <a href={`tel:+91${CONTACT_NUMBER}`} className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-gold-400 transition-colors">
              <Phone size={18} />
              <span className="hidden lg:inline">+91 {CONTACT_NUMBER}</span>
            </a>
            <Link 
              href="/contact" 
              className="bg-gold-500 hover:bg-gold-400 text-midnight-950 px-6 py-3 rounded-lg text-sm font-bold transition-all glow-gold uppercase tracking-wide hover:-translate-y-0.5"
            >
              Book Repair
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gold-500 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-midnight-900 border-t border-white/5 px-4 py-8 flex flex-col gap-6 shadow-2xl absolute w-full"
          >
            {["Services", "Brands", "Reviews", "FAQ"].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase()}`} 
                className="text-lg font-semibold text-slate-300 hover:text-gold-400 uppercase tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <hr className="border-white/5 my-2" />
            <Link 
              href="/contact" 
              className="bg-gold-gradient text-midnight-950 text-center py-4 rounded-xl font-bold w-full uppercase tracking-wide glow-gold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Repair Online
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
