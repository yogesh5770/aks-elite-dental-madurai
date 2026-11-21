import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Clock, Menu, X, Star, MessageSquare, Calendar, ChevronRight, ChevronDown, Award } from 'lucide-react';
import { CLINIC_DATA } from '../../data/clinicData';

interface NavbarProps {
  onOpenAppointment: (treatment?: string) => void;
}

export const SPECIALTY_SUBMENU = [
  { 
    label: "Orthodontics & Braces", 
    desc: "Invisalign, Metal & Ceramic Braces", 
    to: "/orthodontics-madurai/",
    icon: "🦷"
  },
  { 
    label: "General Dentistry", 
    desc: "Routine Exams, Scaling & Fillings", 
    to: "/general-dentistry-madurai/",
    icon: "✨"
  },
  { 
    label: "Root Canal Treatment (RCT)", 
    desc: "Painless Single-Sitting RCT & Crowns", 
    to: "/root-canal-treatment-madurai/",
    icon: "⚡"
  },
  { 
    label: "Prosthodontics & Implants", 
    desc: "Dental Implants, Zirconia Crowns & Bridges", 
    to: "/prosthodontics-madurai/",
    icon: "💎"
  },
  { 
    label: "Cosmetic Dentistry", 
    desc: "Porcelain Veneers & Laser Whitening", 
    to: "/cosmetic-dentistry-madurai/",
    icon: "🌟"
  },
  { 
    label: "Preventive Dentistry", 
    desc: "Fluoride, Sealants & Cavity Checkups", 
    to: "/preventive-dentistry-madurai/",
    icon: "🛡️"
  },
  { 
    label: "Oral & Maxillofacial Surgery", 
    desc: "Impacted Wisdom Teeth & Facial Trauma", 
    to: "/oral-maxillofacial-surgery-madurai/",
    icon: "🏥"
  },
  { 
    label: "Pediatric Dentistry", 
    desc: "Kids Cavity Fillings & Pulpotomy Care", 
    to: "/pediatric-dentistry-madurai/",
    icon: "👶"
  },
  { 
    label: "Gum Care & Periodontics", 
    desc: "Bleeding Gums, Deep Scaling & Flap Surgery", 
    to: "/periodontics-madurai/",
    icon: "🌿"
  },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [specialityDropdownOpen, setSpecialityDropdownOpen] = useState(false);
  const [mobileSpecialityOpen, setMobileSpecialityOpen] = useState(false);
  const location = useLocation();

  const isSpecialityActive = SPECIALTY_SUBMENU.some(
    item => location.pathname === item.to || location.pathname === item.to.replace(/\/$/, '')
  );

  const mainNavLinks = [
    { label: "Home", to: "/" },
    { label: "About & Doctors", to: "/about" },
    { label: "Smile Gallery", to: "/gallery" },
    { label: "Blog", to: "/blog" },
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

          {/* Desktop Navigation Links - Shown on xl (1280px+) screens */}
          <nav className="hidden xl:flex items-center gap-1.5">
            {/* Home Link */}
            <Link
              to="/"
              className={`px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 whitespace-nowrap cursor-pointer ${
                location.pathname === '/'
                  ? 'bg-emerald-950 text-amber-300 font-bold shadow-xs border border-amber-400/30'
                  : 'text-slate-700 hover:text-[#062017] hover:bg-emerald-900/5 font-semibold'
              }`}
            >
              Home
            </Link>

            {/* Speciality Dropdown Submenu (9 Services Pages) */}
            <div 
              className="relative"
              onMouseEnter={() => setSpecialityDropdownOpen(true)}
              onMouseLeave={() => setSpecialityDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setSpecialityDropdownOpen(!specialityDropdownOpen)}
                className={`px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  isSpecialityActive || specialityDropdownOpen
                    ? 'bg-emerald-950 text-amber-300 font-bold shadow-xs border border-amber-400/30'
                    : 'text-slate-700 hover:text-[#062017] hover:bg-emerald-900/5 font-semibold'
                }`}
                aria-haspopup="true"
                aria-expanded={specialityDropdownOpen}
              >
                <span>Speciality</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${specialityDropdownOpen ? 'rotate-180 text-amber-400' : 'text-slate-500'}`} />
              </button>

              {/* Luxury Dropdown Submenu */}
              {specialityDropdownOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-[400px] bg-white rounded-2xl shadow-2xl border border-emerald-900/15 p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 pb-2.5 mb-2 border-b border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-950 block">
                        9 Clinical Specialties in Madurai
                      </span>
                      <span className="text-[10px] text-slate-500">
                        Select a treatment for clinical details &amp; pricing
                      </span>
                    </div>
                    <span className="text-[9.5px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/80 shrink-0">
                      Dr. Khalidh Khan (MDS)
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-1 max-h-[70vh] overflow-y-auto">
                    {SPECIALTY_SUBMENU.map((item) => {
                      const isItemActive = location.pathname === item.to || location.pathname === item.to.replace(/\/$/, '');
                      return (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setSpecialityDropdownOpen(false)}
                          className={`flex items-start gap-2.5 p-2 rounded-xl transition-all group ${
                            isItemActive 
                              ? 'bg-emerald-900/10 border border-emerald-700/30' 
                              : 'hover:bg-emerald-50/80 border border-transparent hover:border-emerald-200/60'
                          }`}
                        >
                          <span className="text-base mt-0.5 shrink-0 group-hover:scale-110 transition-transform">{item.icon}</span>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-950 transition-colors flex items-center justify-between">
                              <span className="truncate">{item.label}</span>
                              <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100 shrink-0 ml-1" />
                            </div>
                            <div className="text-[10.5px] text-slate-500 group-hover:text-emerald-800/80 line-clamp-1 leading-tight mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            {mainNavLinks.slice(1).map((link) => {
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

            {/* Book Appointment Luxury CTA */}
            <button
              type="button"
              onClick={() => onOpenAppointment()}
              className="inline-flex items-center gap-1 px-2.5 sm:px-4.5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#062017] via-[#0F382C] to-[#144838] hover:from-[#0B2D21] hover:to-[#1B5E46] text-amber-300 font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-amber-400/30 whitespace-nowrap cursor-pointer shrink-0 min-h-[44px]"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden min-[400px]:inline">Book Appointment</span>
              <span className="min-[400px]:hidden">Book</span>
            </button>

            {/* Mobile & Tablet Toggle Controls */}
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

      {/* 3. Mobile & Tablet Slide-Down Drawer */}
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

          {/* Navigation Links with Speciality Accordion */}
          <nav className="flex flex-col divide-y divide-emerald-950/5">
            {/* 1. Home Link */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-3 px-3 text-sm rounded-xl flex items-center justify-between transition-colors ${
                location.pathname === '/'
                  ? 'bg-emerald-950 text-amber-300 font-bold'
                  : 'text-slate-800 font-semibold hover:text-emerald-900 hover:bg-emerald-50'
              }`}
            >
              <span>Home</span>
              <ChevronRight className={`w-4 h-4 ${location.pathname === '/' ? 'text-amber-400' : 'text-emerald-700/60'}`} />
            </Link>

            {/* 2. Speciality Accordion Submenu */}
            <div className="py-1">
              <button
                type="button"
                onClick={() => setMobileSpecialityOpen(!mobileSpecialityOpen)}
                className={`w-full py-3 px-3 text-sm rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                  isSpecialityActive
                    ? 'bg-emerald-950/10 text-emerald-950 font-bold'
                    : 'text-slate-800 font-semibold hover:text-emerald-900 hover:bg-emerald-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>Speciality</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    9 Services
                  </span>
                </span>
                <ChevronDown className={`w-4 h-4 text-emerald-700 transition-transform duration-200 ${mobileSpecialityOpen ? 'rotate-180 text-amber-600' : ''}`} />
              </button>

              {mobileSpecialityOpen && (
                <div className="pl-2 pr-1 py-1.5 space-y-1 bg-white/70 rounded-xl mt-1 border border-emerald-950/10 shadow-xs">
                  {SPECIALTY_SUBMENU.map((item) => {
                    const isItemActive = location.pathname === item.to || location.pathname === item.to.replace(/\/$/, '');
                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileSpecialityOpen(false);
                        }}
                        className={`flex items-center justify-between py-2.5 px-3 text-xs rounded-lg transition-colors ${
                          isItemActive
                            ? 'bg-emerald-950 text-amber-300 font-bold'
                            : 'text-slate-700 hover:text-emerald-950 hover:bg-emerald-50/80 font-medium'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{item.icon}</span>
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            {mainNavLinks.slice(1).map((link) => {
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
