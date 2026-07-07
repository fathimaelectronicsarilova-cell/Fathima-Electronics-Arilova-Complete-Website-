import Image from "next/image";
import Testimonials from "@/components/home/Testimonials";

export const metadata = {
  title: "Customer Reviews | Fathima Electronics",
  description: "Read what our customers have to say about our premium TV repair services.",
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/lifestyle-bg.png" 
            alt="Luxurious Living Room TV" 
            fill
            className="object-cover object-center opacity-40 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/80 to-navy-950" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Customer <span className="text-gradient-accent">Stories</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium">
            Don't just take our word for it. See why thousands of families trust Fathima Electronics with their premium entertainment systems.
          </p>
        </div>
      </section>

      {/* Reviews Grid (Reused from Home) */}
      <Testimonials hideTitle={true} />

      {/* Leave a Review CTA */}
      <section className="py-20 bg-navy-900 border-t border-white/5 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-white">Have we fixed your TV recently?</h2>
          <p className="text-slate-400 mb-8">We strive for 5-star service every single time. If you were happy with our technician, please leave us a review on Google!</p>
          <a href="#" className="inline-block px-10 py-4 bg-white text-navy-950 font-bold rounded-xl uppercase tracking-wide hover:-translate-y-1 transition-all">
            Write a Google Review
          </a>
        </div>
      </section>
    </main>
  );
}
