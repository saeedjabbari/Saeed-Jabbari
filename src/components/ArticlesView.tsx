import React, { useState } from 'react';
import { ARTICLES } from '../data/content';
import { Article } from '../types';
import { Clock, ArrowRight, X, Bookmark } from 'lucide-react';

interface ArticlesViewProps {
  onOpenBrief: () => void;
}

export const ArticlesView: React.FC<ArticlesViewProps> = ({ onOpenBrief }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-[#F4F5F7] min-h-screen py-16 sm:py-24 text-[#0B0D12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="block text-[11px] font-bold tracking-[0.24em] text-[#D4FF00] uppercase mb-3">
            COMMERCIAL INTELLIGENCE & FIELD NOTES
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight leading-tight text-[#0B0D12] mb-4">
            Field Notes on Brand Visibility & Sales Velocity
          </h1>
          <p className="text-sm sm:text-[15px] leading-relaxed text-[#4A5060]">
            Practical observations from the intersection of shopper attention psychology, packaging clarity, and high-converting commercial brand architecture.
          </p>
        </div>

        {/* 4 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {ARTICLES.map((art) => {
            const isBookmarked = bookmarkedIds.includes(art.id);
            return (
              <div
                key={art.id}
                onClick={() => setSelectedArticle(art)}
                className="bg-white rounded-xl p-8 border border-[#E2E5EC] shadow-[0_3px_14px_rgba(11,13,18,0.03)] hover:shadow-[0_10px_28px_rgba(11,13,18,0.08)] hover:border-[#D4FF00]/40 hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#646B7D] mb-3">
                    <span className="font-bold tracking-wider text-[#D4FF00] uppercase">
                      {art.sector}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{art.readTime}</span>
                      </span>
                      <button
                        onClick={(e) => toggleBookmark(art.id, e)}
                        className="p-1 hover:text-[#D4FF00] transition-colors"
                        aria-label="Bookmark article"
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-[#D4FF00] text-[#D4FF00]' : ''}`} />
                      </button>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#0B0D12] mb-3 leading-snug group-hover:text-[#D4FF00] transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#4A5060] mb-6">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E5EC] flex items-center justify-between text-xs font-bold text-[#0B0D12] group-hover:text-[#D4FF00] transition-colors">
                  <span className="tracking-wide uppercase text-[11px]">Read Complete Essay</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Read Article Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
            <div
              className="bg-white text-[#0B0D12] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#E2E5EC] relative my-8"
              role="dialog"
              aria-modal="true"
            >
              <div className="p-6 sm:p-10 border-b border-[#E2E5EC] flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.24em] text-[#D4FF00] uppercase block mb-2">
                    {selectedArticle.sector} • {selectedArticle.date} • {selectedArticle.readTime}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-4xl font-bold leading-tight text-[#0B0D12]">
                    {selectedArticle.title}
                  </h2>
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-9 h-9 rounded-full bg-[#ECEEF2] hover:bg-[#E2E5EC] text-[#0B0D12] flex items-center justify-center shrink-0 transition-colors"
                  aria-label="Close Article"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-10 max-h-[65vh] overflow-y-auto space-y-5 text-sm sm:text-base leading-relaxed text-[#323744]">
                {selectedArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}

                {/* Pull Quote / Key Takeaway */}
                <div className="my-8 p-6 bg-[#F4F5F7] rounded-xl border-l-4 border-[#D4FF00]">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4FF00] uppercase block mb-1">
                    COMMERCIAL TAKEAWAY
                  </span>
                  <p className="font-serif text-lg sm:text-xl text-[#0B0D12] font-bold">
                    "{selectedArticle.keyTakeaway}"
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-[#F4F5F7] border-t border-[#E2E5EC] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#4A5060] font-medium">
                  Written by Saeed Jabbari • Commercial Branding & Packaging Studio
                </span>
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onOpenBrief();
                  }}
                  className="px-6 py-2.5 bg-[#D4FF00] hover:bg-[#c2eb00] text-[#080C14] font-bold text-xs font-bold tracking-wider uppercase rounded-md transition-colors shadow-sm"
                >
                  DISCUSS BRANDING STRATEGY →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
