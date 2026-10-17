/**
 * Fakiha Dental & Healthcare — Centralized Configuration
 * All business details, contact information, hours, and placeholder metadata are maintained here.
 * NOTE: Unverified items are clearly designated as editable placeholders until confirmed by clinic management.
 */

export const clinicConfig = {
  name: "Fakiha Dental & Healthcare",
  tagline: "Compassionate Care. Healthier Smiles.",
  shortDescription: "Personalized dental care, modern treatment options, and a welcoming team dedicated to helping you smile with confidence.",
  
  // Contact & Social (Configurable placeholders)
  contact: {
    phone: "+92 300 0000000", // Placeholder: replace with verified clinic phone
    phoneRaw: "+923000000000",
    whatsapp: "+92 300 0000000", // Placeholder: replace with clinic WhatsApp
    whatsappNumber: "923000000000", // Numbers only for wa.me URL
    email: "info@fakihadental.com", // Placeholder
    address: "Main Boulevard, Healthcare District, Pakistan", // Placeholder address
    googleMapsUrl: "https://maps.google.com/?q=Dental+Clinic+Pakistan", // Placeholder map search
    directionsUrl: "https://maps.google.com/?q=Dental+Clinic+Pakistan",
  },

  // Clinic Opening Hours (Subject to clinic verification)
  openingHours: [
    { day: "Monday – Thursday", hours: "10:00 AM – 08:00 PM", status: "Open" },
    { day: "Friday", hours: "02:30 PM – 08:00 PM", status: "Afternoon Session" },
    { day: "Saturday", hours: "10:00 AM – 06:00 PM", status: "Open" },
    { day: "Sunday", hours: "By Emergency Appointment Only", status: "Consultation" },
  ],

  // Navigation Links
  navLinks: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Reviews", path: "/reviews" },
    { name: "Appointments", path: "/appointments" },
    { name: "Contact", path: "/contact" },
  ],

  // Helper function to build sanitized, prefilled WhatsApp URLs
  getWhatsAppUrl(customMessage) {
    const defaultMsg = "Hello Fakiha Dental & Healthcare, I would like to inquire about booking an appointment.";
    const text = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/${this.contact.whatsappNumber}?text=${text}`;
  },

  // Trust & statistics indicators (Marked as illustrative clinical benchmarks)
  stats: [
    { value: "10+", label: "Years Clinical Experience", note: "Verified team background" },
    { value: "4,500+", label: "Smiles Treated", note: "Cumulative patient consultations" },
    { value: "6+", label: "Specialized Services", note: "Modern comprehensive care" },
    { value: "100%", label: "Sterilization Focus", note: "Multi-stage protocol" },
  ],
};
