import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = testimonialsData[currentIndex];

  return (
    <div className="bg-white rounded-2xl border border-borderSoft p-6 sm:p-10 shadow-sm relative overflow-hidden">
      {/* Decorative clean quote badge */}
      <div className="flex items-center justify-between pb-6 border-b border-borderSoft">
        <div className="flex items-center space-x-2">
          <Quote className="w-8 h-8 text-primary/40" />
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Patient Experience Story
          </span>
        </div>
        <div className="flex items-center space-x-1 text-amber-500">
          {[...Array(current.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-500" />
          ))}
        </div>
      </div>

      {/* Main Quote Content */}
      <div className="py-8 min-h-[160px] flex flex-col justify-center space-y-4">
        <h4 className="text-lg sm:text-xl font-bold text-charcoal">
          "{current.highlight}"
        </h4>
        <p className="text-sm sm:text-base text-secondary leading-relaxed">
          {current.review}
        </p>
      </div>

      {/* Bottom Patient Info & Controls */}
      <div className="pt-6 border-t border-borderSoft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-primary-light text-primary font-bold flex items-center justify-center text-sm border border-primary/20">
            {current.name.charAt(0)}
          </div>
          <div>
            <div className="font-bold text-charcoal text-sm">{current.name}</div>
            <div className="flex items-center space-x-2 text-xs text-secondary">
              <span className="font-medium text-primary">{current.treatment}</span>
              <span>•</span>
              <span className="flex items-center text-gray-400">
                <ShieldCheck className="w-3 h-3 text-emerald-500 mr-1" />
                {current.date}
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center space-x-2 self-end sm:self-auto">
          <div className="flex space-x-1 mr-3">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === idx ? 'w-5 bg-primary' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="p-2 rounded-lg border border-borderSoft hover:bg-soft text-charcoal transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="p-2 rounded-lg border border-borderSoft hover:bg-soft text-charcoal transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
