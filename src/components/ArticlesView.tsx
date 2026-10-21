import React, { useState } from 'react';
import { ARTICLES } from '../data/content';
import { Article } from '../types';
import { BookOpen, Clock, ArrowRight, X, Bookmark } from 'lucide-react';

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
    <div className="bg-[#f7f5f0] min-h-screen py-16 sm:py-24 text-[#141518]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="block text-[11px] font-bold tracking-[0.24em] text-[#a07d40] uppercase mb-3">
            STUDIO INTELLIGENCE & FIELD NOTES
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal leading-tight text-[#141518] mb-4">
            Field Notes on Packaging & Brand Architecture
          </h1>
          <p className="text-sm sm:text-[15px] leading-relaxed text-[#595a5f]">
            Rigorous observations from the intersection of consumer cognitive psychology, structural factory tolerances, and high-velocity retail commercial strategy.
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
                className="bg-white rounded-xl p-8 border border-[#e4ded3] shadow-[0_3px_14px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#787671] mb-3">
                    <span className="font-bold tracking-wider text-[#a07d40] uppercase">
                      {art.sector}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{art.readTime}</span>
                      </span>
                      <button
                        onClick={(e) => toggleBookmark(art.id, e)}
                        className="p-1 hover:text-[#cfad76] transition-colors"
                        aria-label="Bookmark article"
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-[#cfad76] text-[#cfad76]' : ''}`} />
                      </button>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-[#141518] mb-3 leading-snug group-hover:text-[#a07d40] transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#595a5f] mb-6">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f0ede6] flex items-center justify-between text-xs font-semibold text-[#141518] group-hover:text-[#a07d40] transition-colors">
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
              className="bg-[#fbf9f5] text-[#141518] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#e6e2d8] relative my-8"
              role="dialog"
              aria-modal="true"
            >
              <div className="p-6 sm:p-10 border-b border-[#e5e1d7] flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.24em] text-[#a07d40] uppercase block mb-2">
                    {selectedArticle.sector} • {selectedArticle.date} • {selectedArticle.readTime}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-4xl font-normal leading-tight text-[#141518]">
                    {selectedArticle.title}
                  </h2>
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-9 h-9 rounded-full bg-neutral-200 hover:bg-neutral-300 text-neutral-700 flex items-center justify-center shrink-0 transition-colors"
                  aria-label="Close Article"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-10 max-h-[65vh] overflow-y-auto space-y-5 text-sm sm:text-base leading-relaxed text-[#3b3d42]">
                {selectedArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}

                {/* Pull Quote / Key Takeaway */}
                <div className="my-8 p-6 bg-[#f4f1ea] rounded-xl border-l-2 border-[#cfad76]">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#a07d40] uppercase block mb-1">
                    EXECUTIVE TAKEAWAY
                  </span>
                  <p className="font-serif text-lg sm:text-xl text-[#141518] italic font-normal">
                    "{selectedArticle.keyTakeaway}"
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-[#f4f1ea] border-t border-[#e5e1d7] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#595a5f]">
                  Written by Saeed Jabbari • Istanbul Studio
                </span>
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onOpenBrief();
                  }}
                  className="px-6 py-2.5 bg-[#cfad76] hover:bg-[#dfbd86] text-[#0d0f12] text-xs font-bold tracking-wider uppercase rounded-md transition-colors"
                >
                  DISCUSS PACKAGING STRATEGY →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
