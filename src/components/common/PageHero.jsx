import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable PageHero component for inner pages.
 * Clean solid background (#F4FAFB), crisp border, accessible hierarchy, no gradients.
 */
export default function PageHero({
  badge,
  title,
  description,
  breadcrumbs = [],
  children,
}) {
  return (
    <section className="bg-soft border-b border-borderSoft py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Optional Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center space-x-2 text-xs text-secondary">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="text-gray-300">/</span>
                  {crumb.path ? (
                    <Link to={crumb.path} className="hover:text-primary transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-charcoal font-medium">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="max-w-3xl">
          {badge && (
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-light text-primary mb-3">
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight leading-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed">
              {description}
            </p>
          )}
          {children && <div className="mt-6 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}
