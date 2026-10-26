import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Car,
  User,
  Phone,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Send,
  Info,
} from "lucide-react";
import { BUSINESS_INFO } from "../../data/businessInfo";
import {
  BookingInquiryData,
  buildWhatsAppInquiryMessage,
  getWhatsAppInquiryUrl,
} from "../../utils/whatsapp";

interface BookingWidgetProps {
  initialTripType?: string;
  initialPickup?: string;
  initialDropoff?: string;
  initialVehicle?: string;
  title?: string;
  subtitle?: string;
  isCompact?: boolean;
  onSuccess?: () => void;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({
  initialTripType = "Local Sightseeing",
  initialPickup = "McLeodganj / Dharamshala",
  initialDropoff = "",
  initialVehicle = "Not Sure Yet",
  title = "Request Your Himalayan Ride",
  subtitle = "Tell us your travel plan. Our local team will verify vehicle availability & quote transparently.",
  isCompact = false,
}) => {
  const [formData, setFormData] = useState<BookingInquiryData>({
    pickupLocation: initialPickup,
    dropoffLocation: initialDropoff,
    travelDate: new Date().toISOString().split("T")[0],
    pickupTime: "09:00 AM",
    tripType: initialTripType,
    passengers: "1-4",
    vehiclePreference: initialVehicle,
    customerName: "",
    contactNumber: "",
    additionalNotes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  const tripTypes = [
    "Local Sightseeing",
    "Airport Transfer",
    "One Way",
    "Round Trip",
    "Customized Tour",
  ];

  const vehicleOptions = [
    "Not Sure Yet",
    "Sedan (Up to 4)",
    "SUV (Up to 6)",
    "Premium MPV (Innova/Crysta)",
    "Tempo Traveller (9-16)",
  ];

  const passengerOptions = ["1-2", "3-4", "5-6", "7-10", "11+"];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = "Pickup location is required";
    }

    if (!formData.dropoffLocation.trim() && formData.tripType !== "Local Sightseeing") {
      newErrors.dropoffLocation = "Drop-off destination is required for this trip type";
    }

    if (!formData.travelDate) {
      newErrors.travelDate = "Please choose a travel date";
    }

    if (!formData.customerName.trim()) {
      newErrors.customerName = "Your name is required";
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "A valid phone number is required";
    } else if (formData.contactNumber.trim().length < 8) {
      newErrors.contactNumber = "Please enter a valid phone number with area/country code";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleCopyInquiry = () => {
    const text = buildWhatsAppInquiryMessage(formData);
    navigator.clipboard.writeText(text);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 3000);
  };

  const handleOpenWhatsApp = () => {
    const url = getWhatsAppInquiryUrl(formData);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  // Today's date string for min date attribute
  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <div
      id="booking-widget-section"
      className={`bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-[#087F5B]/15 overflow-hidden transition-all ${
        isCompact ? "p-5 sm:p-6" : "p-6 sm:p-8 lg:p-10"
      }`}
    >
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} noValidate>
          {/* Header */}
          <div className="mb-6 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#087F5B] mb-1">
              <span className="w-2 h-2 rounded-full bg-[#10A878] inline-block animate-pulse"></span>
              <span>Fast Online Travel Inquiry</span>
            </div>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-[#064E3B]">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">{subtitle}</p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {/* Trip Type */}
            <div>
              <label
                htmlFor="tripType"
                className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5"
              >
                Trip Type *
              </label>
              <div className="relative">
                <select
                  id="tripType"
                  value={formData.tripType}
                  onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#17231F] font-medium focus:ring-2 focus:ring-[#087F5B] focus:border-[#087F5B] transition-colors"
                >
                  {tripTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Pickup Location */}
            <div>
              <label
                htmlFor="pickupLocation"
                className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5"
              >
                Pickup Location *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <MapPin className="w-4 h-4 text-[#087F5B]" />
                </div>
                <input
                  id="pickupLocation"
                  type="text"
                  placeholder="e.g. Kangra Airport / McLeodganj"
                  value={formData.pickupLocation}
                  onChange={(e) => {
                    setFormData({ ...formData, pickupLocation: e.target.value });
                    if (errors.pickupLocation) setErrors({ ...errors, pickupLocation: "" });
                  }}
                  className={`w-full bg-gray-50 border pl-10 pr-4 py-3 text-sm text-[#17231F] rounded-xl focus:ring-2 focus:ring-[#087F5B] transition-colors ${
                    errors.pickupLocation ? "border-red-400 bg-red-50/30" : "border-gray-200"
                  }`}
                />
              </div>
              {errors.pickupLocation && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.pickupLocation}
                </p>
              )}
            </div>

            {/* Drop-off Location */}
            <div>
              <label
                htmlFor="dropoffLocation"
                className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5"
              >
                Drop-off Location {formData.tripType === "Local Sightseeing" ? "(Optional)" : "*"}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <MapPin className="w-4 h-4 text-[#D6B46A]" />
                </div>
                <input
                  id="dropoffLocation"
                  type="text"
                  placeholder={
                    formData.tripType === "Local Sightseeing"
                      ? "e.g. McLeodganj, Naddi, Bhagsu"
                      : "e.g. Hotel Fortune Moksha / Gaggal Airport"
                  }
                  value={formData.dropoffLocation}
                  onChange={(e) => {
                    setFormData({ ...formData, dropoffLocation: e.target.value });
                    if (errors.dropoffLocation) setErrors({ ...errors, dropoffLocation: "" });
                  }}
                  className={`w-full bg-gray-50 border pl-10 pr-4 py-3 text-sm text-[#17231F] rounded-xl focus:ring-2 focus:ring-[#087F5B] transition-colors ${
                    errors.dropoffLocation ? "border-red-400 bg-red-50/30" : "border-gray-200"
                  }`}
                />
              </div>
              {errors.dropoffLocation && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.dropoffLocation}
                </p>
              )}
            </div>

            {/* Travel Date */}
            <div>
              <label
                htmlFor="travelDate"
                className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5"
              >
                Travel Date *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Calendar className="w-4 h-4 text-[#087F5B]" />
                </div>
                <input
                  id="travelDate"
                  type="date"
                  min={todayStr}
                  value={formData.travelDate}
                  onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 pl-10 pr-4 py-3 text-sm text-[#17231F] rounded-xl focus:ring-2 focus:ring-[#087F5B] transition-colors"
                />
              </div>
            </div>

            {/* Pickup Time */}
            <div>
              <label
                htmlFor="pickupTime"
                className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5"
              >
                Pickup Time
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Clock className="w-4 h-4 text-[#087F5B]" />
                </div>
                <input
                  id="pickupTime"
                  type="text"
                  placeholder="e.g. 09:30 AM or Flight arrival"
                  value={formData.pickupTime}
                  onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 pl-10 pr-4 py-3 text-sm text-[#17231F] rounded-xl focus:ring-2 focus:ring-[#087F5B] transition-colors"
                />
              </div>
            </div>

            {/* Number of Passengers */}
            <div>
              <label
                htmlFor="passengers"
                className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5"
              >
                Passengers
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Users className="w-4 h-4 text-[#087F5B]" />
                </div>
                <select
                  id="passengers"
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 pl-10 pr-4 py-3 text-sm text-[#17231F] rounded-xl focus:ring-2 focus:ring-[#087F5B] transition-colors"
                >
                  {passengerOptions.map((p) => (
                    <option key={p} value={p}>
                      {p} {p === "1-2" ? "Passengers" : "Passengers"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Vehicle Preference */}
            <div>
              <label
                htmlFor="vehiclePreference"
                className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5"
              >
                Vehicle Preference
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Car className="w-4 h-4 text-[#087F5B]" />
                </div>
                <select
                  id="vehiclePreference"
                  value={formData.vehiclePreference}
                  onChange={(e) => setFormData({ ...formData, vehiclePreference: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 pl-10 pr-4 py-3 text-sm text-[#17231F] rounded-xl focus:ring-2 focus:ring-[#087F5B] transition-colors"
                >
                  {vehicleOptions.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-[10px] text-gray-500 mt-1">
                Preference only; subject to confirmed availability.
              </p>
            </div>

            {/* Customer Name */}
            <div>
              <label
                htmlFor="customerName"
                className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5"
              >
                Your Full Name *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <User className="w-4 h-4 text-[#087F5B]" />
                </div>
                <input
                  id="customerName"
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.customerName}
                  onChange={(e) => {
                    setFormData({ ...formData, customerName: e.target.value });
                    if (errors.customerName) setErrors({ ...errors, customerName: "" });
                  }}
                  className={`w-full bg-gray-50 border pl-10 pr-4 py-3 text-sm text-[#17231F] rounded-xl focus:ring-2 focus:ring-[#087F5B] transition-colors ${
                    errors.customerName ? "border-red-400 bg-red-50/30" : "border-gray-200"
                  }`}
                />
              </div>
              {errors.customerName && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.customerName}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="contactNumber"
                className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5"
              >
                Contact / WhatsApp Number *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Phone className="w-4 h-4 text-[#087F5B]" />
                </div>
                <input
                  id="contactNumber"
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  value={formData.contactNumber}
                  onChange={(e) => {
                    setFormData({ ...formData, contactNumber: e.target.value });
                    if (errors.contactNumber) setErrors({ ...errors, contactNumber: "" });
                  }}
                  className={`w-full bg-gray-50 border pl-10 pr-4 py-3 text-sm text-[#17231F] rounded-xl focus:ring-2 focus:ring-[#087F5B] transition-colors ${
                    errors.contactNumber ? "border-red-400 bg-red-50/30" : "border-gray-200"
                  }`}
                />
              </div>
              {errors.contactNumber && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.contactNumber}
                </p>
              )}
            </div>
          </div>

          {/* Special Requests or Luggage Details */}
          <div className="mt-4">
            <label
              htmlFor="additionalNotes"
              className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5"
            >
              Additional Notes or Flight/Train Details (Optional)
            </label>
            <input
              id="additionalNotes"
              type="text"
              placeholder="e.g. Arriving on SpiceJet flight at 11:20 AM with 3 heavy suitcases"
              value={formData.additionalNotes}
              onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
              className="w-full bg-gray-50 border border-gray-200 px-4 py-2.5 text-sm text-[#17231F] rounded-xl focus:ring-2 focus:ring-[#087F5B] transition-colors"
            />
          </div>

          {/* Submission and Transparency Footnote */}
          <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-2 text-xs text-gray-500 max-w-lg">
              <Info className="w-4 h-4 text-[#087F5B] shrink-0 mt-0.5" />
              <span>
                Inquiry request only. Does not guarantee instant booking. Availability and exact fares will be confirmed by our team.
              </span>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#087F5B] hover:bg-[#064E3B] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-[#087F5B]/30 transition-all active:scale-95 shrink-0"
            >
              <Send className="w-4 h-4 text-[#D6B46A]" />
              <span>Request My Ride</span>
            </button>
          </div>
        </form>
      ) : (
        /* Success State with WhatsApp and Phone handoff */
        <div className="py-6 px-2 text-center animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#087F5B] flex items-center justify-center mx-auto mb-4 border border-emerald-300">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#064E3B] mb-2">
            Your request is ready.
          </h3>
          <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto mb-6">
            Our team will confirm vehicle availability and journey details with you. Connect with us on WhatsApp or call us to confirm promptly.
          </p>

          {/* Inquiry Summary Box */}
          <div className="bg-[#FAF9F4] border border-[#087F5B]/20 rounded-2xl p-5 max-w-xl mx-auto text-left mb-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200">
              <span className="text-xs font-bold uppercase tracking-wider text-[#064E3B]">
                Inquiry Details Summary
              </span>
              <button
                type="button"
                onClick={handleCopyInquiry}
                className="inline-flex items-center gap-1.5 text-xs text-[#087F5B] hover:text-[#064E3B] font-semibold"
              >
                {hasCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Summary</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-y-2 text-xs text-gray-700">
              <div>
                <span className="text-gray-400 block">Traveler:</span>
                <span className="font-semibold text-gray-900">{formData.customerName}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Phone:</span>
                <span className="font-semibold text-gray-900">{formData.contactNumber}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Pickup:</span>
                <span className="font-semibold text-gray-900">{formData.pickupLocation}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Drop-off:</span>
                <span className="font-semibold text-gray-900">
                  {formData.dropoffLocation || "Local sightseeing"}
                </span>
              </div>
              <div>
                <span className="text-gray-400 block">Date &amp; Time:</span>
                <span className="font-semibold text-gray-900">
                  {formData.travelDate} at {formData.pickupTime}
                </span>
              </div>
              <div>
                <span className="text-gray-400 block">Vehicle Preference:</span>
                <span className="font-semibold text-gray-900">{formData.vehiclePreference}</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <button
              onClick={handleOpenWhatsApp}
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#10A878] hover:bg-[#087F5B] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all active:scale-95"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#064E3B] hover:bg-[#0A1B2C] text-[#FAF9F4] font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all active:scale-95"
            >
              <Phone className="w-5 h-5 text-[#D6B46A]" />
              <span>Call +91 9817656360</span>
            </a>
          </div>

          <div className="mt-6">
            <button
              type="button"
              onClick={resetForm}
              className="text-xs text-gray-500 hover:text-gray-800 underline"
            >
              &larr; Make another inquiry or edit details
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
