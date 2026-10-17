import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clinicConfig } from '../../data/clinicConfig';
import {
  Menu,
  Phone,
  Clock,
  MessageCircle,
  Mail,
  MapPin,
} from 'lucide-react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from '../common/SocialIcons';
import Button from '../common/Button';
import WhatsAppButton from '../common/WhatsAppButton';
import DentalLogo from '../common/DentalLogo';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", hash: "hero", to: "/" },
    { name: "Services", hash: "services", to: "/#services" },
    { name: "About", hash: "about", to: "/#about" },
    { name: "Why Us", hash: "why-us", to: "/#why-us" },
    { name: "Team", hash: "team", to: "/#team" },
    { name: "Gallery", hash: "gallery", to: "/#gallery" },
    { name: "Reviews", hash: "reviews", to: "/#reviews" },
    { name: "Contact", hash: "contact", to: "/#contact" },
  ];

  const handleNavClick = (e, hash) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', `/#${hash}`);
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white transition-shadow duration-200">
      {/* Top Clinical Contact & Info Bar — Rich Royal Blue with Vector Icons Only */}
      <div className="bg-primary text-white text-xs py-2 px-4 sm:px-6 lg:px-8 font-medium shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-xs text-white/95">
            <a
              href={`tel:${clinicConfig.contact.phoneRaw}`}
              className="flex items-center space-x-1.5 hover:text-white transition-all hover:-translate-y-0.5 group"
            >
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                <Phone className="w-3 h-3 text-white" aria-hidden="true" />
              </div>
              <span className="font-semibold">{clinicConfig.contact.phone}</span>
            </a>
            <a
              href={`mailto:${clinicConfig.contact.email}`}
              className="hidden sm:flex items-center space-x-1.5 hover:text-white transition-all hover:-translate-y-0.5 group"
            >
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                <Mail className="w-3 h-3 text-white" aria-hidden="true" />
              </div>
              <span>{clinicConfig.contact.email}</span>
            </a>
            <div className="hidden lg:flex items-center space-x-1.5 text-white/90">
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                <MapPin className="w-3 h-3 text-white" aria-hidden="true" />
              </div>
              <span className="truncate max-w-xs">{clinicConfig.contact.address}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-xs">
            <span className="hidden sm:inline text-white/80 font-normal">Follow Us:</span>
            <div className="flex items-center space-x-1.5 text-white">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-white hover:text-primary flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-white hover:text-primary flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-white hover:text-primary flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-white hover:text-primary flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`border-b transition-colors duration-200 ${
          isScrolled
            ? 'border-borderSoft shadow-sm bg-white/95 backdrop-blur-sm'
            : 'border-borderSoft bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Professional Brand Logo */}
          <Link
            to="/"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
          >
            <DentalLogo variant="dark" size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={(e) => handleNavClick(e, item.hash)}
                className="px-3 py-2 rounded-md text-sm font-medium text-charcoal hover:text-primary hover:bg-soft transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="#appointments"
              onClick={(e) => handleNavClick(e, 'appointments')}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow transition-all"
            >
              Book Now
            </a>
            <WhatsAppButton variant="outline" size="sm" className="rounded-full">
              WhatsApp
            </WhatsAppButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 xl:hidden">
            <a
              href="#appointments"
              onClick={(e) => handleNavClick(e, 'appointments')}
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold bg-primary text-white hover:bg-primary-hover"
            >
              Book Now
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              aria-label="Open mobile navigation menu"
              className="p-2.5 rounded-lg text-charcoal hover:bg-soft border border-borderSoft focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
        onNavClick={handleNavClick}
      />
    </header>
  );
}
