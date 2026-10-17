import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clinicConfig } from '../../data/clinicConfig';
import { Phone, Clock, X } from 'lucide-react';
import Button from '../common/Button';
import WhatsAppButton from '../common/WhatsAppButton';
import DentalLogo from '../common/DentalLogo';

export default function MobileMenu({ isOpen, onClose, navItems = [], onNavClick }) {
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleItemClick = (e, hash, to) => {
    onClose();
    if (onNavClick) {
      onNavClick(e, hash);
    }
  };

  return (
    <div className="fixed inset-0 z-50 xl:hidden flex flex-col bg-white">
      {/* Top Header inside Mobile Menu */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-borderSoft">
        <Link to="/" onClick={onClose}>
          <DentalLogo variant="dark" size="sm" />
        </Link>
        <button
          onClick={onClose}
          type="button"
          aria-label="Close mobile navigation menu"
          className="p-2 rounded-lg text-charcoal hover:bg-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            onClick={(e) => handleItemClick(e, item.hash, item.to)}
            className="block px-4 py-3 rounded-lg text-base font-medium text-charcoal hover:bg-soft hover:text-primary transition-colors"
          >
            {item.name}
          </Link>
        ))}

        {/* Action CTAs */}
        <div className="pt-6 mt-4 border-t border-borderSoft space-y-3">
          <Button
            to="/#appointments"
            onClick={(e) => handleItemClick(e, 'appointments', '/#appointments')}
            variant="charcoal"
            className="w-full justify-center py-3"
          >
            Book Appointment
          </Button>

          <WhatsAppButton
            variant="primary"
            className="w-full justify-center py-3"
          />
        </div>

        {/* Quick Contact & Info */}
        <div className="pt-6 space-y-3 text-xs text-secondary">
          <div className="flex items-center space-x-2.5">
            <Phone className="w-4 h-4 text-primary flex-shrink-0" />
            <a href={`tel:${clinicConfig.contact.phoneRaw}`} className="hover:text-charcoal transition-colors">
              {clinicConfig.contact.phone}
            </a>
          </div>
          <div className="flex items-center space-x-2.5">
            <Clock className="w-4 h-4 text-primary flex-shrink-0" />
            <span>Mon – Thu: 10:00 AM – 08:00 PM</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
