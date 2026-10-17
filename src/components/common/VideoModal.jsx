import React from 'react';
import { X, Play, ShieldCheck, HeartPulse } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-borderSoft bg-soft">
          <div className="flex items-center space-x-2 text-primary font-bold text-sm">
            <Play className="w-4 h-4 fill-primary" />
            <span className="text-charcoal font-bold">Fakiha Dental & Healthcare Tour</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-secondary transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player or Interactive Preview */}
        <div className="relative aspect-video w-full bg-slate-900 flex items-center justify-center overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/g2J0e75a34Y?autoplay=1&mute=1&rel=0"
            title="Dental Clinic Tour & Experience"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Footer info */}
        <div className="p-5 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Hospital-grade sterilization & digital clinical equipment</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-primary text-white font-semibold hover:bg-primary-hover transition-colors"
          >
            Close Video
          </button>
        </div>
      </div>
    </div>
  );
}
