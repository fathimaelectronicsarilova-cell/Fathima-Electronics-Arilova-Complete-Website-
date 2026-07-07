"use client";

import { useState, useEffect } from "react";
import { Star, MessageSquarePlus, X, Send, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "../motion/ScrollReveal";
import { supabase } from "@/lib/supabase";

const JUSTDIAL_URL = "https://www.justdial.com/Visakhapatnam/Fathima-Electronics-Near-Shivalayam-Vedhi-Arilova/0891PX891-X891-190306115521-M9C5_BZDET";

const justdialReviews = [
  {
    id: "jd1",
    name: "Murali Mohan",
    rating: 5,
    comment: "My experience at Fathima Electronics was outstanding! The sanitised equipment and well-maintained appliances showcased their commitment to quality. The staff provided excellent service.",
    created_at: "4th April, 2026"
  },
  {
    id: "jd2",
    name: "gopalarao",
    rating: 5,
    comment: "Fathima Electronics is an outstanding choice for all your electronic needs! Their excellent service and satisfactory work truly set them apart. With reasonably priced appliances in great condition, you get exceptional value.",
    created_at: "26th February, 2026"
  },
  {
    id: "jd3",
    name: "Satish",
    rating: 5,
    comment: "Mr Md Gouse Mohiddin is a very good and geniune person who does TV Repairing with Excellent skill and Dedication. He Clearly Explians the Problem and provides valuable information before starting the work.",
    created_at: "4th January, 2026"
  },
  {
    id: "jd4",
    name: "Md Shakir",
    rating: 5,
    comment: "I had a great experience with Fathima Electronics! They fixed my home appliances quickly and did a wonderful job. The service was excellent, and the staff was very friendly.",
    created_at: "29th December, 2025"
  }
];

type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  created_at: string;
};

type TestimonialsProps = {
  hideTitle?: boolean;
};

