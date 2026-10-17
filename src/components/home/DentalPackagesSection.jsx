import React, { useState } from 'react';
import { Check, Sparkles, Shield, HeartPulse, ArrowRight } from 'lucide-react';
import WhatsAppButton from '../common/WhatsAppButton';
import { clinicConfig } from '../../data/clinicConfig';

export default function DentalPackagesSection() {
  const [activeTab, setActiveTab] = useState('all');

  const packages = [
    {
      id: 'essential',
      category: 'preventive',
      name: 'Essential Smile Check & Scaling',
      badge: 'Popular Preventive Care',
      price: 'Affordable Care',
      description: 'Ideal routine maintenance to eliminate calculus, plaque, and early gum inflammation.',
      features: [
        'Full Digital HD Radiography & Checkup',
        'Ultrasonic Scaling & Plaque Removal',
        'Enamel Polish & Stain Removal',
        'Fluoride Enamel Protection Application',
        'Personalized Oral Hygiene Roadmap',
      ],
      popular: false,
    },
    {
      id: 'cosmetic',
      category: 'aesthetic',
      name: 'Bright Smile Makeover Package',
      badge: 'Most In-Demand',
      price: 'Aesthetic Special',
      description: 'Rapid, painless clinical tooth whitening to give you a radiant photo-ready smile.',
      features: [
        'Pre-Whitening Sensitivity Evaluation',
        'Complete Ultrasonic Scaling & Prep',
        'Chairside UV Laser Enamel Brightening',
        'Up to 6–8 Shades Noticeable Brightness',
        'Take-Home Enamel Desensitizing Gel',
      ],
      popular: true,
    },
    {
      id: 'restorative',
      category: 'restorative',
      name: 'Permanent Implant Restoration',
      badge: 'Comprehensive Restorative',
      price: 'Consultation Included',
      description: 'Medical titanium implant restoration replacing missing teeth with lifetime chewing comfort.',
      features: [
        '3D CBCT Digital Bone Density Scan',
        'Surgical Computer-Guided Implant Anchor',
        'High-Strength Zirconia Ceramic Crown',
        'Painless Local Anesthesia Protocol',
        'Lifetime Follow-Up Care & Guarantee',
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs sm:text-sm font-bold tracking-widest text-primary uppercase bg-primary-light px-3.5 py-1.5 rounded-full border border-primary/20">
          HEALTHCARE PACKAGES
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight leading-[1.2] mt-3">
          Our Curated Dental Care Packages
        </h2>
        <p className="text-secondary text-sm sm:text-base leading-relaxed mt-3">
          Transparent clinical packages formulated for comprehensive prevention, cosmetic radiance, and lasting dental health.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group cursor-default hover:-translate-y-2 hover:shadow-2xl ${
              pkg.popular
                ? 'bg-gradient-to-b from-primary-light via-white to-white border-2 border-primary shadow-xl scale-[1.02]'
                : 'bg-white border border-borderSoft shadow-sm hover:border-primary/50'
            }`}
          >
            {pkg.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full shadow-md uppercase tracking-wider group-hover:scale-105 transition-transform">
                {pkg.badge}
              </span>
            )}

            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {pkg.price}
                </span>
                {!pkg.popular && (
                  <span className="text-[11px] font-semibold text-secondary bg-soft px-2.5 py-1 rounded-md group-hover:bg-primary-light group-hover:text-primary transition-colors">
                    {pkg.badge}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-primary transition-colors duration-200">
                {pkg.name}
              </h3>
              <p className="text-xs sm:text-sm text-secondary mb-6 leading-relaxed">
                {pkg.description}
              </p>

              <div className="space-y-3 pt-4 border-t border-borderSoft/60 mb-8">
                {pkg.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-charcoal group/feat hover:translate-x-1 transition-transform duration-200">
                    <div className="w-5 h-5 rounded-full bg-primary-light text-primary flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/feat:bg-primary group-hover/feat:text-white transition-colors duration-200">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="group-hover/feat:text-primary transition-colors">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <WhatsAppButton
                variant={pkg.popular ? "primary" : "outline"}
                size="md"
                className="w-full rounded-full hover:scale-102 hover:shadow-lg transition-all"
                customMessage={`Hello Fakiha Dental, I am interested in booking the ${pkg.name}.`}
              >
                Book Package on WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
