import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { DoctorSpotlight } from './components/doctor/DoctorSpotlight';
import { BeforeAfterStudio } from './components/transformations/BeforeAfterStudio';
import { SymptomTriage } from './components/quiz/SymptomTriage';
import { TreatmentsBento } from './components/treatments/TreatmentsBento';
import { AboutSection } from './components/about/AboutSection';
import { WhyChooseUs } from './components/why/WhyChooseUs';
import { ReviewsSection } from './components/reviews/ReviewsSection';
import { AppointmentSection } from './components/appointment/AppointmentSection';
import { AppointmentModal } from './components/appointment/AppointmentModal';
import { LocationSection } from './components/location/LocationSection';
import { ConversionCtaSection } from './components/common/ConversionCtaSection';
import { Footer } from './components/common/Footer';
import { MobileStickyBar } from './components/common/MobileStickyBar';
import { BackToTop } from './components/common/BackToTop';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | undefined>(undefined);

  const handleOpenAppointment = (treatmentTitle?: string) => {
    setSelectedTreatment(treatmentTitle);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#FAF8F5] text-slate-900 flex flex-col font-sans pb-16 sm:pb-0 selection:bg-emerald-700 selection:text-white">
      
      {/* 1. Header Navbar */}
      <Navbar onOpenAppointment={() => handleOpenAppointment()} />

      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* 2. Boutique Hero Section - All Specialties */}
        <HeroSection onOpenAppointment={(t) => handleOpenAppointment(t)} />

        {/* 3. Dr. Khalidh Khan (MDS) Clinic & Specialist Leadership */}
        <DoctorSpotlight onOpenAppointment={(d) => handleOpenAppointment(d)} />

        {/* 4. Verified Pre & Post Treatment Clinical Transformations Across All 8 Services */}
        <BeforeAfterStudio onOpenAppointment={(t) => handleOpenAppointment(t)} />

        {/* 5. Interactive All-Specialties Symptom & Treatment Triage Navigator */}
        <SymptomTriage onOpenAppointment={(t) => handleOpenAppointment(t)} />

        {/* 6. Asymmetric Bento Treatments Suite (8 Specialties) */}
        <TreatmentsBento onOpenAppointment={(t) => handleOpenAppointment(t)} />

        {/* 7. About Studio & Clinical Standards */}
        <AboutSection onOpenAppointment={() => handleOpenAppointment()} />

        {/* 8. Why Choose Us */}
        <WhyChooseUs />

        {/* 9. 4.9 ★ Google Reviews */}
        <ReviewsSection />

        {/* 10. Main Appointment Booking Studio */}
        <AppointmentSection />

        {/* 12. Location, Google Map & FAQs */}
        <LocationSection />

        {/* 13. Conversion CTA Strip */}
        <ConversionCtaSection onOpenAppointment={() => handleOpenAppointment()} />
      </main>

      {/* 14. Footer */}
      <Footer onOpenAppointment={() => handleOpenAppointment()} />

      {/* Floating Clickable Back To Top Button */}
      <BackToTop />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar onOpenAppointment={() => handleOpenAppointment()} />

      {/* Popup Appointment Modal */}
      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTreatment={selectedTreatment}
      />

    </div>
  );
};

export default App;
