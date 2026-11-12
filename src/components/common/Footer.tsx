import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Star, Navigation, MessageSquare, ExternalLink } from 'lucide-react';
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
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="h-14 w-16 rounded-2xl bg-gradient-to-br from-[#061E16] via-[#0B2D21] to-[#04150F] flex items-center justify-center p-2 border border-emerald-600/40 shadow-lg shrink-0 group-hover:scale-105 transition-transform">
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
            </Link>

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
              <li><Link to="/" className="hover:text-amber-300 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-amber-300 transition-colors">8 Core Specialties & Treatments</Link></li>
              <li><Link to="/gallery" className="hover:text-amber-300 transition-colors">Smile Transformation Studio</Link></li>
              <li><Link to="/about" className="hover:text-amber-300 transition-colors">Dr. Khalidh Khan (MDS) & Clinic</Link></li>
              <li><Link to="/contact" className="hover:text-amber-300 transition-colors">Location, Map & Timings</Link></li>
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
              <div className="space-y-1">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <a 
                    href={`mailto:${CLINIC_DATA.contact.email}?subject=Consultation%20Inquiry%20-%20AK%27s%20Elite%20Dental`}
                    className="hover:text-amber-300 font-semibold underline decoration-amber-400/30 transition-colors"
                    title="Send Email"
                  >
                    {CLINIC_DATA.contact.email}
                  </a>
                </p>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CLINIC_DATA.contact.email}&su=Appointment+Consultation+Inquiry+-+AK%27s+Elite+Dental`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-amber-300 hover:text-white pl-6 underline font-medium"
                >
                  <span>Open directly in Gmail</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              {/* Social Channels & Map */}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={CLINIC_DATA.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-amber-300 border border-emerald-700 text-xs font-medium transition-colors w-fit"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>

                <div className="pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white block mb-2">Connect on Social</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.instagram.com/aks_elite_dental_clinic/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-emerald-900/90 hover:bg-emerald-800 border border-emerald-700/60 flex items-center justify-center text-amber-300 hover:text-white transition-colors"
                      aria-label="Instagram Profile"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a
                      href={`https://wa.me/${CLINIC_DATA.contact.whatsapp}?text=${encodeURIComponent("Hello AK's Elite Dental Clinic, I would like to book an appointment.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-emerald-900/90 hover:bg-emerald-800 border border-emerald-700/60 flex items-center justify-center text-amber-300 hover:text-white transition-colors"
                      aria-label="WhatsApp Hotline"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
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
