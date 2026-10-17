import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowRight, ShieldCheck, Award, Heart } from 'lucide-react';
import { clinicConfig } from '../../data/clinicConfig';
import { imageAssets } from '../../data/imageAssets';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Creative Tooth-Shaped Frame & Image Collage */}
        <div className="lg:col-span-6 relative flex justify-center">
          <div className="relative w-full max-w-md sm:max-w-lg">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            {/* Sparkle Badges Floating */}
            <div className="absolute -top-6 -left-4 z-20 text-primary animate-bounce">
              <Sparkles className="w-8 h-8 fill-primary/20 stroke-primary" />
            </div>
            <div className="absolute top-1/2 -left-8 z-20 text-primary/70">
              <Sparkles className="w-6 h-6 stroke-primary" />
            </div>

            {/* Main Visual Frame with Tooth Silhouette / Curved Border */}
            <div className="relative rounded-[40px] sm:rounded-[50px] overflow-hidden shadow-2xl border-4 border-white bg-soft aspect-[4/3.5] group">
              <img
                src={imageAssets.about.examRoom}
                alt="Dentist consulting smiling patient in dental chair"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Secondary Inset Circular Smile Image */}
              <div className="absolute bottom-4 left-4 w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-white hidden sm:block">
                <img
                  src="/images/service-whitening.jpg"
                  alt="Healthy bright smile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Circular Contact / Trusted Badge Overlay */}
            <div className="absolute -bottom-6 right-2 sm:right-6 z-20">
              <a
                href={clinicConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-charcoal text-white shadow-xl hover:scale-105 transition-transform p-1.5"
                aria-label="Direct consultation contact"
              >
                {/* Rotating Circular Text SVG */}
                <svg
                  className="w-full h-full animate-spin-slow"
                  viewBox="0 0 100 100"
                >
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[10.5px] font-bold tracking-[0.24em] uppercase fill-white">
                    <textPath href="#circlePath" startOffset="0%">
                      • CONTACT • CONTACT • DENTAL CARE
                    </textPath>
                  </text>
                </svg>

                {/* Center Icon */}
                <div className="absolute inset-0 m-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary text-white flex items-center justify-center shadow-inner group-hover:bg-primary-hover transition-colors">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: About Us Content */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-block">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-primary uppercase bg-primary-light px-3.5 py-1.5 rounded-full border border-primary/20">
              ABOUT US
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight leading-[1.2]">
            15 Years of Expertise in Dental Care
          </h2>

          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            At Fakiha Dental & Healthcare, we understand that a confident smile starts with comfortable, trustworthy care. Our experienced dental practitioners blend gentle painless techniques with state-of-the-art dental technology to preserve and elevate your oral health.
          </p>

          {/* Checklist with Solid Blue Check Circles & Hover Effects */}
          <div className="space-y-3.5 pt-2">
            <div className="flex items-center space-x-3.5 group/check hover:translate-x-1.5 transition-transform duration-200 cursor-default">
              <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover/check:scale-110 group-hover/check:bg-primary-hover group-hover/check:shadow-primary/40 transition-all">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-charcoal group-hover/check:text-primary transition-colors">
                Premium Dental Services You Can Trust
              </span>
            </div>

            <div className="flex items-center space-x-3.5 group/check hover:translate-x-1.5 transition-transform duration-200 cursor-default">
              <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover/check:scale-110 group-hover/check:bg-primary-hover group-hover/check:shadow-primary/40 transition-all">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-charcoal group-hover/check:text-primary transition-colors">
                Award-Winning Experts in Dental Care
              </span>
            </div>

            <div className="flex items-center space-x-3.5 group/check hover:translate-x-1.5 transition-transform duration-200 cursor-default">
              <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover/check:scale-110 group-hover/check:bg-primary-hover group-hover/check:shadow-primary/40 transition-all">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-charcoal group-hover/check:text-primary transition-colors">
                Dedicated Experts behind Every Smile
              </span>
            </div>
          </div>

          {/* Action CTA Button */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base bg-primary text-white hover:bg-primary-hover hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 active:translate-y-0 transition-all duration-300"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <a
              href={`tel:${clinicConfig.contact.phoneRaw}`}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base text-charcoal hover:text-primary hover:bg-primary-light hover:-translate-y-1 hover:border-primary/40 active:translate-y-0 transition-all duration-300 border border-borderSoft"
            >
              <span>{clinicConfig.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
