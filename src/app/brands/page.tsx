import Image from "next/image";
import BrandsMarquee from "@/components/home/BrandsMarquee";
import Link from "next/link";

export const metadata = {
  title: "Brands We Service | Fathima Electronics",
  description: "We repair all major TV brands including Samsung, LG, Sony, Mi, and more.",
};

const topBrands = [
  { name: "Samsung", desc: "Specialists in Samsung QLED, Crystal UHD, and The Frame series repairs. Common fixes include One Connect Box issues and backlight replacements." },
  { name: "LG", desc: "Expert LG OLED panel diagnostics, WebOS software troubleshooting, and Magic Remote pairing issues resolved." },
  { name: "Sony", desc: "Sony Bravia XR and LED repairs, including Android TV boot loop fixes and red blinking light diagnostics." },
  { name: "Mi & Redmi", desc: "Fast and affordable repairs for Mi PatchWall TVs, including motherboard replacements and sound issues." },
  { name: "OnePlus", desc: "Complete repair solutions for OnePlus U, Y, and Q series TVs including display and power board fixes." },
  { name: "TCL", desc: "TCL Roku and Android TV repairs, focusing on backlight failures and T-Con board replacements." },
];

export default function BrandsPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/tech-bg.png" 
            alt="TV Repair Circuit Board" 
            fill
            className="object-cover object-center opacity-30 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/80 to-navy-950" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Brands <span className="text-gradient-accent">We Service</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium">
            Our expert technicians are trained to repair all major TV brands with genuine OEM parts.
          </p>
        </div>
      </section>

      <BrandsMarquee />

      {/* Specific Brand Information */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topBrands.map((brand, idx) => (
              <div key={idx} className="liquid-glass-card p-6 md:p-8 group">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">{brand.name}</h3>
                <p className="text-slate-400 leading-relaxed">{brand.desc}</p>
                <Link href="/contact" className="inline-block mt-6 text-sm font-bold text-gold-500 uppercase tracking-widest hover:text-gold-400">
                  Book {brand.name} Repair &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
