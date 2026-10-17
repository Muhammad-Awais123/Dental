import React, { useState } from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import WhatsAppButton from '../components/common/WhatsAppButton';
import Button from '../components/common/Button';
import { clinicConfig } from '../data/clinicConfig';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contactInfo.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    const message = [
      "Hello Fakiha Dental & Healthcare,",
      "",
      "I have an inquiry from your website contact page:",
      `Name: ${formData.name}`,
      `Contact: ${formData.contactInfo}`,
      `Message: ${formData.message}`,
      "",
      "Thank you.",
    ].join('\n');

    const whatsappUrl = clinicConfig.getWhatsAppUrl(message);
    setSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      <PageHero
        badge="Reach Out"
        title="We're Here to Help You Smile."
        description="Whether you have questions about a treatment, want to book a routine cleaning, or need directions to our practice, our team is ready to assist you."
        breadcrumbs={[{ label: 'Contact Us & Directions' }]}
      >
        <WhatsAppButton size="md" variant="primary">
          Instant WhatsApp Chat
        </WhatsAppButton>
        <Button to="/appointments" variant="secondary" size="md">
          Request Appointment
        </Button>
      </PageHero>

      {/* 4 Contact Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone */}
          <div className="bg-white rounded-2xl border border-borderSoft p-6 space-y-3 shadow-sm hover:border-primary/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-charcoal">Call Us</h3>
            <p className="text-xs text-secondary">Direct assistance during clinic hours</p>
            <a
              href={`tel:${clinicConfig.contact.phoneRaw}`}
              className="text-sm font-semibold text-primary hover:underline block pt-1"
            >
              {clinicConfig.contact.phone}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-2xl border border-borderSoft p-6 space-y-3 shadow-sm hover:border-primary/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-charcoal">WhatsApp</h3>
            <p className="text-xs text-secondary">Rapid responses and appointment scheduling</p>
            <a
              href={clinicConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:underline block pt-1"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl border border-borderSoft p-6 space-y-3 shadow-sm hover:border-primary/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-charcoal">Email</h3>
            <p className="text-xs text-secondary">General clinic queries and feedback</p>
            <a
              href={`mailto:${clinicConfig.contact.email}`}
              className="text-sm font-semibold text-primary hover:underline block pt-1 truncate"
            >
              {clinicConfig.contact.email}
            </a>
          </div>

          {/* Address & Directions */}
          <div className="bg-white rounded-2xl border border-borderSoft p-6 space-y-3 shadow-sm hover:border-primary/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-charcoal">Clinic Location</h3>
            <p className="text-xs text-secondary">{clinicConfig.contact.address}</p>
            <a
              href={clinicConfig.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-primary hover:underline pt-1"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Opening Hours & Contact Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Opening Hours Table */}
          <div className="lg:col-span-5 bg-soft rounded-2xl border border-borderSoft p-6 sm:p-8 space-y-6">
            <div className="flex items-center space-x-3 pb-4 border-b border-borderSoft">
              <Clock className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-lg font-bold text-charcoal">Opening Schedule</h3>
                <p className="text-xs text-secondary">Routine timings and emergency triage</p>
              </div>
            </div>

            <div className="space-y-3">
              {clinicConfig.openingHours.map((slot, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-xl border border-borderSoft text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-charcoal block">{slot.day}</span>
                    <span className="text-secondary text-xs">{slot.hours}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-primary-light text-primary font-semibold text-xs">
                    {slot.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Google Maps Embed / Container */}
            <div className="mt-6 pt-4 border-t border-borderSoft space-y-3">
              <h4 className="text-sm font-bold text-charcoal">Location on Map</h4>
              <div className="aspect-video bg-white rounded-xl border border-borderSoft flex flex-col items-center justify-center p-4 text-center">
                <MapPin className="w-8 h-8 text-primary mb-2" />
                <span className="text-xs font-semibold text-charcoal">Healthcare District, Pakistan</span>
                <span className="text-[11px] text-secondary mt-1">Convenient parking and patient access</span>
                <a
                  href={clinicConfig.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center px-3 py-1.5 rounded-lg bg-soft hover:bg-borderSoft text-primary text-xs font-semibold transition-colors"
                >
                  <span>Open Interactive Map</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Direct Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-borderSoft p-6 sm:p-10 shadow-sm space-y-6">
            <SectionHeading
              align="left"
              badge="Send a Message"
              title="Have a Question?"
              description="Leave your message and we will prepare a quick response for you on WhatsApp."
              className="mb-6"
            />

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold">Message Prepared!</strong>
                  <span>Your message has been opened in WhatsApp. Tap send to connect with our staff.</span>
                </div>
              </div>
            )}

            {error && (
              <p className="text-xs text-red-500 font-medium">{error}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-charcoal mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Tariq Ahmed"
                  className="w-full px-4 py-2.5 rounded-lg border border-borderSoft text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="contact-info" className="block text-xs font-semibold text-charcoal mb-2">
                  Phone or Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-info"
                  type="text"
                  name="contactInfo"
                  required
                  value={formData.contactInfo}
                  onChange={handleChange}
                  placeholder="e.g. 0300 0000000 or email@domain.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-borderSoft text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="contact-msg" className="block text-xs font-semibold text-charcoal mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-msg"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can our clinical team help you today?"
                  className="w-full px-4 py-2.5 rounded-lg border border-borderSoft text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full justify-center"
              >
                Send via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
