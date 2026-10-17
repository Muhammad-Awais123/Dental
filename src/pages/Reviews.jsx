import React from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import WhatsAppButton from '../components/common/WhatsAppButton';
import Button from '../components/common/Button';
import TestimonialCarousel from '../components/common/TestimonialCarousel';
import { Star, MessageSquare, Play, ExternalLink } from 'lucide-react';
import { clinicConfig } from '../data/clinicConfig';
import { testimonialsData } from '../data/testimonialsData';

export default function Reviews() {
  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      <PageHero
        badge="Patient Experiences"
        title="Hear From Our Patients."
        description="We take immense pride in providing comforting, honest dental care. Read feedback from patients who entrusted their smiles to our clinic."
        breadcrumbs={[{ label: 'Reviews & Testimonials' }]}
      >
        <WhatsAppButton size="md" variant="primary">
          Share Your Experience
        </WhatsAppButton>
        <Button to="/appointments" variant="secondary" size="md">
          Book an Appointment
        </Button>
      </PageHero>

      {/* Verified Google Review Summary Panel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-soft border border-borderSoft rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-xl bg-white border border-borderSoft flex items-center justify-center text-primary shadow-sm">
              <MessageSquare className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-charcoal">Clinic Feedback Overview</span>
                <span className="px-2 py-0.5 rounded bg-primary-light text-primary text-[11px] font-bold">
                  Clinical Benchmark
                </span>
              </div>
              <p className="text-xs text-secondary mt-0.5">
                Evaluated across hygiene, clinical communication, and treatment comfort.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="flex items-center space-x-1 justify-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <span className="text-xs text-secondary mt-1 block">Patient Satisfaction</span>
            </div>

            <a
              href={clinicConfig.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-semibold text-primary hover:text-primary-hover px-4 py-2 bg-white rounded-lg border border-borderSoft hover:border-primary/50 transition-colors"
            >
              <span>View On Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Reviews"
          title="Patient Stories & Reflections"
          description="Read personal reflections on gentle dentistry and clinical transparency."
        />
        <div className="max-w-4xl mx-auto">
          <TestimonialCarousel />
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="All Feedback"
          title="Patient Reflections on Care"
          description="Every case is treated with dedicated focus on comfort, safety, and thorough post-treatment instructions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-borderSoft p-6 flex flex-col justify-between shadow-sm hover:border-primary/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] text-primary font-medium bg-primary-light px-2 py-0.5 rounded">
                    {t.treatment}
                  </span>
                </div>
                <h4 className="font-bold text-charcoal text-base">"{t.highlight}"</h4>
                <p className="text-sm text-secondary leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-borderSoft flex items-center justify-between text-xs text-secondary">
                <span className="font-semibold text-charcoal">{t.name}</span>
                <span>{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Media & Stories"
          title="Video Patient Experiences"
          description="Watch how our compassionate team helps patients overcome dental anxiety and enjoy restored confidence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-soft rounded-2xl border border-borderSoft p-6 space-y-4">
            <div className="aspect-video bg-charcoal rounded-xl flex items-center justify-center relative group cursor-pointer overflow-hidden">
              <div className="w-14 h-14 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 ml-0.5 fill-white" />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-charcoal text-base">Overcoming Dental Anxiety</h4>
              <p className="text-xs text-secondary mt-1">
                Patient story describing our gentle sedation and communication protocol.
              </p>
            </div>
          </div>

          <div className="bg-soft rounded-2xl border border-borderSoft p-6 space-y-4">
            <div className="aspect-video bg-charcoal rounded-xl flex items-center justify-center relative group cursor-pointer overflow-hidden">
              <div className="w-14 h-14 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 ml-0.5 fill-white" />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-charcoal text-base">Smile Confidence Restored</h4>
              <p className="text-xs text-secondary mt-1">
                Patient review covering cosmetic alignment and aesthetic dental care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
