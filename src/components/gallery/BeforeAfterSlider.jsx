import React, { useState } from 'react';
import { MoveHorizontal, CheckCircle2 } from 'lucide-react';

export const clinicalCases = [
  {
    id: 'makeover',
    category: 'Cosmetic Dentistry',
    title: 'Full Smile Aesthetic Makeover',
    description: 'Drag the slider to compare pre-treatment enamel discoloration and wear with the restored, radiant smile.',
    beforeImage: '/images/gallery/smile-makeover-before.webp',
    afterImage: '/images/gallery/smile-makeover-after.webp',
    fullImage: '/Before.png',
  },
  {
    id: 'single-implant',
    category: 'Dental Implants',
    title: 'Anterior Single-Tooth Implant',
    description: 'Seamless replacement of an extracted upper front tooth with a precision titanium implant and zirconia crown.',
    beforeImage: '/images/gallery/single-tooth-before.webp',
    afterImage: '/images/gallery/single-tooth-after.webp',
    fullImage: '/dental-implants-before-and-after-single-tooth.webp',
  },
  {
    id: 'arch-rehab',
    category: 'Dental Implants',
    title: 'Full Arch Fixed Implant Bridge',
    description: 'Complete upper arch transformation restoring broken dentition to a healthy, permanent prosthetic smile.',
    beforeImage: '/images/gallery/implants-case2-before.webp',
    afterImage: '/images/gallery/implants-case2-after.webp',
    fullImage: '/dental-implants-before-and-after-2.webp',
  },
];

/**
 * Interactive Before-and-After Clinical Smile Transformation Slider
 * Features pixel-accurate clip-path comparison, authentic clinic images,
 * and multi-case interactive switching.
 */
export default function BeforeAfterSlider({
  title,
  category,
  description,
  aspectRatio = 'aspect-[16/9] sm:aspect-[2/1]',
  className = '',
  beforeImage,
  afterImage,
  showCaseSelector = true,
}) {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  // If specific images are passed via props, use them; otherwise use the selected authentic case
  const activeCase = clinicalCases[selectedCaseIndex];
  const currentBefore = beforeImage || activeCase.beforeImage;
  const currentAfter = afterImage || activeCase.afterImage;
  const currentTitle = title || activeCase.title;
  const currentCategory = category || activeCase.category;
  const currentDesc = description || activeCase.description;

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className={`bg-white rounded-2xl border border-borderSoft p-6 sm:p-8 shadow-sm ${className}`}>
      {/* Case Selector Tabs */}
      {showCaseSelector && !beforeImage && (
        <div className="flex flex-wrap items-center gap-2 mb-6 pb-6 border-b border-borderSoft">
          <span className="text-xs font-bold text-secondary uppercase tracking-wider mr-1">
            Clinical Cases:
          </span>
          {clinicalCases.map((c, idx) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setSelectedCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCaseIndex === idx
                  ? 'bg-primary text-white shadow-sm ring-2 ring-primary/20'
                  : 'bg-soft text-charcoal hover:bg-borderSoft border border-borderSoft'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>
      )}

      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary-light px-3 py-1 rounded-full inline-block mb-2">
            {currentCategory}
          </span>
          <h3 className="text-xl font-bold text-charcoal">{currentTitle}</h3>
          <p className="text-xs sm:text-sm text-secondary mt-1">{currentDesc}</p>
        </div>
        <div className="flex items-center space-x-2 text-xs text-secondary bg-soft px-3 py-1.5 rounded-lg border border-borderSoft self-start sm:self-auto flex-shrink-0">
          <MoveHorizontal className="w-4 h-4 text-primary" />
          <span>Slide to Compare</span>
        </div>
      </div>

      {/* Comparison Viewport */}
      <div
        className={`relative ${aspectRatio} w-full rounded-xl overflow-hidden border border-borderSoft select-none bg-slate-900 shadow-inner`}
      >
        {/* "AFTER" Layer (Full Background) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={currentAfter}
            alt="After treatment restored clinical result"
            className="w-full h-full object-cover object-center pointer-events-none"
            style={{ objectFit: 'cover' }}
          />
          <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-md shadow-md z-10 pointer-events-none uppercase tracking-wider">
            After
          </span>
        </div>

        {/* "BEFORE" Layer (Clipped cleanly via clipPath polygon) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
            WebkitClipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        >
          <img
            src={currentBefore}
            alt="Before treatment initial clinical condition"
            className="w-full h-full object-cover object-center"
            style={{ objectFit: 'cover' }}
          />
          <span className="absolute top-4 left-4 bg-charcoal text-white text-xs font-bold px-3 py-1 rounded-md shadow-md z-10 pointer-events-none uppercase tracking-wider">
            Before
          </span>
        </div>

        {/* Vertical Divider Line & Draggable Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none transform -translate-x-1/2 flex items-center justify-center z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shadow-xl border-2 border-white ring-2 ring-primary/40">
            <MoveHorizontal className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>

        {/* Accessible Range Input Overlaid on Top */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          aria-label="Before and after clinical comparison slider"
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        />
      </div>

      {/* Preset Quick-Buttons & Clinical Notice */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-secondary gap-3 pt-3 border-t border-borderSoft">
        <div className="flex items-center space-x-2">
          <span className="font-medium text-charcoal">Quick View:</span>
          <button
            type="button"
            onClick={() => setSliderPosition(25)}
            className="px-2.5 py-1 rounded bg-soft hover:bg-borderSoft border border-borderSoft text-charcoal font-semibold transition-colors"
          >
            25% Split
          </button>
          <button
            type="button"
            onClick={() => setSliderPosition(50)}
            className="px-2.5 py-1 rounded bg-soft hover:bg-borderSoft border border-borderSoft text-charcoal font-semibold transition-colors"
          >
            50% Split
          </button>
          <button
            type="button"
            onClick={() => setSliderPosition(75)}
            className="px-2.5 py-1 rounded bg-soft hover:bg-borderSoft border border-borderSoft text-charcoal font-semibold transition-colors"
          >
            75% Split
          </button>
        </div>

        <span className="italic text-gray-400 text-center sm:text-right">
          Actual clinical photography from clinic records. Individual biological healing varies.
        </span>
      </div>
    </div>
  );
}
