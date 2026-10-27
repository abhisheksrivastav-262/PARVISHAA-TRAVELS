import React, { useState } from "react";
import {
  Briefcase,
  Building2,
  Users,
  Calendar,
  Clock,
  Phone,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Send,
  Info,
} from "lucide-react";
import { SEOHead } from "../components/shared/SEOHead";
import { SectionHeader } from "../components/ui/SectionHeader";
import { BUSINESS_INFO } from "../data/businessInfo";
import { getGeneralWhatsAppUrl } from "../utils/whatsapp";

export const CorporateTravelPage: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    businessEmail: "",
    phone: "",
    travelRequirement: "Executive Delegate Transfers",
    passengers: "1-5",
    date: new Date().toISOString().split("T")[0],
    additionalInfo: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const requirements = [
    "Executive Delegate Transfers",
    "Offsite / Conference Transportation",
    "VIP Guest Airport Reception",
    "Multi-Vehicle Fleet Requirement",
    "Employee Periodic Travel",
  ];

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.companyName.trim()) err.companyName = "Company name is required";
    if (!formData.contactPerson.trim()) err.contactPerson = "Contact person name is required";
    if (!formData.phone.trim()) err.phone = "Phone number is required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleWhatsAppCorporate = () => {
    const msg = [
      `Hello Parvishaa Travel,`,
      ``,
      `I would like to inquire about *Corporate Travel Services*.`,
      `🏢 *Company:* ${formData.companyName}`,
      `👤 *Contact Person:* ${formData.contactPerson}`,
      `📞 *Phone:* ${formData.phone}`,
      formData.businessEmail ? `✉️ *Email:* ${formData.businessEmail}` : null,
      `📋 *Requirement:* ${formData.travelRequirement}`,
      `👥 *Passengers:* ${formData.passengers}`,
      `📅 *Date:* ${formData.date}`,
      formData.additionalInfo ? `📝 *Notes:* ${formData.additionalInfo}` : null,
      ``,
      `Please connect with us regarding vehicle coordination and business quotation.`,
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
        title="Corporate & Executive Chauffeur Travel Dharamshala | Parvishaa Travel"
        description="Professional chauffeur transportation for corporate executive retreats, guest pickups, and multi-vehicle conference logistics in McLeodganj & Dharamshala."
      />

      {/* Hero */}
      <section className="relative bg-[#0A1B2C] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=2000&q=80"
            alt="Corporate Travel Dharamshala"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B2C] via-[#0A1B2C]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D6B46A] bg-[#D6B46A]/20 px-4 py-1.5 rounded-full inline-block mb-4 border border-[#D6B46A]/30">
            Business &amp; Executive Travel
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Professional Travel for Business.
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
            Reliable, punctual, and discreet chauffeur services for corporate retreats, visiting delegates, conferences, and executive transfers in Dharamshala.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-10">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-6 pb-4 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#087F5B]">
                  Corporate Travel Inquiry
                </span>
                <h2 className="font-heading text-2xl font-bold text-[#064E3B] mt-1">
                  Discuss Corporate Travel Requirements
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Share your event or travel schedule. We will reach out with availability and tailored pricing.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Acme Innovations Pvt Ltd"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#087F5B]"
                  />
                  {errors.companyName && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.companyName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="e.g. Ananya Mehra (Travel Desk)"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#087F5B]"
                  />
                  {errors.contactPerson && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.contactPerson}</p>
                  )}
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
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Business Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.businessEmail}
                    onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                    placeholder="e.g. travel@acme.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#087F5B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Travel Requirement Type
                  </label>
                  <select
                    value={formData.travelRequirement}
                    onChange={(e) =>
                      setFormData({ ...formData, travelRequirement: e.target.value })
                    }
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#087F5B]"
                  >
                    {requirements.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Number of Passengers / Delegates
                  </label>
                  <input
                    type="text"
                    value={formData.passengers}
                    onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                    placeholder="e.g. 12 delegates / 3 cars"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#087F5B]"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Event Schedule / Route Details
                </label>
                <textarea
                  rows={3}
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  placeholder="e.g. Airport pickup for 8 executives on Oct 15th, 2-day meeting travel between hotel and venue"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#087F5B]"
                ></textarea>
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Info className="w-4 h-4 text-[#087F5B] shrink-0" />
                  <span>GST invoice support and transparent corporate quotation.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#064E3B] hover:bg-[#087F5B] text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-md"
                >
                  <Send className="w-4 h-4 text-[#D6B46A]" />
                  <span>Submit Corporate Inquiry</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6">
              <CheckCircle2 className="w-14 h-14 text-[#087F5B] mx-auto mb-3" />
              <h3 className="font-heading text-2xl font-bold text-[#064E3B] mb-2">
                Inquiry Received
              </h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
                Thank you, {formData.contactPerson}. Our corporate travel desk will review your details and connect with you shortly.
              </p>

              <button
                type="button"
                onClick={handleWhatsAppCorporate}
                className="inline-flex items-center gap-2 bg-[#10A878] text-white font-bold px-6 py-3 rounded-xl shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss on WhatsApp</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Corporate Features */}
      <section className="py-20 bg-[#FAF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Business Transportation"
            title="Tailored for Corporate Hospitality"
            description="Clear coordination, disciplined chauffeurs, and reliable fleet management."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100">
              <Users className="w-8 h-8 text-[#087F5B] mb-4" />
              <h3 className="font-heading text-lg font-bold text-[#064E3B] mb-2">
                Multi-Vehicle Fleet Coordination
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Whether organizing 3 executive MPVs for leadership or group Tempo Travellers for team members, we keep logistics aligned.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100">
              <Building2 className="w-8 h-8 text-[#087F5B] mb-4" />
              <h3 className="font-heading text-lg font-bold text-[#064E3B] mb-2">
                Punctual Airport Receptions
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Coordinated delegate reception at Kangra Gaggal Airport, Chandigarh, or Amritsar, with clear placard recognition on request.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100">
              <Briefcase className="w-8 h-8 text-[#087F5B] mb-4" />
              <h3 className="font-heading text-lg font-bold text-[#064E3B] mb-2">
                Transparent Billing Support
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Itemized travel bills and transparent fare agreements to simplify company expense accounting and reimbursements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
