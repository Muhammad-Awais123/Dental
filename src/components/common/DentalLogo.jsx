import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Professional Dental Logo & Clinic Brand Identity
 * Minimalist, clinical tooth emblem with subtle healthcare smile geometry.
 * High-legibility typography for "Fakiha Dental & Healthcare".
 */
export default function DentalLogo({
  variant = 'dark', // 'dark' (on light backgrounds) or 'light' (on dark backgrounds)
  showTagline = true,
  className = '',
  size = 'md', // 'sm', 'md', 'lg', 'xl'
  alt = 'Dental Clinic Logo',
}) {
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-12 sm:h-14',
    xl: 'h-14 sm:h-16',
  };

  const isLight = variant === 'light';
  // Use cliniclogo-white.png on dark backgrounds (e.g. footer) for optimal contrast,
  // and cliniclogo-transparent.png on light backgrounds (header & mobile menu).
  const logoSrc = isLight ? '/cliniclogo-white.png' : '/cliniclogo-transparent.png';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        onError={(e) => {
          // Fallback to cliniclogo-transparent.png or dental logo transparent.jpg
          if (e.currentTarget.src.includes('cliniclogo-white.png')) {
            e.currentTarget.src = '/cliniclogo-transparent.png';
          } else if (!e.currentTarget.src.includes('dental%20logo')) {
            e.currentTarget.src = '/dental logo transparent.jpg';
          }
        }}
        alt={alt}
        className={`${heightClasses[size] || heightClasses.md} w-auto max-w-[200px] sm:max-w-[240px] transition-opacity duration-200 hover:opacity-95`}
        style={{ objectFit: 'contain' }}
        loading="eager"
      />
    </div>
  );
}
