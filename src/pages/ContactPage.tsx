import React, { useState } from "react";
import {
  Phone,
  MapPin,
  MessageSquare,
  Mail,
  Navigation,
  Clock,
  CheckCircle2,
  AlertCircle,
  Send,
  Info,
} from "lucide-react";
import { SEOHead } from "../components/shared/SEOHead";
import { SectionHeader } from "../components/ui/SectionHeader";
import { BUSINESS_INFO } from "../data/businessInfo";
import { getGeneralWhatsAppUrl } from "../utils/whatsapp";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "Taxi Booking / Local Sightseeing",
    travelDetails: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryTypes = [
    "Taxi Booking / Local Sightseeing",
    "Airport Transfer (Kangra / Outstation)",
    "Outstation Intercity Travel",
    "Family Tour Package",
    "Corporate & Executive Travel",
    "General Questions",
  ];

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.name.trim()) err.name = "Your name is required";
    if (!formData.phone.trim()) err.phone = "Phone number is required";
    else if (formData.phone.trim().length < 8) err.phone = "Enter a valid phone number";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleSendViaWhatsApp = () => {
    const msg = [
      `Hello Parvishaa Travel,`,
      ``,
      `I am reaching out via your contact form.`,
      `👤 *Name:* ${formData.name}`,
      `📞 *Phone:* ${formData.phone}`,
      formData.email ? `✉️ *Email:* ${formData.email}` : null,
      `📋 *Inquiry Type:* ${formData.inquiryType}`,
      formData.travelDetails ? `📅 *Travel Details:* ${formData.travelDetails}` : null,
      formData.message ? `💬 *Message:* ${formData.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${BUSINESS_INFO.whatsappPrimary}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <>
      <SEOHead
        title="Contact Parvishaa Travel | Taxi Service McLeodganj & Dharamshala"
        description="Call +91 9817656360 or +91 9317456360. Visit Parvishaa Travel at Mona Plaza Complex, Near ICICI Bank, McLeodganj, Dharamshala, Himachal Pradesh."
      />

      {/* Hero */}
      <section className="relative bg-[#064E3B] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80"
            alt="Dharamshala Mountain Vistas"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B] via-[#064E3B]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D6B46A] bg-[#D6B46A]/20 px-4 py-1.5 rounded-full inline-block mb-4 border border-[#D6B46A]/30">
            Reach Out to Our Local Team
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Contact Parvishaa Travel
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed font-light">
            We are here to assist with taxi bookings, airport pickups, tour itineraries, or route planning across Dharamshala and Himachal Pradesh.
          </p>
        </div>
      </section>

      {/* Contact Cards Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Primary Phone */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#087F5B]/10 text-[#087F5B] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Primary Helpline
              </p>
              <h3 className="font-heading text-xl font-extrabold text-[#064E3B] mt-1 mb-2">
                {BUSINESS_INFO.phonePrimary}
              </h3>
              <p className="text-xs text-gray-600">
                Direct phone inquiries for quick bookings and immediate assistance.
              </p>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
              className="mt-6 inline-flex items-center justify-center gap-2 bg-[#087F5B] hover:bg-[#064E3B] text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Primary Number</span>
            </a>
          </div>

          {/* Secondary Phone & WhatsApp */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#10A878]/10 text-[#10A878] flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Secondary Helpline &amp; WhatsApp
              </p>
              <h3 className="font-heading text-xl font-extrabold text-[#064E3B] mt-1 mb-2">
                {BUSINESS_INFO.phoneSecondary}
              </h3>
              <p className="text-xs text-gray-600">
                Chat with our team directly on WhatsApp or call our secondary phone.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneSecondaryRaw}`}
                className="inline-flex items-center justify-center gap-1.5 border border-[#064E3B] text-[#064E3B] font-bold text-xs py-2.5 px-2 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <span>Call Secondary</span>
              </a>
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-[#10A878] hover:bg-[#087F5B] text-white font-bold text-xs py-2.5 px-2 rounded-xl transition-colors shadow-sm"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Office Address & Directions */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#D6B46A]/20 text-[#A98534] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Office Location
              </p>
              <h3 className="font-heading text-lg font-bold text-[#064E3B] mt-1 mb-1">
                McLeodganj, Dharamshala
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {BUSINESS_INFO.address.full}
              </p>
            </div>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-[#064E3B] hover:bg-[#087F5B] text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-colors shadow-sm"
            >
              <Navigation className="w-4 h-4 text-[#D6B46A]" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-[#FAF9F4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-6 pb-4 border-b border-gray-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#087F5B]">
                    Send a Message
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-[#064E3B] mt-1">
                    How Can We Help You?
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Fill out the form below with your travel requirements.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Verma"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#087F5B]"
                    />
                    {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#087F5B]"
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. vikram@example.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#087F5B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#087F5B]"
                    >
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Travel Dates &amp; Route Details (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.travelDetails}
                    onChange={(e) => setFormData({ ...formData, travelDetails: e.target.value })}
                    placeholder="e.g. Kangra Airport pickup on Nov 5th, 3-day local sightseeing"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#087F5B]"
                  />
                </div>

                <div className="mt-5">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Message / Special Requests
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us any specific preferences or questions..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#087F5B]"
                  ></textarea>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-gray-500">
                    We respond promptly with clear vehicle availability and quotes.
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#087F5B] hover:bg-[#064E3B] text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-md"
                  >
                    <Send className="w-4 h-4 text-[#D6B46A]" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6">
                <CheckCircle2 className="w-14 h-14 text-[#087F5B] mx-auto mb-3" />
                <h3 className="font-heading text-2xl font-bold text-[#064E3B] mb-2">
                  Message Sent Successfully
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
                  Thank you, {formData.name}. We have received your inquiry and our team will get back to you shortly.
                </p>

                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="inline-flex items-center gap-2 bg-[#10A878] text-white font-bold px-6 py-3 rounded-xl shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Direct on WhatsApp</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
