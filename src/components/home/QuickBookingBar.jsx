import React, { useState } from 'react';
import { User, Phone, Calendar, Clock, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react';
import { clinicConfig } from '../../data/clinicConfig';

/**
 * Floating Quick Appointment Bar
 * Directly underneath the hero banner, matching Image 1
 */
export default function QuickBookingBar({ className = "" }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please enter your full name');
      return;
    }
    if (!formData.phone.trim()) {
      setError('Please provide your phone / WhatsApp number');
      return;
    }

    const message = [
      "Hello Fakiha Dental & Healthcare,",
      "",
      "I would like to book a quick consultation:",
      `• Patient Name: ${formData.name}`,
      `• Phone/WhatsApp: ${formData.phone}`,
      formData.date ? `• Preferred Date: ${formData.date}` : null,
      formData.time ? `• Preferred Time: ${formData.time}` : null,
      "",
      "Please let me know if this slot is available. Thank you!",
    ].filter(Boolean).join('\n');

    const url = clinicConfig.getWhatsAppUrl(message);
    setSuccess(true);
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 300);
  };

  return (
    <div
      className={`w-full max-w-6xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-borderSoft/80 p-4 sm:p-6 lg:p-7 relative z-20 transition-all ${className}`}
    >
      {error && (
        <div className="mb-4 text-xs font-semibold text-rose-600 bg-rose-50 px-4 py-2.5 rounded-xl border border-rose-200 flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="mb-4 text-xs font-semibold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200 flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>Opening your appointment details directly on WhatsApp...</span>
        </div>
      )}

      <form onSubmit={handleQuickSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 items-end">
        {/* Field 1: Name */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-charcoal">
            Name
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-secondary/60 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-borderSoft bg-soft/50 text-xs sm:text-sm text-charcoal placeholder:text-secondary/50 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
        </div>

        {/* Field 2: Phone Number */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-charcoal">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-secondary/60 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-borderSoft bg-soft/50 text-xs sm:text-sm text-charcoal placeholder:text-secondary/50 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
        </div>

        {/* Field 3: Preferred Date */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-charcoal">
            Preferred Date
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-secondary/60 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-borderSoft bg-soft/50 text-xs sm:text-sm text-charcoal placeholder:text-secondary/50 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
        </div>

        {/* Field 4: Preferred Time */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-charcoal">
            Preferred Time
          </label>
          <div className="relative">
            <Clock className="w-4 h-4 text-secondary/60 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-borderSoft bg-soft/50 text-xs sm:text-sm text-charcoal placeholder:text-secondary/50 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 lg:col-span-1">
          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-xl sm:rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-1.5 group cursor-pointer"
          >
            <span>Book an Appointment</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </form>
    </div>
  );
}
