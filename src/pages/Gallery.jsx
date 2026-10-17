import React, { useState } from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import WhatsAppButton from '../components/common/WhatsAppButton';
import Button from '../components/common/Button';
import BeforeAfterSlider from '../components/gallery/BeforeAfterSlider';
import { AlertCircle, Eye, X, CheckCircle2, Sparkles } from 'lucide-react';
import { galleryData } from '../data/galleryData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCaseModal, setSelectedCaseModal] = useState(null);

  const categories = ['All', 'Cosmetic Dentistry', 'Dental Implants', 'Teeth Whitening'];

  const filteredItems = activeCategory === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      <PageHero
        badge="Clinical Results"
        title="Smile Transformations, Presented with Care."
        description="Explore authentic clinical before-and-after results of aesthetic, implant, and restorative treatments. Each case demonstrates individualized patient outcomes."
        breadcrumbs={[{ label: 'Before & After Gallery' }]}
      >
        <WhatsAppButton size="md" variant="primary">
          Discuss Your Smile Goals
        </WhatsAppButton>
        <Button to="/appointments" variant="secondary" size="md">
          Book Smile Assessment
        </Button>
      </PageHero>

      {/* Clinical Disclaimer Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-5 rounded-xl bg-soft border border-borderSoft flex items-start space-x-3 text-secondary text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-charcoal font-semibold">Authentic Clinical Notice:</strong> All photographic case presentations are actual clinical before-and-after records from patient treatments. Biological response, healing dynamics, tooth anatomy, and individual health factors determine the precise results of each patient's care.
          </p>
        </div>
      </section>

      {/* Featured Interactive Comparison Slider */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Interactive Preview"
          title="Slide to Compare Clinical Outcomes"
          description="Drag the slider handle horizontally or select a case tab below to inspect aesthetic and implant restorations."
        />
        <div className="max-w-4xl mx-auto">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Case Studies"
          title="Browse by Treatment Category"
          description="Select any clinical category to inspect individual before-and-after cases."
        />

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-soft text-charcoal hover:bg-borderSoft border border-borderSoft'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid with Real Before & After Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-borderSoft p-6 sm:p-8 space-y-6 shadow-sm hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-primary px-3 py-1 bg-primary-light rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-secondary font-medium">Case #{item.id}</span>
                </div>

                {/* Before & After Visual Presentation */}
                <div className="grid grid-cols-2 gap-3 aspect-[16/9] bg-slate-900 rounded-xl overflow-hidden border border-borderSoft relative group/card">
                  {/* Before Photo */}
                  <div className="relative w-full h-full overflow-hidden bg-slate-800">
                    <img
                      src={item.beforeImage}
                      alt={`${item.title} before treatment initial presentation`}
                      className="w-full h-full object-cover object-center group-hover/card:scale-102 transition-transform duration-500"
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-charcoal/10 pointer-events-none" />
                    <span className="absolute top-2.5 left-2.5 bg-charcoal/90 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow tracking-wider">
                      BEFORE
                    </span>
                  </div>

                  {/* After Photo */}
                  <div className="relative w-full h-full overflow-hidden bg-slate-800">
                    <img
                      src={item.afterImage}
                      alt={`${item.title} after treatment clinical restoration`}
                      className="w-full h-full object-cover object-center group-hover/card:scale-102 transition-transform duration-500"
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-charcoal/10 pointer-events-none" />
                    <span className="absolute top-2.5 right-2.5 bg-primary/95 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow tracking-wider">
                      AFTER
                    </span>
                  </div>

                  {/* Quick View Full Composite Overlay Button */}
                  {item.fullImage && (
                    <button
                      type="button"
                      onClick={() => setSelectedCaseModal(item)}
                      aria-label={`View full case photo for ${item.title}`}
                      className="absolute bottom-2.5 right-2.5 z-10 bg-white/90 hover:bg-white text-charcoal text-xs font-semibold px-2.5 py-1 rounded-md shadow-md backdrop-blur-xs flex items-center space-x-1.5 transition-all opacity-90 hover:opacity-100"
                    >
                      <Eye className="w-3.5 h-3.5 text-primary" />
                      <span>Full View</span>
                    </button>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-charcoal">{item.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{item.description}</p>
                  <p className="text-xs text-primary font-medium flex items-center space-x-1 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>{item.procedure}</span>
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-borderSoft flex items-center justify-between gap-2">
                <WhatsAppButton
                  variant="soft"
                  size="sm"
                  customMessage={`Hello, I am asking about your ${item.title} (Case #${item.id}) shown in your smile gallery.`}
                >
                  Inquire on WhatsApp
                </WhatsAppButton>
                <Button to="/appointments" variant="ghost" size="sm">
                  Book Visit
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Resolution Case Modal */}
      {selectedCaseModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedCaseModal(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-borderSoft pb-3">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  {selectedCaseModal.category}
                </span>
                <h3 className="text-lg font-bold text-charcoal">{selectedCaseModal.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCaseModal(null)}
                className="p-1.5 rounded-lg text-secondary hover:text-charcoal hover:bg-soft"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-borderSoft bg-slate-900 flex items-center justify-center">
              <img
                src={selectedCaseModal.fullImage || selectedCaseModal.afterImage}
                alt={`${selectedCaseModal.title} clinical case study`}
                className="max-h-[60vh] w-auto object-contain mx-auto"
                style={{ objectFit: 'contain' }}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-secondary border-t border-borderSoft">
              <p>{selectedCaseModal.procedure}</p>
              <WhatsAppButton
                variant="primary"
                size="sm"
                customMessage={`Hello, I'm viewing your ${selectedCaseModal.title} case and would like to consult with the doctor.`}
              >
                Consult on WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
