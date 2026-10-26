import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, MessageSquare, ShieldCheck, Clock, Award } from "lucide-react";
import { BUSINESS_INFO } from "../../data/businessInfo";
import { getGeneralWhatsAppUrl } from "../../utils/whatsapp";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1B2C] text-[#FAF9F4] pt-16 pb-28 md:pb-12 border-t border-[#087F5B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand & Callout Banner */}
        <div className="bg-[#064E3B] rounded-2xl p-6 sm:p-8 mb-12 border border-[#D6B46A]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full overflow-hidden border-2 border-[#D6B46A] shadow-lg bg-white">
              <img
                src="/logo.png"
                alt="Parvishaa Travels Emblem"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-heading text-lg sm:text-2xl font-bold text-white tracking-wide">
                Plan Your Himalayan Ride Today
              </p>
              <p className="text-white/80 text-xs sm:text-sm mt-1 max-w-xl">
                Airport transfers, mountain sightseeing, and outstation taxi service from Dharamshala and McLeodganj.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
              className="inline-flex items-center gap-2 bg-[#D6B46A] hover:bg-[#C59B27] text-[#0A1B2C] font-bold text-sm px-5 py-3 rounded-xl transition-all shadow-md active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 98176 56360</span>
            </a>

            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#087F5B] hover:bg-[#10A878] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all border border-emerald-400/40"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* 4-Column Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D6B46A] shrink-0 bg-white shadow-sm">
                <img
                  src="/logo.png"
                  alt="Parvishaa Travels Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg tracking-tight text-white block">
                  PARVISHAA TRAVELS
                </span>
                <span className="text-[11px] text-[#D6B46A] tracking-wider uppercase font-semibold">
                  Himalayan Chauffeur Service
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              "Every Journey, A Beautiful Experience."
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Thoughtfully arranged taxi services, airport transfers, family travel, and memorable mountain journeys across Himachal Pradesh.
            </p>

            <div className="pt-2 text-xs text-[#D6B46A] flex items-center gap-2">
              <Award className="w-4 h-4 shrink-0" />
              <span>Local Mountain Route Experience</span>
            </div>
          </div>

          {/* Column 2: Quick Links & Services */}
          <div>
            <h3 className="font-heading text-sm font-bold tracking-wider uppercase text-[#D6B46A] mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  to="/services/airport-transfers"
                  className="text-gray-300 hover:text-[#D6B46A] transition-colors"
                >
                  Kangra Airport Pickup & Drop
                </Link>
              </li>
              <li>
                <Link
                  to="/services/local-sightseeing"
                  className="text-gray-300 hover:text-[#D6B46A] transition-colors"
                >
                  Dharamshala Local Sightseeing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/outstation-taxi"
                  className="text-gray-300 hover:text-[#D6B46A] transition-colors"
                >
                  Outstation Taxi & Intercity
                </Link>
              </li>
              <li>
                <Link
                  to="/tours"
                  className="text-gray-300 hover:text-[#D6B46A] transition-colors"
                >
                  Family Himalayan Tour Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/services/corporate-travel"
                  className="text-gray-300 hover:text-[#D6B46A] transition-colors"
                >
                  Corporate & Executive Travel
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-[#D6B46A] transition-colors"
                >
                  Hotel & Resort Transfers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Regional Destinations */}
          <div>
            <h3 className="font-heading text-sm font-bold tracking-wider uppercase text-[#D6B46A] mb-4">
              Explore Destinations
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  to="/destinations"
                  className="text-gray-300 hover:text-[#D6B46A] transition-colors"
                >
                  McLeodganj (Dalai Lama Temple)
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-gray-300 hover:text-[#D6B46A] transition-colors"
                >
                  Dharamshala & HPCA Stadium
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-gray-300 hover:text-[#D6B46A] transition-colors"
                >
                  Bhagsu Nag & Waterfall
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-gray-300 hover:text-[#D6B46A] transition-colors"
                >
                  Naddi Panoramic Sunset Point
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-gray-300 hover:text-[#D6B46A] transition-colors"
                >
                  Kangra Fort & Brajeshwari Temple
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-gray-300 hover:text-[#D6B46A] transition-colors"
                >
                  Palampur Tea Estates & Bir Billing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Location */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold tracking-wider uppercase text-[#D6B46A] mb-4">
              Contact & Location
            </h3>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
              <MapPin className="w-4 h-4 text-[#D6B46A] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">{BUSINESS_INFO.address.line1}</p>
                <p>{BUSINESS_INFO.address.landmark}</p>
                <p>
                  {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.district}
                </p>
                <p>
                  {BUSINESS_INFO.address.state} &ndash; {BUSINESS_INFO.address.pincode}, India
                </p>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#D6B46A] hover:underline inline-block mt-1 font-semibold"
                >
                  View on Google Maps &rarr;
                </a>
              </div>
            </div>

            <div className="space-y-2 pt-1 text-xs sm:text-sm">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-[#D6B46A] shrink-0" />
                <div>
                  <span className="block text-[11px] text-gray-400">Primary Contact:</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
                    className="font-bold text-white hover:text-[#D6B46A]"
                  >
                    {BUSINESS_INFO.phonePrimary}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-[#D6B46A] shrink-0" />
                <div>
                  <span className="block text-[11px] text-gray-400">Secondary Contact:</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneSecondaryRaw}`}
                    className="font-bold text-white hover:text-[#D6B46A]"
                  >
                    {BUSINESS_INFO.phoneSecondary}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Tagline & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-center sm:text-left">
            &copy; {currentYear} <span className="text-white font-medium">Parvishaa Travels</span>. All rights reserved.
          </p>

          <p className="text-center text-gray-400 text-[11px]">
            {BUSINESS_INFO.finalMessage}
          </p>

          <div className="flex items-center gap-4 text-xs">
            <Link
              to="/privacy-policy"
              className="hover:text-[#D6B46A] transition-colors"
            >
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link
              to="/terms-and-conditions"
              className="hover:text-[#D6B46A] transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
