import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { clinicConfig } from '../data/clinicConfig';
import { teamData } from '../data/teamData';
import { imageAssets } from '../data/imageAssets';
import WhatsAppButton from '../components/common/WhatsAppButton';
import SectionHeading from '../components/common/SectionHeading';
import BeforeAfterSlider from '../components/gallery/BeforeAfterSlider';
import TestimonialCarousel from '../components/common/TestimonialCarousel';
import AppointmentForm from '../components/forms/AppointmentForm';
import DentalTicker from '../components/common/DentalTicker';
import QuickBookingBar from '../components/home/QuickBookingBar';
import AboutSection from '../components/home/AboutSection';
import ServicesShowcase from '../components/home/ServicesShowcase';
import MetricsBanner from '../components/home/MetricsBanner';
import DentalPackagesSection from '../components/home/DentalPackagesSection';
import FaqSection from '../components/home/FaqSection';
import BrandPartners from '../components/home/BrandPartners';
import VideoModal from '../components/common/VideoModal';

import {
  Sparkles,
  Play,
  ShieldCheck,
  Calendar,
  Award,
  Star,
  ArrowRight,
  Phone,
  Clock,
  MapPin,
  ExternalLink,
  HeartHandshake,
  CheckCircle2,
  Stethoscope,
  Smile,
  Check,
} from 'lucide-react';

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="space-y-0 selection:bg-primary selection:text-white">
      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      {/* =========================================================================
          1. HERO SECTION (MATCHING DESIGN SAMPLE 1)
          ========================================================================= */}
      <section
        id="hero"
        className="relative pt-12 pb-16 sm:pb-24 lg:pt-20 lg:pb-32 bg-slate-950 overflow-hidden"
      >
        {/* Full-Width Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/about-exam.jpg"
            className="w-full h-full object-cover object-center motion-reduce:hidden"
            style={{ objectFit: 'cover' }}
            aria-hidden="true"
          >
            <source src="/DentalHero.mp4" type="video/mp4" />
            <source src="/Dental Hero.mp4" type="video/mp4" />
          </video>

          {/* Subtle dark gradient overlay from left to right for pristine typography contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 sm:via-slate-900/65 to-slate-950/25 pointer-events-none" />
          {/* Subtle bottom gradient blending into the booking bar and following section */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/70 to-transparent pointer-events-none" />
        </div>

        {/* Subtle decorative glow accents */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none z-[1]" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none z-[1]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Left-Aligned Content */}
          <div className="max-w-xl md:max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-6 text-left py-2 sm:py-6 lg:py-8">
            {/* Badge: Top-Notch Dental Care */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs md:text-sm font-semibold text-blue-200 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 animate-pulse flex-shrink-0" aria-hidden="true" />
              <span>Top-Notch Dental Care, Just for You</span>
            </div>

            {/* Main Headline with Balanced Line Breaks & Responsive Font Sizes */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.18] sm:leading-[1.14] max-w-2xl">
              Your <span className="text-blue-400 underline decoration-blue-400/40 decoration-wavy decoration-2">Best Dental</span> <br className="hidden sm:inline" />Experience Awaits
            </h1>

            {/* Subtitle with Refined Font Size & Line Height */}
            <p className="text-xs sm:text-base md:text-lg text-slate-200/95 max-w-xl leading-relaxed sm:leading-normal">
              Experience gentle, pain-free dentistry backed by cutting-edge digital diagnostics, hospital sterilization, and dedicated oral healthcare specialists.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 rounded-full text-xs sm:text-sm md:text-base font-bold bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-primary/30 hover:scale-102 transition-all"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2" />
              </a>

              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center justify-center px-5 py-3 sm:px-7 sm:py-3.5 rounded-full text-xs sm:text-sm md:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md shadow-sm hover:scale-102 transition-all group"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-500/20 group-hover:bg-primary text-blue-300 group-hover:text-white flex items-center justify-center mr-2 sm:mr-2.5 transition-colors">
                  <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Video</span>
              </button>
            </div>

            {/* Trust Features Strip with Responsive Text and Icon Sizing */}
            <div className="pt-4 sm:pt-6 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 border-t border-white/15 max-w-lg">
              <div className="flex items-center space-x-1.5 sm:space-x-2 text-[11px] sm:text-xs md:text-sm font-medium sm:font-semibold text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                <span>Strict Sterilization</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 text-[11px] sm:text-xs md:text-sm font-medium sm:font-semibold text-slate-200">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                <span>Prompt Booking</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 text-[11px] sm:text-xs md:text-sm font-medium sm:font-semibold text-slate-200">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                <span>Certified Doctors</span>
              </div>
            </div>
          </div>

          {/* Floating Quick Appointment Bar */}
          <div className="mt-8 sm:mt-12 lg:mt-14">
            <QuickBookingBar />
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. RUNNING TICKER RIBBON (MATCHING SAMPLE 1)
          ========================================================================= */}
      <DentalTicker />

      {/* =========================================================================
          3. ABOUT US SECTION (MATCHING SAMPLE 1 TOOTH FRAME & CHECKLIST)
          ========================================================================= */}
      <AboutSection />

      {/* =========================================================================
          4. ACHIEVEMENT METRICS COUNTER (MATCHING SAMPLE 2)
          ========================================================================= */}
      <MetricsBanner />

      {/* =========================================================================
          5. SECOND TICKER RIBBON SEPARATOR
          ========================================================================= */}
      <div className="py-2">
        <DentalTicker />
      </div>

      {/* =========================================================================
          6. OUR SERVICES SECTION (MATCHING SAMPLE 1 WITH PHOTOS & FLOATING BADGES)
          ========================================================================= */}
      <ServicesShowcase />

      {/* =========================================================================
          7. SMILE TRANSFORMATION GALLERY (BEFORE & AFTER SLIDER)
          ========================================================================= */}
      <section id="gallery" className="py-16 sm:py-24 bg-soft border-y border-borderSoft scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Smile Transformations"
            title="Real Results, Confident Smiles"
            description="Drag the slider interactively to compare clinical pre-treatment conditions with restorative brightness."
            className="mb-12"
          />

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider />

            <div className="mt-8 text-center">
              <Link
                to="/gallery"
                className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-hover px-6 py-3 rounded-full border border-primary/30 hover:bg-primary-light transition-colors"
              >
                <span>View Full Clinical Smile Gallery & Case Studies</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. HEALTHCARE PACKAGES (FROM SAMPLE 2)
          ========================================================================= */}
      <DentalPackagesSection />

      {/* =========================================================================
          9. CLINICAL TEAM SPOTLIGHT
          ========================================================================= */}
      <section id="team" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <SectionHeading
          badge="Expert Practitioners"
          title="Meet Our Dental Specialists"
          description="Experienced dental practitioners dedicated to continuing clinical excellence and gentle, patient-focused care."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl border border-borderSoft overflow-hidden shadow-sm hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="relative aspect-[3/3.5] w-full overflow-hidden bg-slate-100">
                  <img
                    src={member.image || imageAssets.hero.dentist}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none group-hover:opacity-80 transition-opacity" />
                  <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-charcoal text-[11px] font-bold px-3 py-1 rounded-full shadow-xs group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                    {member.role}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-bold text-charcoal group-hover:text-primary transition-colors duration-200">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-primary">{member.credentials}</div>
                  <p className="text-xs text-secondary leading-relaxed line-clamp-2">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <WhatsAppButton
                  size="sm"
                  variant="outline"
                  className="w-full rounded-full hover:scale-102 hover:shadow-md transition-all"
                  customMessage={`Hello, I would like to book a consultation with ${member.name}.`}
                >
                  Consult Doctor
                </WhatsAppButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          10. DIRECT APPOINTMENT BOOKING & CLINIC CONTACT
          ========================================================================= */}
      <section id="appointments" className="py-16 sm:py-24 bg-soft border-t border-borderSoft scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Online Scheduling"
            title="Book Your Consultation"
            description="Complete the form below to immediately open your prefilled appointment request on WhatsApp with our desk."
            className="mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>

            <div className="lg:col-span-5 space-y-6" id="contact">
              <div className="bg-white rounded-3xl border border-borderSoft p-6 sm:p-7 shadow-sm space-y-3">
                <div className="flex items-center space-x-3 text-primary">
                  <Phone className="w-5 h-5" />
                  <span className="font-bold text-base text-charcoal">Telephone Booking</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed">
                  Prefer direct phone conversation? Contact our reception desk during clinic hours.
                </p>
                <a
                  href={`tel:${clinicConfig.contact.phoneRaw}`}
                  className="text-lg font-extrabold text-primary block pt-1 hover:underline"
                >
                  {clinicConfig.contact.phone}
                </a>
              </div>

              <div className="bg-white rounded-3xl border border-borderSoft p-6 sm:p-7 shadow-sm space-y-3">
                <div className="flex items-center space-x-3 text-primary">
                  <Clock className="w-5 h-5" />
                  <span className="font-bold text-base text-charcoal">Opening Schedule</span>
                </div>
                <div className="space-y-2 text-xs text-secondary">
                  <div className="flex justify-between py-1.5 border-b border-borderSoft/60">
                    <span className="font-semibold text-charcoal">Mon – Thu</span>
                    <span>10:00 AM – 08:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-borderSoft/60">
                    <span className="font-semibold text-charcoal">Friday</span>
                    <span>02:30 PM – 08:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-borderSoft/60">
                    <span className="font-semibold text-charcoal">Saturday</span>
                    <span>10:00 AM – 06:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5 text-primary font-bold">
                    <span>Sunday</span>
                    <span>Emergency by Appointment</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-borderSoft p-6 sm:p-7 shadow-sm space-y-3">
                <div className="flex items-center space-x-3 text-primary">
                  <MapPin className="w-5 h-5" />
                  <span className="font-bold text-base text-charcoal">Clinic Location</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed">{clinicConfig.contact.address}</p>
                <a
                  href={clinicConfig.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-primary hover:underline pt-1"
                >
                  <span>Open Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. FREQUENTLY ASKED QUESTIONS (ACCORDION FROM SAMPLE 2)
          ========================================================================= */}
      <FaqSection />

      {/* =========================================================================
          12. PATIENT TESTIMONIALS & REVIEWS
          ========================================================================= */}
      <section id="reviews" className="py-16 sm:py-24 bg-soft border-t border-borderSoft scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Patient Feedback"
            title="Hear From Our Patients"
            description="Verified reviews from patients who trusted our team with their dental care."
            className="mb-12"
          />

          <div className="max-w-4xl mx-auto space-y-8">
            <TestimonialCarousel />

            <div className="text-center">
              <Link
                to="/reviews"
                className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-hover px-6 py-2.5 rounded-full border border-primary/30 hover:bg-white transition-colors"
              >
                <span>Read All Verified Patient Reviews</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          13. BRAND PARTNERS & NEWSLETTER FOOTER BANNER (FROM SAMPLE 2)
          ========================================================================= */}
      <BrandPartners />
    </div>
  );
}
