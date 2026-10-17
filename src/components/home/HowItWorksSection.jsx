import React, { useState } from 'react';
import { ArrowRight, Calendar, UserCheck, Stethoscope, Sparkles, Smile } from 'lucide-react';

export default function HowItWorksSection({
  title = "How It Works",
  subtitle = "Simple steps to a healthier, brighter smile",
  image = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
}) {
  const [activeStep, setActiveStep] = useState(2); // Step 2 "Meet Your Dentist" active by default like in Figma

  const steps = [
    {
      number: "01",
      title: "Book a Visit",
      desc: "Schedule online via WhatsApp or call our front desk for a prompt time slot.",
      icon: Calendar,
    },
    {
      number: "02",
      title: "Meet Your Dentist",
      desc: "Consult with our expert team in a relaxed, reassuring setting.",
      icon: UserCheck,
    },
    {
      number: "03",
      title: "Get Diagnosed",
      desc: "High-definition digital radiography and comprehensive dental evaluation.",
      icon: Stethoscope,
    },
    {
      number: "04",
      title: "Receive Treatment",
      desc: "Gentle, conservative care utilizing modern pain-free anesthesia protocols.",
      icon: Sparkles,
    },
    {
      number: "05",
      title: "Follow-Up & Smile",
      desc: "Preventive maintenance guidance and continued smile support.",
      icon: Smile,
    },
  ];

  return (
    <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24">
      {/* Header */}
      <div className="mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-secondary mt-2">
          {subtitle}
        </p>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Numbered Stepper List */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-5">
          {steps.map((step, idx) => {
            const stepNum = idx + 1;
            const isActive = activeStep === stepNum;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(stepNum)}
                className={`cursor-pointer transition-all duration-300 rounded-2xl p-3 sm:p-4 border ${
                  isActive
                    ? 'bg-soft border-primary/30 shadow-xs'
                    : 'bg-transparent border-transparent hover:bg-soft/60'
                }`}
              >
                <div className="flex items-start space-x-4">
                  {/* Step Number */}
                  <span
                    className={`text-sm sm:text-base font-semibold transition-colors mt-0.5 ${
                      isActive ? 'text-primary font-bold' : 'text-secondary/70'
                    }`}
                  >
                    {step.number}
                  </span>

                  {/* Step Title & Details */}
                  <div className="flex-1">
                    <h3
                      className={`text-base sm:text-lg transition-colors ${
                        isActive
                          ? 'font-bold text-charcoal'
                          : 'font-medium text-secondary hover:text-charcoal'
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Active Step Description */}
                    {isActive && (
                      <p className="text-xs sm:text-sm text-secondary mt-1 leading-relaxed animate-fadeIn">
                        {step.desc}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Treatment & Diagnosis Image Card */}
        <div className="lg:col-span-7">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-borderSoft bg-white group">
            <img
              src={image}
              alt="Dentist reviewing digital dental x-ray with precision tools"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Subtle Gradient & Badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
                  Diagnostic Precision
                </span>
                <span className="text-sm font-semibold text-charcoal">
                  Digital Radiography & Real-Time Assessment
                </span>
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-primary-light text-primary rounded-full">
                Step 0{activeStep} Active
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