export default function Testimonials({ hideTitle = false }: TestimonialsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"website" | "justdial">("website");

  // Form State
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setReviews(data);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, rating, comment })
      });

      if (!res.ok) throw new Error("Failed to submit");

      setSubmitStatus("success");
      setName("");
      setRating(5);
      setComment("");
      
      // Refresh the reviews list
      fetchReviews();

      // Close modal after short delay
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitStatus("idle");
      }, 2000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Format date to "2 days ago" style or simple date string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <section className={`${hideTitle ? 'pt-12 pb-32' : 'py-32'} bg-midnight-950 relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            {!hideTitle && (
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Trusted by Thousands</h2>
            )}
            
            {/* Pill Toggle */}
            <div className="inline-flex relative p-1.5 bg-midnight-900 border border-white/10 rounded-full mb-8 shadow-xl">
              {['website', 'justdial'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as "website" | "justdial")}
                  className={`relative px-8 py-3 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full transition-colors z-10 ${
                    activeTab === tab ? 'text-midnight-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="pill-active-bg"
                      className={`absolute inset-0 rounded-full -z-10 ${tab === 'justdial' ? 'bg-[#f36d13]' : 'bg-gold-400 glow-gold'}`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {tab === 'website' ? 'Direct Reviews' : '⭐ Justdial Reviews'}
                </button>
              ))}
            </div>

            {/* Justdial Specific Header */}
            {activeTab === "justdial" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center gap-2 mb-4"
              >
                <div className="flex items-center gap-3 text-2xl font-bold">
                  <span className="text-4xl text-white">5.0</span>
                  <div className="flex">
                    {[1,2,3,4,5].map(i => <Star key={i} className="text-[#f36d13] fill-[#f36d13]" size={28} />)}
                  </div>
                </div>
                <p className="text-slate-400 font-semibold uppercase tracking-widest text-sm">Based on 50+ Verified Ratings</p>
              </motion.div>
            )}

            {/* Normal Website Header CTAs */}
            {activeTab === "website" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
              <div className="flex items-center gap-3 text-2xl font-bold">
                <span className="text-4xl text-white">4.9</span>
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} className="text-[#f36d13] fill-[#f36d13]" size={28} />)}
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/10 mx-2"></div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gold-500/10 border border-gold-500/30 text-gold-400 hover:bg-gold-500 hover:text-midnight-950 px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 uppercase tracking-wide"
              >
                <MessageSquarePlus size={20} />
                Leave a Review
              </button>
              </motion.div>
            )}
          </div>
        </ScrollReveal>

        {activeTab === "justdial" ? (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {justdialReviews.map((review, idx) => (
                <ScrollReveal key={review.id} delay={idx * 0.15}>
                  <div className="liquid-glass-card p-8 h-full flex flex-col group border-[#f36d13]/20 hover:border-[#f36d13]/50">
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`size-5 ${i < review.rating ? 'text-[#f36d13] fill-[#f36d13]' : 'text-white/10'}`} />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-8 italic leading-relaxed text-lg flex-grow">"{review.comment}"</p>
                    <div className="mt-auto border-t border-white/5 pt-6 flex justify-between items-end">
                      <p className="font-bold text-white text-lg">{review.name}</p>
                      <p className="text-xs text-[#f36d13] uppercase tracking-wider font-bold bg-[#f36d13]/10 px-3 py-1 rounded-full">{review.created_at}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            <div className="text-center pt-8">
              <a 
                href={JUSTDIAL_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#f36d13] hover:bg-[#e05e0c] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-xl shadow-[#f36d13]/20"
              >
                Read All 57 Reviews on Justdial
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        ) : loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-500"></div>
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            <p>No reviews yet. Be the first to leave one!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <ScrollReveal key={review.id} delay={(idx % 3) * 0.15}>
                <div className="liquid-glass-card p-8 h-full flex flex-col group">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`size-5 ${i < review.rating ? 'text-gold-400 fill-gold-400' : 'text-white/10'}`} />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-8 italic leading-relaxed text-lg flex-grow">"{review.comment}"</p>
                  <div className="mt-auto border-t border-white/5 pt-6 flex justify-between items-end">
                    <p className="font-bold text-white text-lg">{review.name}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{formatDate(review.created_at)}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>

      {/* Write Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-midnight-950/80 backdrop-blur-md">
          <div className="bg-midnight-900 border border-white/10 p-8 rounded-2xl w-full max-w-lg relative animate-in zoom-in-95 duration-200 shadow-2xl shadow-gold-500/10">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-6">Write a Review</h3>

            {submitStatus === "success" ? (
              <div className="py-10 text-center">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="fill-emerald-400" size={32} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                <p className="text-slate-400">Your review has been posted live.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold tracking-wide text-slate-300 mb-2 uppercase">Your Name</label>
                  <input required value={name} onChange={e => setName(e.target.value)} type="text" className="w-full bg-midnight-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" placeholder="John Doe" />
                </div>
                
                <div>
                  <label className="block text-sm font-bold tracking-wide text-slate-300 mb-2 uppercase">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={`transition-all hover:scale-110 ${star <= rating ? 'text-gold-400' : 'text-slate-600'}`}
                      >
                        <Star className={star <= rating ? "fill-gold-400" : ""} size={32} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold tracking-wide text-slate-300 mb-2 uppercase">Your Experience</label>
                  <textarea required value={comment} onChange={e => setComment(e.target.value)} rows={4} className="w-full bg-midnight-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all resize-none" placeholder="How was our service?"></textarea>
                </div>

                {submitStatus === "error" && (
                  <p className="text-red-400 text-sm">Failed to submit review. Please try again.</p>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gold-gradient text-midnight-950 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 glow-gold hover:-translate-y-1 uppercase tracking-wide"
                >
                  {isSubmitting ? "Posting..." : "Post Review"}
                  {!isSubmitting && <Send size={18} />}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
