import React, { useState } from 'react';
import { clinicConfig } from '../../data/clinicConfig';
import { Calendar, Clock, Phone, User, Stethoscope, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '../common/Button';

export default function AppointmentForm({ className = "", compact = false }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    treatment: 'General Consultation & Checkup',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const treatments = [
    'General Consultation & Checkup',
    'Scaling, Polishing & Gum Care',
    'Teeth Whitening & Cosmetic Care',
    'Root Canal Treatment',
    'Dental Implants & Restorations',
    'Braces & Invisible Aligners',
    'Pediatric Dental Care',
    'Emergency Toothache / Pain Relief',
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Patient name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone / WhatsApp number is required';
    } else if (!/^[\d\s\+\-\(\)]{8,16}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.date) newErrors.date = 'Preferred date is required';
    if (!formData.time) newErrors.time = 'Preferred time slot is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const messageLines = [
      "Hello Fakiha Dental & Healthcare,",
      "",
      "I would like to request an appointment via your website:",
      `• Patient Name: ${formData.name}`,
      `• Phone/WhatsApp: ${formData.phone}`,
      `• Preferred Date: ${formData.date}`,
      `• Preferred Time: ${formData.time}`,
      `• Treatment: ${formData.treatment}`,
      formData.message ? `• Note: ${formData.message}` : null,
      "",
      "Please let me know your available slots.",
      "Thank you.",
    ].filter(Boolean).join('\n');

    const whatsappUrl = clinicConfig.getWhatsAppUrl(messageLines);
    setSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`bg-white rounded-2xl border border-borderSoft p-6 sm:p-8 shadow-sm ${className}`}>
      {submitted && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start space-x-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold">Appointment Request Formatted!</strong>
            <span>Your request has opened directly in WhatsApp. Send the message to confirm your slot with our desk.</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Patient Name */}
          <div>
            <label htmlFor="form-name" className="block text-xs font-semibold text-charcoal mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-secondary absolute left-3 top-3" />
              <input
                id="form-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Fatima Khan"
                className={`w-full pl-9 pr-3 py-2 rounded-lg border text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.name ? 'border-red-400' : 'border-borderSoft'
                }`}
              />
            </div>
            {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Phone / WhatsApp */}
          <div>
            <label htmlFor="form-phone" className="block text-xs font-semibold text-charcoal mb-1.5">
              Phone / WhatsApp <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-secondary absolute left-3 top-3" />
              <input
                id="form-phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 0300 1234567"
                className={`w-full pl-9 pr-3 py-2 rounded-lg border text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.phone ? 'border-red-400' : 'border-borderSoft'
                }`}
              />
            </div>
            {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
          </div>

          {/* Preferred Date */}
          <div>
            <label htmlFor="form-date" className="block text-xs font-semibold text-charcoal mb-1.5">
              Preferred Date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-secondary absolute left-3 top-3" />
              <input
                id="form-date"
                name="date"
                type="date"
                min={today}
                required
                value={formData.date}
                onChange={handleChange}
                className={`w-full pl-9 pr-3 py-2 rounded-lg border text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.date ? 'border-red-400' : 'border-borderSoft'
                }`}
              />
            </div>
            {errors.date && <p className="text-[11px] text-red-500 mt-1">{errors.date}</p>}
          </div>

          {/* Preferred Time */}
          <div>
            <label htmlFor="form-time" className="block text-xs font-semibold text-charcoal mb-1.5">
              Time Slot <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Clock className="w-4 h-4 text-secondary absolute left-3 top-3" />
              <select
                id="form-time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className={`w-full pl-9 pr-3 py-2 rounded-lg border text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.time ? 'border-red-400' : 'border-borderSoft'
                }`}
              >
                <option value="">Select Time Window</option>
                <option value="Morning (10:00 AM – 01:00 PM)">Morning (10:00 AM – 01:00 PM)</option>
                <option value="Afternoon (02:30 PM – 05:00 PM)">Afternoon (02:30 PM – 05:00 PM)</option>
                <option value="Evening (05:00 PM – 08:00 PM)">Evening (05:00 PM – 08:00 PM)</option>
              </select>
            </div>
            {errors.time && <p className="text-[11px] text-red-500 mt-1">{errors.time}</p>}
          </div>
        </div>

        {/* Treatment Select */}
        <div>
          <label htmlFor="form-treatment" className="block text-xs font-semibold text-charcoal mb-1.5">
            Dental Treatment Needed
          </label>
          <div className="relative">
            <Stethoscope className="w-4 h-4 text-secondary absolute left-3 top-3" />
            <select
              id="form-treatment"
              name="treatment"
              value={formData.treatment}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-borderSoft text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {treatments.map((t, idx) => (
                <option key={idx} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="form-message" className="block text-xs font-semibold text-charcoal mb-1.5">
            Symptoms or Notes (Optional)
          </label>
          <textarea
            id="form-message"
            name="message"
            rows="2"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about tooth sensitivity, bleeding gums, or questions..."
            className="w-full px-3 py-2 rounded-lg border border-borderSoft text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        <div className="p-3 bg-soft rounded-lg border border-borderSoft text-[11px] text-secondary flex items-start space-x-2">
          <AlertCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
          <span>Opening WhatsApp transmits your appointment request safely to clinic coordinators.</span>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="md"
          className="w-full justify-center"
        >
          Book on WhatsApp
        </Button>
      </form>
    </div>
  );
}
