import React from 'react';
import { MapPin, Phone, Mail, Clock, Star, Navigation } from 'lucide-react';
import { CLINIC_DATA } from '../../data/clinicData';

interface FooterProps {
  onOpenAppointment: (treatment?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment }) => {
  return (
    <footer className="bg-emerald-950 text-emerald-300 font-sans border-t border-emerald-900 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-28 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="h-14 w-16 rounded-2xl bg-gradient-to-br from-[#061E16] via-[#0B2D21] to-[#04150F] flex items-center justify-center p-2 border border-emerald-600/40 shadow-lg shrink-0">
                <img 
                  src="/aks_official_logo.png" 
                  alt="AK's Elite Dental Clinic Emblem" 
                  className="h-full w-auto max-w-full object-contain filter drop-shadow"
                />
              </div>
              <div>
                <span className="text-lg font-bold font-display text-white block leading-tight">
                  AK'S ELITE DENTAL
                </span>
                <span className="text-[10px] text-amber-300 font-sans block uppercase font-bold tracking-wider">
                  Clinic & Orthodontic Centre
                </span>
                <span className="text-[9px] text-emerald-300/80 font-sans block">
                  K.Pudur, Madurai • Dr. Khalidh Khan, MDS
                </span>
              </div>
            </div>

            <p className="text-xs text-emerald-200/80 font-sans leading-relaxed">
              Madurai's specialized boutique clinic for clear aligners, aesthetic ceramic braces, painless single-visit root canals, and modern smile transformations led by Dr. Khalidh Khan.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold pt-1">
              <Star className="w-4 h-4 fill-amber-400" />
              <span className="text-white">4.9 ★</span>
              <span className="text-emerald-300 font-normal">on Google Maps (105+ Reviews)</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white border-b border-emerald-900 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/80 font-sans">
              <li><a href="#transformations" className="hover:text-amber-300 transition-colors">Verified Clinical Cases</a></li>
              <li><a href="#treatments" className="hover:text-amber-300 transition-colors">8 Core Specialties</a></li>
              <li><a href="#symptom-triage" className="hover:text-amber-300 transition-colors">Symptom & Treatment Triage</a></li>
              <li><a href="#doctor" className="hover:text-amber-300 transition-colors">Dr. Khalidh Khan (MDS)</a></li>
              <li><a href="#about" className="hover:text-amber-300 transition-colors">About Studio</a></li>
              <li><a href="#reviews" className="hover:text-amber-300 transition-colors">Google Reviews (4.9 ★)</a></li>
              <li><a href="#location" className="hover:text-amber-300 transition-colors">Location & Map</a></li>
            </ul>
          </div>

          {/* Col 3: Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white border-b border-emerald-900 pb-2">
              Consultation Timings
            </h4>
            <div className="space-y-2 text-xs font-sans text-emerald-200/80">
              <div className="flex justify-between">
                <span>Monday – Saturday:</span>
                <span className="text-white font-semibold">9:30 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-amber-300 font-semibold">10:30 AM – 2:00 PM</span>
              </div>
              <p className="text-[11px] text-emerald-300/60 pt-2 font-sans">
                Prior booking is recommended to secure your preferred consultation slot with zero waiting.
              </p>
            </div>
          </div>

          {/* Col 4: Contact & Directions */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white border-b border-emerald-900 pb-2">
              Address & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-emerald-200/80 font-sans">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{CLINIC_DATA.contact.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${CLINIC_DATA.contact.phonePrimary}`} className="hover:text-white font-semibold">
                  {CLINIC_DATA.contact.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{CLINIC_DATA.contact.email}</span>
              </p>
              <div className="pt-2">
                <a
                  href={CLINIC_DATA.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-amber-300 border border-emerald-700 text-xs font-medium transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Local Area Coverage & Search Tags */}
        <div className="pt-8 mt-10 border-t border-emerald-900/60 text-xs text-emerald-300/70 font-sans space-y-2">
          <p className="leading-relaxed">
            <strong className="text-white">Areas Served in Madurai:</strong> K.Pudur • Surya Nagar • Suriya Nagar Extn • Mattuthavani • Alagar Kovil Road • Othakadai • Iyer Bungalow • Surveyor Colony • Tallakulam • Goripalayam • Anna Nagar • KK Nagar • Reserve Line • Bibikulam • Madurai North.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Specialist Dental Care:</strong> Invisible Clear Aligners Madurai • Ceramic & Self-Ligating Braces • Single Sitting Rotary Root Canal Treatment (RCT) • Permanent Titanium Dental Implants • Cosmetic Smile Designing & Veneers • Ultrasonic Tartar Scaling • Painless Pediatric Dentistry.
          </p>
        </div>

        {/* Bottom */}
        <div className="pt-12 mt-12 border-t border-emerald-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/60 font-sans">
          <p>© {new Date().getFullYear()} AKS Elite Dental Clinic and Orthodontic Centre. All Rights Reserved.</p>
          <p className="text-[11px] text-amber-400/80">
            Surya Nagar Extn, K.Pudur • Madurai • Tamil Nadu 625007
          </p>
        </div>

      </div>
    </footer>
  );
};
