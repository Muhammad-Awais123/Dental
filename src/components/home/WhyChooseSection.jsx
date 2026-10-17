import React from 'react';
import { Check, Star, Users, UserCheck, Award } from 'lucide-react';
import { clinicConfig } from '../../data/clinicConfig';

export default function WhyChooseSection({
  title = "Why Choose Fakiha Dental",
  subtitle = "Trusted by families, backed by technology",
  doctorImage = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
}) {
  const features = [
    {
      title: "Patient-first approach",
      description: "With tailored treatments",
    },
    {
      title: "Certified professionals",
      description: "and specialists",
    },
    {
      title: "Comfortable, modern",
      description: "facilities",
    },
    {
      title: "Transparent pricing and",
      description: "flexible plans",
    },
  ];

  const stats = [
    {
      value: "4.9/5",
      label: "Average Rating",
      icon: Star,
    },
    {
      value: "6",
      label: "In-House Specialists",
      icon: UserCheck,
    },
    {
      value: "10K+",
      label: "Happy Patients",
      icon: Users,
    },
    {
      value: "20+",
      label: "Years of Experience",
      icon: Award,
    },
  ];

  return (
    <section id="why-choose-dentrist" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24">
      {/* Header */}
      <div className="mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-secondary mt-2">
          {subtitle}
        </p>
      </div>

      {/* Main 3-Column Grid matching Figma template */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Left Column: 4 Feature Points */}
        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-7">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start space-x-3.5">
              <div className="w-8 h-8 rounded-lg bg-primary-light border border-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                <Check className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-charcoal leading-snug">
                  {feature.title}
                </h4>
                <p className="text-xs text-secondary mt-0.5 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Column: Doctor Portrait in Rounded Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm lg:max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-md border border-borderSoft bg-white group">
            <img
              src={doctorImage}
              alt="Medical Team Specialist"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Soft Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right Column: Key Stats List */}
        <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8 lg:pl-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
