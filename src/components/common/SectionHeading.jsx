import React from 'react';

/**
 * Reusable SectionHeading component.
 * Standardizes typography and hierarchy across sections.
 */
export default function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 sm:mb-14 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-light text-primary mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
