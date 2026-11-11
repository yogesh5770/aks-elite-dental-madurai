import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { MobileStickyBar } from './components/common/MobileStickyBar';
import { BackToTop } from './components/common/BackToTop';
import { ScrollToTop } from './components/common/ScrollToTop';
import { AppointmentModal } from './components/appointment/AppointmentModal';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | undefined>(undefined);

  const handleOpenAppointment = (treatmentTitle?: string) => {
    setSelectedTreatment(treatmentTitle);
    setModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#FAF8F5] text-slate-900 flex flex-col font-sans pb-16 sm:pb-0 selection:bg-emerald-700 selection:text-white">
        
        {/* 1. Header Navbar */}
        <Navbar onOpenAppointment={() => handleOpenAppointment()} />

        {/* 2. Routed Content View */}
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/services" element={<ServicesPage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/about" element={<AboutPage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/gallery" element={<GalleryPage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all route returns to Home */}
            <Route path="*" element={<HomePage onOpenAppointment={handleOpenAppointment} />} />
          </Routes>
        </main>

        {/* 3. Footer */}
        <Footer onOpenAppointment={() => handleOpenAppointment()} />

        {/* 4. Floating Clickable Back To Top Button */}
        <BackToTop />

        {/* 5. Mobile Sticky Action Bar */}
        <MobileStickyBar onOpenAppointment={() => handleOpenAppointment()} />

        {/* 6. Popup Appointment Modal */}
        <AppointmentModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          defaultTreatment={selectedTreatment}
        />

      </div>
    </BrowserRouter>
  );
};

export default App;
