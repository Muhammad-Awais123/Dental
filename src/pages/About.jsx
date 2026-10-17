import React from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import WhatsAppButton from '../components/common/WhatsAppButton';
import Button from '../components/common/Button';
import { teamData } from '../data/teamData';
import { ShieldCheck, HeartHandshake, Sparkles, Award, UserCheck, Stethoscope, CheckCircle2 } from 'lucide-react';

export default function About() {
  const facilityHighlights = [
    { title: "Ergonomic Dental Operatories", desc: "Equipped with contoured patient chairs, adjustable LED illumination, and quiet motor handpieces." },
    { title: "Digital Low-Radiation Radiography", desc: "Diagnostic imaging offering clear visualization with a fraction of traditional radiation." },
    { title: "Dedicated Sterilization Suite", desc: "Segregated clean and dirty zones with automated medical autoclaves and pouch heat sealers." },
    { title: "Comfortable Reception & Air Quality", desc: "Clean, temperature-regulated waiting lounge with complimentary water and soothing environment." },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      <PageHero
        badge="About Fakiha Dental & Healthcare"
        title="Compassionate Care. Healthier Smiles."
        description="We are committed to delivering clinical precision, honest patient guidance, and comfortable dental care in a welcoming, hygienic clinical environment."
        breadcrumbs={[{ label: 'About Us' }]}
      >
        <WhatsAppButton size="md" variant="primary">
          Inquire on WhatsApp
        </WhatsAppButton>
        <Button to="/appointments" variant="secondary" size="md">
          Request Appointment
        </Button>
      </PageHero>

      {/* Mission & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionHeading
              align="left"
              badge="Our Commitment"
              title="Patient-First Dental Healthcare"
              description="At Fakiha Dental & Healthcare, we understand that visiting the dentist requires trust. Our primary mission is to replace clinical apprehension with comfort, clarity, and exceptional care."
              className="mb-6"
            />
            <p className="text-secondary text-sm sm:text-base leading-relaxed">
              From preventative cleanings to advanced cosmetic and restorative dentistry, every procedure is carried out with stringent infection control protocols and modern dental techniques.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-soft rounded-xl border border-borderSoft">
                <HeartHandshake className="w-5 h-5 text-primary mb-2" />
                <h3 className="font-semibold text-charcoal text-sm">Gentle Approach</h3>
                <p className="text-xs text-secondary mt-1">Focused on patient comfort and minimizing procedure stress.</p>
              </div>
              <div className="p-4 bg-soft rounded-xl border border-borderSoft">
                <ShieldCheck className="w-5 h-5 text-primary mb-2" />
                <h3 className="font-semibold text-charcoal text-sm">Hygiene & Safety</h3>
                <p className="text-xs text-secondary mt-1">Rigorous autoclave sterilization and surface disinfection.</p>
              </div>
            </div>
          </div>

          <div className="bg-soft p-8 rounded-2xl border border-borderSoft space-y-6">
            <h3 className="text-xl font-bold text-charcoal border-b border-borderSoft pb-4">
              Our 4-Step Infection Control Protocol
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <div>
                  <h4 className="text-sm font-semibold text-charcoal">Pre-Cleaning & Decontamination</h4>
                  <p className="text-xs text-secondary">Ultrasonic cleaning of instruments prior to packaging.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <div>
                  <h4 className="text-sm font-semibold text-charcoal">Medical Autoclave Sterilization</h4>
                  <p className="text-xs text-secondary">Pressurized steam sterilization in sealed medical pouches.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                <div>
                  <h4 className="text-sm font-semibold text-charcoal">Clinical Surface Disinfection</h4>
                  <p className="text-xs text-secondary">Disinfection of dental chairs and operatories between each patient visit.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                <div>
                  <h4 className="text-sm font-semibold text-charcoal">Aseptic Storage & Chairside Unpacking</h4>
                  <p className="text-xs text-secondary">Sterile pouch opening directly in front of the patient.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility & Environment Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Facility"
          title="Modern Equipment & Clean Environment"
          description="Designed to deliver a hygienic, quiet, and stress-free clinical visit."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilityHighlights.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-borderSoft p-6 space-y-2 shadow-sm hover:border-primary/40 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h4 className="font-bold text-charcoal text-base">{item.title}</h4>
              <p className="text-xs text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Medical Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Dental Professionals"
          title="Meet Our Clinical Team"
          description="Experienced dental practitioners dedicated to continuing education, gentle dentistry, and personalized care."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-borderSoft p-6 sm:p-8 shadow-sm hover:border-primary/50 transition-colors space-y-4"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-borderSoft bg-primary-light flex-shrink-0 shadow-xs">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-primary font-bold text-2xl border border-primary/20">
                      <Stethoscope className="w-8 h-8" />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-charcoal">{member.name}</h3>
                  <span className="text-xs font-semibold text-primary block">{member.role}</span>
                  <span className="text-xs text-secondary">{member.credentials}</span>
                </div>
              </div>

              <p className="text-sm text-secondary leading-relaxed">{member.bio}</p>

              <div className="p-3 bg-soft rounded-xl border border-borderSoft text-xs text-secondary italic">
                "{member.philosophy}"
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                {member.specialties.map((s, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-medium bg-soft text-charcoal px-2.5 py-1 rounded-md border border-borderSoft"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
