import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldPlus, Stethoscope, Smile, Activity, HeartPulse } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import WhatsAppButton from '../common/WhatsAppButton';

export default function ServicesShowcase() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'General Care', label: 'General Care' },
    { id: 'Restorative', label: 'Restorative' },
    { id: 'Cosmetic Dentistry', label: 'Cosmetic & Whitening' },
    { id: 'Orthodontics', label: 'Aligners & Braces' },
  ];

  const filteredServices = activeFilter === 'all'
    ? servicesData
    : servicesData.filter((s) => s.category === activeFilter);

  return (
    <section id="services" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      {/* Top Header matching Sample 1 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-primary uppercase bg-primary-light px-3.5 py-1.5 rounded-full border border-primary/20">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight leading-[1.2]">
            A Wide Range of Services for Your Best Smile
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            From preventive checkups to complex dental restorations and cosmetic transformations, we provide compassionate, state-of-the-art care.
          </p>
        </div>

        <div>
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-sm bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-lg transition-all"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>

      {/* Filter Tabs (from Sample 2) */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-borderSoft/60">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 cursor-pointer ${
              activeFilter === cat.id
                ? 'bg-primary text-white shadow-md shadow-primary/25'
                : 'bg-soft text-secondary hover:text-charcoal hover:bg-slate-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Service Cards Grid (Responsive 2 Columns on Mobile, 2 on Tablet, 3 on Desktop) */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
        {filteredServices.map((service) => {
          const IconComponent = service.icon || Stethoscope;
          return (
            <div
              key={service.id}
              className="bg-white rounded-xl sm:rounded-3xl border border-borderSoft/90 overflow-hidden shadow-xs sm:shadow-sm hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full"
            >
              <div className="flex-1 flex flex-col">
                {/* Card Top Image Viewport */}
                <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-slate-100 flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent pointer-events-none group-hover:opacity-80 transition-opacity" />

                  {/* Category Pill Tag on Image */}
                  <span className="absolute top-2 right-2 sm:top-3.5 sm:right-3.5 bg-white/95 backdrop-blur-sm text-charcoal text-[9px] sm:text-[11px] font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-xs group-hover:bg-primary group-hover:text-white transition-colors duration-300 truncate max-w-[85%]">
                    {service.category}
                  </span>
                </div>

                {/* Overlapping Round Blue Icon Badge matching Sample 1 */}
                <div className="relative px-2.5 sm:px-6 -mt-4 sm:-mt-7 flex items-center z-10 flex-shrink-0">
                  <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-md sm:shadow-lg border-2 sm:border-4 border-white group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary-hover group-hover:shadow-primary/40 group-hover:shadow-xl transition-all duration-300">
                    <IconComponent className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.2]" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-2.5 sm:p-6 pt-1.5 sm:pt-3 space-y-1 sm:space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs sm:text-lg lg:text-xl font-bold text-charcoal group-hover:text-primary transition-colors duration-200 line-clamp-1 sm:line-clamp-2">
                      {service.title}
                    </h3>

                    <p className="text-secondary text-[10px] sm:text-sm leading-snug sm:leading-relaxed mt-0.5 sm:mt-1 line-clamp-2 sm:line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Benefits Pill list */}
                  <div className="space-y-0.5 sm:space-y-1.5 pt-1 sm:pt-2 text-[10px] sm:text-xs text-secondary/90">
                    {service.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center space-x-1 sm:space-x-2">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary flex-shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="truncate">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-2.5 sm:p-6 pt-2 sm:pt-0 mt-1 sm:mt-4 border-t border-borderSoft/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-1.5 sm:gap-2">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center sm:justify-start text-[10px] sm:text-sm font-bold text-charcoal group-hover:text-primary group/link transition-colors py-0.5 sm:pt-4"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover/link:translate-x-1.5 transition-transform duration-200" />
                </Link>

                <div className="w-full sm:w-auto sm:pt-4">
                  <WhatsAppButton
                    variant="ghost"
                    size="sm"
                    className="w-full sm:w-auto text-[10px] sm:text-xs py-1 sm:py-1.5 px-2 sm:px-3 text-center justify-center hover:scale-102 transition-transform"
                    customMessage={`Hello Fakiha Dental, I would like to inquire about ${service.title}.`}
                  >
                    Inquire
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
