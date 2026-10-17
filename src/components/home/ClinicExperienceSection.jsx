import React, { useState } from 'react';
import { Play, Sparkles, ShieldCheck, Heart, Clock, ArrowRight } from 'lucide-react';
import WhatsAppButton from '../common/WhatsAppButton';

export default function ClinicExperienceSection({
  title = "Discover the Dental Experience",
  subtitle = "See how we make every visit comfortable and effective",
  bannerImage = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const perks = [
    {
      icon: Sparkles,
      title: "Stress-Free Environment",
      desc: "Designed to relieve dental anxiety with gentle, attentive care.",
    },
    {
      icon: ShieldCheck,
      title: "Sterile Operatory",
      desc: "Class-B autoclave sterilization with sterile pouches opened chairside.",
    },
    {
      icon: Heart,
      title: "Unhurried Consultations",
      desc: "Comprehensive diagnostic discussions so you remain fully informed.",
    },
    {
      icon: Clock,
      title: "Zero Waiting Times",
      desc: "Dedicated time allocations respecting your busy work schedule.",
    },
  ];

  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-secondary mt-2">
          {subtitle}
        </p>
      </div>

      {/* Media / Video Showcase Card */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden shadow-lg border border-borderSoft bg-charcoal group mb-10">
        <img
          src={bannerImage}
          alt="Dental clinic treatment room atmosphere"
          className="w-full h-full object-cover object-center opacity-90 transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Soft Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-charcoal/30 backdrop-blur-[1px] flex flex-col items-center justify-center p-6 text-center text-white">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-xl hover:scale-110 hover:bg-white transition-all cursor-pointer group/btn">
            <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-primary text-primary transition-transform group-hover/btn:scale-110" />
          </div>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary-light mt-4">
            Virtual Clinic Tour
          </p>
          <h3 className="text-lg sm:text-2xl font-bold text-white mt-1 max-w-md">
            A Welcoming, Anxiety-Free Dental Environment
          </h3>
        </div>
      </div>

      {/* 4 Feature Pillars Below */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {perks.map((perk, idx) => {
          const Icon = perk.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-borderSoft p-6 space-y-3 shadow-xs hover:border-primary/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-charcoal">{perk.title}</h4>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">{perk.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
