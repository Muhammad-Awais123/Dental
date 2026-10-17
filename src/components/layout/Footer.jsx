import React from 'react';
import { Link } from 'react-router-dom';
import { clinicConfig } from '../../data/clinicConfig';
import { Phone, MapPin, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import WhatsAppButton from '../common/WhatsAppButton';
import DentalLogo from '../common/DentalLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { name: "Cosmetic Dentistry & Whitening", to: "/services" },
    { name: "Root Canal Treatment", to: "/services" },
    { name: "Dental Implants & Restorations", to: "/services" },
    { name: "Braces & Invisible Aligners", to: "/services" },
    { name: "Scaling, Polishing & Gum Care", to: "/services" },
    { name: "Pediatric & Emergency Care", to: "/services" },
  ];

  const quickNav = [
    { name: "Home", to: "/#hero" },
    { name: "Services", to: "/#services" },
    { name: "About Clinic", to: "/#about" },
    { name: "Why Choose Us", to: "/#why-us" },
    { name: "Clinical Team", to: "/#team" },
    { name: "Smile Gallery", to: "/#gallery" },
    { name: "Patient Reviews", to: "/#reviews" },
    { name: "Book Appointment", to: "/#appointments" },
    { name: "Contact & Directions", to: "/#contact" },
  ];

  return (
    <footer className="bg-charcoal text-white border-t border-borderSoft/20">
      {/* Pre-Footer Action Banner */}
      <div className="border-b border-white/10 bg-charcoal-light/40 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ready to schedule your dental consultation?
            </h2>
            <p className="text-sm text-gray-300 mt-1 max-w-xl">
              Connect directly with our clinic helpdesk on WhatsApp for rapid scheduling and general inquiries.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <WhatsAppButton
              size="md"
              variant="primary"
              className="text-white shadow-none"
            >
              Message Us on WhatsApp
            </WhatsAppButton>
            <Link
              to="/#appointments"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold border border-white/20 hover:bg-white/10 text-white transition-colors"
            >
              Book Online
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Clinical Overview */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <DentalLogo variant="light" size="md" />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed pt-2">
              Providing personalized dental treatments, hygienic clinical care, and patient-first consultations. Serving smiles with integrity across Pakistan.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-primary" aria-hidden="true" />
              <span>Strict Infection Control & Sterilization</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-4 border-l-2 border-primary pl-2.5">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {quickNav.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="hover:text-primary transition-colors flex items-center"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-4 border-l-2 border-primary pl-2.5">
              Key Treatments
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {serviceLinks.map((service, idx) => (
                <li key={idx}>
                  <Link
                    to={service.to}
                    className="hover:text-primary transition-colors block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Timings */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-4 border-l-2 border-primary pl-2.5">
              Clinic Contact & Hours
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <span className="block text-xs text-gray-400 font-medium">Location</span>
                  <span>{clinicConfig.contact.address}</span>
                  <a
                    href={clinicConfig.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-primary hover:underline mt-0.5"
                  >
                    <span>Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3 ml-1" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <span className="block text-xs text-gray-400 font-medium">Telephone</span>
                  <a href={`tel:${clinicConfig.contact.phoneRaw}`} className="hover:text-primary transition-colors">
                    {clinicConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <span className="block text-xs text-gray-400 font-medium">Clinic Timings</span>
                  <span className="block text-xs text-gray-300">Mon – Thu: 10:00 AM – 08:00 PM</span>
                  <span className="block text-xs text-gray-300">Fri: 02:30 PM – 08:00 PM</span>
                  <span className="block text-xs text-gray-300">Sat: 10:00 AM – 06:00 PM</span>
                  <span className="block text-[11px] text-gray-400 italic">Sunday: Emergency by Appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal, Disclaimer and Copyright */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            &copy; {currentYear} {clinicConfig.name}. All rights reserved.
          </p>
          <p className="text-center md:text-right max-w-xl text-[11px] text-gray-400">
            Clinical Disclaimer: Medical information provided on this website is for general educational guidance only and does not substitute for an individual in-person dental diagnosis.
          </p>
        </div>
      </div>
    </footer>
  );
}
