import React from 'react';
import ToothIcon from './ToothIcon';

/**
 * Full-width continuous dental ribbon / marquee ticker
 * Uses vector ToothIcon (no emojis) with attractive hover interaction.
 */
export default function DentalTicker({ className = "" }) {
  const items = [
    "General Dentistry",
    "Teeth Whitening",
    "Dental Implant",
    "Dental Sealant",
    "Orthodontics",
    "Oral Surgery",
    "Smile Makeover",
    "Pediatric Dentistry",
    "Cosmetic Veneers",
    "Root Canal Therapy",
  ];

  return (
    <div className={`w-full bg-primary text-white py-3.5 sm:py-4 overflow-hidden select-none shadow-md ${className}`}>
      <div className="flex animate-marquee whitespace-nowrap items-center text-xs sm:text-sm font-semibold tracking-wide uppercase">
        {/* First repetition */}
        {items.map((item, idx) => (
          <div
            key={`item-1-${idx}`}
            className="flex items-center mx-4 sm:mx-6 group/ticker cursor-pointer transition-transform duration-200 hover:scale-105"
          >
            <span className="text-white/95 group-hover/ticker:text-white group-hover/ticker:underline decoration-white/40 decoration-2 transition-colors">
              {item}
            </span>
            <span className="ml-4 sm:ml-6 inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 group-hover/ticker:bg-white/20 transition-colors">
              <ToothIcon className="w-3.5 h-3.5 text-white/90 group-hover/ticker:text-white group-hover/ticker:rotate-12 transition-transform duration-300" />
            </span>
          </div>
        ))}

        {/* Second repetition for smooth infinite loop */}
        {items.map((item, idx) => (
          <div
            key={`item-2-${idx}`}
            className="flex items-center mx-4 sm:mx-6 group/ticker cursor-pointer transition-transform duration-200 hover:scale-105"
          >
            <span className="text-white/95 group-hover/ticker:text-white group-hover/ticker:underline decoration-white/40 decoration-2 transition-colors">
              {item}
            </span>
            <span className="ml-4 sm:ml-6 inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 group-hover/ticker:bg-white/20 transition-colors">
              <ToothIcon className="w-3.5 h-3.5 text-white/90 group-hover/ticker:text-white group-hover/ticker:rotate-12 transition-transform duration-300" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
