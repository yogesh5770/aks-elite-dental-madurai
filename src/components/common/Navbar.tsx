import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Clock, Menu, X, Star, MessageSquare, Calendar, ChevronRight, Award } from 'lucide-react';
import { CLINIC_DATA } from '../../data/clinicData';

interface NavbarProps {
  onOpenAppointment: (treatment?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Specialties", to: "/services" },
    { label: "About & Doctors", to: "/about" },
    { label: "Smile Gallery", to: "/gallery" },
    { label: "Location & Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-xl border-b border-emerald-950/10 shadow-[0_4px_20px_-4px_rgba(15,56,44,0.06)] text-slate-900 font-sans w-full">
      
      {/* 1. Top Announcement & Direct Access Ticker */}
      <div className="bg-[#061D15] text-emerald-100 py-1 sm:py-1.5 px-2.5 sm:px-6 lg:px-8 text-xs font-sans border-b border-emerald-950/40 relative z-50 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Left: Clinic Brand Badge, Google Rating & Clinical Focus */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Top Bar Logo Mark */}
            <div className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full bg-emerald-950/90 border border-emerald-600/30 text-white text-[11px] font-bold shadow-xs whitespace-nowrap shrink-0">
              <img 
                src="/aks_official_logo.png" 
                alt="AK's Elite Dental Clinic Logo" 
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain filter drop-shadow-xs"
              />
              <span className="tracking-tight text-emerald-200 hidden min-[480px]:inline">AK'S ELITE</span>
            </div>

            <span className="hidden min-[480px]:inline text-emerald-800">|</span>

            <div className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 font-bold text-[10px] sm:text-[11px] border border-amber-400/20 whitespace-nowrap shrink-0">
              <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-300 text-amber-300" />
              <span className="hidden min-[420px]:inline">4.9 ★ RATED ON GOOGLE</span>
              <span className="min-[420px]:hidden">4.9 ★ GOOGLE</span>
              <span className="hidden sm:inline text-emerald-300/80 font-normal">({CLINIC_DATA.reviewCount}+ Reviews)</span>
            </div>
            
            <span className="hidden 2xl:inline text-emerald-800">|</span>
            
            <div className="hidden 2xl:flex items-center gap-1.5 text-emerald-200/90 text-[11px]">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span className="italic">"Exclusive Orthodontics & Precision Dental Surgery"</span>
            </div>
          </div>

          {/* Right: Hours & Direct Hotline */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <div className="hidden md:flex items-center gap-2 text-emerald-200 text-[11px]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <Clock className="w-3 h-3 text-amber-300" />
              <span>Mon – Sat: 9:30 AM – 9:00 PM</span>
            </div>
            
            <span className="hidden md:inline text-emerald-800">|</span>

            <a 
              href={`tel:${CLINIC_DATA.contact.phonePrimary}`} 
              className="flex items-center gap-1 sm:gap-1.5 text-amber-300 hover:text-white font-bold text-[10.5px] sm:text-[11px] transition-colors whitespace-nowrap"
            >
              <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-300" />
              <span>{CLINIC_DATA.contact.phoneDisplay}</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Brand & Navigation Bar */}
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-2 sm:gap-4">
          
          {/* Brand Logo & Title with Crystal-Clear Luxury Lockup (Zero Wrapping & Zero Clipping) */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3.5 group shrink min-w-0 select-none">
            {/* Tooth Emblem Squircle Badge */}
            <div className="h-10 w-11 sm:h-12 sm:w-14 rounded-2xl bg-gradient-to-br from-[#092B20] via-[#0F382C] to-[#04150F] flex items-center justify-center shadow-md shadow-emerald-950/25 p-1 sm:p-1.5 group-hover:scale-105 group-hover:border-emerald-400/50 transition-all duration-300 border border-emerald-600/30 shrink-0">
              <img 
                src="/aks_official_logo.png" 
                alt="AK's Elite Dental Clinic Logo" 
                className="h-full w-auto max-w-full object-contain filter drop-shadow-sm"
              />
            </div>
            
            {/* Brand Titles */}
            <div className="flex flex-col justify-center shrink-0 min-w-0">
              <div className="flex items-baseline gap-1 sm:gap-1.5 leading-none whitespace-nowrap">
                <span className="text-[16px] sm:text-xl font-extrabold tracking-tight text-[#062017]">
                  AK'S ELITE
                </span>
                <span className="text-[16px] sm:text-xl font-bold tracking-tight text-emerald-700">
                  DENTAL
                </span>
              </div>
              
              <span className="text-[9px] sm:text-[10.5px] font-bold text-emerald-950 tracking-wider uppercase leading-tight mt-0.5 sm:mt-1 whitespace-nowrap">
                Clinic & Orthodontic Centre
              </span>
              
              <span className="hidden min-[380px]:inline text-[8.5px] sm:text-[9.5px] font-medium text-slate-500 leading-tight whitespace-nowrap">
                Dr. Khalidh Khan (MDS) • K.Pudur, Madurai
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Shown only on xl (1280px+) screens */}
          <nav className="hidden xl:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-emerald-950 text-amber-300 font-bold shadow-xs border border-amber-400/30'
                      : 'text-slate-700 hover:text-[#062017] hover:bg-emerald-900/5 font-semibold'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs & Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* WhatsApp Pill Button - Visible on sm screens and up */}
            <a
              href={`https://wa.me/${CLINIC_DATA.contact.whatsapp}?text=${encodeURIComponent("Hello Dr. Khalidh Khan, I would like to inquire about orthodontic/dental consultation at AK's Elite Dental Clinic.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-full bg-white hover:bg-emerald-50/80 text-emerald-900 border border-emerald-600/25 hover:border-emerald-600/50 text-xs font-bold tracking-tight transition-all duration-200 shadow-2xs hover:shadow-xs whitespace-nowrap group shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <MessageSquare className="w-3.5 h-3.5 text-emerald-700 group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
            </a>

            {/* Book Appointment Luxury CTA (Responsive & Never Clipped on Small Mobiles) */}
            <button
              type="button"
              onClick={() => onOpenAppointment()}
              className="inline-flex items-center gap-1 px-2.5 sm:px-4.5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#062017] via-[#0F382C] to-[#144838] hover:from-[#0B2D21] hover:to-[#1B5E46] text-amber-300 font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-amber-400/30 whitespace-nowrap cursor-pointer shrink-0 min-h-[44px]"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden min-[400px]:inline">Book Appointment</span>
              <span className="min-[400px]:hidden">Book</span>
            </button>

            {/* Mobile & Tablet Toggle Controls - Shown on < xl (tablets, small laptops, scaled screens) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-full text-slate-800 hover:bg-emerald-900/10 transition-colors cursor-pointer shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-950" /> : <Menu className="w-6 h-6 text-emerald-950" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Mobile & Tablet Slide-Down Drawer (Smoothly accessible on all screens < 1280px) */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF8F5] border-b border-emerald-950/15 px-4 pt-3 pb-6 space-y-4 shadow-2xl">
          
          {/* Quick Credentials Bar */}
          <div className="bg-emerald-900/5 rounded-xl p-3 border border-emerald-900/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-xs font-bold text-emerald-950">4.9 ★ Rated on Google</span>
            </div>
            <span className="text-[11px] font-semibold text-emerald-800">105+ Verified Reviews</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col divide-y divide-emerald-950/5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-3 text-sm rounded-xl flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-emerald-950 text-amber-300 font-bold'
                      : 'text-slate-800 font-semibold hover:text-emerald-900 hover:bg-emerald-50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-emerald-700/60'}`} />
                </Link>
              );
            })}
          </nav>

          {/* Direct Action Buttons */}
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${CLINIC_DATA.contact.whatsapp}?text=${encodeURIComponent("Hello Dr. Khalidh Khan, I would like to book an orthodontic or dental consultation.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-center text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 95387 23872)</span>
            </a>
            
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full py-3.5 rounded-full bg-[#062017] hover:bg-[#0B2D21] text-amber-300 font-bold text-xs uppercase tracking-wider shadow-md text-center flex items-center justify-center gap-2 cursor-pointer border border-amber-400/30 transition-transform active:scale-98"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book Priority Appointment</span>
            </button>
          </div>

          {/* Hours & Address Details */}
          <div className="pt-2 text-center text-[11px] text-slate-500">
            <p className="font-semibold text-emerald-950">Mon – Sat: 9:30 AM – 9:00 PM | Sun: 10:30 AM – 2:00 PM</p>
            <p className="mt-0.5">Plot No. 162/2A, Alagar Complex, K.Pudur, Madurai</p>
          </div>

        </div>
      )}

    </header>
  );
};
