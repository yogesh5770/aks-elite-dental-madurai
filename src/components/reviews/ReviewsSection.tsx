import React, { useState } from 'react';
import { Star, CheckCircle2, ExternalLink, Quote, Sparkles } from 'lucide-react';
import { CLINIC_DATA } from '../../data/clinicData';

export const ReviewsSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const filteredReviews = selectedTag === 'all'
    ? CLINIC_DATA.reviews
    : CLINIC_DATA.reviews.filter(r => r.tag.toLowerCase().includes(selectedTag.toLowerCase()));

  return (
    <section id="reviews" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-emerald-950/10 text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-sans font-semibold mb-3.5 border border-amber-300 shadow-2xs">
              <Star className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
              <span>100% GENUINE GOOGLE PATIENT REVIEWS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-emerald-950 tracking-tight leading-tight">
              PATIENT EXPERIENCES & STORIES
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-2.5 font-sans max-w-2xl leading-relaxed">
              Read real Google reviews from patients treated by Dr. Khalidh Khan at AKS Elite Dental Clinic in K.Pudur, Madurai.
            </p>
          </div>

          {/* 4.9 ★ Rating Card */}
          <div className="p-5 rounded-2xl bg-emerald-950 text-white shadow-xl flex items-center gap-4 shrink-0 border border-emerald-800">
            <div className="text-center">
              <div className="text-3xl font-black font-display text-amber-300">
                4.9
              </div>
              <div className="flex items-center gap-0.5 text-amber-400 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <div className="border-l border-emerald-800 pl-4 space-y-0.5">
              <span className="text-xs font-bold text-white block">
                105+ Reviews
              </span>
              <span className="text-[11px] text-emerald-300 font-sans block">
                Google Business Profile
              </span>
            </div>
          </div>
        </div>

        {/* 4 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-7 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-emerald-950/10 hover:border-emerald-500 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-950 text-amber-300 font-bold flex items-center justify-center font-display text-sm">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <span className="text-sm font-bold text-emerald-950 font-display block">
                        {rev.author}
                      </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <div className="flex text-amber-400">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </div>
                        <span className="text-[10px] text-slate-500 font-sans">
                          {rev.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-950 text-[10px] font-bold">
                    {rev.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-emerald-800 font-sans">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Verified Google Review
                </span>
                <span className="text-slate-400 font-normal">K.Pudur, Madurai</span>
              </div>
            </div>
          ))}
        </div>

        {/* View on Google Button */}
        <div className="mt-12 text-center">
          <a
            href={CLINIC_DATA.contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-sans font-semibold text-xs transition-colors cursor-pointer border border-slate-200"
          >
            <span>View All 105+ Reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-emerald-700" />
          </a>
        </div>

      </div>
    </section>
  );
};
