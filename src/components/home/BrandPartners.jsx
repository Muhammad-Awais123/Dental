import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function BrandPartners() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const partners = [
    "STRAUMANN DENTAL",
    "INVISALIGN TECH",
    "3M ORAL HEALTH",
    "PHILIPS ZOOM!",
    "KAVO KERR DENTAL",
    "DENTSPLY SIRONA",
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="border-t border-borderSoft/80 bg-white">
      {/* Brand Logos / Partner Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center text-xs font-semibold uppercase tracking-wider text-secondary/70 mb-6">
          Global Clinical Technology & Dental Implant Partners
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-500 hover:text-primary hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Bar from Sample 2 */}
      <div className="bg-primary py-8 sm:py-10 text-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Subscribe to Dental Health Tips & Offers
            </h3>
            <p className="text-xs sm:text-sm text-white/85 mt-1">
              Receive seasonal oral hygiene guidance and preventive care updates.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
            {subscribed ? (
              <div className="flex items-center space-x-2 text-white bg-white/20 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full sm:w-80 px-5 py-3.5 rounded-full text-charcoal bg-white text-xs sm:text-sm focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-charcoal hover:bg-charcoal-light text-white font-semibold text-xs sm:text-sm hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
