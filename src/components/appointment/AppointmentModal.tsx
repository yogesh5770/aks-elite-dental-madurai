import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, Send, CheckCircle2 } from 'lucide-react';
import { CLINIC_DATA } from '../../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTreatment?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultTreatment
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('Evening (5:30 PM - 9:00 PM)');
  const [treatment, setTreatment] = useState('Clear Aligners / Invisible Orthodontics');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultTreatment) {
      setTreatment(defaultTreatment);
    }
  }, [defaultTreatment]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const message = `*Consultation Request - AKS Elite Dental Clinic*\n\n` +
      `👤 *Patient Name:* ${name}\n` +
      `📞 *Phone Number:* ${phone}\n` +
      `📅 *Preferred Date:* ${date || 'Earliest available'}\n` +
      `⏰ *Preferred Time:* ${time}\n` +
      `🦷 *Treatment:* ${treatment}\n` +
      (notes ? `📝 *Notes:* ${notes}\n` : '');

    const whatsappUrl = `https://wa.me/${CLINIC_DATA.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-emerald-950/10 relative text-left max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 text-xs font-semibold mb-2">
            <Calendar className="w-3.5 h-3.5 text-emerald-700" />
            <span>AKS Elite Dental Clinic • K.Pudur, Madurai</span>
          </div>
          <h3 className="text-2xl font-bold font-display text-emerald-950">
            Reserve Your Consultation
          </h3>
          <p className="text-xs text-slate-500 font-sans mt-0.5">
            Submit your details below to schedule with Dr. Khalidh Khan.
          </p>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold font-display text-emerald-950">
              Request Sent Successfully!
            </h4>
            <p className="text-xs text-slate-600 font-sans">
              Thank you, {name}. Your request has been dispatched to our reception desk via WhatsApp. We will confirm your timing shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-950 text-amber-300 text-xs font-bold font-sans cursor-pointer hover:bg-emerald-900"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label className="text-xs font-semibold text-slate-700 font-sans block mb-1">
                Patient Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Full Name"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-emerald-950/10 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all font-sans"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 font-sans block mb-1">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-emerald-950/10 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all font-sans"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 font-sans block mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF8F5] border border-emerald-950/10 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all font-sans"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 font-sans block mb-1">
                  Time Slot
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF8F5] border border-emerald-950/10 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all font-sans"
                >
                  <option>Morning (10:00 AM - 1:00 PM)</option>
                  <option>Afternoon (2:00 PM - 5:00 PM)</option>
                  <option>Evening (5:30 PM - 9:00 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 font-sans block mb-1">
                Treatment / Concern
              </label>
              <input
                type="text"
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-emerald-950/10 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all font-sans"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 font-sans block mb-1">
                Notes (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Brief description of teeth alignment or pain..."
                className="w-full px-4 py-2 rounded-xl bg-[#FAF8F5] border border-emerald-950/10 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all font-sans"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-amber-300 font-sans font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer border border-amber-400/30"
            >
              <Send className="w-4 h-4 text-amber-400" />
              <span>Confirm & Dispatch via WhatsApp</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
