import React from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import WhatsAppButton from '../components/common/WhatsAppButton';
import AppointmentForm from '../components/forms/AppointmentForm';
import { clinicConfig } from '../data/clinicConfig';
import { CheckCircle2, Phone, Clock, MessageCircle, ShieldCheck } from 'lucide-react';

export default function Appointments() {
  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      <PageHero
        badge="Direct Scheduling"
        title="Let's Plan Your Dental Visit."
        description="Select your preferred date, time, and service. Submitting this form prepares a prefilled WhatsApp request for rapid confirmation by our clinic staff."
        breadcrumbs={[{ label: 'Appointments & Packages' }]}
      >
        <WhatsAppButton size="md" variant="primary">
          Quick Inquire on WhatsApp
        </WhatsAppButton>
      </PageHero>

      {/* Appointment Packages Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Consultation Packages"
          title="Transparent Clinical Assessments"
          description="Packages are designed to help you start your oral health journey with clarity and no unexpected fees."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Package 1 */}
          <div className="bg-white rounded-2xl border border-borderSoft p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-primary/50 transition-colors">
            <div className="space-y-4">
              <span className="text-xs font-bold text-primary bg-primary-light px-3 py-1 rounded-full uppercase">
                Care Package 1
              </span>
              <h3 className="text-xl font-bold text-charcoal">Basic Consultation & Scaling</h3>
              <p className="text-xs text-secondary italic">
                *Subject to clinical assessment and tartar severity
              </p>
              <ul className="space-y-2.5 text-sm text-secondary pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Comprehensive oral health examination</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Full-mouth ultrasonic scaling & stain polishing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Personalized hygiene & preventive guidance</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-borderSoft">
              <WhatsAppButton
                variant="primary"
                size="sm"
                className="w-full justify-center"
                customMessage="Hello Fakiha Dental, I am inquiring about Package 1 (Basic Consultation & Scaling)."
              >
                Ask About This Package
              </WhatsAppButton>
            </div>
          </div>

          {/* Package 2 */}
          <div className="bg-white rounded-2xl border border-borderSoft p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-primary/50 transition-colors">
            <div className="space-y-4">
              <span className="text-xs font-bold text-primary bg-primary-light px-3 py-1 rounded-full uppercase">
                Care Package 2
              </span>
              <h3 className="text-xl font-bold text-charcoal">Complete Smile Care Plan</h3>
              <p className="text-xs text-secondary italic">
                *Comprehensive consultation and aesthetic planning assessment
              </p>
              <ul className="space-y-2.5 text-sm text-secondary pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>In-depth restorative & aesthetic consultation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Occlusal alignment & shade evaluation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Custom roadmap for aligners, veneers or implants</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-borderSoft">
              <WhatsAppButton
                variant="primary"
                size="sm"
                className="w-full justify-center"
                customMessage="Hello Fakiha Dental, I am inquiring about Package 2 (Complete Smile Care Plan)."
              >
                Ask About This Package
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Appointment Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-soft border border-borderSoft rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
          <SectionHeading
            badge="Appointment Request"
            title="Book Your Consultation"
            description="Complete the details below to open your customized appointment request directly in WhatsApp."
            className="mb-8"
          />

          <AppointmentForm />

          {/* Quick Support strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-borderSoft text-xs text-secondary">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Direct: {clinicConfig.contact.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Mon – Thu: 10AM – 8PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Verified Clean Sterilization</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
