import React, { useState } from 'react';
import { Calendar, Phone, MessageSquare, Clock, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { CLINIC_DATA } from '../../data/clinicData';

export const AppointmentSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Evening (5:30 PM - 9:00 PM)');
  const [treatment, setTreatment] = useState('Clear Aligners / Invisible Orthodontics');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const message = `*Consultation Request - AKS Elite Dental Clinic*\n\n` +
      `👤 *Patient:* ${fullName}\n` +
      `📞 *Phone:* ${phone}\n` +
      `📅 *Date:* ${preferredDate || 'Earliest available'}\n` +
      `⏰ *Time Slot:* ${preferredTime}\n` +
      `🦷 *Treatment:* ${treatment}\n` +
      (notes ? `📝 *Notes:* ${notes}\n` : '');

    const whatsappUrl = `https://wa.me/${CLINIC_DATA.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="appointment" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF8F5] via-white to-[#F5F2EB]/60 border-b border-emerald-950/10 text-left">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-950 text-xs font-sans font-semibold border border-emerald-300">
              <Calendar className="w-3.5 h-3.5 text-emerald-700" />
              <span>DIRECT CONSULTATION BOOKING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-emerald-950 tracking-tight leading-tight">
              Reserve Your Consultation with Dr. Khalidh Khan
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              Take the first step toward a perfectly aligned and healthy smile. Submit your details below to connect directly with our clinic desk.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-emerald-950/10 shadow-2xs">
                <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-emerald-950 font-display block">
                    Consultation Hours
                  </span>
                  <span className="text-xs text-slate-600 font-sans block mt-0.5">
                    Mon – Sat: 9:30 AM – 9:00 PM | Sun: 10:30 AM – 2:00 PM
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-emerald-950/10 shadow-2xs">
                <Phone className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-emerald-950 font-display block">
                    Clinic Desk Contact
                  </span>
                  <a href={`tel:${CLINIC_DATA.contact.phonePrimary}`} className="text-xs text-emerald-800 font-semibold hover:underline block mt-0.5">
                    {CLINIC_DATA.contact.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Booking Form Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-emerald-950/10 shadow-2xl relative">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-display text-emerald-950">
                  Request an Appointment
                </h3>
                <p className="text-xs text-slate-500 font-sans mt-1">
                  We will contact you promptly via WhatsApp / phone to confirm your consultation slot.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-display text-emerald-950">
                    Request Dispatched to Clinic Desk!
                  </h4>
                  <p className="text-xs text-slate-600 font-sans max-w-md mx-auto">
                    Thank you, {fullName}. Your request has been opened in WhatsApp. Our reception team will get in touch promptly to confirm your visit.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFullName('');
                      setPhone('');
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-950 text-amber-300 text-xs font-bold font-sans cursor-pointer hover:bg-emerald-900"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 font-sans block mb-1.5">
                        Patient Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-emerald-950/10 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 font-sans block mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 095387 23872"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-emerald-950/10 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 font-sans block mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-emerald-950/10 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 font-sans block mb-1.5">
                        Preferred Time Slot
                      </label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-emerald-950/10 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all font-sans cursor-pointer"
                      >
                        <option>Morning (10:00 AM - 1:00 PM)</option>
                        <option>Afternoon (2:00 PM - 5:00 PM)</option>
                        <option>Evening (5:30 PM - 9:00 PM)</option>
                        <option>Sunday Special Slot (10:30 AM - 2:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 font-sans block mb-1.5">
                      Treatment of Interest
                    </label>
                    <select
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-emerald-950/10 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all font-sans cursor-pointer"
                    >
                      <option>Clear Aligners / Invisible Orthodontics</option>
                      <option>Orthodontic Metallic / Ceramic Braces</option>
                      <option>Single-Sitting Rotary Root Canal</option>
                      <option>Dental Implants & Fixed Zirconia Crowns</option>
                      <option>Cosmetic Smile Makeover & Teeth Whitening</option>
                      <option>Ultrasonic Scaling & Gum Health</option>
                      <option>Wisdom Tooth Surgical Extraction</option>
                      <option>General Dental Check-up / Tooth Pain</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 font-sans block mb-1.5">
                      Notes / Symptoms (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Inquiring about clear aligners cost, tooth sensitivity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-emerald-950/10 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-emerald-950 hover:bg-emerald-900 text-amber-300 font-sans font-bold text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2.5 transition-all hover:scale-[1.01] cursor-pointer border border-amber-400/30"
                  >
                    <Send className="w-4 h-4 text-amber-400" />
                    <span>Send Request to Clinic WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center font-sans">
                    🔒 Zero spam. We confirm all appointments directly with you before scheduling.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
