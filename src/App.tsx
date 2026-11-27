import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { MobileStickyBar } from './components/common/MobileStickyBar';
import { BackToTop } from './components/common/BackToTop';
import { ScrollToTop } from './components/common/ScrollToTop';
import { AppointmentModal } from './components/appointment/AppointmentModal';

import { HomePage } from './pages/HomePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
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
      <div className="min-h-screen w-full max-w-full overflow-x-clip bg-[#FAF8F5] text-slate-900 flex flex-col font-sans pb-16 sm:pb-0 selection:bg-emerald-700 selection:text-white">
        
        {/* 1. Header Navbar */}
        <Navbar onOpenAppointment={() => handleOpenAppointment()} />

        {/* 2. Routed Content View */}
        <main className="flex-1 w-full max-w-full">
          <Routes>
            <Route path="/" element={<HomePage onOpenAppointment={handleOpenAppointment} />} />
            
            {/* 9 Location-Targeted Service Pages for Madurai SEO */}
            <Route path="/orthodontics-madurai" element={<ServiceDetailPage serviceSlug="orthodontics-madurai" onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/orthodontics-madurai/" element={<ServiceDetailPage serviceSlug="orthodontics-madurai" onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/general-dentistry-madurai" element={<ServiceDetailPage serviceSlug="general-dentistry-madurai" onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/general-dentistry-madurai/" element={<ServiceDetailPage serviceSlug="general-dentistry-madurai" onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/root-canal-treatment-madurai" element={<ServiceDetailPage serviceSlug="root-canal-treatment-madurai" onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/root-canal-treatment-madurai/" element={<ServiceDetailPage serviceSlug="root-canal-treatment-madurai" onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/prosthodontics-madurai" element={<ServiceDetailPage serviceSlug="prosthodontics-madurai" onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/prosthodontics-madurai/" element={<ServiceDetailPage serviceSlug="prosthodontics-madurai" onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/cosmetic-dentistry-madurai" element={<ServiceDetailPage serviceSlug="cosmetic-dentistry-madurai" onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/cosmetic-dentistry-madurai/" element={<ServiceDetailPage serviceSlug="cosmetic-dentistry-madurai" onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/preventive-dentistry-madurai" element={<ServiceDetailPage serviceSlug="preventive-dentistry-madurai" onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/preventive-dentistry-madurai/" element={<ServiceDetailPage serviceSlug="preventive-dentistry-madurai" onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/oral-maxillofacial-surgery-madurai" element={<ServiceDetailPage serviceSlug="oral-maxillofacial-surgery-madurai" onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/oral-maxillofacial-surgery-madurai/" element={<ServiceDetailPage serviceSlug="oral-maxillofacial-surgery-madurai" onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/pediatric-dentistry-madurai" element={<ServiceDetailPage serviceSlug="pediatric-dentistry-madurai" onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/pediatric-dentistry-madurai/" element={<ServiceDetailPage serviceSlug="pediatric-dentistry-madurai" onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/periodontics-madurai" element={<ServiceDetailPage serviceSlug="periodontics-madurai" onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/periodontics-madurai/" element={<ServiceDetailPage serviceSlug="periodontics-madurai" onOpenAppointment={handleOpenAppointment} />} />

            {/* Redirect /services and aliases to primary specialty per SEO structure */}
            <Route path="/services" element={<Navigate to="/orthodontics-madurai/" replace />} />
            <Route path="/services/" element={<Navigate to="/orthodontics-madurai/" replace />} />
            <Route path="/speciality" element={<Navigate to="/orthodontics-madurai/" replace />} />
            <Route path="/speciality/" element={<Navigate to="/orthodontics-madurai/" replace />} />
            <Route path="/specialities" element={<Navigate to="/orthodontics-madurai/" replace />} />
            <Route path="/specialities/" element={<Navigate to="/orthodontics-madurai/" replace />} />
            <Route path="/services/:slug" element={<ServiceDetailPage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/blog" element={<BlogPage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/blog/dental-implants-full-mouth-restoration-guide" element={<Navigate to="/blog/full-mouth-dental-implants-madurai/" replace />} />
            <Route path="/blog/dental-implants-full-mouth-restoration-guide/" element={<Navigate to="/blog/full-mouth-dental-implants-madurai/" replace />} />
            <Route path="/blog/:slug" element={<BlogPostPage onOpenAppointment={handleOpenAppointment} />} />
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
