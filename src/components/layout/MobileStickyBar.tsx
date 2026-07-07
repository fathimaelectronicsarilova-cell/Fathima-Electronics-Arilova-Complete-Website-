import { Phone, MessageCircle, Calendar } from "lucide-react";
import { CONTACT_NUMBER, WHATSAPP_NUMBER } from "@/lib/constants";
import Link from "next/link";

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 w-full z-50 bg-navy-950/90 backdrop-blur-xl border-t border-white/10 p-3 pb-safe">
      <div className="grid grid-cols-3 gap-3">
        <a 
          href={`tel:+91${CONTACT_NUMBER}`} 
          className="flex flex-col items-center justify-center py-2.5 bg-white/5 rounded-xl text-white hover:bg-white/10 transition-colors"
        >
          <Phone size={22} className="mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Call</span>
        </a>
        
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I%20need%20TV%20repair`} 
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl hover:bg-emerald-500/20 transition-colors"
        >
          <MessageCircle size={22} className="mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-widest">WhatsApp</span>
        </a>

        <Link 
          href="/contact" 
          className="flex flex-col items-center justify-center py-2.5 bg-gold-gradient rounded-xl text-navy-950 font-bold transition-all glow-gold"
        >
          <Calendar size={22} className="mb-1" />
          <span className="text-[10px] uppercase tracking-widest">Book</span>
        </Link>
      </div>
    </div>
  );
}
