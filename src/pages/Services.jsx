import React, { useState } from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import WhatsAppButton from '../components/common/WhatsAppButton';
import Button from '../components/common/Button';
import { servicesData } from '../data/servicesData';
import { ArrowRight, ChevronDown, CheckCircle2, AlertCircle, HelpCircle, Clock } from 'lucide-react';

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How often should I have routine dental scaling & polishing done?",
      a: "For most adult patients, professional scaling every 6 months is recommended to eliminate hardened calculus and prevent gum inflammation. Patients with history of periodontal disease may benefit from quarterly evaluations.",
    },
    {
      q: "Is root canal treatment painful?",
      a: "With modern local anesthesia and rotary instrumentation, root canal treatment is typically no more uncomfortable than having a dental filling placed. In fact, the procedure is designed to immediately relieve acute toothache caused by infected nerve tissue.",
    },
    {
      q: "How do clear aligners compare to conventional braces?",
      a: "Clear aligners are nearly invisible, removable during meals, and allow normal brushing and flossing without specialized wire brushes. However, aligner success requires disciplined wear for 20–22 hours daily.",
    },
    {
      q: "What is the difference between in-office whitening and over-the-counter kits?",
      a: "In-office clinical whitening uses high-concentration dental whitening agents under direct doctor supervision with gingival barrier protection, yielding faster, safer, and more noticeable results without damaging tooth enamel.",
    },
    {
      q: "Can I receive emergency treatment on the same day?",
      a: "Yes. We reserve emergency slots for severe acute pain, trauma, dental abscesses, or fractured teeth. Please contact our WhatsApp desk immediately for triage.",
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      <PageHero
        badge="Specialized Treatments"
        title="Comprehensive Dental Care for Every Smile."
        description="Explore our complete range of general, cosmetic, and restorative dental services. Every treatment is tailored to your individual clinical examination."
        breadcrumbs={[{ label: 'Services & Treatments' }]}
      >
        <WhatsAppButton size="md" variant="primary">
          Ask About a Treatment
        </WhatsAppButton>
        <Button to="/appointments" variant="secondary" size="md">
          Book Consultation
        </Button>
      </PageHero>

      {/* Six Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Treatment Portfolio"
          title="Personalized Clinical Solutions"
          description="Click any procedure below to inquire about eligibility, clinical assessment, and appointment scheduling."
        />

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl sm:rounded-3xl border border-borderSoft/90 overflow-hidden shadow-xs sm:shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div className="flex-1 flex flex-col">
                  {/* Top Image */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-slate-100 flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-2 right-2 sm:top-3.5 sm:right-3.5 bg-white/95 backdrop-blur-sm text-charcoal text-[9px] sm:text-[11px] font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-xs truncate max-w-[85%]">
                      {service.category}
                    </span>
                  </div>

                  {/* Overlapping Round Blue Icon Badge */}
                  <div className="relative px-2.5 sm:px-6 -mt-4 sm:-mt-7 flex items-center z-10 flex-shrink-0">
                    <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-md sm:shadow-lg border-2 sm:border-4 border-white group-hover:scale-110 group-hover:bg-primary-hover transition-transform duration-300">
                      <Icon className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-2.5 sm:p-6 pt-1.5 sm:pt-3 space-y-1 sm:space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs sm:text-lg lg:text-xl font-bold text-charcoal group-hover:text-primary transition-colors line-clamp-1 sm:line-clamp-2">
                        {service.title}
                      </h3>
                      <p className="text-[10px] sm:text-sm text-secondary leading-snug sm:leading-relaxed mt-0.5 sm:mt-1 line-clamp-2 sm:line-clamp-3">{service.shortDesc}</p>
                    </div>

                    <div className="space-y-0.5 sm:space-y-1.5 pt-1 sm:pt-2 border-t border-borderSoft/60 text-[10px] sm:text-xs text-secondary">
                      {service.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center space-x-1 sm:space-x-2">
                          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary flex-shrink-0" />
                          <span className="truncate">{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-1 sm:pt-2 text-[10px] sm:text-xs text-primary font-medium flex items-center space-x-1 sm:space-x-1.5">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary flex-shrink-0" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 sm:p-6 pt-2 sm:pt-0 mt-1 sm:mt-4 border-t border-borderSoft/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-1.5 sm:gap-2">
                  <WhatsAppButton
                    variant="soft"
                    size="sm"
                    className="rounded-full w-full sm:w-auto text-[10px] sm:text-xs py-1 sm:py-1.5 px-2 sm:px-3 text-center justify-center"
                    customMessage={`Hello Fakiha Dental, I am interested in inquiring about ${service.title}.`}
                  >
                    Inquire on WhatsApp
                  </WhatsAppButton>
                  <Button
                    to="/appointments"
                    variant="ghost"
                    size="sm"
                    className="rounded-full text-[10px] sm:text-xs py-1 sm:py-1.5 px-2 sm:px-3 justify-center"
                    icon={ArrowRight}
                    iconPosition="right"
                  >
                    Book
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* What to Expect During a Consultation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-soft rounded-2xl border border-borderSoft p-8 sm:p-12">
          <SectionHeading
            badge="Consultation Journey"
            title="What to Expect During Your Visit"
            description="We prioritize clear communication and thorough diagnostics before initiating any clinical care."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-4">
            <div className="bg-white p-6 rounded-xl border border-borderSoft shadow-sm space-y-3">
              <span className="w-8 h-8 rounded-full bg-primary-light text-primary font-bold text-sm flex items-center justify-center">
                1
              </span>
              <h4 className="font-bold text-charcoal text-base">Comprehensive Examination</h4>
              <p className="text-xs text-secondary leading-relaxed">
                Visual inspection of teeth, gingival margins, bite alignment, and high-definition digital X-rays if clinically necessary.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-borderSoft shadow-sm space-y-3">
              <span className="w-8 h-8 rounded-full bg-primary-light text-primary font-bold text-sm flex items-center justify-center">
                2
              </span>
              <h4 className="font-bold text-charcoal text-base">Transparent Treatment Plan</h4>
              <p className="text-xs text-secondary leading-relaxed">
                Detailed discussion of conservative options, procedure sequence, recovery outlook, and upfront pricing with zero surprises.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-borderSoft shadow-sm space-y-3">
              <span className="w-8 h-8 rounded-full bg-primary-light text-primary font-bold text-sm flex items-center justify-center">
                3
              </span>
              <h4 className="font-bold text-charcoal text-base">Gentle Clinical Execution</h4>
              <p className="text-xs text-secondary leading-relaxed">
                Unhurried care adhering to strict 4-step sterilization protocols and gentle anesthesia for your absolute comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expandable FAQs Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Common Questions About Our Care"
          description="Click any question below to view clinical answers from our dental team."
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-borderSoft overflow-hidden shadow-sm transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                aria-expanded={openFaq === idx}
                className="w-full px-6 py-4 text-left flex items-center justify-between space-x-4 hover:bg-soft/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="font-bold text-charcoal text-sm sm:text-base flex items-center space-x-2.5">
                  <HelpCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{faq.q}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform duration-200 ${
                    openFaq === idx ? 'transform rotate-180 text-primary' : ''
                  }`}
                />
              </button>

              {openFaq === idx && (
                <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-secondary leading-relaxed border-t border-borderSoft/50 bg-soft/30">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final Consultation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-charcoal text-white rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold">Have Questions About Your Symptoms?</h3>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Send a description of your concern or tooth sensitivity on WhatsApp. Our dental coordinator will help guide you toward the right appointment slot.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <WhatsAppButton variant="primary" size="lg">
              Ask Our Clinical Team on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </div>
  );
}
