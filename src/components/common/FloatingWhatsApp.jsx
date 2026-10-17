import React, { useState } from 'react';
import { clinicConfig } from '../../data/clinicConfig';
import { MessageCircle, X } from 'lucide-react';

/**
 * Floating WhatsApp CTA fixed at bottom-right corner.
 * Safe mobile margins, responsive styling, and accessible tooltips.
 */
export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = clinicConfig.getWhatsAppUrl(
    "Hello Fakiha Dental & Healthcare, I would like to quickly ask about your clinic timings and appointment availability."
  );

  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-5 right-5 z-40 flex items-center">
      {/* Informative Tooltip for desktop hover */}
      {showTooltip && (
        <div className="hidden sm:flex items-center mr-3 px-3 py-1.5 bg-charcoal text-white text-xs rounded-lg shadow-lg border border-borderSoft/20 animate-fade-in">
          <span>Need help? Chat on WhatsApp</span>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        aria-label="Direct WhatsApp Consultation with Fakiha Dental"
        className="group relative flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary-hover active:bg-primary-hover text-white rounded-full shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
      >
        <span className="sr-only">Contact Fakiha Dental on WhatsApp</span>
        <MessageCircle className="w-7 h-7" aria-hidden="true" />
        
        {/* Subtle status indicator dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-white rounded-full border-2 border-primary flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
        </span>
      </a>
    </aside>
  );
}
