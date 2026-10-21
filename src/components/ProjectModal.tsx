import React, { useState } from 'react';
import { Project } from '../types';
import { X, Check, Eye, Box, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenBrief: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenBrief }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'dieline' | 'shelf'>('overview');
  const [showFoldLines, setShowFoldLines] = useState(true);
  const [showBleed, setShowBleed] = useState(true);
  const [showDimensions, setShowDimensions] = useState(true);
  const [shelfState, setShelfState] = useState<'after' | 'before'>('after');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white text-[#0B0D12] rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#E2E5EC] relative my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Banner */}
        <div
          className="h-64 sm:h-80 flex flex-col justify-end p-8 sm:p-12 relative overflow-hidden text-center sm:text-left"
          style={{ backgroundColor: project.heroColor }}
        >
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-black/45 backdrop-blur-md rounded text-[11px] font-bold tracking-widest text-[#FF4D1C] uppercase mb-3">
              {project.sectorLabel} • {project.year}
            </span>
            <h2
              id="modal-project-title"
              className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-2"
              style={{ color: project.textColor }}
            >
              {project.bannerVisualText}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Interactive Tabs Header */}
        <div className="border-b border-[#E2E5EC] bg-[#F4F5F7] px-6 sm:px-8 flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-[#FF4D1C] text-[#0B0D12]'
                : 'border-transparent text-[#646B7D] hover:text-[#0B0D12]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Case Overview & Specs</span>
          </button>

          <button
            onClick={() => setActiveTab('dieline')}
            className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'dieline'
                ? 'border-[#FF4D1C] text-[#0B0D12]'
                : 'border-transparent text-[#646B7D] hover:text-[#0B0D12]'
            }`}
          >
            <Box className="w-4 h-4" />
            <span>±0.15mm Dieline CAD View</span>
          </button>

          <button
            onClick={() => setActiveTab('shelf')}
            className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'shelf'
                ? 'border-[#FF4D1C] text-[#0B0D12]'
                : 'border-transparent text-[#646B7D] hover:text-[#0B0D12]'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>Retail Shelf Impact</span>
          </button>
        </div>

        {/* Modal Content Panels */}
        <div className="p-6 sm:p-10 max-h-[60vh] overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Executive Summary */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#0B0D12] mb-2">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#4A5060]">
                  {project.description}
                </p>
              </div>

              {/* Challenge & Strategic Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F4F5F7] p-6 rounded-xl border border-[#E2E5EC]">
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#FF4D1C] uppercase mb-2">
                    The Commercial Challenge
                  </h4>
                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#4A5060]">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#FF4D1C] uppercase mb-2">
                    The Creative Architecture
                  </h4>
                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#4A5060]">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Technical Specifications Matrix */}
              <div>
                <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#0B0D12] uppercase mb-4">
                  Factory & Print Production Specifications
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-[#E2E5EC]">
                    <div className="text-[10px] text-[#646B7D] uppercase font-semibold">Mechanical Tolerance</div>
                    <div className="font-mono text-sm font-bold text-[#0B0D12] mt-1">{project.tolerance}</div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-[#E2E5EC]">
                    <div className="text-[10px] text-[#646B7D] uppercase font-semibold">Outer Dimensions</div>
                    <div className="font-mono text-xs font-bold text-[#0B0D12] mt-1">{project.dimensions}</div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-[#E2E5EC]">
                    <div className="text-[10px] text-[#646B7D] uppercase font-semibold">Substrate Caliper</div>
                    <div className="text-xs font-bold text-[#0B0D12] mt-1 truncate">{project.dielineSpecs.caliper}</div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-[#E2E5EC]">
                    <div className="text-[10px] text-[#646B7D] uppercase font-semibold">Press Run Method</div>
                    <div className="text-xs font-bold text-[#0B0D12] mt-1 truncate">{project.pressMethod}</div>
                  </div>
                </div>
              </div>

              {/* Highlights List */}
              <div className="bg-[#F4F5F7] p-6 rounded-xl border border-[#E2E5EC]">
                <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#FF4D1C] uppercase mb-3">
                  Key Commercial & Production Milestones
                </h4>
                <ul className="space-y-2.5">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#4A5060]">
                      <Check className="w-4 h-4 text-[#FF4D1C] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'dieline' && (
            <div className="space-y-6">
              {/* Controls bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 bg-[#F4F5F7] p-4 rounded-xl border border-[#E2E5EC]">
                <div className="flex items-center gap-4 text-xs">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showFoldLines}
                      onChange={(e) => setShowFoldLines(e.target.checked)}
                      className="rounded accent-[#FF4D1C]"
                    />
                    <span>Crease / Folds (Dotted)</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showBleed}
                      onChange={(e) => setShowBleed(e.target.checked)}
                      className="rounded accent-[#FF4D1C]"
                    />
                    <span>3mm Bleed Line</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showDimensions}
                      onChange={(e) => setShowDimensions(e.target.checked)}
                      className="rounded accent-[#FF4D1C]"
                    />
                    <span>Dimension Callouts</span>
                  </label>
                </div>

                <div className="text-[11px] font-mono text-[#FF4D1C] font-bold">
                  CAD ACCURACY: ±0.15mm TOLERANCE
                </div>
              </div>

              {/* Interactive SVG Dieline Schematic */}
              <div className="bg-[#090a0d] rounded-xl p-8 border border-[#222631] flex flex-col items-center justify-center relative overflow-hidden min-h-[320px]">
                {/* SVG Blueprint */}
                <svg
                  viewBox="0 0 600 300"
                  className="w-full max-w-xl h-auto drop-shadow-lg"
                  aria-label="Structural packaging dieline blueprint"
                >
                  {/* Grid background lines */}
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="600" height="300" fill="url(#grid)" />

                  {/* 3mm Bleed Box */}
                  {showBleed && (
                    <rect
                      x="40"
                      y="40"
                      width="520"
                      height="220"
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                  )}

                  {/* Outer Cut Line */}
                  <path
                    d="M 50,70 L 150,70 L 150,50 L 250,50 L 250,70 L 450,70 L 450,50 L 550,50 L 550,230 L 450,230 L 450,250 L 250,250 L 250,230 L 50,230 Z"
                    fill="rgba(255, 77, 28, 0.08)"
                    stroke="#FF4D1C"
                    strokeWidth="2"
                  />

                  {/* Crease Fold Lines */}
                  {showFoldLines && (
                    <>
                      <line x1="150" y1="70" x2="150" y2="230" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="250" y1="70" x2="250" y2="230" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="350" y1="70" x2="350" y2="230" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="450" y1="70" x2="450" y2="230" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="150" y1="120" x2="450" y2="120" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="150" y1="180" x2="450" y2="180" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
                    </>
                  )}

                  {/* Panel Typography / Labels */}
                  <text x="200" y="155" fill="#ffffff" fontSize="12" fontFamily="monospace" textAnchor="middle">
                    FRONT FACE
                  </text>
                  <text x="300" y="155" fill="#ffffff" fontSize="12" fontFamily="monospace" textAnchor="middle">
                    SPINE
                  </text>
                  <text x="400" y="155" fill="#ffffff" fontSize="12" fontFamily="monospace" textAnchor="middle">
                    REAR PANEL
                  </text>

                  {/* Dimension callouts */}
                  {showDimensions && (
                    <>
                      <line x1="50" y1="265" x2="550" y2="265" stroke="#9ca3af" strokeWidth="1" />
                      <text x="300" y="280" fill="#9ca3af" fontSize="10" fontFamily="monospace" textAnchor="middle">
                        FLAT LAYOUT WIDTH: {project.dimensions}
                      </text>
                      <line x1="20" y1="70" x2="20" y2="230" stroke="#9ca3af" strokeWidth="1" />
                      <text x="15" y="155" fill="#9ca3af" fontSize="10" fontFamily="monospace" textAnchor="middle" transform="rotate(-90 15,155)">
                        HEIGHT
                      </text>
                    </>
                  )}
                </svg>

                {/* Substrate Legend */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D1C]" />
                    <span>Cut Line</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                    <span>Crease Rule</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" />
                    <span>Bleed Boundary</span>
                  </span>
                </div>
              </div>

              {/* Substrate specs breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs bg-[#F4F5F7] p-5 rounded-xl border border-[#E2E5EC]">
                <div>
                  <span className="text-[#646B7D] font-semibold block uppercase text-[10px]">Overprint Varnish</span>
                  <span className="font-bold text-[#0B0D12] mt-0.5 block">{project.dielineSpecs.varnish}</span>
                </div>
                <div>
                  <span className="text-[#646B7D] font-semibold block uppercase text-[10px]">Emboss / Deboss</span>
                  <span className="font-bold text-[#0B0D12] mt-0.5 block">{project.dielineSpecs.embossDepth}</span>
                </div>
                <div>
                  <span className="text-[#646B7D] font-semibold block uppercase text-[10px]">Color Consistency</span>
                  <span className="font-bold text-[#0B0D12] mt-0.5 block">{project.colorSystem}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'shelf' && (
            <div className="space-y-6">
              {/* Toggle Between Before & After */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setShelfState('before')}
                  className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                    shelfState === 'before'
                      ? 'bg-[#090a0d] text-white shadow-sm'
                      : 'bg-[#ECEEF2] text-[#4A5060] hover:text-[#0B0D12]'
                  }`}
                >
                  Previous Packaging
                </button>
                <button
                  onClick={() => setShelfState('after')}
                  className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                    shelfState === 'after'
                      ? 'bg-[#FF4D1C] text-white shadow-sm'
                      : 'bg-[#ECEEF2] text-[#4A5060] hover:text-[#0B0D12]'
                  }`}
                >
                  High-Impact System (Saeed Jabbari)
                </button>
              </div>

              {/* Comparison Visual Block */}
              <div className="bg-white rounded-xl p-8 border border-[#E2E5EC] text-center">
                <div className="max-w-md mx-auto">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#FF4D1C]/10 text-[#FF4D1C] rounded text-[11px] font-bold uppercase tracking-wider mb-2">
                      {shelfState === 'before' ? 'The Bottleneck' : 'The Commercial Advantage'}
                    </span>
                    <h4 className="font-serif text-2xl font-bold text-[#0B0D12]">
                      {shelfState === 'before'
                        ? 'Fragmented Market Presence'
                        : 'Dominant Category Shelf Leadership'}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#4A5060] mb-8">
                    {shelfState === 'before'
                      ? project.shelfImpact.beforeDesc
                      : project.shelfImpact.afterDesc}
                  </p>

                  {/* Commercial Result Metric */}
                  <div className="p-6 bg-[#F4F5F7] rounded-xl border border-[#E2E5EC]">
                    <div className="font-serif text-4xl sm:text-5xl text-[#0B0D12] font-bold mb-1">
                      {project.shelfImpact.metric}
                    </div>
                    <div className="text-[11px] font-bold tracking-[0.2em] text-[#FF4D1C] uppercase">
                      {project.shelfImpact.metricLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="border-t border-[#E2E5EC] bg-[#F4F5F7] px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#4A5060] font-medium">
            <span>Need a similar brand & packaging system for your business?</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-2.5 border border-[#D4D8E2] hover:bg-[#E2E5EC] text-[#0B0D12] text-xs font-bold tracking-wider uppercase rounded-md transition-colors w-full sm:w-auto"
            >
              CLOSE
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBrief();
              }}
              className="px-6 py-2.5 bg-[#FF4D1C] hover:bg-[#FF6438] text-white text-xs font-bold tracking-wider uppercase rounded-md transition-colors w-full sm:w-auto text-center shadow-sm"
            >
              START A PROJECT →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
