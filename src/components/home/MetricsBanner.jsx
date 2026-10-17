import React from 'react';
import { Users, Award, ShieldCheck, Smile } from 'lucide-react';

export default function MetricsBanner() {
  const metrics = [
    {
      value: "15,000+",
      label: "Smiles Restored",
      desc: "Happy patients treated",
      icon: Smile,
    },
    {
      value: "99.4%",
      label: "Patient Satisfaction",
      desc: "Positive clinical reviews",
      icon: Users,
    },
    {
      value: "15+",
      label: "Years of Experience",
      desc: "Proven dental excellence",
      icon: Award,
    },
    {
      value: "100%",
      label: "Sterilization Standard",
      desc: "Hospital-grade safety",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="bg-gradient-to-r from-primary-light via-white to-primary-light border border-primary/20 rounded-3xl p-8 sm:p-10 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">
            CLINICAL EXCELLENCE
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-charcoal tracking-tight">
            Our Achievements Reflect Our Patient Trust
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-borderSoft text-center shadow-xs hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-default"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary-light text-primary flex items-center justify-center group-hover:scale-115 group-hover:bg-primary group-hover:text-white group-hover:shadow-md transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight group-hover:scale-105 transition-transform duration-200">
                  {item.value}
                </div>
                <div className="text-sm font-bold text-charcoal mt-1 group-hover:text-primary transition-colors">
                  {item.label}
                </div>
                <div className="text-xs text-secondary mt-0.5">
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
