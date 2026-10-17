import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { clinicConfig } from '../../data/clinicConfig';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Are your dental procedures painful?",
      a: "Not at all. We utilize modern computer-assisted local anesthesia, gentle topical numbing gels, and conservative techniques to guarantee maximum comfort. Most patients report feeling zero discomfort throughout their procedure.",
    },
    {
      q: "How long does professional teeth whitening take, and how long does it last?",
      a: "Our clinical in-chair laser whitening session typically takes 45 to 60 minutes. Results generally last between 12 to 24 months, depending on your dietary habits (such as tea or coffee consumption) and regular oral hygiene maintenance.",
    },
    {
      q: "Why are dental implants better than bridges or removable dentures?",
      a: "Dental implants integrate directly with your jawbone, simulating natural tooth roots. This prevents bone loss, protects adjacent healthy teeth from being shaved down, and restores 100% of your natural chewing efficiency.",
    },
    {
      q: "What sterilization and infection control protocols do you follow?",
      a: "We adhere strictly to hospital-grade standards. All surgical tools undergo a 4-step ultrasonic cleaning and Class B vacuum autoclave cycle. Autoclave pouches with chemical indicators are opened only at chairside in front of the patient.",
    },
    {
      q: "How quickly can I get an appointment for severe toothache or dental emergency?",
      a: "We reserve daily urgent triage slots specifically for dental trauma, swelling, and severe toothaches. Message us on WhatsApp or call our desk immediately for priority same-day scheduling.",
    },
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs sm:text-sm font-bold tracking-widest text-primary uppercase bg-primary-light px-3.5 py-1.5 rounded-full border border-primary/20">
          COMMON QUESTIONS
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight leading-[1.2] mt-3">
          Frequently Asked Questions
        </h2>
        <p className="text-secondary text-sm sm:text-base leading-relaxed mt-3">
          Got questions before your dental visit? Find answers to our most common patient inquiries below.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden group ${
                isOpen
                  ? 'bg-white border-primary shadow-lg ring-1 ring-primary/20'
                  : 'bg-white border-borderSoft hover:border-primary/50 hover:shadow-md'
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-charcoal group-hover:text-primary transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen
                      ? 'bg-primary text-white rotate-180 shadow-sm'
                      : 'bg-soft text-secondary group-hover:bg-primary group-hover:text-white'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-sm text-secondary leading-relaxed border-t border-borderSoft/60 pt-4 bg-soft/30">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 p-6 rounded-2xl bg-soft border border-borderSoft flex flex-col sm:flex-row items-center justify-between gap-4 hover:border-primary/40 hover:shadow-md transition-all duration-300">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-charcoal">Have a specific clinical question?</div>
            <div className="text-xs text-secondary">Our dental coordinators are available on WhatsApp</div>
          </div>
        </div>

        <a
          href={clinicConfig.getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-primary text-white hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all duration-200"
        >
          Ask on WhatsApp
        </a>
      </div>
    </section>
  );
}
